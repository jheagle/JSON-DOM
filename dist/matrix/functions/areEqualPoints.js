'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

/**
 * Given two points, compare the x, y, and z of each to see if they are the same
 * @function areEqualPoints
 * @param {module:matrixObjects~Point} p1 - The first point to compare
 * @param {module:matrixObjects~Point} p2 - The other point to be compared
 * @returns {boolean}
 */
const areEqualPoints = function areEqualPoints (p1, p2) {
  return p1.x === p2.x && p1.y === p2.y && p1.z === p2.z
}

const _default = areEqualPoints
exports.default = _default
