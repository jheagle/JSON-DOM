/**
 * @file All of the core matrix functions for working with a grid of points.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 */
'use strict'
;(function () {
  /**
   * Store a reference to this scope which will be Window if rendered via browser
   */
  const root = this || {}

  /**
   * Store reference to any pre-existing module of the same name
   * @type {module|*}
   */
  const previousJDomMatrixCore = root.matrixCore || {}

  /**
   * All methods exported from this module are encapsulated within matrixCore.
   * @author Joshua Heagle <joshuaheagle@gmail.com>
   * @typedef {Object} matrixCore
   * @module matrix/core
   */
  const matrixCore = {}
  root.matrixCore = matrixCore

  /**
   * Return a reference to this library while preserving the original same-named library
   * @function noConflict
   * @returns {matrixCore}
   */
  matrixCore.noConflict = () => {
    root.matrixCore = previousJDomMatrixCore
    return matrixCore
  }

  /**
   * Verify availability of matrixObjects
   * @typedef {*|module:core/core} core
   */
  let core = root.core

  /**
   * If core remains undefined, attempt to retrieve it as a module
   */
  if (typeof core === 'undefined') {
    if (typeof require !== 'undefined') {
      core = require('../core/core.js')
    } else {
      console.error('matrix/core requires core/core')
    }
  }

  /**
   * Verify availability of matrixObjects
   * @typedef {*|module:matrix/objects} matrixObjects
   */
  let matrixObjects = root.matrixObjects

  /**
   * If coreDom remains undefined, attempt to retrieve it as a module
   */
  if (typeof matrixObjects === 'undefined') {
    if (typeof require !== 'undefined') {
      matrixObjects = require('./objects.js')
    } else {
      console.error('matrix/core requires matrix/objects')
    }
  }

  /**
   * Generate point data for each item in the matrix
   * WARNING: This is a recursive function.
   * @function bindPointData
   * @param {module:matrix/objects.MatrixColumn|module:matrix/objects.MatrixRow} item - A special DomItem
   * which is either a layer, row, or column in a matrix.
   * @param {module:matrix/objects.Point} pnt - A point to be added to a specific Matrix Column
   * @returns {module:matrix/objects.MatrixColumn|module:matrix/objects.MatrixRow}
   */
  matrixCore.bindPointData = (item, pnt = matrixObjects.point(0, 0, 0)) => core.mergeObjects(
    item,
    item.point ? { point: core.cloneObject(pnt) } : {
      children: item.children.map(
        (el, i) => matrixCore.bindPointData(el, Object.assign(pnt, { [el.axis]: i }))
      )
    }
  )

  /**
   * Based on provided point and point direction generate next point.
   * @function nextCell
   * @param {module:matrix/objects.Point} pnt - Provide the current / initial point
   * @param {module:matrix/objects.Direction} dir - Provide the direction to be applied to find the next point
   * @returns {module:matrix/objects.Point}
   */
  matrixCore.nextCell = (pnt, dir) => matrixObjects.point(pnt.x + dir.x, pnt.y + dir.y, pnt.z + dir.z)

  /**
   * Based on provided point and another point, get a point with the difference between each axis
   * @function pointDifference
   * @param {module:matrix/objects.Point} start - The first point to compare
   * @param {module:matrix/objects.Point} end - The other point to be compared
   * @returns {module:matrix/objects.Point}
   */
  matrixCore.pointDifference = (start, end) => matrixObjects.point(
    end.x - start.x,
    end.y - start.y,
    end.z - start.z
  )

  /**
   * Given two points, compare the x, y, and z of each to see if they are the same
   * @function areEqualPoints
   * @param {module:matrix/objects.Point} p1 - The first point to compare
   * @param {module:matrix/objects.Point} p2 - The other point to be compared
   * @returns {boolean}
   */
  matrixCore.areEqualPoints = (p1, p2) => p1.x === p2.x && p1.y === p2.y && p1.z === p2.z

  /**
   * Return the first coordinate number with the highest absolute value.
   * @function getHighestAbsoluteCoordinate
   * @param {module:matrix/objects.Point} pnt - A Point to be assessed.
   * @returns {module:matrix/objects.coordinate}
   */
  matrixCore.getHighestAbsoluteCoordinate = pnt => core.reduceObject(pnt, core.getAbsoluteMax, 0)

  /**
   * Having provided a coordinate number, find all corresponding axis, return the first match.
   * @function getFirstAxisOfCoordinate
   * @param {module:matrix/objects.Point} pnt - The Point containing a matching coordinate.
   * @param {module:matrix/objects.coordinate} coordinate - The coordinate to search for.
   * @returns {false|module:matrix/objects.axis}
   */
  matrixCore.getFirstAxisOfCoordinate = (pnt, coordinate) => Object.keys(pnt).filter(
    (key) => pnt[key] === coordinate
  )[0] || false

  /**
   * Given a point and the value of the highest coordinate select the corresponding axis which will be the direction
   * (-1 or 1) to and set the other axis to 0.
   * @param {module:matrix/objects.Point} pnt - The which will be converted to a direction.
   * @param {module:matrix/objects.coordinate} highestCoordinate - The highest coordinate provided by the point.
   * @returns {module:matrix/objects.Direction}
   */
  const pointAndCoordinateToDirection = (pnt, highestCoordinate) => (
    axis => axis !== false
      ? core.mergeObjects(matrixObjects.point(0, 0, 0), { [`${axis}`]: highestCoordinate > 0 ? 1 : -1 })
      : matrixObjects.point(0, 0, 0)
  )(matrixCore.getFirstAxisOfCoordinate(pnt, highestCoordinate))

  /**
   * Having a point, convert it to a direction where the axis with the highest coordinate value will be set to -1 or 1.
   * @param {module:matrix/objects.Point} pnt - The point to be converted to a direction.
   * @returns {module:matrix/objects.Direction}
   */
  const pointToDirection = pnt => pointAndCoordinateToDirection(pnt, matrixCore.getHighestAbsoluteCoordinate(pnt))

  /**
   * Retrieve a directional coordinate value based on two provided points
   * (directions consist of two zero coordinates and a single coordinate of 1 / -1)
   * @function pointsToDirection
   * @param {module:matrix/objects.Point} start - The first point to assess.
   * @param {module:matrix/objects.Point} end - The other point to assess.
   * @returns {module:matrix/objects.Direction}
   */
  matrixCore.pointsToDirection = (start, end) => pointToDirection(matrixCore.pointDifference(start, end))

  /**
   * Generate a random starting point for a line with the provided length and direction.
   * @function randomStart
   * @param {number} length - The intended length the resulting line.
   * @param {module:matrix/objects.Direction} dir - The direction the line will extend towards.
   * @param {module:matrix/objects.Point} [lengthLimits={x: 10, y: 10, z: 10}] - The maximum grid size.
   * @returns {module:matrix/objects.Point}
   */
  matrixCore.randomStart = (
    length,
    dir,
    lengthLimits = matrixObjects.point(10, 10, 10)
  ) => matrixObjects.point(
    core.randomInteger(lengthLimits.x - ((length - 1) * dir.x)),
    core.randomInteger(lengthLimits.y - ((length - 1) * dir.y)),
    core.randomInteger(lengthLimits.z - ((length - 1) * dir.z))
  )

  /**
   * Given a start point, line length, and a direction, generate the end point of the line.
   * @function lineEndPoint
   * @param {module:matrix/objects.Point} start - The selected starting point.
   * @param {number} length - The total length of the line.
   * @param {module:matrix/objects.Direction} dir - The direction of the line.
   * @returns {module:matrix/objects.Point}
   */
  matrixCore.lineEndPoint = (start, length, dir) => matrixObjects.point(
    start.x + dir.x * (length - 1),
    start.y + dir.y * (length - 1),
    start.z + dir.z * (length - 1)
  )

  /**
   * Having provided two points, return an array of transition points connecting 'start' and 'end'. Return array
   * includes 'start' (line[0]) and 'end' (line[line.length-1])
   * @function getPointsLine
   * @param {module:matrix/objects.Point} start - The starting location of the line.
   * @param {module:matrix/objects.Point} end - The final line destination.
   * @param {Array.<module:matrix/objects.Point>} [line=[]] - The resulting line to connect start and end.
   * @returns {Array.<module:matrix/objects.Point>}
   */
  matrixCore.getPointsLine = (start, end, line = []) => matrixCore.areEqualPoints(start, end)
    ? line.concat([start])
    : matrixCore.getPointsLine(
      matrixCore.nextCell(start, matrixCore.pointsToDirection(start, end)),
      end,
      line.concat([start])
    )

  /**
   * Takes an array of arrays containing two points each. Calls getPointsLine for each array of points. Returns an
   * array of all points captured for each line segment
   * @function getPointsLines
   * @param {Array.<Array.<module:matrix/objects.Point>>} lines - An array of lines only containing start and end.
   * @returns {Array.<Array.<module:matrix/objects.Point>>}
   */
  matrixCore.getPointsLines = lines => lines.reduce(
    (pointsArray, line) => pointsArray.concat(matrixCore.getPointsLine(...line)),
    []
  )

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
  matrixCore.testPointsBetween = (start, end, matrix, func, inclusive = true) =>
    matrixCore.getPointsLine(start, end).filter(
      (prop, i, line) => ((i !== 0 && i !== line.length - 1) || inclusive)
    ).reduce(
      (newPoints, next) => core.mergeObjects(newPoints, { [`${func(next, matrix)}`]: [next] }), {
        true: [],
        false: []
      }
    )

  /**
   * Given two points, check the cells between using specified function.
   * When inclusive is set to true the provided start and end points will also be tested
   * @function checkInBetween
   * @param {...*} args - These args match the parameter list for {@link module:matrix/core~testPointsBetween}
   * @returns {boolean}
   */
  matrixCore.checkInBetween = (...args) => !!matrixCore.testPointsBetween(...args).true.length

  /**
   * Return point-like object with all of the axis lengths.
   * @function getAxisLengths
   * @param {module:matrix/objects.Matrix} matrix - The matrix to get the dimensions of.
   * @returns {module:matrix/objects.Point}
   */
  matrixCore.getAxisLengths = (matrix) => matrixObjects.point(
    matrix.children[0].children[0].children.length,
    matrix.children[0].children.length,
    matrix.children.length
  )

  /**
   * Get random direction point
   * @function randDirection
   * @param {Array.<module:matrix/objects.Point>} [useCoordinates=[]] - An array of possible directions.
   * @returns {module:matrix/objects.Direction}
   */
  matrixCore.randDirection = (useCoordinates = []) => useCoordinates.length
    ? useCoordinates[core.randomInteger(useCoordinates.length)]
    : matrixObjects.point(0, 0, 0)

  /**
   * Test if the provided point exists in the matrix.
   * @function checkValidPoint
   * @param {module:matrix/objects.Point} pnt - Provide a point to validate.
   * @param {module:matrix/objects.Matrix} matrix - The matrix that contains valid points.
   * @returns {boolean}
   */
  matrixCore.checkValidPoint = (pnt, matrix) => !!matrix.children[pnt.z] &&
    !!matrix.children[pnt.z].children[pnt.y] &&
    !!matrix.children[pnt.z].children[pnt.y].children[pnt.x] &&
    !!matrix.children[pnt.z].children[pnt.y].children[pnt.x].point

  /**
   * Retrieve the DomItem associated with the provided point
   * @function getDomItemFromPoint
   * @param {module:matrix/objects.Point} pnt - A point corresponding to a DomItem.
   * @param {module:matrix/objects.Matrix} matrix - The matrix containing the point.
   * @returns {false|module:core/dom/objects.DomItem}
   */
  matrixCore.getDomItemFromPoint = (pnt, matrix) => matrixCore.checkValidPoint(pnt, matrix)
    ? matrix.children[pnt.z].children[pnt.y].children[pnt.x]
    : false

  /**
   * Return an array of all the points in the matrix
   * @function getAllPoints
   * @param {module:matrix/objects.Matrix|module:matrix/objects.MatrixColumn} matrix - The matrix to retrieve
   * points from.
   * @param {Array.<module:matrix/objects.Point>} [allPoints=[]] - The array of points to be returned
   * @returns {Array.<module:matrix/objects.Point>}
   */
  matrixCore.getAllPoints = (matrix, allPoints = []) => (matrix.point)
    ? allPoints.concat([matrix.point])
    : matrix.children.reduce((allPoints, child) => allPoints.concat(matrixCore.getAllPoints(child, [])), [])

  /**
   * Return all valid points surrounding a provided point
   * @function adjacentPoints
   * @param {module:matrix/objects.Point} pnt - The point we want to find adjacent points for.
   * @param {module:matrix/objects.Matrix} matrix - The matrix having the point.
   * @returns {Array.<module:matrix/objects.Point>}
   */
  matrixCore.adjacentPoints = (pnt, matrix) => matrixCore.getPointsLines([
    [matrixObjects.point(-1, 1, 1), matrixObjects.point(1, -1, -1)],
    [matrixObjects.point(1, 1, 1), matrixObjects.point(-1, 1, -1)],
    [matrixObjects.point(-1, -1, 1), matrixObjects.point(1, -1, 1)],
    [matrixObjects.point(1, 0, 0), matrixObjects.point(1, 1, -1)],
    [matrixObjects.point(-1, 1, 0), matrixObjects.point(1, 1, 0)]
  ]).concat([
    matrixObjects.point(0, 0, 1),
    matrixObjects.point(1, 0, 0),
    matrixObjects.point(-1, 0, -1),
    matrixObjects.point(0, 0, -1)
  ]).map(p => matrixCore.nextCell(pnt, p))
    .filter(p => matrixCore.checkValidPoint(matrixCore.nextCell(pnt, p), matrix))

  /**
   * Return all points which touch on edges (not diagonal)
   * @function adjacentEdgePoints
   * @param {module:matrix/objects.Point} pnt - The point we want to find adjacent points for.
   * @param {module:matrix/objects.Matrix} matrix - The matrix having the point.
   * @returns {Array.<module:matrix/objects.Point>}
   */
  matrixCore.adjacentEdgePoints = (pnt, matrix) => [
    matrixObjects.point(-1, 0, 0),
    matrixObjects.point(1, 0, 0),
    matrixObjects.point(0, -1, 0),
    matrixObjects.point(0, 1, 0),
    matrixObjects.point(0, 0, -1),
    matrixObjects.point(0, 0, 1)
  ].map(p => matrixCore.nextCell(pnt, p)).filter(p => matrixCore.checkValidPoint(p, matrix))

  /**
   * Retrieve the point associated with the provided element.
   * @function getPointFromElement
   * @param {Node|HTMLElement|module:pseudoDom/objects.PseudoHTMLElement} elem - Provide an element associated with
   * a point.
   * @returns {module:matrix/objects.Point}
   */
  matrixCore.getPointFromElement = elem => matrixObjects.point(
    Array.from(elem.parentNode.childNodes).indexOf(elem),
    Array.from(elem.parentNode.parentNode.childNodes).indexOf(elem.parentNode),
    Array.from(elem.parentNode.parentNode.parentNode.childNodes).indexOf(elem.parentNode.parentNode)
  )

  /**
   * Retrieve the DomItem associated with the provided element in the matrix
   * @function getDomItemFromElement
   * @param {Node|HTMLElement|module:pseudoDom/objects.PseudoHTMLElement} elem - Provide an element having an
   * associated DomItem.
   * @param {module:matrix/objects.Matrix} matrix - The matrix potentially containing the DomItem with Point.
   * @returns {module:core/dom/objects.DomItem}
   */
  matrixCore.getDomItemFromElement = (elem, matrix) => matrixCore.getDomItemFromPoint(
    matrixCore.getPointFromElement(elem),
    matrix
  )

  /**
   * Either export all functions to be exported, or assign to the Window context
   */
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = matrixCore
    }
    exports = Object.assign(exports, matrixCore)
  }
}).call(this || window || {}) // Use the external context to assign this, which will be Window if rendered via browser
