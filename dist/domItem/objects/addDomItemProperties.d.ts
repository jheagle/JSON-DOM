import 'core-js/stable';
import type { DomItem, DomItemConfig } from '../types';
/**
 * Ensure all basic properties of the DomItem are present.
 * @function
 * @memberOf module:domGeneral
 * @param {Object} item - The object that will be formatted as a DomItem.
 * @returns {DomItem}
 */
declare const addDomItemProperties: (item: DomItemConfig) => DomItem;
export default addDomItemProperties;
