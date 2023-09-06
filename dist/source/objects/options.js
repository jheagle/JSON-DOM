'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _getListenerOptions = _interopRequireDefault(require('./options/getListenerOptions.js'))
var _numberToOptions = _interopRequireDefault(require('./options/numberToOptions.js'))
var _optionsToNumber = _interopRequireDefault(require('./options/optionsToNumber.js'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * @file Be able to use Flags (Options) in a well-formed way.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module optionFlags
 * @memberOf module:domObjects
 */
/**
 * A boolean value used to alter functionality.
 * @typedef {boolean} Option
 * @memberOf module:domObjects
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
var _default = {
  getListenerOptions: _getListenerOptions.default,
  numberToOptions: _numberToOptions.default,
  optionsToNumber: _optionsToNumber.default
}
exports.default = _default
