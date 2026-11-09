"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * What each trait is at runtime, by name. render is the one json-dom brings; other libraries add theirs with
 * defineTrait.
 */
const definitions = new Map([['render', {
  keys: ['element', 'activeListeners'],
  serializable: false,
  defaults: () => ({
    element: null
  })
}]]);
exports.default = definitions;