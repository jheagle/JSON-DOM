'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

const _cube = _interopRequireDefault(require('../objects/cube'))

const _matrix = _interopRequireDefault(require('../objects/matrix'))

const _point = _interopRequireDefault(require('../objects/point'))

const _square = _interopRequireDefault(require('../objects/square'))

const _tile = _interopRequireDefault(require('../objects/tile'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * @file Core Matrix objects for representing DOM grid in JSON.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module matrixObjects
 */
const _default = {
  cube: _cube.default,
  matrix: _matrix.default,
  point: _point.default,
  square: _square.default,
  tile: _tile.default
}
exports.default = _default
