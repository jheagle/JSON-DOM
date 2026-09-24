'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _domItemToJson = _interopRequireDefault(require('./domItemToJson.js'))
const _removeEmptyProperties = _interopRequireDefault(require('./removeEmptyProperties.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
const _default = exports.default = {
  domItemToJson: _domItemToJson.default,
  removeEmptyProperties: _removeEmptyProperties.default
}
