import type { DomItem } from '../domItem/types';
import type { ChangeList } from './types';
/**
 * Given a domGeneral.DomItem as domItem, this function will return the changes to be applied
 * to the stored element property.
 * @param domItem - The DomItem having changes to be applied to its element
 */
declare const domItemChanges: (domItem: DomItem) => ChangeList;
export default domItemChanges;
