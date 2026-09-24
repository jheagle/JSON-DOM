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
const createDomItem_1 = __importDefault(require('./createDomItem'))
const onBodyLoad_1 = __importDefault(require('si-funciona/dist/helpers/functions/onBodyLoad'))
/**
 * DomItemHead defines the structure for a single element in the Dom
 * @typedef {DomItem} DomItemHead
 * @property {string} [nodeName=head] - This is set to the string head referring to the HTML element of the same name
 * @property {Object.<string, string|Object>} attributes - All potential HTML element attributes can be defined here
 * @property {HTMLHeadElement} element - A reference to the HTML head element
 * @property {Array.<DomItem>} children - A reference to an array of child objects
 */
/**
 * DomItemBody defines the structure for a single element in the Dom
 * @typedef {DomItem} DomItemBody
 * @property {string} [nodeName=body] - This is set to the string body referring to the HTML element of the same name
 * @property {Object.<string, string|Object>} attributes - All potential HTML element attributes can be defined here
 * @property {HTMLBodyElement} element - A reference to the HTML body element
 * @property {Array.<DomItem>} children - A reference to an array of child objects
 */
/**
 * Initiate the children of Root / DocumentItem. This is a helper for {@link documentDomItem}.
 * @function
 * @memberOf module:domGeneral
 * @returns {Array.<DomItemHead|DomItemBody>}
 */
const initChildren = () => {
  const head = document.head
  const body = document.body
  const children = [(0, createDomItem_1.default)({
    nodeName: 'head',
    attributes: {},
    element: head,
    children: []
  }), (0, createDomItem_1.default)({
    nodeName: 'body',
    attributes: {},
    element: body,
    children: []
  })]
  if (!head || !body) {
    (0, onBodyLoad_1.default)(() => {
      if (children[1].element === null) {
        children[0].element = document.head
        children[1].element = document.body
      }
      return children
    })
  }
  return children
}
exports.default = initChildren
