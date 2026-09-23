'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
const _createDomItem = _interopRequireDefault(require('./createDomItem.js'))
const _onBodyLoad = _interopRequireDefault(require('si-funciona/dist/helpers/functions/onBodyLoad'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
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
  const children = [(0, _createDomItem.default)({
    nodeName: 'head',
    attributes: {},
    element: head,
    children: []
  }), (0, _createDomItem.default)({
    nodeName: 'body',
    attributes: {},
    element: body,
    children: []
  })]
  if (!head || !body) {
    (0, _onBodyLoad.default)(() => {
      if (children[1].element === null) {
        children[0].element = document.head
        children[1].element = document.body
      }
      return children
    })
  }
  return children
}
const _default = exports.default = initChildren
