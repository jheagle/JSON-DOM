'use strict'

const __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule
    ? mod
    : {
        default: mod
      }
}
Object.defineProperty(exports, '__esModule', {
  value: true
})
require('core-js/stable')
const updateElement_1 = __importDefault(require('./updateElement'))
/**
 * Create a new DOM Node based on name and data.
 * @function
 * @memberOf module:domGeneral
 * @param {string} nodeName
 * @param {string|null} data
 * @returns {Text|Comment|HTMLElement}
 */
const makeElementType = (nodeName, data = null) => {
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
 * @memberOf module:domGeneral
 * @param {DomItem} domItem - The DomItem requiring matching HTML element property
 * @return {DomItem}
 */
const generateElement = domItem => {
  domItem.element = makeElementType(domItem.nodeName, domItem.nodeValue)
  return (0, updateElement_1.default)(domItem)
}
exports.default = generateElement
