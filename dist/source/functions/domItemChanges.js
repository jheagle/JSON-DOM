'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/esnext.async-iterator.reduce.js')
require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.reduce.js')
require('core-js/stable')
var _siFunciona = _interopRequireDefault(require('si-funciona'))
var _elementHasAttribute = _interopRequireDefault(require('./elementHasAttribute.js'))
var _createChangeList = _interopRequireDefault(require('../objects/createChangeList'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * @typedef {module:objectHelpers~mapCallback} testAttributeChange
 * @param {*} attr - The current property being processed in the object.
 * @param {string} key - The property name of the current property being processed in the object.
 * @return {int} - -1: removed, 0: unchanged, 1: added.
 */

/**
 * Given some config, provide a function to testing attribute and key existence in that config.
 * @param {Node|HTMLElement} element
 * @returns {testAttributeChange}
 */
const checkAttribute = element => (attr, key) => {
  if (typeof attr === 'object') {
    const styleDiff = (0, _elementHasAttribute.default)(element, key, attr)
    const firstStyleDiff = styleDiff[0]
    if (styleDiff.length === 1 && firstStyleDiff.result[0] === 0 && element.style[firstStyleDiff.value] === attr[firstStyleDiff.value]) {
      return 0
    }
    // Check new, removed, or changed styles
    return _siFunciona.default.filterObject(styleDiff, arrayDiff => arrayDiff.result[0] !== 0 || element.style[arrayDiff.value] !== attr[arrayDiff.value])
  }
  if (key === 'class') {
    const classDiff = (0, _elementHasAttribute.default)(element, key, attr)
    if (classDiff.length === 1 && classDiff[0].result[0] === 0) {
      return 0
    }
    return _siFunciona.default.filterObject(classDiff, arrayDiff => arrayDiff.result[0] !== 0)
  }
  return (0, _elementHasAttribute.default)(element, key, attr)
}

/**
 * Updates all the keys to be kabob-case
 * @param {Object.<string, *>} attributesToSet
 * @returns {Object.<string, *>}
 */
const kabobCaseAttributes = attributesToSet => _siFunciona.default.reduceObject(attributesToSet, (attributes, value, name) => {
  let attrValue = attributesToSet[name] ?? value
  if (_siFunciona.default.isObject(attrValue)) {
    attrValue = kabobCaseAttributes(attrValue)
  }
  const kabobKey = name === 'className' ? 'class' : _siFunciona.default.kabobCase(name)
  attributes[kabobKey] = attrValue
  return attributes
}, {})

/**
 * Given a domObjects.DomItem as domItem, this function will return the changes to be applied
 * to the stored element property.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} domItem - The DomItem having changes to be applied to its element
 * @returns {ChangeList}
 */
const domItemChanges = domItem => {
  const changeList = (0, _createChangeList.default)()
  if (!domItem.element) {
    changeList.added.nodeName = domItem.nodeName.toLowerCase()
  }
  if (domItem.element && domItem.element.nodeName.toLowerCase() !== domItem.nodeName.toLowerCase()) {
    // This should trigger new element creation
    changeList.removed.nodeName = domItem.element.nodeName.toLowerCase()
    changeList.added.nodeName = domItem.nodeName.toLowerCase()
  }
  if (domItem.nodeValue !== null) {
    if (!_siFunciona.default.emptyObject(domItem.attributes)) {
      changeList.added = changeList.appendChanges('added', _siFunciona.default.dotNotate(domItem.attributes))
    }
    if (!domItem.element) {
      changeList.added.nodeValue = domItem.nodeValue
      return changeList
    }
    changeList.removed.nodeValue = domItem.element.nodeValue
    if (domItem.element.nodeValue !== domItem.nodeValue) {
      changeList.added.nodeValue = domItem.nodeValue
    }
    return changeList
  }
  const domItemAttributes = kabobCaseAttributes(domItem.attributes)
  const diffMap = _siFunciona.default.mapObject(domItemAttributes, (attr, key) => checkAttribute(domItem.element)(attr, key))
  return _siFunciona.default.reduceObject(diffMap, (changed, result, key) => {
    const isArray = Array.isArray(result)
    if (!isArray && !result) {
      // Skip if the attribute is not changed (false and not an array)
      return changed
    }
    if (!isArray && key === 'class') {
      // Full class name string set
      changed.added.className = domItem.attributes.className
      return changed
    }
    if (!isArray) {
      // Not an array, simply set the attribute as added
      changed.added[key] = domItem.attributes[_siFunciona.default.camelCase(key)]
      return changed
    }
    if (key !== 'class' && key !== 'style') {
      // Is an array, but not class or style; we don't know what this is, so we skip it.
      return changed
    }
    if (key === 'class') {
      changed.removed = result.reduce((removed, results) => {
        if (results.result[0] === -1) {
          removed[`class.${results.keys[1]}`] = results.value
        }
        return removed
      }, changed.removed)
      changed.added = result.reduce((added, results) => {
        if (results.result[0] === 1) {
          added[`class.${results.keys[0]}`] = results.value
        }
        return added
      }, changed.added)
      return changed
    }
    changed.removed = result.reduce((removed, results) => {
      if (!domItem.element) {
        return removed
      }
      if (results.result[0] === -1) {
        removed[`style.${results.value}`] = domItem.element.style[results.value]
      }
      if (results.result[0] === 0 && domItem.element.style[results.value] !== domItemAttributes.style[results.value]) {
        removed[`style.${results.value}`] = domItem.element.style[results.value]
      }
      return removed
    }, changed.removed)
    changed.added = result.reduce((added, results) => {
      if (results.result[0] === 1) {
        added[`style.${results.value}`] = domItemAttributes.style[results.value]
      }
      if (results.result[0] === 0 && domItem.element.style[results.value] !== domItemAttributes.style[results.value]) {
        added[`style.${results.value}`] = domItemAttributes.style[results.value]
      }
      return added
    }, changed.added)
    return changed
  }, changeList)
}
var _default = exports.default = domItemChanges
