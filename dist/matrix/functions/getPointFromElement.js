'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/modules/es.array.index-of.js')

require('core-js/modules/es.array.from.js')

require('core-js/modules/es.string.iterator.js')

require('core-js/stable')

const _point = _interopRequireDefault(require('../objects/point'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Retrieve the point associated with the provided element.
 * @function getPointFromElement
 * @param {Node|HTMLElement} elem - Provide an element associated with
 * a point.
 * @returns {module:matrixObjects~Point}
 */
const getPointFromElement = function getPointFromElement (elem) {
  return (0, _point.default)(Array.from(elem.parentNode.childNodes).indexOf(elem), Array.from(elem.parentNode.parentNode.childNodes).indexOf(elem.parentNode), Array.from(elem.parentNode.parentNode.parentNode.childNodes).indexOf(elem.parentNode.parentNode))
}

const _default = getPointFromElement
exports.default = _default
