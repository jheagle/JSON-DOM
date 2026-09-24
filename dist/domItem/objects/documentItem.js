'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _documentDomItem = _interopRequireDefault(require('./documentDomItem.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
let existingItem = null

/**
 * The shared root DomItem of the Virtual DOM (DomItem tree) for this environment's real document.
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
const _default = exports.default = documentItem
