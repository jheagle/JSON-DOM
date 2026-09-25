import 'core-js/stable';
import type { DomItem } from '../types';
/**
 * Reverse of appendHtml, remove a DomItem and have the associated element removed.
 * @param parent - The parent of the items
 * @param child - The DomItem with HTMLElement to be removed
 */
declare const removeChild: (parent: DomItem, child: DomItem) => DomItem[];
export default removeChild;
