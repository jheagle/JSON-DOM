import type { AttributeComparison } from './types';
/**
 * Check if the provided Element has the provided attributes.
 * Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.
 * @param element - Receive the element to be assessed
 * @param key - The attribute name to search for
 * @param attr - The expected value of the attribute to compare against
 */
declare const elementHasAttribute: (element: HTMLElement | null | undefined, key: string, attr: unknown) => AttributeComparison;
export default elementHasAttribute;
