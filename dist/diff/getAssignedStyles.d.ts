import type { StyleValues } from '../domItem/types';
/**
 * Get all the styles which have been assigned to this element. Assigned styles are indicated as numeric-key
 * properties with a value indicating the string-key property which has been assigned. The string-key properties
 * have the assigned values.
 * @param elementStyles
 */
declare const getAssignedStyles: (elementStyles: CSSStyleDeclaration | StyleValues) => StyleValues;
export default getAssignedStyles;
