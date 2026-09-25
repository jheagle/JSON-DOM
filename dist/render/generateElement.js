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
const makeElementType = (nodeName, data = null, is) => {
  switch (nodeName) {
    case '#text':
      return document.createTextNode(data)
    case '#comment':
      return document.createComment(data)
    default:
      // A customized built-in element (<button is="fancy-button">) has to be given its name when it is created
      return is
        ? document.createElement(nodeName, {
          is
        })
        : document.createElement(nodeName)
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
  domItem.element = makeElementType(domItem.nodeName, domItem.nodeValue, typeof domItem.attributes.is === 'string' ? domItem.attributes.is : undefined)
  return (0, updateElement_1.default)(domItem)
}
exports.default = generateElement
