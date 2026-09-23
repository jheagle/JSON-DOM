'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _siFunciona = _interopRequireDefault(require('si-funciona'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * Take an integer representation of the listener options and convert them to the listener options object.
 * @function
 * @memberOf module:optionFlags
 * @param {OptionsTemplate} optionsTemplate
 * @param {int} binaryOptions
 * @returns {EventListenerOptions}
 */
const numberToOptions = (optionsTemplate, binaryOptions) => _siFunciona.default.mapObject(optionsTemplate, flag => !!(binaryOptions & flag))
const _default = exports.default = numberToOptions
