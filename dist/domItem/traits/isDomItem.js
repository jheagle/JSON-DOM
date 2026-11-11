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
const hasTrait_1 = __importDefault(require("./hasTrait"));
/**
 * Whether an item, and every item below it, has the render trait: the tree treeloom's render and sync functions work
 * on. hasTrait only checks the one item, so use this where a tree comes from somewhere else. It is also a type guard.
 * @param item - The item at the top of the tree to check.
 */
const isDomItem = item => (0, hasTrait_1.default)(item, 'render') && item.children.every(isDomItem);
exports.default = isDomItem;