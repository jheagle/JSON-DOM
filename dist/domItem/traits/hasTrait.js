"use strict";

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Whether an item has a trait. It is also a type guard: after the check the trait's data is typed on the item.
 * @param item - The item to check.
 * @param trait - The name of the trait.
 */
const hasTrait = (item, trait) => (item.has ?? {})[trait] === true;
exports.default = hasTrait;