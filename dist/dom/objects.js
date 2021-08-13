'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

const _createDomItem = _interopRequireDefault(require('./objects/createDomItem'))

const _documentDomItem = _interopRequireDefault(require('./objects/documentDomItem'))

const _documentItem = _interopRequireDefault(require('./objects/documentItem'))

const _initChildren = _interopRequireDefault(require('./objects/initChildren'))

const _initRoot = _interopRequireDefault(require('./objects/initRoot'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * @file Core objects for representing the DOM in JSON.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module domObjects
 */
const _default = {
  createDomItem: _createDomItem.default,
  documentDomItem: _documentDomItem.default,
  documentItem: _documentItem.default,
  initChildren: _initChildren.default,
  initRoot: _initRoot.default
}
exports.default = _default
