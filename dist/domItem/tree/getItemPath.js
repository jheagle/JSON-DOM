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
const si_funciona_1 = __importDefault(require('si-funciona'))
/**
 * The path from the root to an item: the index of the item among its parent's children, at each level from the top
 * down. An empty array means the item is the root itself.
 * WARNING: This is a recursive function.
 * @param item - The DomItem to find the path of.
 */
const getItemPath = item => {
  if (item.parentItem === null) {
    throw new Error('Detached child, missing parentItem reference. Use empty object if this is the root item.')
  }
  if (si_funciona_1.default.emptyObject(item.parentItem)) {
    return []
  }
  const parent = item.parentItem
  return [...getItemPath(parent), parent.children.indexOf(item)]
}
exports.default = getItemPath
