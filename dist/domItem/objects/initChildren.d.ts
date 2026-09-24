import 'core-js/stable';
import type { DomItem } from '../types';
/**
 * DomItemHead defines the structure for a single element in the Dom
 * @typedef {DomItem} DomItemHead
 * @property {string} [nodeName=head] - This is set to the string head referring to the HTML element of the same name
 * @property {Object.<string, string|Object>} attributes - All potential HTML element attributes can be defined here
 * @property {HTMLHeadElement} element - A reference to the HTML head element
 * @property {Array.<DomItem>} children - A reference to an array of child objects
 */
/**
 * DomItemBody defines the structure for a single element in the Dom
 * @typedef {DomItem} DomItemBody
 * @property {string} [nodeName=body] - This is set to the string body referring to the HTML element of the same name
 * @property {Object.<string, string|Object>} attributes - All potential HTML element attributes can be defined here
 * @property {HTMLBodyElement} element - A reference to the HTML body element
 * @property {Array.<DomItem>} children - A reference to an array of child objects
 */
/**
 * Initiate the children of Root / DocumentItem. This is a helper for {@link documentDomItem}.
 * @function
 * @memberOf module:domGeneral
 * @returns {Array.<DomItemHead|DomItemBody>}
 */
declare const initChildren: () => DomItem[];
export default initChildren;
