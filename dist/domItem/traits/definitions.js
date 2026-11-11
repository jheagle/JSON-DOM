"use strict";

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * What each trait is at runtime, by name. render is the one treeloom brings; other libraries add theirs with
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