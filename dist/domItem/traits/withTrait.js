"use strict";

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const definitions_1 = __importDefault(require("./definitions"));
/**
 * Give an item a trait: the trait's defaults and the given data are put on the item (the same object, not a copy), and
 * it is added to the item's has map.
 * @param item - The item which gains the trait.
 * @param trait - The name of the trait.
 * @param data - The data the trait puts on the item.
 * @returns The same item, now with the trait.
 */
const withTrait = (item, trait, data) => {
  Object.assign(item, definitions_1.default.get(trait)?.defaults?.(), data);
  item.has = Object.assign(item.has ?? {}, {
    [trait]: true
  });
  return item;
};
exports.default = withTrait;