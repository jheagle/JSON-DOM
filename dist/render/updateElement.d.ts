import 'core-js/stable';
import type { DomItem } from '../domItem/types';
/**
 * Update a single objects.DomItem element with the provided attributes / style / elementProperties.
 *
 * Safe to call standalone (not just through {@link updateElements}/{@link renderHtml}): whenever this ends up
 * (re)generating domItem.element - because it had none yet, or because nodeName changed - it also re-attaches
 * domItem's direct children onto that element via {@link updateChildNodes}, so a bare call never orphans an
 * existing child subtree. The plain attribute/style patch path below doesn't touch domItem.element itself, so it
 * doesn't need to.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} domItem - The DomItem having domItem changes to be applied to its
 * element
 * @returns {DomItem}
 */
declare const updateElement: (domItem: DomItem) => DomItem;
export default updateElement;
