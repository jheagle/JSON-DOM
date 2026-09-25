import type { TraitDefinition } from '../types'

/**
 * What each trait is at runtime, by name. render is the one json-dom brings; other libraries add theirs with
 * defineTrait.
 */
const definitions = new Map<string, TraitDefinition>([
  ['render', { keys: ['element', 'activeListeners'], serializable: false, defaults: () => ({ element: null }) }]
])

export default definitions
