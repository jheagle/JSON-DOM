'use strict'

function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

require('core-js/modules/es.weak-map.js')

require('core-js/modules/esnext.weak-map.delete-all.js')

require('core-js/modules/es.object.to-string.js')

require('core-js/modules/es.string.iterator.js')

require('core-js/modules/es.array.iterator.js')

require('core-js/modules/web.dom-collections.iterator.js')

require('core-js/modules/es.object.get-own-property-descriptor.js')

require('core-js/modules/es.symbol.js')

require('core-js/modules/es.symbol.description.js')

require('core-js/modules/es.symbol.iterator.js')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/modules/es.object.assign.js')

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
var _default = Object.assign(Linker, LinkedList, TreeLinker, LinkedTreeList)

exports.default = _default
