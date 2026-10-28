import type { DomItem, DomItemConfig } from '../types';
/**
 * This is the basic Object for representing a node in json-dom's Virtual DOM (DomItem tree): a generic item (see
 * {@link createCoreItem}) with the render trait. All incoming attributes will be merged to the specified format, and the
 * given object is completed and returned (it is not copied). Children which are plain objects are completed the same way,
 * all the way down; a child which already has a has map is already an item, and is left alone.
 * @param item - DomItem-like object to be formatted as DomItem
 */
declare const createDomItem: (item?: DomItemConfig) => DomItem;
export default createDomItem;
