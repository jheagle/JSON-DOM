import type { DomItem } from '../domItem/types';
/**
 * Create an HTML element based on the provided attributes and return the element as an Object.
 * @param domItem - The DomItem requiring matching HTML element property
 */
declare const generateElement: (domItem: DomItem) => DomItem;
export default generateElement;
