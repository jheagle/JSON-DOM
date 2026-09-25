'use strict'

/**
 * All of the JSON DOM system functions for building and syncing a Virtual DOM (DomItem tree) to the real HTML DOM.
 */
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
const index_1 = __importDefault(require('./events/index'))
const index_2 = __importDefault(require('./domItem/index'))
const index_3 = __importDefault(require('./inflate/index'))
const index_4 = __importDefault(require('./deflate/index'))
const index_5 = __importDefault(require('./render/index'))
const index_6 = __importDefault(require('./sync/index'))
const index_7 = __importDefault(require('./diff/index'))
const jsonDom = Object.assign({}, index_1.default, index_2.default, index_3.default, index_4.default, index_5.default, index_6.default, index_7.default)
exports.default = jsonDom
const root = void 0 || typeof window !== 'undefined' ? window : {}
root.jsonDom = jsonDom
