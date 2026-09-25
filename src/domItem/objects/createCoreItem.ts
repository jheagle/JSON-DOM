import 'core-js/stable'
import siFunciona from 'si-funciona'
import appendChild from '../tree/appendChild'
import removeChild from '../tree/removeChild'
import type { CoreItem, DomItemConfig } from '../types'

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
 * The traits an item has: a map of trait name to true. What each trait puts on an item is described by TraitRegistry.
 * @typedef {Object.<string, true>} HasMap
 * @memberOf module:domGeneral
 */

/**
 * The traits an item can have, and the data each one puts on it. json-dom has one, render (see {@link RenderProperties});
 * other libraries add theirs by declaration merging, prefixed by their package (`matrix.row`), and describe them at
 * runtime with {@link defineTrait}. In TypeScript, `hasTrait(item, 'matrix.row')` then narrows the item to what the
 * trait adds.
 * @typedef {Object.<string, Object>} TraitRegistry
 * @memberOf module:domGeneral
 */

/**
 * What can be given to build an item: any of its properties (the children may be plain objects as well, they are
 * completed too), plus any custom data. Whatever is left out gets its default.
 * @typedef {Object} DomItemConfig
 * @memberOf module:domGeneral
 * @property {Array.<DomItemConfig>} [children] - Plain children are completed, items are left alone
 * @property {(Object|HTMLElement|null)} [element] - An existing element to keep
 */

/**
 * Create the generic item, without the render trait. Every property which is not given gets its default. The given
 * object is completed and returned (it is not copied). Children which are plain objects are completed the same way, all
 * the way down; a child which already has a has map is taken to be complete and is left alone.
 * @function
 * @memberOf module:domGeneral
 * @param {Object} [item={}] - Item-like object to be formatted as a CoreItem
 * @returns {CoreItem}
 */
const createCoreItem = (item: DomItemConfig = {}): CoreItem => {
  if (Array.isArray(item.children)) {
    item.children.forEach((child: DomItemConfig) => {
      if (typeof child === 'object' && child !== null && !child.has) {
        createCoreItem(child)
      }
    })
  }
  const newItem = siFunciona.reduceObject(
    {
      attributes: {},
      children: [],
      eventListeners: {},
      has: {},
      jsonExclusions: [],
      nodeName: 'div',
      nodeValue: null,
      parentItem: null
    },
    (coreItem: Record<string, unknown>, defaultValue: unknown, prop: string) => {
      if (!(prop in coreItem)) {
        coreItem[prop] = defaultValue
        return coreItem
      }
      return coreItem
    },
    item
  ) as CoreItem
  newItem.appendChild = siFunciona.curry(appendChild)(newItem)
  newItem.removeChild = siFunciona.curry(removeChild)(newItem)
  return newItem
}

export default createCoreItem
