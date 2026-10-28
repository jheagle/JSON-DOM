import type { DomItem } from '../../domItem/types';
/**
 * Set all the listeners for this DOMItem to be inactive.
 * @param item - The DomItem which will have its eventListeners updated.
 */
declare const deactivateListeners: (item: DomItem) => DomItem;
export default deactivateListeners;
