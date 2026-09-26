import 'core-js/stable';
import type { TraitDefinition } from '../types';
/**
 * The runtime definition of a trait, if it was defined.
 * @param name - The name of the trait.
 */
declare const getTraitDefinition: (name: string) => TraitDefinition | undefined;
export default getTraitDefinition;
