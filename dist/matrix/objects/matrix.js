'use strict'

require('core-js/modules/es.symbol.js')

require('core-js/modules/es.symbol.description.js')

require('core-js/modules/es.object.to-string.js')

require('core-js/modules/es.symbol.iterator.js')

require('core-js/modules/es.array.iterator.js')

require('core-js/modules/es.string.iterator.js')

require('core-js/modules/web.dom-collections.iterator.js')

require('core-js/modules/es.array.from.js')

require('core-js/modules/es.array.slice.js')

require('core-js/modules/es.function.name.js')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/modules/es.array.concat.js')

require('core-js/stable')

const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

const _createDomItem = _interopRequireDefault(require('../../dom/objects/createDomItem'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _toConsumableArray (arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread() }

function _nonIterableSpread () { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.') }

function _unsupportedIterableToArray (o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); let n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen) }

function _iterableToArray (iter) { if (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null || iter['@@iterator'] != null) return Array.from(iter) }

function _arrayWithoutHoles (arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr) }

function _arrayLikeToArray (arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i] } return arr2 }

/**
 * MatrixColumn is a DomItem which represents the x axis and also stores {@link module:matrixObjects~MatrixTile}
 * @typedef {
 * module:domObjects~DomItem|module:matrixObjects~MatrixTile
 * } module:matrixObjects~MatrixColumn
 */

/**
 * MatrixRow is the parent of a group of {@link module:matrixObjects~MatrixTile}
 * @typedef {module:domObjects~DomItem} module:matrixObjects~MatrixRow
 * @property {module:matrixObjects~axis} axis - The axis will be 'y'
 * @property {Array.<module:matrixObjects~MatrixColumn>} children - all of the MatrixTile items as part of this
 * MatrixRow
 */

/**
 * MatrixLayer is the parent of a group of {@link module:matrixObjects~MatrixTile}
 * @typedef {module:domObjects~DomItem} module:matrixObjects~MatrixLayer
 * @property {module:matrixObjects~axis} axis - The axis will be 'y'
 * @property {Array.<module:matrixObjects~MatrixRow>} children - all of the MatrixRow items as part of this
 * MatrixLayer
 */

/**
 * Matrix is a multi-level {@link module:domObjects~DomItem} which is used to visually represent a
 * mathematical grid / matrix.
 * The matrix consists of four DomItem levels, at the top tier is the Matrix container with class matrix.
 * The second tier represents the z axis (with property axis='z') and has the class layer.
 * The third tier represents the y axis (with property axis='y') and has the class row.
 * The fourth (final) tier represents the x axis (with property axis='x') and has the class column.
 * The {@link module:matrixObjects~MatrixTile} is attached on the x axis tier.
 * The number of children at each level is defined by the size of the matrix, the end result is a multidimensional
 * array.
 * @typedef {module:domObjects~DomItem} module:matrixObjects~Matrix
 * @augments module:domObjects~DomItem
 */

/**
 * Create a 3d matrix of i with x by y by z size, add additional objects for each layer as well
 * @function matrix
 * @param {
 * {coordinate: module:matrixObjects~coordinate, props: Array.<module:matrixObjects~MatrixTile>}
 * } x - Properties and a coordinate defining the width of the matrix.
 * @param {
 * {coordinate: module:matrixObjects~coordinate, props: Array.<module:matrixObjects~MatrixRow>}
 * } y - Properties and a coordinate defining the height of the matrix.
 * @param {
 * {coordinate: module:matrixObjects~coordinate, props: Array.<module:matrixObjects~MatrixLayer>}
 * } z - Properties and a coordinate defining the depth of the matrix.
 * @param {Array.<module:matrixObjects~Matrix>} matrixProps - Properties to be added to the matrix
 * @returns {module:matrixObjects~Matrix}
 */
const matrix = function matrix () {
  const x = arguments.length > 0 && arguments[0] !== undefined
    ? arguments[0]
    : {
        coordinate: 0,
        props: []
      }
  const y = arguments.length > 1 && arguments[1] !== undefined
    ? arguments[1]
    : {
        coordinate: 0,
        props: []
      }
  const z = arguments.length > 2 && arguments[2] !== undefined
    ? arguments[2]
    : {
        coordinate: 1,
        props: []
      }
  const matrixProps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : []
  return _functionalHelpers.default.mergeObjects.apply(_functionalHelpers.default, [(0, _createDomItem.default)({
    tagName: 'div',
    attributes: {
      className: 'matrix'
    },
    children: _functionalHelpers.default.buildArray(_functionalHelpers.default.mergeObjectsMutable.apply(_functionalHelpers.default, [(0, _createDomItem.default)({
      axis: 'z',
      tagName: 'div',
      attributes: {
        className: 'layer'
      },
      children: _functionalHelpers.default.buildArray(_functionalHelpers.default.mergeObjectsMutable.apply(_functionalHelpers.default, [(0, _createDomItem.default)({
        axis: 'y',
        tagName: 'div',
        attributes: {
          className: 'row'
        },
        children: _functionalHelpers.default.buildArray(_functionalHelpers.default.mergeObjectsMutable.apply(_functionalHelpers.default, [(0, _createDomItem.default)({
          axis: 'x',
          tagName: 'div',
          attributes: {
            className: 'column'
          },
          children: []
        })].concat(_toConsumableArray(x.props))), x.coordinate)
      })].concat(_toConsumableArray(y.props))), y.coordinate)
    })].concat(_toConsumableArray(z.props))), z.coordinate)
  })].concat(_toConsumableArray(matrixProps)))
}

const _default = matrix
exports.default = _default
