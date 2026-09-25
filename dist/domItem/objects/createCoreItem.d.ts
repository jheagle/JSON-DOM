import 'core-js/stable';
import type { CoreItem, DomItemConfig } from '../types';
/**
 * CoreItem is the generic item of json-dom's Virtual DOM: one node of a tree with its attributes, its children, the
 * listeners it wants and a has map of the traits it carries. It knows nothing about a real element: that is what the
 * render trait adds (see {@link createDomItem}). A back-end item which is never rendered is a CoreItem.
 * @typedef {Object} CoreItem
 * @memberOf module:domGeneral
 * @property {Object.<string, string|Object>} attributes - All potential HTML element attributes can be defined here
 * (including the defaulted style object, and the native custom element name in `is`)
 * @property {Array.<CoreItem>} children - A reference to an array of child objects
 * @property {Object.<module:domEvents~EventName, module:domEvents~EventListeners>} eventListeners - An object holding all events to be registered for the
 * associated element
 * @property {Object.<string, true>} has - The traits this item has, by name
 * @property {Array} jsonExclusions - array of properties to exclude
 * @property {string} nodeName - This is any document node name
 * @property {?string} nodeValue - Is a string of text, null for HTML elements
 * @property {CoreItem|Object|null} parentItem - A reference to the parent of this object
 * @property {Function} appendChild - Attach a child to this item
 * @property {Function} removeChild - Detach a child from this item
 */
/**
 * Create the generic item, without the render trait. Every property which is not given gets its default. The given
 * object is completed and returned (it is not copied).
 * @function
 * @memberOf module:domGeneral
 * @param {Object} [item={}] - Item-like object to be formatted as a CoreItem
 * @returns {CoreItem}
 */
declare const createCoreItem: (item?: DomItemConfig) => CoreItem;
export default createCoreItem;
