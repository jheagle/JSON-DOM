import 'core-js/stable'
import siFunciona from 'si-funciona'
import type { ChangeList, ChangeType, DotNotated } from './types'

/**
 * @typedef {Function} appendChanges
 * @memberOf module:domGeneral
 * @param {string} changeType - Either 'removed' or 'added'
 * @param {DotNotatedObject} changes - The changes to append to existing type
 */

/**
 * Initialize the appendChanges method with the changeList, return the appendChanges method.
 * @param {ChangeList} changeList
 * @returns {appendChanges}
 */
const appendChangesTo = (changeList: Pick<ChangeList, 'removed' | 'added'>): ChangeList['appendChanges'] =>
  (changeType: ChangeType, changes: DotNotated): DotNotated => {
    if (!['added', 'removed'].includes(changeType)) {
      throw Error(`Method appendChanges change type must be 'added' or 'removed'; ${changeType} given.`)
    }
    return siFunciona.mergeObjects(changeList[changeType], changes)
  }

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
const createChangeList = ({ removed = {}, added = {} }: Partial<Pick<ChangeList, 'removed' | 'added'>> = {}): ChangeList => {
  const changeList = {
    removed: Object.assign({}, removed),
    added: Object.assign({}, added)
  } as ChangeList
  changeList.appendChanges = appendChangesTo(changeList)
  return changeList
}

export default createChangeList
