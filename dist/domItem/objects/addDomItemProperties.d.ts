import 'core-js/stable';
import type { DomItem, DomItemConfig } from '../types';
/**
 * Ensure all basic properties of the DomItem are present.
 * @param item - The object that will be formatted as a DomItem.
 */
declare const addDomItemProperties: (item: DomItemConfig) => DomItem;
export default addDomItemProperties;
