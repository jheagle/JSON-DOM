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

require('core-js/modules/es.symbol.js')

require('core-js/modules/es.symbol.description.js')

require('core-js/modules/es.symbol.iterator.js')

require('core-js/modules/es.string.iterator.js')

require('core-js/stable')

var _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

var _elementHasAttribute = _interopRequireDefault(require('./elementHasAttribute.js'))

var _createChangeList = _interopRequireDefault(require('../objects/createChangeList'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _typeof (obj) { '@babel/helpers - typeof'; return _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj }, _typeof(obj) }

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
var checkAttribute = function checkAttribute (element) {
  return function (attr, key) {
    if (_typeof(attr) === 'object') {
      var styleDiff = (0, _elementHasAttribute.default)(element, key, attr)
      var firstStyleDiff = styleDiff[0]

      if (styleDiff.length === 1 && firstStyleDiff.result[0] === 0 && element.style[firstStyleDiff.value] === attr[firstStyleDiff.value]) {
        return 0
      } // Check new, removed, or changed styles

      return _functionalHelpers.default.filterObject(styleDiff, function (arrayDiff) {
        return arrayDiff.result[0] !== 0 || element.style[arrayDiff.value] !== attr[arrayDiff.value]
      })
    }

    if (key === 'class') {
      var classDiff = (0, _elementHasAttribute.default)(element, key, attr)

      if (classDiff.length === 1 && classDiff[0].result[0] === 0) {
        return 0
      }

      return _functionalHelpers.default.filterObject(classDiff, function (arrayDiff) {
        return arrayDiff.result[0] !== 0
      })
    }

    return (0, _elementHasAttribute.default)(element, key, attr)
  }
}
/**
 * Updates all the keys to be kabob-case
 * @param {Object.<string, *>} attributesToSet
 * @returns {Object.<string, *>}
 */

var kabobCaseAttributes = function kabobCaseAttributes (attributesToSet) {
  return _functionalHelpers.default.reduceObject(attributesToSet, function (attributes, value, name) {
    var _attributesToSet$name

    var attrValue = (_attributesToSet$name = attributesToSet[name]) !== null && _attributesToSet$name !== void 0 ? _attributesToSet$name : value

    if (_functionalHelpers.default.isObject(attrValue)) {
      attrValue = kabobCaseAttributes(attrValue)
    }

    var kabobKey = name === 'className' ? 'class' : _functionalHelpers.default.kabobCase(name)
    attributes[kabobKey] = attrValue
    return attributes
  }, {})
}
/**
 * Given a domObjects.DomItem as domItem, this function will return the changes to be applied
 * to the stored element property.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} domItem - The DomItem having changes to be applied to its element
 * @returns {ChangeList}
 */

var domItemChanges = function domItemChanges (domItem) {
  var changeList = (0, _createChangeList.default)()

  if (!domItem.element) {
    return changeList
  }

  if (domItem.element.nodeName.toLowerCase() !== domItem.nodeName.toLowerCase()) {
    // This should trigger new element creation
    changeList.removed.nodeName = domItem.nodeName.toLowerCase()
    changeList.added.nodeName = domItem.element.nodeName.toLowerCase()
  }

  if (domItem.nodeValue !== null) {
    changeList.nodeValue = domItem.element.nodeValue

    if (domItem.element.nodeValue !== domItem.nodeValue) {
      changeList.added.nodeValue = domItem.nodeValue
    }

    if (!_functionalHelpers.default.emptyObject(domItem.attributes)) {
      changeList.removed = changeList.appendChanges('removed', _functionalHelpers.default.dotNotate({
        attributes: domItem.attributes
      }))
    }

    return changeList
  }

  var domItemAttributes = kabobCaseAttributes(domItem.attributes)

  var diffMap = _functionalHelpers.default.mapObject(domItemAttributes, function (attr, key) {
    return checkAttribute(domItem.element)(attr, key)
  })

  return _functionalHelpers.default.reduceObject(diffMap, function (changed, result, key) {
    var isArray = Array.isArray(result)

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
      changed.added[key] = domItem.attributes[_functionalHelpers.default.camelCase(key)]
      return changed
    }

    if (key !== 'class' && key !== 'style') {
      // Is an array, but not class or style; we don't know what this is, so we skip it.
      return changed
    }

    if (key === 'class') {
      changed.removed = result.reduce(function (removed, results) {
        if (results.result[0] === -1) {
          removed['class.'.concat(results.keys[1])] = results.value
        }

        return removed
      }, changed.removed)
      changed.added = result.reduce(function (added, results) {
        if (results.result[0] === 1) {
          added['class.'.concat(results.keys[0])] = results.value
        }

        return added
      }, changed.added)
      return changed
    }

    changed.removed = result.reduce(function (removed, results) {
      if (results.result[0] === -1) {
        removed['style.'.concat(results.value)] = domItem.element.style[results.value]
      }

      if (results.result[0] === 0 && domItem.element.style[results.value] !== domItemAttributes.style[results.value]) {
        removed['style.'.concat(results.value)] = domItem.element.style[results.value]
      }

      return removed
    }, changed.removed)
    changed.added = result.reduce(function (added, results) {
      if (results.result[0] === 1) {
        added['style.'.concat(results.value)] = domItemAttributes.style[results.value]
      }

      if (results.result[0] === 0 && domItem.element.style[results.value] !== domItemAttributes.style[results.value]) {
        added['style.'.concat(results.value)] = domItemAttributes.style[results.value]
      }

      return added
    }, changed.added)
    return changed
  }, changeList)
}

var _default = domItemChanges
exports.default = _default
