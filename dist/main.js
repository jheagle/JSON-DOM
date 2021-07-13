'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/modules/es.object.assign.js')

require('core-js/stable')

const _all = _interopRequireDefault(require('./collections/all'))

const _all2 = _interopRequireDefault(require('./dom/all'))

const _all3 = _interopRequireDefault(require('./pseudoDom/all'))

const _all4 = _interopRequireDefault(require('./matrix/all'))

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
const root = void 0 || window || global || {}
/**
   * Store reference to any pre-existing module of the same name
   * @type {module|*}
   */

const previousJsonDom = root.jsonDom || {}
/**
   * All methods exported from this module are encapsulated within jsonDom.
   * @typedef {module:jsonDom|module:collections|module:jDom|module:pseudoDom|module:matrix} jsonDom
   */

const jsonDom = {}
root.jsonDom = jsonDom
/**
   * Return a reference to this library while preserving the original same-named library
   * @function
   * @returns {module:jsonDom~jsonDom}
   */

const noConflict = function noConflict () {
  root.jsonDom = previousJsonDom
  return jsonDom
}

jsonDom.noConflict = noConflict

const _default = root.jsonDom = Object.assign(jsonDom, _all.default, _all2.default, _all3.default, _all4.default)

exports.default = _default
