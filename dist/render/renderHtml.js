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
const documentItem_1 = __importDefault(require('../domItem/objects/documentItem'))
const insertChild_1 = __importDefault(require('../domItem/tree/insertChild'))
const setParentItemReferences_1 = __importDefault(require('../domItem/tree/setParentItemReferences'))
const updateElements_1 = __importDefault(require('./updateElements'))
/**
 * This is a shortcut for syncing a Virtual DOM (DomItem tree) item onto the real HTML DOM: builds the real elements
 * for it and its descendants, inserts them into parent's children (the document body by default), and binds their
 * associated listeners.
 * @param item - The DomItem that we want to render the element for
 * @param parent - Where to insert item, when it does not already have a parent - defaults to the
 * document body, so passing nothing keeps working exactly as before
 * @param index - Where in parent's children to put item - defaults to the end (a plain append), so passing nothing
 * keeps working exactly as before. To insert item among parent's already-rendered content (existing real HTML),
 * parent's children must already reflect that content first - see {@link updateDomItems}, which captures the real
 * DOM into items. Skipping that step and inserting anyway will make the next render remove the untracked content,
 * since it is invisible to parent.children.
 */
const renderHtml = (item = null, parent = documentItem_1.default.body, index = parent.children.length) => {
  let itemToRender = item === null ? documentItem_1.default : item
  if (itemToRender.parentItem === null) {
    // excluding when documentItem was passed in, insert the item into parent
    itemToRender = (0, insertChild_1.default)(parent, item, index)
  }
  // Render the elements and return either to original reference, or updated documentItem (whichever is available)
  const updatedItem = (0, updateElements_1.default)((0, setParentItemReferences_1.default)(itemToRender))
  return item ?? updatedItem
}
exports.default = renderHtml
