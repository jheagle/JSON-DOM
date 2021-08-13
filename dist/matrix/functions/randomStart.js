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
 * Generate a random starting point for a line with the provided length and direction.
 * @function randomStart
 * @param {number} length - The intended length the resulting line.
 * @param {module:matrixObjects~Direction} dir - The direction the line will extend towards.
 * @param {module:matrixObjects~Point} [lengthLimits={x: 10, y: 10, z: 10}] - The maximum grid size.
 * @returns {module:matrixObjects~Point}
 */
const randomStart = function randomStart (length, dir) {
  const lengthLimits = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _point.default)(10, 10, 10)
  return (0, _point.default)(_functionalHelpers.default.randomInteger(lengthLimits.x - (length - 1) * dir.x), _functionalHelpers.default.randomInteger(lengthLimits.y - (length - 1) * dir.y), _functionalHelpers.default.randomInteger(lengthLimits.z - (length - 1) * dir.z))
}

const _default = randomStart
exports.default = _default
