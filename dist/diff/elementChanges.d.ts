import type { DomItem } from '../domItem/types';
import type { ChangeList } from './types';
/**
 * Given a domGeneral.DomItem as config, this function will return the changes from the element
 * to be applied to the domItem.
 * @param domItem - The DomItem having the element which changes to be applied to the config
 * element
 */
declare const elementChanges: (domItem: DomItem) => ChangeList;
export default elementChanges;
