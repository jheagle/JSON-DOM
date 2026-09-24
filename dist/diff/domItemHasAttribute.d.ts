import 'core-js/stable';
import type { DomItem } from '../domItem/types';
import type { AttributeComparison } from './types';
/**
 * Check if the provided DomItem has the provided attributes.
 * Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} domItem - Receive the DomItem to be assessed
 * @param {string} key - The attribute name to search for
 * @param {string|Object} attr - The expected value of the attribute to compare against
 * @returns {int|Object.<string, number>}
 */
declare const domItemHasAttribute: (domItem: DomItem, key: string, attr: unknown) => AttributeComparison;
export default domItemHasAttribute;
