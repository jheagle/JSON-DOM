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
 * Get all the styles which have been assigned to this element. Assigned styles are indicated as numeric-key
 * properties with a value indicating the string-key property which has been assigned. The string-key properties
 * have the assigned values.
 * @function
 * @memberOf module:domGeneral
 * @param {Object.<style, style>|CSSProperties} elementStyles
 * @returns {object}
 */
const getAssignedStyles = elementStyles => si_funciona_1.default.reduceObject(elementStyles, (styles, attr, key) => Number.isNaN(Number(key)) ? styles : si_funciona_1.default.setValue(attr, elementStyles[attr], styles), {})
exports.default = getAssignedStyles
