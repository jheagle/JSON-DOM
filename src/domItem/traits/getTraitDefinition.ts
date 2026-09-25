import 'core-js/stable'
import definitions from './definitions'
import type { TraitDefinition } from '../types'

/**
 * The runtime definition of a trait, if it was defined.
 * @function
 * @memberOf module:domGeneral
 * @param {string} name - The name of the trait.
 * @returns {TraitDefinition|undefined}
 */
const getTraitDefinition = (name: string): TraitDefinition | undefined => definitions.get(name)

export default getTraitDefinition
