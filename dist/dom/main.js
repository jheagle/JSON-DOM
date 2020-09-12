'use strict'

function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

require('core-js/modules/es.object.assign')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

var jDomCore = _interopRequireWildcard(require('./source/functions'))

var jDomObjects = _interopRequireWildcard(require('./source/objects'))

function _getRequireWildcardCache () { if (typeof WeakMap !== 'function') return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache () { return cache }; return cache }

function _interopRequireWildcard (obj) { if (obj && obj.__esModule) { return obj } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') { return { default: obj } } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj) } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc) } else { newObj[key] = obj[key] } } } newObj.default = obj; if (cache) { cache.set(obj, newObj) } return newObj }

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
var root = void 0 || {}
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

var _default = Object.assign(jDom, jDomCore, jDomObjects)

exports.default = _default
