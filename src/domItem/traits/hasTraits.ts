import type { CoreItem, TraitName, WithTraits } from '../types'

/**
 * Whether an item has all of these traits. It is also a type guard: after the check the data of every one of the traits
 * is typed on the item.
 * @param item - The item to check.
 * @param traits - The names of the traits.
 */
const hasTraits = <Trait extends TraitName>(item: CoreItem, ...traits: Trait[]): item is CoreItem & WithTraits<Trait> =>
  traits.every(trait => (item.has ?? {})[trait] === true)

export default hasTraits
