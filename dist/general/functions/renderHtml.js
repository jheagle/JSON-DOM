'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _appendChild = _interopRequireDefault(require('./appendChild.js'))
const _documentItem = _interopRequireDefault(require('../objects/documentItem.js'))
const _setParentItemReferences = _interopRequireDefault(require('./setParentItemReferences.js'))
const _updateElements = _interopRequireDefault(require('./updateElements.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * This is a shortcut for syncing a Virtual DOM (DomItem tree) item onto the real HTML DOM: builds the real elements
 * for it and its descendants, appends them to parent (the document body by default), and binds their associated
 * listeners.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem|null} item - The DomItem that we want to render the element for
 * @param {DomItem} [parent] - Where to append item, when it does not already have a parent - defaults to the
 * document body, so passing nothing keeps working exactly as before
 * @returns {DomItem}
 */
const renderHtml = (item = null, parent = _documentItem.default.body) => {
  let itemToRender = item
  if (item === null) {
    itemToRender = _documentItem.default
  }
  if (itemToRender.parentItem === null) {
    // excluding when documentItem was passed in, append the item to parent
    itemToRender = (0, _appendChild.default)(parent, item)
  }
  // Render the elements and return either to original reference, or updated documentItem (whichever is available)
  const updatedItem = (0, _updateElements.default)((0, _setParentItemReferences.default)(itemToRender))
  return item ?? updatedItem
}
const _default = exports.default = renderHtml
