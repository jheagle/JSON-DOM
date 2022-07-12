'use strict'

require('core-js/modules/es.object.define-property.js')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

var _createDomItem = _interopRequireDefault(require('../objects/createDomItem'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * Generate a DomItem fom the provided HTML Node element.
 * @param {Node|HTMLElement} element
 * @returns {DomItem}
 */
var generateDomItem = function generateDomItem (element) {
  // TODO: Create DomItem from html element
  return (0, _createDomItem.default)({
    nodeName: element.nodeName,
    nodeValue: element.nodeValue,
    element: element
  })
}

var _default = generateDomItem
exports.default = _default
