'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _siFunciona = _interopRequireDefault(require('si-funciona'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * Take the given options and convert them (using binary) to an integer. Given listener options, each one is assigned a
 * bitwise position. The resulting binary number represents any possible combination of the available flags set.
 * @function
 * @memberOf module:optionFlags
 * @param {OptionsTemplate} optionsTemplate
 * @param {Options|Option} listenerOptions
 * @returns {int}
 */
const optionsToNumber = (optionsTemplate, listenerOptions) => {
  if (!listenerOptions) {
    return 0
  }
  return _siFunciona.default.reduceObject(optionsTemplate, (binaryOptions, flag, name) => listenerOptions[name] ? binaryOptions | flag : binaryOptions, 0)
}
var _default = exports.default = optionsToNumber
