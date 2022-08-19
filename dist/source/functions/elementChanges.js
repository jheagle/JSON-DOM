'use strict'

require('core-js/modules/es.object.define-property.js')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/modules/es.array.reduce.js')

require('core-js/modules/es.object.to-string.js')

require('core-js/modules/esnext.async-iterator.reduce.js')

require('core-js/modules/esnext.iterator.constructor.js')

require('core-js/modules/esnext.iterator.reduce.js')

require('core-js/modules/es.array.iterator.js')

require('core-js/modules/web.dom-collections.iterator.js')

require('core-js/stable')

var _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

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
var checkAttribute = function checkAttribute (domItem) {
  return function (attr, key) {
    if (key === 'className') {
      var diff = (0, _domItemHasAttribute.default)(domItem, key, attr)

      if (diff.length === 1 && diff[0].result[0] === 0) {
        return 0
      }

      return _functionalHelpers.default.filterObject(diff, function (arrayDiff) {
        return arrayDiff.result[0] !== 0
      })
    }

    if (key === 'style') {
      var _diff = (0, _domItemHasAttribute.default)(domItem, key, attr)

      var firstDiffResult = _diff[0]

      if (_diff.length === 1 && firstDiffResult.result[0] === 0 && domItem.attributes.style[firstDiffResult.value] === attr[firstDiffResult.value]) {
        return 0
      }

      return _functionalHelpers.default.filterObject(_diff, function (arrayDiff) {
        return arrayDiff.result[0] !== 0 || domItem.attributes.style[arrayDiff.value] !== attr[arrayDiff.value]
      })
    }

    return (0, _domItemHasAttribute.default)(domItem, key, attr)
  }
}
/**
 * Updates all the keys to be camelCase
 * @param {DomItem} domItem
 * @returns {Object.<string, *>}
 */

var camelCaseAttributes = function camelCaseAttributes (domItem) {
  return domItem.element ? _functionalHelpers.default.reduceObject(domItem.element.attributes, function (attributes, attr) {
    var _domItem$element$attr

    if (!attr.name) {
      return attributes
    }

    var camelKey = attr.name === 'class' ? 'className' : _functionalHelpers.default.camelCase(attr.name)
    var attributeValue = (_domItem$element$attr = domItem.element[attr.name]) !== null && _domItem$element$attr !== void 0 ? _domItem$element$attr : attr.value

    if (typeof attributeValue === 'undefined') {
      return attributes
    }

    attributes[camelKey] = attributeValue
    return attributes
  }, {}) : {}
}
/**
 * Given a domObjects.DomItem as config, this function will return the changes from the element
 * to be applied to the domItem.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} domItem - The DomItem having the element which changes to be applied to the config
 * element
 * @returns {ChangeList}
 */

var elementChanges = function elementChanges (domItem) {
  var changeList = (0, _createChangeList.default)()

  if (!domItem.element) {
    changeList.removed.nodeName = domItem.nodeName.toLowerCase()
  }

  if (domItem.element && domItem.element.nodeName.toLowerCase() !== domItem.nodeName.toLowerCase()) {
    changeList.removed.nodeName = domItem.nodeName.toLowerCase()
    changeList.added.nodeName = domItem.element.nodeName.toLowerCase()
  }

  if (!domItem.element && domItem.nodeValue !== null) {
    changeList.removed.nodeValue = domItem.nodeValue

    if (!_functionalHelpers.default.emptyObject(domItem.attributes)) {
      changeList.removed = changeList.appendChanges('removed', _functionalHelpers.default.dotNotate({
        attributes: domItem.attributes
      }))
    }

    return changeList
  }

  if (domItem.element && !(domItem.element instanceof Element)) {
    if (domItem.element.nodeValue !== domItem.nodeValue) {
      changeList.added.nodeValue = domItem.element.nodeValue
    }

    if (!_functionalHelpers.default.emptyObject(domItem.attributes)) {
      changeList.removed = changeList.appendChanges('removed', _functionalHelpers.default.dotNotate({
        attributes: domItem.attributes
      }))
    }

    return changeList
  }

  if (!(domItem.element && domItem.element.hasAttributes()) && !_functionalHelpers.default.emptyObject(domItem.attributes)) {
    changeList.removed = changeList.appendChanges('removed', _functionalHelpers.default.dotNotate({
      attributes: domItem.attributes
    }))
    return changeList
  }

  var elementAttributes = camelCaseAttributes(domItem)

  var diffMap = _functionalHelpers.default.mapObject(elementAttributes, function (attr, key) {
    return checkAttribute(domItem)(attr, key)
  })

  return _functionalHelpers.default.reduceObject(diffMap, function (changed, result, key) {
    var isArray = Array.isArray(result)

    if (!isArray && !result) {
      // Skip if the attribute is not changed (false and not an array)
      return changed
    }

    if (!isArray) {
      var _domItem$element$key

      // Not an array, simply set the attribute as added
      changed.added['attributes.'.concat(key)] = (_domItem$element$key = domItem.element[key]) !== null && _domItem$element$key !== void 0 ? _domItem$element$key : domItem.element.getAttribute(_functionalHelpers.default.kabobCase(key))
      return changed
    }

    if (key !== 'className' && key !== 'style') {
      // Is an array, but not class or style; we don't know what this is, so we skip it.
      return changed
    }

    if (key === 'className') {
      changed.removed = result.reduce(function (removed, results) {
        if (results.result[0] === -1) {
          removed['attributes.className.'.concat(results.keys[1])] = results.value
        }

        return removed
      }, changed.removed)
      changed.added = result.reduce(function (added, results) {
        if (results.result[0] === 1) {
          added['attributes.className.'.concat(results.keys[0])] = results.value
        }

        return added
      }, changed.added)
      return changed
    }

    changed.removed = result.reduce(function (removed, results) {
      if (results.result[0] === -1) {
        removed['attributes.style.'.concat(results.value)] = domItem.attributes.style[results.value]
      }

      if (results.result[0] === 0 && domItem.attributes.style[results.value] !== elementAttributes.style[results.value]) {
        removed['attributes.style.'.concat(results.value)] = domItem.attributes.style[results.value]
      }

      return removed
    }, changed.removed)
    changed.added = result.reduce(function (added, results) {
      if (results.result[0] === 1) {
        added['attributes.style.'.concat(results.value)] = elementAttributes.style[results.value]
      }

      if (results.result[0] === 0 && domItem.attributes.style[results.value] !== elementAttributes.style[results.value]) {
        added['attributes.style.'.concat(results.value)] = elementAttributes.style[results.value]
      }

      return added
    }, changed.added)
    return changed
  }, changeList)
}

var _default = elementChanges
exports.default = _default
