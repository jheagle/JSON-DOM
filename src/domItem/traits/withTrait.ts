import 'core-js/stable'
import definitions from './definitions'
import type { CoreItem, TraitName, TraitRegistry, WithTraits } from '../types'

/**
 * Give an item a trait: the trait's defaults and the given data are put on the item (the same object, not a copy), and
 * it is added to the item's has map.
 * @function
 * @memberOf module:domGeneral
 * @param {CoreItem} item - The item which gains the trait.
 * @param {string} trait - The name of the trait.
 * @param {Object} data - The data the trait puts on the item.
 * @returns {CoreItem} The same item, now with the trait.
 */
const withTrait = <Item extends CoreItem, Trait extends TraitName>(item: Item, trait: Trait, data: TraitRegistry[Trait]): Item & WithTraits<Trait> => {
  Object.assign(item, definitions.get(trait)?.defaults?.(), data)
  item.has = Object.assign(item.has ?? {}, { [trait]: true })
  return item as Item & WithTraits<Trait>
}

export default withTrait
