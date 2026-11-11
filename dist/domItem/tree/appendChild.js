"use strict";

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Append a child to the end of given parent's children list.
 * @param parent - The parent that will receive the child.
 * @param child - The new child to attach to the parent.
 */
const appendChild = (parent, child) => {
  parent.children.push(child);
  child.parentItem = parent;
  return parent;
};
exports.default = appendChild;