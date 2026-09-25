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
const definitions_1 = __importDefault(require('./definitions'))
/**
 * The runtime definition of a trait, if it was defined.
 * @function
 * @memberOf module:domGeneral
 * @param {string} name - The name of the trait.
 * @returns {TraitDefinition|undefined}
 */
const getTraitDefinition = name => definitions_1.default.get(name)
exports.default = getTraitDefinition
