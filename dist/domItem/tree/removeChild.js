"use strict";

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