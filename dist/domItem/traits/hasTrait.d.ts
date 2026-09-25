import 'core-js/stable';
import type { CoreItem, TraitName, WithTraits } from '../types';
/**
 * Whether an item has a trait. It is also a type guard: after the check the trait's data is typed on the item.
 * @function
 * @memberOf module:domGeneral
 * @param {CoreItem} item - The item to check.
 * @param {string} trait - The name of the trait.
 * @returns {boolean}
 */
declare const hasTrait: <Trait extends TraitName>(item: CoreItem, trait: Trait) => item is CoreItem & WithTraits<Trait>;
export default hasTrait;
