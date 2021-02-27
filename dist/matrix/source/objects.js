'use strict'

require('core-js/modules/es.symbol.js')

require('core-js/modules/es.symbol.description.js')

require('core-js/modules/es.object.to-string.js')

require('core-js/modules/es.symbol.iterator.js')

require('core-js/modules/es.string.iterator.js')

require('core-js/modules/es.array.iterator.js')

require('core-js/modules/web.dom-collections.iterator.js')

require('core-js/modules/es.array.from.js')

require('core-js/modules/es.array.slice.js')

require('core-js/modules/es.function.name.js')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.cube = exports.square = exports.matrix = exports.tile = exports.point = void 0

require('core-js/modules/es.object.assign.js')

require('core-js/modules/es.array.concat.js')

var _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

var _objects = require('../../dom/source/objects')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _toConsumableArray (arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread() }

function _nonIterableSpread () { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.') }

function _unsupportedIterableToArray (o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen) }

function _iterableToArray (iter) { if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) return Array.from(iter) }

function _arrayWithoutHoles (arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr) }

function _arrayLikeToArray (arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i] } return arr2 }

/**
   * A string representing an axis: x, y, z
   * @typedef {string} module:matrix/objects.axis
   */

/**
   * A number representing a coordinate in a {@link module:matrix/objects.Matrix}
   * @typedef {number} module:matrix/objects.coordinate
   */

/**
   * Point stores a location in a {@link module:matrix/objects.Matrix} defined by three key-value pairs
   * ({@link module:matrix/objects.axis}=>{@link module:matrix/objects.coordinate})
   * @typedef {
   * Object.<module:matrix/objects.axis, module:matrix/objects.coordinate>
   *   } module:matrix/objects.Point
   * @property {module:matrix/objects.coordinate} x - The X-coordinate of a Point
   * @property {module:matrix/objects.coordinate} y - The Y-coordinate of a Point
   * @property {module:matrix/objects.coordinate} z - The Z-coordinate of a Point
   */

/**
   * Point stores a location in a {@link module:matrix/objects.Matrix} defined by three key-value pairs
   * @typedef {module:matrix/objects.Point} module:matrix/objects.Direction
   * @property {module:matrix/objects.coordinate} x - The X-coordinate must be either -1, 0, or 1
   * @property {module:matrix/objects.coordinate} y - The Y-coordinate must be either -1, 0, or 1
   * @property {module:matrix/objects.coordinate} z - The Z-coordinate must be either -1, 0, or 1
   */

/**
   * Store the point data for an x, y, z {@link module:matrix/objects.Matrix}.
   * @function point
   * @param {module:matrix/objects.coordinate} x - The numeric value for X-coordinate
   * @param {module:matrix/objects.coordinate} y - The numeric value for Y-coordinate
   * @param {module:matrix/objects.coordinate} [z=0] - The numeric value for Z-coordinate (default to 0 for 2D
   * {@link module:matrix/objects.Matrix})
   * @returns {module:matrix/objects.Point}
   */
var point = function point (x, y) {
  var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0
  return Object.assign({}, {
    x: x,
    y: y,
    z: z
  })
}
/**
   * MatrixTile is an Object which stores a reference a {@link Point} and can be populated with additionally associated
   * fields.
   * @typedef {Object.<string, module:matrix/objects.Point>} module:matrix/objects.MatrixTile
   * @property {module:matrix/objects.Point} point - a reference to its location in a
   * {@link module:matrix/objects.Matrix}
   * @property {module:matrix/objects.axis} axis - The axis will be 'x'
   */

/**
   * A default tile in the {@link module:matrix/objects.Matrix}
   * @function tile
   * @returns {module:matrix/objects.MatrixTile}
   */

exports.point = point

var tile = function tile () {
  return {
    point: {}
  }
}
/**
   * MatrixColumn is a DomItem which represents the x axis and also stores {@link module:matrix/objects.MatrixTile}
   * @typedef {
   * module:dom/objects.DomItem|module:matrix/objects.MatrixTile
   * } module:matrix/objects.MatrixColumn
   */

/**
   * MatrixRow is the parent of a group of {@link module:matrix/objects.MatrixTile}
   * @typedef {module:dom/objects.DomItem} module:matrix/objects.MatrixRow
   * @property {module:matrix/objects.axis} axis - The axis will be 'y'
   * @property {Array.<module:matrix/objects.MatrixColumn>} children - all of the MatrixTile items as part of this
   * MatrixRow
   */

/**
   * MatrixLayer is the parent of a group of {@link module:matrix/objects.MatrixTile}
   * @typedef {module:dom/objects.DomItem} module:matrix/objects.MatrixLayer
   * @property {module:matrix/objects.axis} axis - The axis will be 'y'
   * @property {Array.<module:matrix/objects.MatrixRow>} children - all of the MatrixRow items as part of this
   * MatrixLayer
   */

/**
   * Matrix is a multi-level {@link module:dom/objects.DomItem} which is used to visually represent a
   * mathematical grid / matrix.
   * The matrix consists of four DomItem levels, at the top tier is the Matrix container with class matrix.
   * The second tier represents the z axis (with property axis='z') and has the class layer.
   * The third tier represents the y axis (with property axis='y') and has the class row.
   * The fourth (final) tier represents the x axis (with property axis='x') and has the class column.
   * The {@link module:matrix/objects.MatrixTile} is attached on the x axis tier.
   * The number of children at each level is defined by the size of the matrix, the end result is a multidimensional
   * array.
   * @typedef {module:dom/objects.DomItem} module:matrix/objects.Matrix
   * @augments module:dom/objects.DomItem
   */

/**
   * Create a 3d matrix of i with x by y by z size, add additional objects for each layer as well
   * @function matrix
   * @param {
   * {coordinate: module:matrix/objects.coordinate, props: Array.<module:matrix/objects.MatrixTile>}
   * } x - Properties and a coordinate defining the width of the matrix.
   * @param {
   * {coordinate: module:matrix/objects.coordinate, props: Array.<module:matrix/objects.MatrixRow>}
   * } y - Properties and a coordinate defining the height of the matrix.
   * @param {
   * {coordinate: module:matrix/objects.coordinate, props: Array.<module:matrix/objects.MatrixLayer>}
   * } z - Properties and a coordinate defining the depth of the matrix.
   * @param {Array.<module:matrix/objects.Matrix>} matrixProps - Properties to be added to the matrix
   * @returns {module:matrix/objects.Matrix}
   */

exports.tile = tile

var matrix = function matrix () {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    coordinate: 0,
    props: []
  }
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    coordinate: 0,
    props: []
  }
  var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    coordinate: 1,
    props: []
  }
  var matrixProps = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : []
  return _objects.createDomItem.apply(void 0, [{
    tagName: 'div',
    attributes: {
      className: 'matrix'
    },
    children: _functionalHelpers.default.buildArray(_objects.createDomItem.apply(void 0, [{
      axis: 'z',
      tagName: 'div',
      attributes: {
        className: 'layer'
      },
      children: _functionalHelpers.default.buildArray(_objects.createDomItem.apply(void 0, [{
        axis: 'y',
        tagName: 'div',
        attributes: {
          className: 'row'
        },
        children: _functionalHelpers.default.buildArray(_objects.createDomItem.apply(void 0, [{
          axis: 'x',
          tagName: 'div',
          attributes: {
            className: 'column'
          }
        }].concat(_toConsumableArray(x.props))), x.coordinate)
      }].concat(_toConsumableArray(y.props))), y.coordinate)
    }].concat(_toConsumableArray(z.props))), z.coordinate)
  }].concat(_toConsumableArray(matrixProps)))
}
/**
   * Return a single layer matrix where x and y are equal
   * @function square
   * @param {Array.<module:matrix/objects.MatrixTile>} [x=[]] - All the data to be presented as part of the
   * specified point, requires MatrixTile base
   * @param {Array.<module:matrix/objects.MatrixRow>} [y=[]] - Additional data to append to the MatrixRow
   * @param {Array.<module:matrix/objects.MatrixLayer>} [z=[]] - Additional data to append to the MatrixLayer
   * @param {Array.<module:matrix/objects.Matrix>} [matrixProps=[]] - Additional data to append to the Matrix
   * @param {number} size - Used to define height and width as equal values (depth is set to 1)
   * @returns {module:matrix/objects.Matrix}
   */

exports.matrix = matrix

var square = function square () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  var _ref$x = _ref.x
  var x = _ref$x === void 0 ? [] : _ref$x
  var _ref$y = _ref.y
  var y = _ref$y === void 0 ? [] : _ref$y
  var _ref$z = _ref.z
  var z = _ref$z === void 0 ? [] : _ref$z
  var _ref$matrixProps = _ref.matrixProps
  var matrixProps = _ref$matrixProps === void 0 ? [] : _ref$matrixProps

  var size = arguments.length > 1 ? arguments[1] : undefined
  return matrix({
    coordinate: size,
    props: x
  }, {
    coordinate: size,
    props: y
  }, {
    coordinate: 1,
    props: z
  }, matrixProps)
}
/**
   * Return a matrix where x, y, and z are equal
   * @function cube
   * @param {Array.<module:matrix/objects.MatrixTile>} [x=[]] - All the data to be presented as part of the
   * specified point, requires MatrixTile base
   * @param {Array.<module:matrix/objects.MatrixRow>} [y=[]] - Additional data to append to the MatrixRow
   * @param {Array.<module:matrix/objects.MatrixLayer>} [z=[]] - Additional data to append to the MatrixLayer
   * @param {Array.<module:matrix/objects.Matrix>} [matrixProps=[]] - Additional data to append to the Matrix
   * @param {number} size - Used to define height, width, and depth as equal values
   * @returns {module:matrix/objects.Matrix}
   */

exports.square = square

var cube = function cube () {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  var _ref2$x = _ref2.x
  var x = _ref2$x === void 0 ? [] : _ref2$x
  var _ref2$y = _ref2.y
  var y = _ref2$y === void 0 ? [] : _ref2$y
  var _ref2$z = _ref2.z
  var z = _ref2$z === void 0 ? [] : _ref2$z
  var _ref2$matrixProps = _ref2.matrixProps
  var matrixProps = _ref2$matrixProps === void 0 ? [] : _ref2$matrixProps

  var size = arguments.length > 1 ? arguments[1] : undefined
  return matrix({
    coordinate: size,
    props: x
  }, {
    coordinate: size,
    props: y
  }, {
    coordinate: size,
    props: z
  }, matrixProps)
}

exports.cube = cube
