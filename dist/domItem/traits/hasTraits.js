"use strict";

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Whether an item has all of these traits. It is also a type guard: after the check the data of every one of the traits
 * is typed on the item.
 * @param item - The item to check.
 * @param traits - The names of the traits.
 */
const hasTraits = (item, ...traits) => traits.every(trait => (item.has ?? {})[trait] === true);
exports.default = hasTraits;