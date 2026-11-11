import type { TraitDefinition } from '../types';
/**
 * What each trait is at runtime, by name. render is the one treeloom brings; other libraries add theirs with
 * defineTrait.
 */
declare const definitions: Map<string, TraitDefinition>;
export default definitions;
