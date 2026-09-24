import 'core-js/stable';
import type { DomItem } from '../../domItem/types';
/**
 * Set all the listeners for this DOMItem to be inactive.
 * @function
 * @memberOf module:domEvents
 * @param {DomItem} item - The DomItem which will have its eventListeners updated.
 * @returns {DomItem}
 */
declare const deactivateListeners: (item: DomItem) => DomItem;
export default deactivateListeners;
