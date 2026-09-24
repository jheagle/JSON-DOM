'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _generateElement = _interopRequireDefault(require('./generateElement.js'))
const _renderHtml = _interopRequireDefault(require('./renderHtml.js'))
const _updateChildNodes = _interopRequireDefault(require('./updateChildNodes.js'))
const _updateElement = _interopRequireDefault(require('./updateElement.js'))
const _updateElements = _interopRequireDefault(require('./updateElements.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
const _default = exports.default = {
  generateElement: _generateElement.default,
  renderHtml: _renderHtml.default,
  updateChildNodes: _updateChildNodes.default,
  updateElement: _updateElement.default,
  updateElements: _updateElements.default
}
