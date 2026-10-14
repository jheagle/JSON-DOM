"use strict";

require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.for-each.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
require("core-js/stable");
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