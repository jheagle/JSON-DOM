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
/**
 * @file Be able to use Flags (Options) in a well-formed way.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module optionFlags
 * @memberOf module:domEvents
 */
require('core-js/stable')
const getListenerOptions_1 = __importDefault(require('./options/getListenerOptions'))
const numberToOptions_1 = __importDefault(require('./options/numberToOptions'))
const optionsToNumber_1 = __importDefault(require('./options/optionsToNumber'))
/**
 * A boolean value used to alter functionality.
 * @typedef {boolean} Option
 * @memberOf module:domEvents
 */
/**
 * A set of named options within an object, or simply a singular Option.
 * @typedef {Object.<string, Option>|Option} Options
 */
/**
 * A numeric value used as position in a binary number having any numeric value 2^n.
 * @typedef {int} Flag
 */
/**
 * Object containing available Option names and the Flag value associated with each.
 * @typedef {Object.<string, Flag>} OptionsTemplate
 */
exports.default = {
  getListenerOptions: getListenerOptions_1.default,
  numberToOptions: numberToOptions_1.default,
  optionsToNumber: optionsToNumber_1.default
}
