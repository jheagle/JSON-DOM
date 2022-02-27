'use strict'

require('core-js/modules/es.object.define-property.js')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

var _documentItem = _interopRequireDefault(require('../objects/documentItem.js'))

var _retrieveParentItem = _interopRequireDefault(require('./retrieveParentItem.js'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Provide a DomItem to be appended to a parent item, return the DomItem.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} child - A DomItem to be appended
 * @param {DomItem} parent - A parent item to have a new child appended
 * @returns {DomItem}
 */
var appendAndReturnChild = function appendAndReturnChild (child) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _documentItem.default.body;
  (0, _retrieveParentItem.default)(parent).element.appendChild(child.element)
  return child
}

var _default = appendAndReturnChild
exports.default = _default
