'use strict'

require('core-js/modules/es.symbol')

require('core-js/modules/es.symbol.description')

require('core-js/modules/es.symbol.iterator')

require('core-js/modules/es.array.concat')

require('core-js/modules/es.array.filter')

require('core-js/modules/es.array.from')

require('core-js/modules/es.array.index-of')

require('core-js/modules/es.array.iterator')

require('core-js/modules/es.array.map')

require('core-js/modules/es.array.reduce')

require('core-js/modules/es.array.slice')

require('core-js/modules/es.function.name')

require('core-js/modules/es.object.assign')

require('core-js/modules/es.object.keys')

require('core-js/modules/es.object.to-string')

require('core-js/modules/es.regexp.to-string')

require('core-js/modules/es.string.iterator')

require('core-js/modules/web.dom-collections.iterator')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.getDomItemFromElement = exports.getPointFromElement = exports.adjacentEdgePoints = exports.adjacentPoints = exports.getAllPoints = exports.getDomItemFromPoint = exports.checkValidPoint = exports.randDirection = exports.getAxisLengths = exports.checkInBetween = exports.testPointsBetween = exports.getPointsLines = exports.getPointsLine = exports.lineEndPoint = exports.randomStart = exports.pointsToDirection = exports.getFirstAxisOfCoordinate = exports.getHighestAbsoluteCoordinate = exports.areEqualPoints = exports.pointDifference = exports.nextCell = exports.bindPointData = void 0

var _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

var _objects = require('./objects')

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _toConsumableArray (arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread() }

function _nonIterableSpread () { throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.') }

function _unsupportedIterableToArray (o, minLen) { if (!o) return; if (typeof o === 'string') return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === 'Object' && o.constructor) n = o.constructor.name; if (n === 'Map' || n === 'Set') return Array.from(o); if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen) }

function _iterableToArray (iter) { if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) return Array.from(iter) }

function _arrayWithoutHoles (arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr) }

function _arrayLikeToArray (arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i] } return arr2 }

function _defineProperty (obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }) } else { obj[key] = value } return obj }

/**
   * Generate point data for each item in the matrix
   * WARNING: This is a recursive function.
   * @function bindPointData
   * @param {module:matrix/objects.MatrixColumn|module:matrix/objects.MatrixRow} item - A special DomItem
   * which is either a layer, row, or column in a matrix.
   * @param {module:matrix/objects.Point} pnt - A point to be added to a specific Matrix Column
   * @returns {module:matrix/objects.MatrixColumn|module:matrix/objects.MatrixRow}
   */
var bindPointData = function bindPointData (item) {
  var pnt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _objects.point)(0, 0, 0)
  return _functionalHelpers.default.mergeObjects(item, item.point ? {
    point: pnt
  } : {
    children: item.children.map(function (el, i) {
      return bindPointData(el, Object.assign(pnt, _defineProperty({}, el.axis, i)))
    })
  })
}
/**
   * Based on provided point and point direction generate next point.
   * @function nextCell
   * @param {module:matrix/objects.Point} pnt - Provide the current / initial point
   * @param {module:matrix/objects.Direction} dir - Provide the direction to be applied to find the next point
   * @returns {module:matrix/objects.Point}
   */

exports.bindPointData = bindPointData

var nextCell = function nextCell (pnt, dir) {
  return (0, _objects.point)(pnt.x + dir.x, pnt.y + dir.y, pnt.z + dir.z)
}
/**
   * Based on provided point and another point, get a point with the difference between each axis
   * @function pointDifference
   * @param {module:matrix/objects.Point} start - The first point to compare
   * @param {module:matrix/objects.Point} end - The other point to be compared
   * @returns {module:matrix/objects.Point}
   */

exports.nextCell = nextCell

var pointDifference = function pointDifference (start, end) {
  return (0, _objects.point)(end.x - start.x, end.y - start.y, end.z - start.z)
}
/**
   * Given two points, compare the x, y, and z of each to see if they are the same
   * @function areEqualPoints
   * @param {module:matrix/objects.Point} p1 - The first point to compare
   * @param {module:matrix/objects.Point} p2 - The other point to be compared
   * @returns {boolean}
   */

exports.pointDifference = pointDifference

var areEqualPoints = function areEqualPoints (p1, p2) {
  return p1.x === p2.x && p1.y === p2.y && p1.z === p2.z
}
/**
   * Return the first coordinate number with the highest absolute value.
   * @function getHighestAbsoluteCoordinate
   * @param {module:matrix/objects.Point} pnt - A Point to be assessed.
   * @returns {module:matrix/objects.coordinate}
   */

exports.areEqualPoints = areEqualPoints

var getHighestAbsoluteCoordinate = function getHighestAbsoluteCoordinate (pnt) {
  return _functionalHelpers.default.reduceObject(pnt, _functionalHelpers.default.getAbsoluteMax, 0)
}
/**
   * Having provided a coordinate number, find all corresponding axis, return the first match.
   * @function getFirstAxisOfCoordinate
   * @param {module:matrix/objects.Point} pnt - The Point containing a matching coordinate.
   * @param {module:matrix/objects.coordinate} coordinate - The coordinate to search for.
   * @returns {false|module:matrix/objects.axis}
   */

exports.getHighestAbsoluteCoordinate = getHighestAbsoluteCoordinate

var getFirstAxisOfCoordinate = function getFirstAxisOfCoordinate (pnt, coordinate) {
  return Object.keys(pnt).filter(function (key) {
    return pnt[key] === coordinate
  })[0] || false
}
/**
   * Given a point and the value of the highest coordinate select the corresponding axis which will be the direction
   * (-1 or 1) to and set the other axis to 0.
   * @param {module:matrix/objects.Point} pnt - The which will be converted to a direction.
   * @param {module:matrix/objects.coordinate} highestCoordinate - The highest coordinate provided by the point.
   * @returns {module:matrix/objects.Direction}
   */

exports.getFirstAxisOfCoordinate = getFirstAxisOfCoordinate

var pointAndCoordinateToDirection = function pointAndCoordinateToDirection (pnt, highestCoordinate) {
  return (function (axis) {
    return axis !== false ? _functionalHelpers.default.mergeObjects((0, _objects.point)(0, 0, 0), _defineProperty({}, ''.concat(axis), highestCoordinate > 0 ? 1 : -1)) : (0, _objects.point)(0, 0, 0)
  }(getFirstAxisOfCoordinate(pnt, highestCoordinate)))
}
/**
   * Having a point, convert it to a direction where the axis with the highest coordinate value will be set to -1 or 1.
   * @param {module:matrix/objects.Point} pnt - The point to be converted to a direction.
   * @returns {module:matrix/objects.Direction}
   */

var pointToDirection = function pointToDirection (pnt) {
  return pointAndCoordinateToDirection(pnt, getHighestAbsoluteCoordinate(pnt))
}
/**
   * Retrieve a directional coordinate value based on two provided points
   * (directions consist of two zero coordinates and a single coordinate of 1 / -1)
   * @function pointsToDirection
   * @param {module:matrix/objects.Point} start - The first point to assess.
   * @param {module:matrix/objects.Point} end - The other point to assess.
   * @returns {module:matrix/objects.Direction}
   */

var pointsToDirection = function pointsToDirection (start, end) {
  return pointToDirection(pointDifference(start, end))
}
/**
   * Generate a random starting point for a line with the provided length and direction.
   * @function randomStart
   * @param {number} length - The intended length the resulting line.
   * @param {module:matrix/objects.Direction} dir - The direction the line will extend towards.
   * @param {module:matrix/objects.Point} [lengthLimits={x: 10, y: 10, z: 10}] - The maximum grid size.
   * @returns {module:matrix/objects.Point}
   */

exports.pointsToDirection = pointsToDirection

var randomStart = function randomStart (length, dir) {
  var lengthLimits = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (0, _objects.point)(10, 10, 10)
  return (0, _objects.point)(_functionalHelpers.default.randomInteger(lengthLimits.x - (length - 1) * dir.x), _functionalHelpers.default.randomInteger(lengthLimits.y - (length - 1) * dir.y), _functionalHelpers.default.randomInteger(lengthLimits.z - (length - 1) * dir.z))
}
/**
   * Given a start point, line length, and a direction, generate the end point of the line.
   * @function lineEndPoint
   * @param {module:matrix/objects.Point} start - The selected starting point.
   * @param {number} length - The total length of the line.
   * @param {module:matrix/objects.Direction} dir - The direction of the line.
   * @returns {module:matrix/objects.Point}
   */

exports.randomStart = randomStart

var lineEndPoint = function lineEndPoint (start, length, dir) {
  return (0, _objects.point)(start.x + dir.x * (length - 1), start.y + dir.y * (length - 1), start.z + dir.z * (length - 1))
}
/**
   * Having provided two points, return an array of transition points connecting 'start' and 'end'. Return array
   * includes 'start' (line[0]) and 'end' (line[line.length-1])
   * @function getPointsLine
   * @param {module:matrix/objects.Point} start - The starting location of the line.
   * @param {module:matrix/objects.Point} end - The final line destination.
   * @param {Array.<module:matrix/objects.Point>} [line=[]] - The resulting line to connect start and end.
   * @returns {Array.<module:matrix/objects.Point>}
   */

exports.lineEndPoint = lineEndPoint

var getPointsLine = function getPointsLine (start, end) {
  var line = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : []
  return areEqualPoints(start, end) ? line.concat([start]) : getPointsLine(nextCell(start, pointsToDirection(start, end)), end, line.concat([start]))
}
/**
   * Takes an array of arrays containing two points each. Calls getPointsLine for each array of points. Returns an
   * array of all points captured for each line segment
   * @function getPointsLines
   * @param {Array.<Array.<module:matrix/objects.Point>>} lines - An array of lines only containing start and end.
   * @returns {Array.<Array.<module:matrix/objects.Point>>}
   */

exports.getPointsLine = getPointsLine

var getPointsLines = function getPointsLines (lines) {
  return lines.reduce(function (pointsArray, line) {
    return pointsArray.concat(getPointsLine.apply(void 0, _toConsumableArray(line)))
  }, [])
}
/**
   * Function that produces a property of the new Object, taking three arguments
   * @callback module:matrix/core~testPointStatus
   * @param {module:matrix/objects.MatrixColumn|Object} pnt - A point which may have some status.
   * @param {module:matrix/objects.Matrix|Object} matrix - A matrix of points to find the point within.
   * @returns {boolean}
   */

/**
   * Given a start and end point, test the points between with the provided function. Return the points as part of true
   * and / or false properties based on the test.
   * @function module:matrix/core~testPointsBetween
   * @param {module:matrix/objects.Point} start - The beginning point to check.
   * @param {module:matrix/objects.Point} end - The terminating point to check between.
   * @param {module:matrix/objects.Matrix} matrix - The grid of points all the points can exist on.
   * @param {module:matrix/core~testPointStatus} func - The test function which will return true or false.
   * @param {boolean} [inclusive=true] - Choose whether to include or exclude the start and end points in the results.
   * @returns {Object.<string, Array.<module:matrix/objects.Point>>}
   */

exports.getPointsLines = getPointsLines

var testPointsBetween = function testPointsBetween (start, end, matrix, func) {
  var inclusive = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true
  return getPointsLine(start, end).filter(function (prop, i, line) {
    return i !== 0 && i !== line.length - 1 || inclusive
  }).reduce(function (newPoints, next) {
    return _functionalHelpers.default.mergeObjects(newPoints, _defineProperty({}, ''.concat(func(next, matrix)), [next]))
  }, {
    true: [],
    false: []
  })
}
/**
   * Given two points, check the cells between using specified function.
   * When inclusive is set to true the provided start and end points will also be tested
   * @function checkInBetween
   * @param {...*} args - These args match the parameter list for {@link module:matrix/core~testPointsBetween}
   * @returns {boolean}
   */

exports.testPointsBetween = testPointsBetween

var checkInBetween = function checkInBetween () {
  return !!testPointsBetween.apply(void 0, arguments).true.length
}
/**
   * Return point-like object with all of the axis lengths.
   * @function getAxisLengths
   * @param {module:matrix/objects.Matrix} matrix - The matrix to get the dimensions of.
   * @returns {module:matrix/objects.Point}
   */

exports.checkInBetween = checkInBetween

var getAxisLengths = function getAxisLengths (matrix) {
  return (0, _objects.point)(matrix.children[0].children[0].children.length, matrix.children[0].children.length, matrix.children.length)
}
/**
   * Get random direction point
   * @function randDirection
   * @param {Array.<module:matrix/objects.Point>} [useCoordinates=[]] - An array of possible directions.
   * @returns {module:matrix/objects.Direction}
   */

exports.getAxisLengths = getAxisLengths

var randDirection = function randDirection () {
  var useCoordinates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : []
  return useCoordinates.length ? useCoordinates[_functionalHelpers.default.randomInteger(useCoordinates.length)] : (0, _objects.point)(0, 0, 0)
}
/**
   * Test if the provided point exists in the matrix.
   * @function checkValidPoint
   * @param {module:matrix/objects.Point} pnt - Provide a point to validate.
   * @param {module:matrix/objects.Matrix} matrix - The matrix that contains valid points.
   * @returns {boolean}
   */

exports.randDirection = randDirection

var checkValidPoint = function checkValidPoint (pnt, matrix) {
  return !!matrix.children[pnt.z] && !!matrix.children[pnt.z].children[pnt.y] && !!matrix.children[pnt.z].children[pnt.y].children[pnt.x] && !!matrix.children[pnt.z].children[pnt.y].children[pnt.x].point
}
/**
   * Retrieve the DomItem associated with the provided point
   * @function getDomItemFromPoint
   * @param {module:matrix/objects.Point} pnt - A point corresponding to a DomItem.
   * @param {module:matrix/objects.Matrix} matrix - The matrix containing the point.
   * @returns {false|module:dom/objects.DomItem}
   */

exports.checkValidPoint = checkValidPoint

var getDomItemFromPoint = function getDomItemFromPoint (pnt, matrix) {
  return checkValidPoint(pnt, matrix) ? matrix.children[pnt.z].children[pnt.y].children[pnt.x] : false
}
/**
   * Return an array of all the points in the matrix
   * @function getAllPoints
   * @param {module:matrix/objects.Matrix|module:matrix/objects.MatrixColumn} matrix - The matrix to retrieve
   * points from.
   * @param {Array.<module:matrix/objects.Point>} [allPoints=[]] - The array of points to be returned
   * @returns {Array.<module:matrix/objects.Point>}
   */

exports.getDomItemFromPoint = getDomItemFromPoint

var getAllPoints = function getAllPoints (matrix) {
  var allPoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : []
  return matrix.point ? allPoints.concat([matrix.point]) : matrix.children.reduce(function (allPoints, child) {
    return allPoints.concat(getAllPoints(child, []))
  }, [])
}
/**
   * Return all valid points surrounding a provided point
   * @function adjacentPoints
   * @param {module:matrix/objects.Point} pnt - The point we want to find adjacent points for.
   * @param {module:matrix/objects.Matrix} matrix - The matrix having the point.
   * @returns {Array.<module:matrix/objects.Point>}
   */

exports.getAllPoints = getAllPoints

var adjacentPoints = function adjacentPoints (pnt, matrix) {
  return getPointsLines([[(0, _objects.point)(-1, 1, 1), (0, _objects.point)(1, -1, -1)], [(0, _objects.point)(1, 1, 1), (0, _objects.point)(-1, 1, -1)], [(0, _objects.point)(-1, -1, 1), (0, _objects.point)(1, -1, 1)], [(0, _objects.point)(1, 0, 0), (0, _objects.point)(1, 1, -1)], [(0, _objects.point)(-1, 1, 0), (0, _objects.point)(1, 1, 0)]]).concat([(0, _objects.point)(0, 0, 1), (0, _objects.point)(1, 0, 0), (0, _objects.point)(-1, 0, -1), (0, _objects.point)(0, 0, -1)]).map(function (p) {
    return nextCell(pnt, p)
  }).filter(function (p) {
    return checkValidPoint(nextCell(pnt, p), matrix)
  })
}
/**
   * Return all points which touch on edges (not diagonal)
   * @function adjacentEdgePoints
   * @param {module:matrix/objects.Point} pnt - The point we want to find adjacent points for.
   * @param {module:matrix/objects.Matrix} matrix - The matrix having the point.
   * @returns {Array.<module:matrix/objects.Point>}
   */

exports.adjacentPoints = adjacentPoints

var adjacentEdgePoints = function adjacentEdgePoints (pnt, matrix) {
  return [(0, _objects.point)(-1, 0, 0), (0, _objects.point)(1, 0, 0), (0, _objects.point)(0, -1, 0), (0, _objects.point)(0, 1, 0), (0, _objects.point)(0, 0, -1), (0, _objects.point)(0, 0, 1)].map(function (p) {
    return nextCell(pnt, p)
  }).filter(function (p) {
    return checkValidPoint(p, matrix)
  })
}
/**
   * Retrieve the point associated with the provided element.
   * @function getPointFromElement
   * @param {Node|HTMLElement|module:pseudoDom/objects.PseudoHTMLElement} elem - Provide an element associated with
   * a point.
   * @returns {module:matrix/objects.Point}
   */

exports.adjacentEdgePoints = adjacentEdgePoints

var getPointFromElement = function getPointFromElement (elem) {
  return (0, _objects.point)(Array.from(elem.parentNode.childNodes).indexOf(elem), Array.from(elem.parentNode.parentNode.childNodes).indexOf(elem.parentNode), Array.from(elem.parentNode.parentNode.parentNode.childNodes).indexOf(elem.parentNode.parentNode))
}
/**
   * Retrieve the DomItem associated with the provided element in the matrix
   * @function getDomItemFromElement
   * @param {Node|HTMLElement|module:pseudoDom/objects.PseudoHTMLElement} elem - Provide an element having an
   * associated DomItem.
   * @param {module:matrix/objects.Matrix} matrix - The matrix potentially containing the DomItem with Point.
   * @returns {module:dom/objects.DomItem}
   */

exports.getPointFromElement = getPointFromElement

var getDomItemFromElement = function getDomItemFromElement (elem, matrix) {
  return getDomItemFromPoint(getPointFromElement(elem), matrix)
}

exports.getDomItemFromElement = getDomItemFromElement
