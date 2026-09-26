import 'core-js/stable';
import type { DomItem } from '../domItem/types';
import type { AttributeComparison } from './types';
/**
 * Check if the provided DomItem has the provided attributes.
 * Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.
 * @param domItem - Receive the DomItem to be assessed
 * @param key - The attribute name to search for
 * @param attr - The expected value of the attribute to compare against
 */
declare const domItemHasAttribute: (domItem: DomItem, key: string, attr: unknown) => AttributeComparison;
export default domItemHasAttribute;
