'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _index = _interopRequireDefault(require('./events/index.js'))
const _index2 = _interopRequireDefault(require('./general/index.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
/**
 * All of the JSON DOM system functions for building and syncing a Virtual DOM (DomItem tree) to the real HTML DOM.
 * @file
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module jsonDom
 */

const jsonDom = Object.assign({}, _index.default, _index2.default)
const _default = exports.default = jsonDom
const root = void 0 || typeof window !== 'undefined' ? window : {}
root.jsonDom = jsonDom
