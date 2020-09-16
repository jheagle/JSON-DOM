'use strict'

require('core-js/modules/es.object.assign')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

var _all = _interopRequireDefault(require('./all'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * All of the JSON DOM system functions for creating JSON components.
 * @file
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module jDom
 */

/**
 * Store a reference to this scope which will be Window if rendered via browser
 */
var root = void 0 || window || global || {}
/**
 * Store reference to any pre-existing module of the same name
 * @type {module|*}
 */

var previousJDom = root.jDom || {}
/**
 * All methods exported from this module are encapsulated within jDom.
 * @typedef {module:jDom|module:jDomCore|module:jDomObjects} jDom
 */

var jDom = {}
root.jDom = jDom
/**
 * Return a reference to this library while preserving the original same-named library
 * @function
 * @returns {module:jDom~jDom}
 */

var noConflict = function noConflict () {
  root.jDom = previousJDom
  return jDom
}

jDom.noConflict = noConflict

var _default = Object.assign(jDom, _all.default)

exports.default = _default
