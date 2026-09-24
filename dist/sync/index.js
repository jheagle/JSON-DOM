'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _updateChildren = _interopRequireDefault(require('./updateChildren.js'))
const _updateDomItem = _interopRequireDefault(require('./updateDomItem.js'))
const _updateDomItems = _interopRequireDefault(require('./updateDomItems.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
const _default = exports.default = {
  updateChildren: _updateChildren.default,
  updateDomItem: _updateDomItem.default,
  updateDomItems: _updateDomItems.default
}
