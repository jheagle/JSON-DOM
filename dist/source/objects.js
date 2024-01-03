'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _createChangeList = _interopRequireDefault(require('./objects/createChangeList.js'))
var _createDomItem = _interopRequireDefault(require('./objects/createDomItem.js'))
var _createEventProxy = _interopRequireDefault(require('./objects/createEventProxy.js'))
var _createEventResponder = _interopRequireDefault(require('./objects/createEventResponder.js'))
var _documentDomItem = _interopRequireDefault(require('./objects/documentDomItem.js'))
var _documentItem = _interopRequireDefault(require('./objects/documentItem.js'))
var _initChildren = _interopRequireDefault(require('./objects/initChildren.js'))
var _initRoot = _interopRequireDefault(require('./objects/initRoot.js'))
var _options = _interopRequireDefault(require('./objects/options.js'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * @file Core objects for representing the DOM in JSON.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module domObjects
 * @memberOf module:jsonDom
 */
var _default = exports.default = {
  createChangeList: _createChangeList.default,
  createDomItem: _createDomItem.default,
  createEventProxy: _createEventProxy.default,
  createEventResponder: _createEventResponder.default,
  documentDomItem: _documentDomItem.default,
  documentItem: _documentItem.default,
  initChildren: _initChildren.default,
  initRoot: _initRoot.default,
  options: _options.default
}
