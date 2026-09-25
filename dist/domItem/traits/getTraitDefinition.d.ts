import 'core-js/stable';
import type { TraitDefinition } from '../types';
/**
 * The runtime definition of a trait, if it was defined.
 * @function
 * @memberOf module:domGeneral
 * @param {string} name - The name of the trait.
 * @returns {TraitDefinition|undefined}
 */
declare const getTraitDefinition: (name: string) => TraitDefinition | undefined;
export default getTraitDefinition;
