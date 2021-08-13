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
 * @typedef {module:domObjects~DomItem} module:domObjects~DomItemHead
 * @property {string} [tagName=head] - This is set to the string head referring to the HTML element of the same name
 * @property {Object.<string, string|Object>} attributes - All potential HTML element attributes can be defined here
 * @property {HTMLHeadElement} element - A reference to the HTML head element
 * @property {Array.<module:domObjects~DomItem>} children - A reference to an array of child objects
 */

/**
 * DomItemBody defines the structure for a single element in the Dom
 * @typedef {module:domObjects~DomItem} module:domObjects~DomItemBody
 * @property {string} [tagName=body] - This is set to the string body referring to the HTML element of the same name
 * @property {Object.<string, string|Object>} attributes - All potential HTML element attributes can be defined here
 * @property {HTMLBodyElement} element - A reference to the HTML body element
 * @property {Array.<module:domObjects~DomItem>} children - A reference to an array of child objects
 */

/**
 * Initiate the children of Root / DocumentItem. This is a helper for {@link module:domObjects~documentDomItem}.
 * @function
 * @memberOf module:domObjects
 * @returns {Array.<module:domObjects~DomItemHead|module:domObjects~DomItemBody>}
 */
const initChildren = function initChildren () {
  return [(0, _createDomItem.default)({
    tagName: 'head',
    attributes: {},
    element: document.head,
    children: []
  }), (0, _createDomItem.default)({
    tagName: 'body',
    attributes: {},
    element: document.body,
    children: []
  })]
}

const _default = initChildren
exports.default = _default
