'use strict'

function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

require('core-js/modules/es.object.assign')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

var Linker = _interopRequireWildcard(require('./classes/Linker'))

var LinkedList = _interopRequireWildcard(require('./classes/LinkedList'))

var TreeLinker = _interopRequireWildcard(require('./classes/TreeLinker'))

var LinkedTreeList = _interopRequireWildcard(require('./classes/LinkedTreeList'))

function _getRequireWildcardCache () { if (typeof WeakMap !== 'function') return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache () { return cache }; return cache }

function _interopRequireWildcard (obj) { if (obj && obj.__esModule) { return obj } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') { return { default: obj } } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj) } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc) } else { newObj[key] = obj[key] } } } newObj.default = obj; if (cache) { cache.set(obj, newObj) } return newObj }

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
var root = void 0 || {}
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

var _default = Object.assign(collections, Linker, LinkedList, TreeLinker, LinkedTreeList)

exports.default = _default
