"use strict";

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
Object.defineProperty(exports, "__esModule", {
  value: true
});
const itemIdIndex_1 = require("./itemIdIndex");
/**
 * Reverse of appendHtml, remove a DomItem and have the associated element removed.
 * @param parent - The parent of the items
 * @param child - The DomItem with HTMLElement to be removed
 */
const removeChild = (parent, child) => {
  // Before detaching: child's own parentItem chain (still pointing at parent) is what resolves its root.
  (0, itemIdIndex_1.unregisterItemIds)(child);
  parent.element.removeChild(child.element);
  return parent.children.splice(parent.children.indexOf(child), 1);
};
exports.default = removeChild;