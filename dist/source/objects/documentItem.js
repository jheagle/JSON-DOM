'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

const _documentDomItem = _interopRequireDefault(require('./documentDomItem'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Create reference for storing document changes
 * @member documentItem
 * @memberOf module:domObjects
 * @type {module:domObjects~DomItemRoot}
 */
const documentItem = (0, _documentDomItem.default)()
const _default = documentItem
exports.default = _default
