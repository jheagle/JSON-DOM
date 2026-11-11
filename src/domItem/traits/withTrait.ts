/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import definitions from './definitions'
import type { CoreItem, TraitName, TraitRegistry, WithTraits } from '../types'

/**
 * Give an item a trait: the trait's defaults and the given data are put on the item (the same object, not a copy), and
 * it is added to the item's has map.
 * @param item - The item which gains the trait.
 * @param trait - The name of the trait.
 * @param data - The data the trait puts on the item.
 * @returns The same item, now with the trait.
 */
const withTrait = <Item extends CoreItem, Trait extends TraitName>(item: Item, trait: Trait, data: TraitRegistry[Trait]): Item & WithTraits<Trait> => {
  Object.assign(item, definitions.get(trait)?.defaults?.(), data)
  item.has = Object.assign(item.has ?? {}, { [trait]: true })
  return item as Item & WithTraits<Trait>
}

export default withTrait
