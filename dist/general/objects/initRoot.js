'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _createDomItem = _interopRequireDefault(require('./createDomItem.js'))
var _mergeObjects = _interopRequireDefault(require('si-funciona/dist/helpers/objects/mergeObjects'))
var _commonEvents = _interopRequireDefault(require('../../events/objects/commonEvents.js'))
function _interopRequireDefault (e) { return e && e.__esModule ? e : { default: e } }
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
const initRoot = function () {
  const children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [{}, {}]
  const listeners = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
  return (0, _createDomItem.default)({
    nodeName: '#document',
    nodeValue: null,
    attributes: {},
    element: document,
    eventListeners: (0, _mergeObjects.default)((0, _commonEvents.default)(), listeners),
    children: children,
    parentItem: {},
    head: children[0],
    body: children[1]
  })
}
var _default = exports.default = initRoot
