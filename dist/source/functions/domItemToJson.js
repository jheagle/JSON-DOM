'use strict'

require('core-js/modules/es.object.define-property.js')
Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/es.array.includes.js')
require('core-js/modules/es.string.includes.js')
require('core-js/modules/es.json.stringify.js')
require('core-js/stable')
var useExclusions = (function makeExclusions () {
  var jsonExclusions = []
  return function (key, value) {
    if (key === 'jsonExclusions') {
      jsonExclusions = value
      return value
    }
    if (jsonExclusions.includes(key)) {
      return undefined
    }
    if (key === 'element') {
      return null
    }
    if (key === 'parentItem') {
      return null
    }
    return value
  }
}())

/**
 * Convert DOM Item to JSON string.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item
 * @returns {string}
 */
var domItemToJson = function domItemToJson (item) {
  return JSON.stringify(item, useExclusions)
}
var _default = domItemToJson
exports.default = _default
