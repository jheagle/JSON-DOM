import 'core-js/stable';
import type { DomItem } from '../domItem/types';
/**
 * Update a single objects.DomItem element with the provided attributes / style / elementProperties
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} config - The DomItem having config changes to be applied to its
 * element
 * @returns {DomItem}
 */
declare const updateDomItem: (config: DomItem) => DomItem;
export default updateDomItem;
