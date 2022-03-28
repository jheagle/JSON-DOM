'use strict'

require('core-js/modules/es.object.define-property.js')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/modules/es.array.sort.js')

require('core-js/modules/es.array.iterator.js')

require('core-js/modules/es.object.to-string.js')

require('core-js/modules/web.dom-collections.iterator.js')

require('core-js/modules/es.array.reduce.js')

require('core-js/modules/esnext.async-iterator.reduce.js')

require('core-js/modules/esnext.iterator.constructor.js')

require('core-js/modules/esnext.iterator.reduce.js')

require('core-js/modules/es.symbol.js')

require('core-js/modules/es.symbol.description.js')

require('core-js/modules/es.symbol.iterator.js')

require('core-js/modules/es.string.iterator.js')

require('core-js/stable')

var _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

var _elementHasAttribute = _interopRequireDefault(require('./elementHasAttribute.js'))

var _generateElement = _interopRequireDefault(require('./generateElement.js'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _typeof (obj) { '@babel/helpers - typeof'; return _typeof = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (obj) { return typeof obj } : function (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj }, _typeof(obj) }

var checkAttribute = function checkAttribute (element) {
  return function (attr, key) {
    if (_typeof(attr) === 'object') {
      var styleDiff = (0, _elementHasAttribute.default)(element, key, attr) // Check new, removed, or changed styles

      return _functionalHelpers.default.filterObject(styleDiff, function (arrayDiff) {
        if (arrayDiff.result[0] === 0) {
          return element[key][arrayDiff.value] !== attr[arrayDiff.value]
        }

        return arrayDiff.result[0] === 1
      })
    }

    if (key === 'className') {
      var classDiff = (0, _elementHasAttribute.default)(element, key, attr) // Check new or removed class names

      return _functionalHelpers.default.filterObject(classDiff, function (arrayDiff) {
        return arrayDiff.result[0] !== -1
      })
    } // True when the element does not already have the attribute

    return !(0, _elementHasAttribute.default)(element, key, attr)
  }
}
/**
 * Given a domObjects.DomItem as domItem, this function will return the changes to be applied
 * to the stored element property.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} domItem - The DomItem having changes to be applied to its element
 * @returns {DomItem}
 */

var domItemChanges = function domItemChanges (domItem) {
  var changeItem = _functionalHelpers.default.cloneObject(domItem)

  if (!domItem.element) {
    return changeItem
  }

  if (!domItem.element.tagName || domItem.element.tagName.toLowerCase() !== domItem.tagName.toLowerCase()) {
    // Generate a new element since the tag has changed
    return (0, _generateElement.default)(domItem)
  }

  var diffMap = _functionalHelpers.default.mapObject(domItem.attributes, function (attr, key) {
    return checkAttribute(domItem.element)(attr, key)
  })

  changeItem.attributes = _functionalHelpers.default.reduceObject(diffMap, function (changed, result, key) {
    var isArray = Array.isArray(result)

    if (!isArray && !result) {
      return changed
    }

    if (!isArray) {
      changed[key] = domItem.attributes[key]
      return changed
    }

    if (key !== 'className' && key !== 'style') {
      return changed
    }

    var sortedResults = result.sort(function (current, next) {
      var currentKeys = current.keys[1]
      var nextKeys = next.keys[1]

      if (!currentKeys.length) {
        return !nextKeys.length ? 0 : 1
      }

      if (!nextKeys.length) {
        return -1
      }

      var currentIndex = currentKeys[0]
      var nextIndex = nextKeys[0]

      if (currentIndex !== nextIndex) {
        return currentIndex < nextIndex ? -1 : 1
      }

      return 0
    })

    if (key === 'className') {
      changed[key] = sortedResults.reduce(function (classes, classResult) {
        if (classes !== '') {
          classes += ' '
        }

        classes += classResult.value
        return classes
      }, '')
      return changed
    }

    changed[key] = sortedResults.reduce(function (styles, styleResult) {
      styles[styleResult.value] = domItem.attributes[key][styleResult.value]
      return styles
    }, {})
    return changed
  }, {})
  return changeItem
}

var _default = domItemChanges
exports.default = _default
