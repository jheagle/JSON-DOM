"use strict";

require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.reduce.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
require("core-js/stable");
/**
 * Resolve a path (as built by getItemPath) back to the item it points at, starting from the root. Throws when the
 * path no longer matches the tree's current shape - exactly like a stale reference to a real DOM element would, a
 * path is only valid for as long as the tree it was built from keeps the same shape.
 * @param root - The item the path is relative to (usually documentItem).
 * @param path - The path to resolve, as returned by getItemPath.
 */
const getItemByPath = (root, path) => path.reduce((item, index) => {
  const child = item.children[index];
  if (!child) {
    throw new Error(`No item at index ${index} of path [${path.join(', ')}] - the tree may have changed shape since this path was built.`);
  }
  return child;
}, root);
exports.default = getItemByPath;