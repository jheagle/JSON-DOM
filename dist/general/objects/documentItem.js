'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _documentDomItem = _interopRequireDefault(require('./documentDomItem.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
let existingItem = null

/**
 * Create reference for storing document changes
 * @member documentItem
 * @memberOf module:domGeneral
 * @type {DomItemRoot}
 */
const documentItem = (() => {
  if (existingItem === null) {
    existingItem = (0, _documentDomItem.default)()
  }
  return existingItem
})()
var _default = exports.default = documentItem
