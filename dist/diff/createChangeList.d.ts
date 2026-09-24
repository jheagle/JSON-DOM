import 'core-js/stable';
import type { ChangeList } from './types';
/**
 * Represent changes / a diff of an object, including removed, added, and changed properties.
 * @typedef {Object.<string, DotNotatedObject>} ChangeList
 * @memberOf module:domGeneral
 * @property {DotNotatedObject} removed
 * @property {DotNotatedObject} added
 * @property {appendChanges} appendChanges
 */
/**
 * Create the change list template.
 * @function
 * @memberOf module:domGeneral
 * @param {ChangeList} changeList
 * @param {DotNotatedObject} [changeList.removed={}]
 * @param {DotNotatedObject} [changeList.added={}]
 * @returns {ChangeList}
 */
declare const createChangeList: ({ removed, added }?: Partial<Pick<ChangeList, "removed" | "added">>) => ChangeList;
export default createChangeList;
