/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import type { compareArrayResultMap } from 'si-funciona/dist/helpers/arrays/compareArrays'

/** An object whose keys are dot notated paths (attributes.style.color) and whose values are what is at that path. */
export type DotNotated = Record<string, any>

/** Which of the two lists a change is appended to. */
export type ChangeType = 'added' | 'removed'

/** What has to be added and removed to make one side match the other. */
export type ChangeList = {
  removed: DotNotated
  added: DotNotated
  /** Merge more changes into the removed or added list, and return the merged list. */
  appendChanges: (changeType: ChangeType, changes: DotNotated) => DotNotated
}

/**
 * The outcome of comparing one attribute: 0 when it is the same, 1 when it is missing or different, or - for the
 * multi-part attributes (style, class) - the list of what each part of it looks like (see compareArrays).
 */
export type AttributeComparison = 0 | 1 | compareArrayResultMap
