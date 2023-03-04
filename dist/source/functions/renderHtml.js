'use strict'

require('core-js/modules/es.object.define-property.js')
Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _updateElements = _interopRequireDefault(require('./updateElements.js'))
var _documentItem = _interopRequireDefault(require('../objects/documentItem.js'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * This is a shortcut for building the specified HTML elements and appending them to the Dom
 * with associated listeners.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem|null} item - The DomItem that we want to render the element for
 * @returns {DomItem}
 */
var renderHtml = function renderHtml () {
  var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null
  if (item === null) {
    item = _documentItem.default
  }
  return (0, _updateElements.default)(item)
}
var _default = renderHtml
exports.default = _default
