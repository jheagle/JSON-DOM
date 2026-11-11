"use strict";

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Find the item (item itself, or one of its descendants) whose element is the one given, or null when none match.
 * Only searches item and its own subtree: an event's target is always the item a listener is attached to, or one of
 * its descendants (that is what bubbling means), so there is never a reason to search outside it.
 * WARNING: This is a recursive function.
 * @param item - The DomItem (and its subtree) to search.
 * @param element - The real element to match against each item's element.
 */
const getItemByElement = (item, element) => {
  if (item.element === element) {
    return item;
  }
  for (const child of item.children) {
    const found = getItemByElement(child, element);
    if (found) {
      return found;
    }
  }
  return null;
};
exports.default = getItemByElement;