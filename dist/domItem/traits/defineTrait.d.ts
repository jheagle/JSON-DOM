import 'core-js/stable';
import type { TraitDefinition } from '../types';
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
