'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/modules/es.array.filter.js')

require('core-js/modules/es.object.keys.js')

require('core-js/stable')

/**
 * Having provided a coordinate number, find all corresponding axis, return the first match.
 * @function getFirstAxisOfCoordinate
 * @param {module:matrixObjects~Point} pnt - The Point containing a matching coordinate.
 * @param {module:matrixObjects~coordinate} coordinate - The coordinate to search for.
 * @returns {false|module:matrixObjects~axis}
 */
const getFirstAxisOfCoordinate = function getFirstAxisOfCoordinate (pnt, coordinate) {
  return Object.keys(pnt).filter(function (key) {
    return pnt[key] === coordinate
  })[0] || false
}

const _default = getFirstAxisOfCoordinate
exports.default = _default
