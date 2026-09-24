import 'core-js/stable';
import type { ChildTest } from '../types';
/**
 * Retrieve the {@link module:domGeneral~testChildItem} function by providing an attribute and value to check.
 * @function
 * @memberOf module:domGeneral
 * @param {string} attr - Provide the attribute name to be searched
 * @param {*} value - The attribute value to be compared
 * @returns {module:domGeneral~testChildItem}
 */
declare const getChildTest: (attr: string, value: unknown) => ChildTest;
export default getChildTest;
