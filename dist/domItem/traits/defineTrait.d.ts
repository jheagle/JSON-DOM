import 'core-js/stable';
import type { TraitDefinition } from '../types';
/**
 * What a trait is at runtime.
 * @typedef {Object} TraitDefinition
 * @memberOf module:domGeneral
 * @property {Array.<string>} keys - The properties the trait puts on an item
 * @property {boolean} [serializable=true] - False for properties which only make sense where the item lives (an
 * element): they are left out of json
 * @property {Function} [defaults] - Returns the data a new item gets when it is given the trait
 */
/**
 * Describe a trait so json-dom knows what it is at runtime: the properties it puts on an item (so they can be left out
 * of json when they only make sense where the item lives), and the defaults a new item gets. Types are added
 * separately, by merging into TraitRegistry.
 * @function
 * @memberOf module:domGeneral
 * @param {string} name - The name of the trait, prefixed by the package which defines it: matrix.row
 * @param {TraitDefinition} definition - The properties the trait puts on an item, whether they are serializable and the defaults.
 * @returns {TraitDefinition}
 */
declare const defineTrait: (name: string, definition: TraitDefinition) => TraitDefinition;
export default defineTrait;
