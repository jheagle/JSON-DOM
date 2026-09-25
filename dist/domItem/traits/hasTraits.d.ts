import 'core-js/stable';
import type { CoreItem, TraitName, WithTraits } from '../types';
/**
 * Whether an item has all of these traits. It is also a type guard: after the check the data of every one of the traits
 * is typed on the item.
 * @function
 * @memberOf module:domGeneral
 * @param {CoreItem} item - The item to check.
 * @param {...string} traits - The names of the traits.
 * @returns {boolean}
 */
declare const hasTraits: <Trait extends TraitName>(item: CoreItem, ...traits: Trait[]) => item is CoreItem & WithTraits<Trait>;
export default hasTraits;
