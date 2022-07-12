'use strict'

require('core-js/modules/es.object.define-property.js')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

var _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

var _updateElement = _interopRequireDefault(require('./updateElement.js'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

var makeElementType = function makeElementType (nodeName) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null

  switch (nodeName) {
    case '#text':
      return document.createTextNode(data)

    case '#comment':
      return document.createComment(data)

    default:
      return document.createElement(nodeName)
  }
}
/**
 * Create an HTML element based on the provided attributes and return the element as an Object.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} domItem - The DomItem requiring matching HTML element property
 * @return {DomItem}
 */

var generateElement = function generateElement (domItem) {
  return (0, _updateElement.default)(_functionalHelpers.default.setValue('element', makeElementType(domItem.nodeName, domItem.nodeValue), domItem))
}

var _default = generateElement
exports.default = _default
