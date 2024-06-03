'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _functions = _interopRequireDefault(require('./source/functions.js'))
var _objects = _interopRequireDefault(require('./source/objects.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * All of the JSON DOM system functions for creating JSON components.
 * @file
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module jsonDom
 */

const jsonDom = Object.assign({}, _functions.default, _objects.default)
var _default = exports.default = jsonDom
const root = void 0 || typeof window !== 'undefined' ? window : {}
root.jsonDom = jsonDom
