import 'core-js/stable';
import type { DomItem } from '../domItem/types';
/**
 * Create an HTML element based on the provided attributes and return the element as an Object.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} domItem - The DomItem requiring matching HTML element property
 * @return {DomItem}
 */
declare const generateElement: (domItem: DomItem) => DomItem;
export default generateElement;
