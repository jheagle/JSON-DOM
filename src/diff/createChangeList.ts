/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import siFunciona from 'si-funciona'
import type { ChangeList, ChangeType, DotNotated } from './types'

/**
 * Initialize the appendChanges method with the changeList, return the appendChanges method.
 * @param changeList
 * @private
 */
const appendChangesTo = (changeList: Pick<ChangeList, 'removed' | 'added'>): ChangeList['appendChanges'] =>
  (changeType: ChangeType, changes: DotNotated): DotNotated => {
    if (!['added', 'removed'].includes(changeType)) {
      throw Error(`Method appendChanges change type must be 'added' or 'removed'; ${changeType} given.`)
    }
    return siFunciona.mergeObjects(changeList[changeType], changes)
  }

/**
 * Create the change list template.
 * @param changeList
 * @param changeList.removed
 * @param changeList.added
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
