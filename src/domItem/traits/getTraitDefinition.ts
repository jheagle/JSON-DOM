import 'core-js/stable'
import definitions from './definitions'
import type { TraitDefinition } from '../types'

/**
 * The runtime definition of a trait, if it was defined.
 * @param name - The name of the trait.
 */
const getTraitDefinition = (name: string): TraitDefinition | undefined => definitions.get(name)

export default getTraitDefinition
