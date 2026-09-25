import 'core-js/stable';
import type { ChangeList } from './types';
/**
 * Create the change list template.
 * @param changeList
 * @param changeList.removed
 * @param changeList.added
 */
declare const createChangeList: ({ removed, added }?: Partial<Pick<ChangeList, "removed" | "added">>) => ChangeList;
export default createChangeList;
