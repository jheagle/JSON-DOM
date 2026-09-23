'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _setParentItemReferences = _interopRequireDefault(require('./setParentItemReferences.js'))
const _addDomItemProperties = _interopRequireDefault(require('./addDomItemProperties.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Convert DOM Item to JSON string.
 * @function
 * @memberOf module:domGeneral
 * @param {string} jsonString
 * @returns {DomItem}
 */
const jsonToDomItem = jsonString => {
  const parsedJson = (0, _setParentItemReferences.default)((0, _addDomItemProperties.default)(JSON.parse(jsonString)))
  if (parsedJson.nodeName === '#document') {
    parsedJson.element = document
    parsedJson.head = parsedJson.children[0]
    parsedJson.body = parsedJson.children[1]
  }
  return parsedJson
}
const _default = exports.default = jsonToDomItem
