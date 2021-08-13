'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

const _checkValidPoint = _interopRequireDefault(require('./checkValidPoint'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Retrieve the DomItem associated with the provided point
 * @function getDomItemFromPoint
 * @param {module:matrixObjects~Point} pnt - A point corresponding to a DomItem.
 * @param {module:matrixObjects~Matrix} matrix - The matrix containing the point.
 * @returns {false|module:domObjects~DomItem}
 */
const getDomItemFromPoint = function getDomItemFromPoint (pnt, matrix) {
  return (0, _checkValidPoint.default)(pnt, matrix) ? matrix.children[pnt.z].children[pnt.y].children[pnt.x] : false
}

const _default = getDomItemFromPoint
exports.default = _default
