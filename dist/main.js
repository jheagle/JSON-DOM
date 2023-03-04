'use strict'

require('core-js/modules/es.object.define-property.js')
Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/es.object.assign.js')
require('core-js/stable')
var _functions = _interopRequireDefault(require('./source/functions.js'))
var _objects = _interopRequireDefault(require('./source/objects.js'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * All of the JSON DOM system functions for creating JSON components.
 * @file
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module jsonDom
 */

var jsonDom = Object.assign({}, _functions.default, _objects.default)
var _default = jsonDom
exports.default = _default
var root = void 0 || typeof window !== 'undefined' ? window : {}
root.jsonDom = jsonDom
