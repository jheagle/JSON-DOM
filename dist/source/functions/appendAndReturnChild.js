'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

const _documentItem = _interopRequireDefault(require('../objects/documentItem'))

const _retrieveParentItem = _interopRequireDefault(require('./retrieveParentItem'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Provide a DomItem to be appended to a parent item, return the DomItem.
 * @function
 * @memberOf module:domFunctions
 * @param {module:domObjects~DomItem} child - A DomItem to be appended
 * @param {module:domObjects~DomItem} parent - A parent item to have a new child appended
 * @returns {module:domObjects~DomItem}
 */
const appendAndReturnChild = function appendAndReturnChild (child) {
  const parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _documentItem.default.body;
  (0, _retrieveParentItem.default)(parent).element.appendChild(child.element)
  return child
}

const _default = appendAndReturnChild
exports.default = _default
