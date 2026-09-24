'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/es.array.includes.js')
require('core-js/modules/es.json.stringify.js')
require('core-js/stable')
const _siFunciona = _interopRequireDefault(require('si-funciona'))
const _removeEmptyProperties = _interopRequireDefault(require('./removeEmptyProperties'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
const useExclusions = (function makeExclusions () {
  let jsonExclusions = []
  return (key, value) => {
    if (key === 'jsonExclusions') {
      jsonExclusions = value
      return value
    }
    if (jsonExclusions.includes(key)) {
      return undefined
    }
    return value
  }
}())

/**
 * Convert DOM Item to JSON string.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} item
 * @param {Object} [options={}]
 * @param {int} [options.mapLimit=100]
 * @param {int} [options.relevancyRange=1000]
 * @returns {string}
 */
const domItemToJson = (item, {
  mapLimit = 100,
  relevancyRange = 1000
} = {}) => JSON.stringify((0, _removeEmptyProperties.default)(_siFunciona.default.cloneObject(item, {
  mapLimit,
  relevancyRange
}), ['activeListeners', 'element', 'parentItem', 'body', 'head']), useExclusions)
const _default = exports.default = domItemToJson
