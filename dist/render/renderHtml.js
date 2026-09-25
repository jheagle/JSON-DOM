'use strict'

const __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule
    ? mod
    : {
        default: mod
      }
}
Object.defineProperty(exports, '__esModule', {
  value: true
})
require('core-js/stable')
const appendChild_1 = __importDefault(require('../domItem/tree/appendChild'))
const documentItem_1 = __importDefault(require('../domItem/objects/documentItem'))
const setParentItemReferences_1 = __importDefault(require('../domItem/tree/setParentItemReferences'))
const updateElements_1 = __importDefault(require('./updateElements'))
/**
 * This is a shortcut for syncing a Virtual DOM (DomItem tree) item onto the real HTML DOM: builds the real elements
 * for it and its descendants, appends them to parent (the document body by default), and binds their associated
 * listeners.
 * @param item - The DomItem that we want to render the element for
 * @param parent - Where to append item, when it does not already have a parent - defaults to the
 * document body, so passing nothing keeps working exactly as before
 */
const renderHtml = (item = null, parent = documentItem_1.default.body) => {
  let itemToRender = item === null ? documentItem_1.default : item
  if (itemToRender.parentItem === null) {
    // excluding when documentItem was passed in, append the item to parent
    itemToRender = (0, appendChild_1.default)(parent, item)
  }
  // Render the elements and return either to original reference, or updated documentItem (whichever is available)
  const updatedItem = (0, updateElements_1.default)((0, setParentItemReferences_1.default)(itemToRender))
  return item ?? updatedItem
}
exports.default = renderHtml
