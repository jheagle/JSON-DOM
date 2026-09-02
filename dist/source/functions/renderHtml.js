'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _appendChild = _interopRequireDefault(require('./appendChild.js'))
var _documentItem = _interopRequireDefault(require('../objects/documentItem.js'))
var _setParentItemReferences = _interopRequireDefault(require('./setParentItemReferences.js'))
var _updateElements = _interopRequireDefault(require('./updateElements.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * This is a shortcut for building the specified HTML elements and appending them to the Dom
 * with associated listeners.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem|null} item - The DomItem that we want to render the element for
 * @returns {DomItem}
 */
const renderHtml = function () {
  const item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null
  let itemToRender = item
  if (item === null) {
    itemToRender = _documentItem.default
  }
  if (itemToRender.parentItem === null) {
    // excluding when documentItme was passed in, append the item to the documentItem
    itemToRender = (0, _appendChild.default)(_documentItem.default, item)
  }
  // Render the elements and return either to original reference, or updated documentItem (whichever is available)
  const updatedItem = (0, _updateElements.default)((0, _setParentItemReferences.default)(itemToRender))
  return item !== null && item !== void 0 ? item : updatedItem
}
var _default = exports.default = renderHtml
