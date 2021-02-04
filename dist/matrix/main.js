'use strict'

require('core-js/modules/es.object.assign.js')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

var _all = _interopRequireDefault(require('./all'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Add matrix ability using JSON DOM components
 * @file
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module jDomMatrix
 */

/**
 * Store a reference to this scope which will be Window if rendered via browser
 */
var root = void 0 || window || global || {}
/**
 * Store reference to any pre-existing module of the same name
 * @type {module|*}
 */

var previousJDomMatrix = root.jDomMatrix || {}
/**
 * All methods exported from this module are encapsulated within jDomMatrix.
 * @typedef {module:jDomMatrix|module:jDomMatrixCore|module:jDomMatrixObjects} jDomMatrix
 */

var jDomMatrix = {}
root.jDomMatrix = jDomMatrix
/**
 * Return a reference to this library while preserving the original same-named library
 * @function
 * @returns {module:jDomMatrix~jDomMatrix}
 */

var noConflict = function noConflict () {
  root.jDomMatrix = previousJDomMatrix
  return jDomMatrix
}

jDomMatrix.noConflict = noConflict

var _default = Object.assign(jDomMatrix, _all.default)

exports.default = _default
