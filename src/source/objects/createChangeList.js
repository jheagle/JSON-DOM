import 'core-js/stable'
import functionalHelpers from 'functional-helpers'

/**
 * @typedef {Function} appendChanges
 * @memberOf module:domObjects
 * @param {string} changeType - Either 'removed' or 'added'
 * @param {DotNotatedObject} changes - The changes to append to existing type
 */

/**
 * Initialize the appendChanges method with the changeList, return the appendChanges method.
 * @param {ChangeList} changeList
 * @returns {appendChanges}
 */
const appendChangesTo = changeList =>
  (changeType, changes) => {
    if (!['added', 'removed'].includes(changeType)) {
      throw Error(`Method appendChanges change type must be 'added' or 'removed'; ${changeType} given.`)
    }
    return functionalHelpers.mergeObjects(changeList[changeType], changes)
  }

/**
 * Represent changes / a diff of an object, including removed, added, and changed properties.
 * @typedef {Object.<string, DotNotatedObject>} ChangeList
 * @memberOf module:domObjects
 * @property {DotNotatedObject} removed
 * @property {DotNotatedObject} added
 * @property {appendChanges} appendChanges
 */

/**
 * Create the change list template.
 * @function
 * @memberOf module:domObjects
 * @param {ChangeList} changeList
 * @param {DotNotatedObject} [changeList.removed={}]
 * @param {DotNotatedObject} [changeList.added={}]
 * @returns {ChangeList}
 */
const createChangeList = ({ removed = {}, added = {} } = {}) => {
  const changeList = {
    removed: Object.assign({}, removed),
    added: Object.assign({}, added)
  }
  changeList.appendChanges = appendChangesTo(changeList)
  return changeList
}

export default createChangeList
