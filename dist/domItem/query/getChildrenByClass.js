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
const getChildrenFromAttribute_1 = __importDefault(require('./getChildrenFromAttribute'))
/**
 * Helper for getting all domGeneral.DomItems starting at parent and having specified className attribute
 * @param className - The className searched for
 * @param item - The DomItem which may have child items matching the attribute
 * criteria
 */
const getChildrenByClass = si_funciona_1.default.curry(getChildrenFromAttribute_1.default)('className')
exports.default = getChildrenByClass
