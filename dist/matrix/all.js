'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

const _functions = _interopRequireDefault(require('./functions'))

const _objects = _interopRequireDefault(require('./objects'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Add matrix ability using JSON DOM components
 * @file
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module jDomMatrix
 */
const _default = {
  matrixFunctions: _functions.default,
  matrixObjects: _objects.default
}
exports.default = _default
