'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

const _createDomItem = _interopRequireDefault(require('./createDomItem'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * DomItemHead defines the structure for a single element in the Dom
 * @typedef {DomItem} DomItemHead
 * @property {string} [tagName=head] - This is set to the string head referring to the HTML element of the same name
 * @property {Object.<string, string|Object>} attributes - All potential HTML element attributes can be defined here
 * @property {HTMLHeadElement} element - A reference to the HTML head element
 * @property {Array.<DomItem>} children - A reference to an array of child objects
 */

/**
 * DomItemBody defines the structure for a single element in the Dom
 * @typedef {DomItem} DomItemBody
 * @property {string} [tagName=body] - This is set to the string body referring to the HTML element of the same name
 * @property {Object.<string, string|Object>} attributes - All potential HTML element attributes can be defined here
 * @property {HTMLBodyElement} element - A reference to the HTML body element
 * @property {Array.<DomItem>} children - A reference to an array of child objects
 */

/**
 * Initiate the children of Root / DocumentItem. This is a helper for {@link documentDomItem}.
 * @function
 * @memberOf module:domObjects
 * @returns {Array.<DomItemHead|DomItemBody>}
 */
const initChildren = function initChildren () {
  const head = document.head
  const body = document.body
  const children = [(0, _createDomItem.default)({
    tagName: 'head',
    attributes: {},
    element: head,
    children: []
  }), (0, _createDomItem.default)({
    tagName: 'body',
    attributes: {},
    element: body,
    children: []
  })]

  if (!head || !body) {
    var observer = new MutationObserver(function () {
      if (children[1].element !== null) {
        observer.disconnect()
        return
      }

      if (document.body) {
        children[0].element = document.head
        children[1].element = document.body
        observer.disconnect()
      }
    })
    observer.observe(document.documentElement, {
      childList: true
    })
  }

  return children
}

const _default = initChildren
exports.default = _default
