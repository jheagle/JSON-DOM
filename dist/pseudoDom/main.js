'use strict'

require('core-js/modules/es.object.assign.js')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

var _all = _interopRequireDefault(require('./all'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * @file All of the Pseudo Dom Helper Objects functions for simulating parts of the DOM when running scripts in NodeJs.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
*/

/**
   * Store a reference to this scope which will be Window if rendered via browser
   */
var root = void 0 || window || global || {}
/**
   * Store reference to any pre-existing module of the same name
   * @type {module|*}
   */

var previousPseudoDom = root.pseudoDom || {}
/**
   * All methods exported from this module are encapsulated within pseudoDom.
   * @author Joshua Heagle <joshuaheagle@gmail.com>
   * @typedef {Object} pseudoDom
   * @module pseudoDom/objects
   */

var pseudoDom = {}
root.pseudoDom = pseudoDom
/**
   * Return a reference to this library while preserving the original same-named library
   * @function noConflict
   * @returns {pseudoDom}
   */

pseudoDom.noConflict = function () {
  root.pseudoDom = previousPseudoDom
  return pseudoDom
}

var _default = Object.assign(pseudoDom, _all.default)

exports.default = _default
