import 'core-js/stable';
import type { DomItem, DomItemConfig } from '../types';
/**
 * Ensure all basic properties of the DomItem are present.
 * @function
 * @memberOf module:domGeneral
 * @param {Object} item - The object that will be formatted as a DomItem.
 * @returns {DomItem}
 */
declare const addDomItemProperties: <Custom extends object = {}>(item: DomItemConfig<Custom>) => DomItem<Custom>;
export default addDomItemProperties;
