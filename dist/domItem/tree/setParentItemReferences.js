"use strict";

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * For each child of this item, set the parentItem references.
 * @param item - The DomItem to have parent references applied.
 */
const setParentItemReferences = item => {
  if (!item.children || !item.children.length) {
    item.children = [];
    return item;
  }
  item.children.forEach(child => {
    child.parentItem = item;
    setParentItemReferences(child);
  });
  return item;
};
exports.default = setParentItemReferences;