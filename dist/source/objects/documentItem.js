'use strict'

require('core-js/modules/es.object.define-property.js')
Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _documentDomItem = _interopRequireDefault(require('./documentDomItem.js'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
var existingItem = null

/**
 * Create reference for storing document changes
 * @member documentItem
 * @memberOf module:domObjects
 * @type {DomItemRoot}
 */
var documentItem = (function () {
  if (existingItem === null) {
    existingItem = (0, _documentDomItem.default)()
  }
  return existingItem
}())
var _default = documentItem
exports.default = _default
