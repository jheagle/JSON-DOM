"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
require("core-js/stable");
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