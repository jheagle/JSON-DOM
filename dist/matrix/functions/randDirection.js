'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

const _point = _interopRequireDefault(require('../objects/point'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Get random direction point
 * @function randDirection
 * @param {Array.<module:matrixObjects~Point>} [useCoordinates=[]] - An array of possible directions.
 * @returns {module:matrixObjects~Direction}
 */
const randDirection = function randDirection () {
  const useCoordinates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
  return useCoordinates.length ? useCoordinates[_functionalHelpers.default.randomInteger(useCoordinates.length)] : (0, _point.default)(0, 0, 0)
}

const _default = randDirection
exports.default = _default
