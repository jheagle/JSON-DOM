'use strict'

require('core-js/modules/es.array.includes.js')
require('core-js/modules/es.json.stringify.js')
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
const removeEmptyProperties_1 = __importDefault(require('./removeEmptyProperties'))
const useExclusions = (function makeExclusions () {
  let jsonExclusions = []
  return (key, value) => {
    if (key === 'jsonExclusions') {
      jsonExclusions = value
      return value
    }
    if (jsonExclusions.includes(key)) {
      return undefined
    }
    return value
  }
}())
/**
 * Convert DOM Item to JSON string.
 * @param item
 * @param options
 * @param options.propertiesToDelete - Additional property names to strip from every item in the tree for this
 * call only, alongside the always-stripped internal ones. Unlike `jsonExclusions` (set once on an item itself,
 * so every caller sees the same exclusions), this is per-call: the same item can be serialized differently for
 * different callers - for example, a server redacting the same tree once per viewer - without mutating the item.
 */
const domItemToJson = (item, {
  propertiesToDelete = []
} = {}) => JSON.stringify((0, removeEmptyProperties_1.default)(si_funciona_1.default.cloneObject(item), ['activeListeners', 'element', 'parentItem', 'body', 'head', ...propertiesToDelete]), useExclusions)
exports.default = domItemToJson
