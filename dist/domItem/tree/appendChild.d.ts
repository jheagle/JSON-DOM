import 'core-js/stable';
import type { DomItem } from '../types';
/**
 * Append a child to the end of given parent's children list.
 * @param parent - The parent that will receive the child.
 * @param child - The new child to attach to the parent.
 */
declare const appendChild: (parent: DomItem, child: DomItem) => DomItem;
export default appendChild;
