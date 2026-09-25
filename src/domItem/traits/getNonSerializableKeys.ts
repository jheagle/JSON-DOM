import 'core-js/stable'
import definitions from './definitions'
import type { CoreItem } from '../types'

/**
 * The properties an item has only because of its traits, and which do not belong in json (the element of the render
 * trait, for one).
 * @param {CoreItem} item - The item to look at.
 * @returns {Array<string>}
 * @private
 */
const getNonSerializableKeys = (item: CoreItem): string[] => Object.keys(item.has ?? {}).flatMap(trait => {
  const definition = definitions.get(trait)
  return definition && definition.serializable === false ? definition.keys : []
})

export default getNonSerializableKeys
