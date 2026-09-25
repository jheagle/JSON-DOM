import 'core-js/stable'
import createCoreItem from './createCoreItem'
import withTrait from '../traits/withTrait'
import type { DomItem, DomItemConfig } from '../types'

/**
 * DomItem is a CoreItem with the render trait: a plain object representation of one HTML element, mirrored onto a real
 * element via {@link updateElement}/{@link renderHtml}. On top of the CoreItem properties it has the element and the
 * listeners which are attached to it.
 * @typedef {CoreItem} DomItem
 * @memberOf module:domGeneral
 * @property {Object.<module:domEvents~EventName, Object.<number, eventHandler>>} activeListeners - Generated property storing assigned
 * listeners.
 * @property {(Object|HTMLElement|null)} element - A reference to an existing HTML element will be stored here (default
 * null)
 */

/**
 * What the render trait puts on an item.
 * @typedef {Object} RenderProperties
 * @memberOf module:domGeneral
 * @property {(Object|HTMLElement|null)} element - The real node the item is mirrored onto, null while there is none
 * @property {Object.<module:domEvents~EventName, Object.<number, eventHandler>>} [activeListeners] - Generated: the
 * listeners which are attached to the element
 */

/**
 * A plain child is an object which is not an item yet (an item always has a has map).
 * @private
 */
const isPlainChild = (child: DomItemConfig): boolean => typeof child === 'object' && child !== null && !child.has

/**
 * This is the basic Object for representing a node in json-dom's Virtual DOM (DomItem tree): a generic item (see
 * {@link createCoreItem}) with the render trait. All incoming attributes will be merged to the specified format, and the
 * given object is completed and returned (it is not copied). Children which are plain objects are completed the same way,
 * all the way down; a child which already has a has map is already an item, and is left alone.
 * @function
 * @memberOf module:domGeneral
 * @param {Object} [item={}] - DomItem-like object to be formatted as DomItem
 * @returns {DomItem}
 */
const createDomItem = (item: DomItemConfig = {}): DomItem => {
  if (Array.isArray(item.children)) {
    item.children.forEach((child: DomItemConfig) => {
      if (isPlainChild(child)) {
        createDomItem(child)
      }
    })
  }
  return withTrait(
    createCoreItem(item),
    'render',
    { element: item.element ?? null }
  ) as DomItem
}

export default createDomItem
