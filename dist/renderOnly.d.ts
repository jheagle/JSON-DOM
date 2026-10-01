/**
 * The render-only subset of json-dom: build and sync a Virtual DOM (DomItem tree) to the real
 * HTML DOM, and forward fired events elsewhere (see events/objects/setForwardEvents) instead of
 * running local business logic - a consumer that never needs to run that logic locally never
 * needs to go the other way (DOM back to JSON) either, so this excludes deflate, the one part of
 * the full build with no other internal code path depending on it.
 */
import 'core-js/stable';
declare const jsonDomRenderOnly: any;
export = jsonDomRenderOnly;
