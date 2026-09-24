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
const getParentsFromAttribute_1 = __importDefault(require('./getParentsFromAttribute'))
/**
 * Helper for getting all domGeneral.DomItems starting at child and having specified nodeName
 * @function
 * @memberOf module:domGeneral
 * @param {*} nodeName - The nodeName to search for
 * @param {DomItem} item - The DomItem which may have parent items matching the
 * attribute criteria
 * @returns {Array}
 */
const getParentsByTagName = si_funciona_1.default.curry(getParentsFromAttribute_1.default)('nodeName')
exports.default = getParentsByTagName
