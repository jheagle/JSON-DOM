'use strict'

require('core-js/modules/es.object.assign')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

var _all = _interopRequireDefault(require('./collections/all'))

var _all2 = _interopRequireDefault(require('./dom/all'))

var _all3 = _interopRequireDefault(require('./pseudoDom/all'))

var _all4 = _interopRequireDefault(require('./matrix/all'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * All of the JSON DOM system functions for creating JSON components.
 * @file
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module jsonDom
 */

/**
   * Store a reference to this scope which will be Window if rendered via browser
   */
var root = void 0 || window || global || {}
/**
   * Store reference to any pre-existing module of the same name
   * @type {module|*}
   */

var previousJsonDom = root.jsonDom || {}
/**
   * All methods exported from this module are encapsulated within jsonDom.
   * @typedef {module:jsonDom|module:collections|module:jDom|module:pseudoDom|module:matrix} jsonDom
   */

var jsonDom = {}
root.jsonDom = jsonDom
/**
   * Return a reference to this library while preserving the original same-named library
   * @function
   * @returns {module:jsonDom~jsonDom}
   */

var noConflict = function noConflict () {
  root.jsonDom = previousJsonDom
  return jsonDom
}

jsonDom.noConflict = noConflict

var _default = root.jsonDom = Object.assign(jsonDom, _all.default, _all2.default, _all3.default, _all4.default)

exports.default = _default
