"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
require("core-js/stable");
/**
 * Whether an item has a trait. It is also a type guard: after the check the trait's data is typed on the item.
 * @param item - The item to check.
 * @param trait - The name of the trait.
 */
const hasTrait = (item, trait) => (item.has ?? {})[trait] === true;
exports.default = hasTrait;