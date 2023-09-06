'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _siFunciona = _interopRequireDefault(require('si-funciona'))
var _updateElement = _interopRequireDefault(require('./updateElement.js'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * Create a new DOM Node based on name and data.
 * @param {string} nodeName
 * @param {string|null} data
 * @returns {Text|Comment|HTMLElement}
 */
const makeElementType = function (nodeName) {
  const data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null
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
const generateElement = domItem => {
  domItem.element = makeElementType(domItem.nodeName, domItem.nodeValue)
  return (0, _updateElement.default)(domItem)
}
var _default = generateElement
exports.default = _default
