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
var _domItemHasAttribute = _interopRequireDefault(require('./domItemHasAttribute.js'))
var _createChangeList = _interopRequireDefault(require('../objects/createChangeList.js'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * @typedef {module:objectHelpers~mapCallback} testAttributeChange
 * @param {*} attr - The current property being processed in the object.
 * @param {string} key - The property name of the current property being processed in the object.
 * @return {int} - -1: removed, 0: unchanged, 1: added.
 */

/**
 * Given some config, provide a function to testing attribute and key existence in that config.
 * @param {DomItem} domItem
 * @returns {testAttributeChange}
 */
const checkAttribute = domItem => (attr, key) => {
  if (key === 'className') {
    const diff = (0, _domItemHasAttribute.default)(domItem, key, attr)
    if (diff.length === 1 && diff[0].result[0] === 0) {
      return 0
    }
    return _siFunciona.default.filterObject(diff, arrayDiff => arrayDiff.result[0] !== 0)
  }
  if (key === 'style') {
    const diff = (0, _domItemHasAttribute.default)(domItem, key, attr)
    const firstDiffResult = diff[0]
    if (diff.length === 1 && firstDiffResult.result[0] === 0 && domItem.attributes.style[firstDiffResult.value] === attr[firstDiffResult.value]) {
      return 0
    }
    return _siFunciona.default.filterObject(diff, arrayDiff => arrayDiff.result[0] !== 0 || domItem.attributes.style[arrayDiff.value] !== attr[arrayDiff.value])
  }
  return (0, _domItemHasAttribute.default)(domItem, key, attr)
}

/**
 * Updates all the keys to be camelCase
 * @param {DomItem} domItem
 * @returns {Object.<string, *>}
 */
const camelCaseAttributes = domItem => domItem.element ? _siFunciona.default.reduceObject(domItem.element.attributes, (attributes, attr) => {
  if (!attr.name) {
    return attributes
  }
  const camelKey = attr.name === 'class' ? 'className' : _siFunciona.default.camelCase(attr.name)
  const attributeValue = domItem.element[attr.name] ?? attr.value
  if (typeof attributeValue === 'undefined') {
    return attributes
  }
  attributes[camelKey] = attributeValue
  return attributes
}, {}) : {}

/**
 * Given a domObjects.DomItem as config, this function will return the changes from the element
 * to be applied to the domItem.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} domItem - The DomItem having the element which changes to be applied to the config
 * element
 * @returns {ChangeList}
 */
const elementChanges = domItem => {
  const changeList = (0, _createChangeList.default)()
  if (!domItem.element) {
    changeList.removed.nodeName = domItem.nodeName.toLowerCase()
  }
  if (domItem.element && domItem.element.nodeName.toLowerCase() !== domItem.nodeName.toLowerCase()) {
    changeList.removed.nodeName = domItem.nodeName.toLowerCase()
    changeList.added.nodeName = domItem.element.nodeName.toLowerCase()
  }
  if (!domItem.element && domItem.nodeValue !== null) {
    changeList.removed.nodeValue = domItem.nodeValue
    if (!_siFunciona.default.emptyObject(domItem.attributes)) {
      changeList.removed = changeList.appendChanges('removed', _siFunciona.default.dotNotate({
        attributes: domItem.attributes
      }))
    }
    return changeList
  }
  if (domItem.element && !(domItem.element instanceof Element)) {
    if (domItem.element.nodeValue !== domItem.nodeValue) {
      changeList.added.nodeValue = domItem.element.nodeValue
    }
    if (!_siFunciona.default.emptyObject(domItem.attributes)) {
      changeList.removed = changeList.appendChanges('removed', _siFunciona.default.dotNotate({
        attributes: domItem.attributes
      }))
    }
    return changeList
  }
  if (!(domItem.element && domItem.element.hasAttributes()) && !_siFunciona.default.emptyObject(domItem.attributes)) {
    changeList.removed = changeList.appendChanges('removed', _siFunciona.default.dotNotate({
      attributes: domItem.attributes
    }))
    return changeList
  }
  const elementAttributes = camelCaseAttributes(domItem)
  const diffMap = _siFunciona.default.mapObject(elementAttributes, (attr, key) => checkAttribute(domItem)(attr, key))
  return _siFunciona.default.reduceObject(diffMap, (changed, result, key) => {
    const isArray = Array.isArray(result)
    if (!isArray && !result) {
      // Skip if the attribute is not changed (false and not an array)
      return changed
    }
    if (!isArray) {
      // Not an array, simply set the attribute as added
      changed.added[`attributes.${key}`] = domItem.element[key] ?? domItem.element.getAttribute(_siFunciona.default.kabobCase(key))
      return changed
    }
    if (key !== 'className' && key !== 'style') {
      // Is an array, but not class or style; we don't know what this is, so we skip it.
      return changed
    }
    if (key === 'className') {
      changed.removed = result.reduce((removed, results) => {
        if (results.result[0] === -1) {
          removed[`attributes.className.${results.keys[1]}`] = results.value
        }
        return removed
      }, changed.removed)
      changed.added = result.reduce((added, results) => {
        if (results.result[0] === 1) {
          added[`attributes.className.${results.keys[0]}`] = results.value
        }
        return added
      }, changed.added)
      return changed
    }
    changed.removed = result.reduce((removed, results) => {
      if (results.result[0] === -1) {
        removed[`attributes.style.${results.value}`] = domItem.attributes.style[results.value]
      }
      if (results.result[0] === 0 && domItem.attributes.style[results.value] !== elementAttributes.style[results.value]) {
        removed[`attributes.style.${results.value}`] = domItem.attributes.style[results.value]
      }
      return removed
    }, changed.removed)
    changed.added = result.reduce((added, results) => {
      if (results.result[0] === 1) {
        added[`attributes.style.${results.value}`] = elementAttributes.style[results.value]
      }
      if (results.result[0] === 0 && domItem.attributes.style[results.value] !== elementAttributes.style[results.value]) {
        added[`attributes.style.${results.value}`] = elementAttributes.style[results.value]
      }
      return added
    }, changed.added)
    return changed
  }, changeList)
}
var _default = exports.default = elementChanges
