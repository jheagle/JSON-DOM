'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _bindListeners = _interopRequireDefault(require('./bindListeners.js'))
var _deactivateListeners = _interopRequireDefault(require('./deactivateListeners.js'))
var _domItemChanges = _interopRequireDefault(require('./domItemChanges.js'))
var _siFunciona = _interopRequireDefault(require('si-funciona'))
var _generateElement = _interopRequireDefault(require('./generateElement.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Update a single objects.DomItem element with the provided attributes / style / elementProperties
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} domItem - The DomItem having domItem changes to be applied to its
 * element
 * @returns {DomItem}
 */
const updateElement = domItem => {
  if (!domItem.element) {
    return (0, _generateElement.default)((0, _deactivateListeners.default)(domItem))
  }
  const changes = (0, _domItemChanges.default)(domItem)
  if (changes.removed.nodeName || changes.added.nodeName) {
    // if the nodeName has changed then remove the element and create a new one
    domItem.element.remove()
    return (0, _generateElement.default)((0, _deactivateListeners.default)(domItem))
  }
  for (const dotKey in changes.removed) {
    const value = changes.removed[dotKey]
    if (!dotKey.includes('.')) {
      if (dotKey in domItem.element) {
        delete domItem.element[dotKey]
        continue
      }
      domItem.element.removeAttribute(dotKey)
      continue
    }
    const baseKey = _siFunciona.default.strBefore(dotKey, '.')
    if (baseKey !== 'class' && baseKey !== 'style') {
      throw new Error('Unhandled dotKey: ' + dotKey)
    }
    if (baseKey === 'class') {
      domItem.element.classList.remove(value)
      continue
    }
    domItem.element.style.removeProperty(_siFunciona.default.strAfter(dotKey, '.'))
  }
  for (const dotKey in changes.added) {
    const value = changes.added[dotKey]
    if (dotKey === 'className') {
      domItem.element.className = value
      continue
    }
    if (dotKey === 'style') {
      // Update all styles based on incoming style object
      for (const style in value) {
        domItem.element.style.setProperty(style, value[style])
      }
      continue
    }
    if (!dotKey.includes('.')) {
      if (dotKey in domItem.element && dotKey !== 'form') {
        // Some things can be assigned directly, but 'form' attribute cannot
        domItem.element[dotKey] = value
        continue
      }
      domItem.element.setAttribute(dotKey, value)
      continue
    }
    const baseKey = _siFunciona.default.strBefore(dotKey, '.')
    if (baseKey !== 'class' && baseKey !== 'style') {
      throw new Error('Unhandled dotKey: ' + dotKey)
    }
    if (baseKey === 'class' && (/\s/.test(value) || !value)) {
      // Skip this empty class name
      continue
    }
    if (baseKey === 'class') {
      domItem.element.classList.add(value)
      continue
    }
    domItem.element.style.setProperty(_siFunciona.default.strAfter(dotKey, '.'), value)
  }
  return (0, _bindListeners.default)(domItem)
}
var _default = exports.default = updateElement
