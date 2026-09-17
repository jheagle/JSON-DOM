import 'core-js/stable'
import createDomItem from './createDomItem.js'
import mergeObjects from 'si-funciona/dist/helpers/objects/mergeObjects'
import commonEvents from '../../events/objects/commonEvents.js'

/**
 * DomItemRoot defines the structure for a single element in the Dom
 * @typedef {DomItem} DomItemRoot
 * @memberOf module:domGeneral
 * @property {string} [nodeName='#document'] - This is set to the string html referring to the HTML element of the same name
 * @property {null} [nodeValue] - Must be null
 * @property {Object} attributes - Empty object as attributes placeholder
 * @property {HTMLDocument} element - A reference to the entire Document
 * @property {Object.<string, listenerFunction>} eventActions - Registered event actions (listenerFunctions), keyed by name
 * @property {Object.<module:domEvents~EventName, module:domEvents~EventListeners>} eventListeners - all registered listeners stored as listener name and function pairs
 * @property {Array.<DomItemHead|DomItemBody>} children - Two references: for head and body
 * @property {DomItemHead} head - A specific reference to head item
 * @property {DomItemBody} body - A specific reference to body item
 */

/**
 * Initiate the Root for DocumentItem. This is primary a helper for {@link documentDomItem}.
 * @function
 * @memberOf module:domGeneral
 * @param {Array.<DomItemHead|DomItemBody>} children - Provide an array of Head and Body (usually via {@link initChildren})
 * @param {Object.<string, listenerFunction>} listeners - An object of all event listeners to be registered in the Dom
 * @returns {DomItemRoot|DomItem}
 */
const initRoot = (children = [{}, {}], listeners = {}) => createDomItem({
  nodeName: '#document',
  nodeValue: null,
  attributes: {},
  element: document,
  eventActions: mergeObjects(commonEvents(), listeners),
  eventListeners: {},
  children,
  parentItem: {},
  head: children[0],
  body: children[1]
})

export default initRoot
