'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

const _createDomItem = _interopRequireDefault(require('./createDomItem'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * DomItemRoot defines the structure for a single element in the Dom
 * @typedef {module:domObjects~DomItem} module:dom/objects~DomItemRoot
 * @memberOf module:domObjects
 * @property {string} [tagName=html] - This is set to the string html referring to the HTML element of the same name
 * @property {Object} attributes - Empty object as attributes placeholder
 * @property {HTMLDocument} element - A reference to the entire Document
 * @property {Object.<string, module:domObjects~listenerFunction>} eventListeners - all registered
 * listeners stored as listener name and function pairs
 * @property {
 * Array.<module:domObjects~DomItemHead|module:domObjects~DomItemBody>
 *   } children - Two references: for head and body
 * @property {module:domObjects~DomItemHead} head - A specific reference to head item
 * @property {module:domObjects~DomItemBody} body - A specific reference to body item
 */

/**
 * Initiate the Root for DocumentItem. This is primary a helper for {@link documentDomItem}.
 * @function
 * @memberOf module:domObjects
 * @param {
 * Array.<module:domObjects~DomItemHead|module:domObjects~DomItemBody>
 *   } children - Provide an array of Head and Body (usually via {@link initChildren})
 * @param {Object.<string, module:domObjects~listenerFunction>} listeners - An object of all event
 * listeners to be registered in the Dom
 * @returns {module:domObjects~DomItemRoot|module:domObjects~DomItem}
 */
const initRoot = function initRoot (children) {
  const listeners = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}
  return (0, _createDomItem.default)({
    tagName: 'html',
    attributes: {},
    element: document,
    eventListeners: listeners,
    children: children,
    head: children[0],
    body: children[1]
  })
}

const _default = initRoot
exports.default = _default
