import 'core-js/stable';
import type { AttributeComparison } from './types';
/**
 * Check if the provided Element has the provided attributes.
 * Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.
 * @function
 * @memberOf module:domGeneral
 * @param {HTMLElement} element - Receive the element to be assessed
 * @param {string} key - The attribute name to search for
 * @param {string|Object.<string, string>} attr - The expected value of the attribute to compare against
 * @returns {int|Object.<string, number>}
 */
declare const elementHasAttribute: (element: HTMLElement | null | undefined, key: string, attr: unknown) => AttributeComparison;
export default elementHasAttribute;
