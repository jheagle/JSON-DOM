'use strict'

require('core-js/modules/es.object.define-property.js')
Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/es.array.includes.js')
require('core-js/modules/es.string.includes.js')
require('core-js/stable')
var _bindListeners = _interopRequireDefault(require('./bindListeners.js'))
var _deactivateListeners = _interopRequireDefault(require('./deactivateListeners.js'))
var _domItemChanges = _interopRequireDefault(require('./domItemChanges.js'))
var _siFunciona = _interopRequireDefault(require('si-funciona'))
var _generateElement = _interopRequireDefault(require('./generateElement.js'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * Update a single objects.DomItem element with the provided attributes / style / elementProperties
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} domItem - The DomItem having domItem changes to be applied to its
 * element
 * @returns {DomItem}
 */
var updateElement = function updateElement (domItem) {
  if (!domItem.element) {
    return (0, _generateElement.default)((0, _deactivateListeners.default)(domItem))
  }
  var changes = (0, _domItemChanges.default)(domItem)
  if (changes.removed.nodeName || changes.added.nodeName) {
    // if the nodeName has changed then remove the element and create a new one
    domItem.element.remove()
    return (0, _generateElement.default)((0, _deactivateListeners.default)(domItem))
  }
  for (var dotKey in changes.removed) {
    var value = changes.removed[dotKey]
    if (!dotKey.includes('.')) {
      if (dotKey in domItem.element) {
        delete domItem.element[dotKey]
        continue
      }
      domItem.element.removeAttribute(dotKey)
      continue
    }
    var baseKey = _siFunciona.default.strBefore(dotKey, '.')
    if (baseKey !== 'class' && baseKey !== 'style') {
      throw new Error('Unhandled dotKey: ' + dotKey)
    }
    if (baseKey === 'class') {
      domItem.element.classList.remove(value)
      continue
    }
    domItem.element.style.removeProperty(_siFunciona.default.strAfter(dotKey, '.'))
  }
  for (var _dotKey in changes.added) {
    var _value = changes.added[_dotKey]
    if (_dotKey === 'className') {
      domItem.element.className = _value
      continue
    }
    if (_dotKey === 'style') {
      // Update all styles based on incoming style object
      for (var style in _value) {
        domItem.element.style.setProperty(style, _value[style])
      }
      continue
    }
    if (!_dotKey.includes('.')) {
      if (_dotKey in domItem.element) {
        domItem.element[_dotKey] = _value
        continue
      }
      domItem.element.setAttribute(_dotKey, _value)
      continue
    }
    var _baseKey = _siFunciona.default.strBefore(_dotKey, '.')
    if (_baseKey !== 'class' && _baseKey !== 'style') {
      throw new Error('Unhandled dotKey: ' + _dotKey)
    }
    if (_baseKey === 'class' && !_value) {
      // Skip this empty class name
      continue
    }
    if (_baseKey === 'class') {
      domItem.element.classList.add(_value)
      continue
    }
    domItem.element.style.setProperty(_siFunciona.default.strAfter(_dotKey, '.'), _value)
  }
  return (0, _bindListeners.default)(domItem)
}
var _default = updateElement
exports.default = _default
