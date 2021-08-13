'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

const _testPointsBetween = _interopRequireDefault(require('./testPointsBetween'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Given two points, check the cells between using specified function.
 * When inclusive is set to true the provided start and end points will also be tested
 * @function checkInBetween
 * @param {...*} args - These args match the parameter list for {@link module:matrixFunctions~testPointsBetween}
 * @returns {boolean}
 */
const checkInBetween = function checkInBetween () {
  return !!_testPointsBetween.default.apply(void 0, arguments).true.length
}

const _default = checkInBetween
exports.default = _default
