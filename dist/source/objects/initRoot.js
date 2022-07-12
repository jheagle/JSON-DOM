'use strict'

require('core-js/modules/es.object.define-property.js')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

var _createDomItem = _interopRequireDefault(require('./createDomItem.js'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * DomItemRoot defines the structure for a single element in the Dom
 * @typedef {DomItem} DomItemRoot
 * @memberOf module:domObjects
 * @property {string} [nodeName='#document'] - This is set to the string html referring to the HTML element of the same name
 * @property {null} [nodeValue] - Must be null
 * @property {Object} attributes - Empty object as attributes placeholder
 * @property {HTMLDocument} element - A reference to the entire Document
 * @property {Object.<string, listenerFunction>} eventListeners - all registered
 * listeners stored as listener name and function pairs
 * @property {
 * Array.<DomItemHead|DomItemBody>
 *   } children - Two references: for head and body
 * @property {DomItemHead} head - A specific reference to head item
 * @property {DomItemBody} body - A specific reference to body item
 */

/**
 * Initiate the Root for DocumentItem. This is primary a helper for {@link documentDomItem}.
 * @function
 * @memberOf module:domObjects
 * @param {
 * Array.<DomItemHead|DomItemBody>
 *   } children - Provide an array of Head and Body (usually via {@link initChildren})
 * @param {Object.<string, listenerFunction>} listeners - An object of all event
 * listeners to be registered in the Dom
 * @returns {DomItemRoot|DomItem}
 */
var initRoot = function initRoot (children) {
  var listeners = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
  return (0, _createDomItem.default)({
    nodeName: '#document',
    nodeValue: null,
    attributes: {},
    element: document,
    eventListeners: listeners,
    children: children,
    head: children[0],
    body: children[1]
  })
}

var _default = initRoot
exports.default = _default
