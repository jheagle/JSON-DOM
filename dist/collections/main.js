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
 * All of the JSON DOM system functions for creating JSON components.
 * @file
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module collections
 */

/**
 * Store a reference to this scope which will be Window if rendered via browser
 */
var root = void 0 || window || global || {}
/**
 * Store reference to any pre-existing module of the same name
 * @type {module|*}
 */

var previousCollections = root.collections || {}
/**
 * All methods exported from this module are encapsulated within collections.
 * @typedef {module:collections|module:collections|module:jDom|module:pseudoDom|module:matrix} collections
 */

var collections = {}
root.collections = collections
/**
 * Return a reference to this library while preserving the original same-named library
 * @function
 * @returns {module:collections~collections}
 */

var noConflict = function noConflict () {
  root.collections = previousCollections
  return collections
}

collections.noConflict = noConflict

var _default = Object.assign(collections, _all.default)

exports.default = _default
