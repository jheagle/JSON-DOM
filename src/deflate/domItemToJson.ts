import siFunciona from 'si-funciona'
import removeEmptyProperties from './removeEmptyProperties'
import type { CoreItem } from '../domItem/types'

const useExclusions = (function makeExclusions () {
  let jsonExclusions: string[] = []
  return (key: string, value: any) => {
    if (key === 'jsonExclusions') {
      jsonExclusions = value
      return value
    }
    if (jsonExclusions.includes(key)) {
      return undefined
    }
    return value
  }
})()

/**
 * Convert DOM Item to JSON string.
 * @param item
 * @param options
 * @param options.propertiesToDelete - Additional property names to strip from every item in the tree for this
 * call only, alongside the always-stripped internal ones. Unlike `jsonExclusions` (set once on an item itself,
 * so every caller sees the same exclusions), this is per-call: the same item can be serialized differently for
 * different callers - for example, a server redacting the same tree once per viewer - without mutating the item.
 */
const domItemToJson = (
  item: CoreItem,
  { propertiesToDelete = [] }: { propertiesToDelete?: string[] } = {}
): string => JSON.stringify(
  removeEmptyProperties(siFunciona.cloneObject(item) as CoreItem, [
    'activeListeners',
    'element',
    'parentItem',
    'body',
    'head',
    ...propertiesToDelete
  ]),
  useExclusions
)

export default domItemToJson
