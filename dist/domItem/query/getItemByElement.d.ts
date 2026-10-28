import type { DomItem } from '../types';
/**
 * Find the item (item itself, or one of its descendants) whose element is the one given, or null when none match.
 * Only searches item and its own subtree: an event's target is always the item a listener is attached to, or one of
 * its descendants (that is what bubbling means), so there is never a reason to search outside it.
 * WARNING: This is a recursive function.
 * @param item - The DomItem (and its subtree) to search.
 * @param element - The real element to match against each item's element.
 */
declare const getItemByElement: (item: DomItem, element: EventTarget | null) => DomItem | null;
export default getItemByElement;
