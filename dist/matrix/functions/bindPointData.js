'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/modules/es.array.map.js')

require('core-js/modules/es.object.assign.js')

require('core-js/stable')

const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

const _point = _interopRequireDefault(require('../objects/point'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _defineProperty (obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }) } else { obj[key] = value } return obj }

/**
 * Generate point data for each item in the matrix
 * WARNING: This is a recursive function.
 * @function bindPointData
 * @param {module:matrixObjects~MatrixColumn|module:matrixObjects~MatrixRow} item - A special DomItem
 * which is either a layer, row, or column in a matrix.
 * @param {module:matrixObjects~Point} pnt - A point to be added to a specific Matrix Column
 * @returns {module:matrixObjects~MatrixColumn|module:matrixObjects~MatrixRow}
 */
const bindPointData = function bindPointData (item) {
  const pnt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _point.default)(0, 0, 0)
  return _functionalHelpers.default.mergeObjects(item, item.point
    ? {
        point: _functionalHelpers.default.cloneObject(pnt)
      }
    : {
        children: item.children.map(function (el, i) {
          return bindPointData(el, Object.assign({}, pnt, _defineProperty({}, el.axis, i)))
        })
      })
}

const _default = bindPointData
exports.default = _default
