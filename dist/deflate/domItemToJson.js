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
 * @param options.mapLimit
 * @param options.relevancyRange
 */
const domItemToJson = (item, {
  mapLimit = 100,
  relevancyRange = 1000
} = {}) => JSON.stringify((0, removeEmptyProperties_1.default)(si_funciona_1.default.cloneObject(item, {
  mapLimit,
  relevancyRange
}), ['activeListeners', 'element', 'parentItem', 'body', 'head']), useExclusions)
exports.default = domItemToJson
