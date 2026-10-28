import type { ChildTest } from '../types';
/**
 * Retrieve the {@link module:domGeneral~testChildItem} function by providing an attribute and value to check.
 * @param attr - Provide the attribute name to be searched
 * @param value - The attribute value to be compared
 */
declare const getChildTest: (attr: string, value: unknown) => ChildTest;
export default getChildTest;
