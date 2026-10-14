"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
require("core-js/stable");
/**
 * Insert a child into a parent's children list at a given position (like appendChild, but positioned). Appending is
 * insertChild at the end: `appendChild(parent, child)` is `insertChild(parent, child, parent.children.length)`.
 * @param parent - The parent that will receive the child.
 * @param child - The new child to attach to the parent.
 * @param index - Where in parent's children the child goes; out of range clamps to the nearest end, so 0 is always
 * the front and a large index is always the back (matching Array.prototype.splice).
 */
const insertChild = (parent, child, index) => {
  parent.children.splice(index, 0, child);
  child.parentItem = parent;
  return parent;
};
exports.default = insertChild;