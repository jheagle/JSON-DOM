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
