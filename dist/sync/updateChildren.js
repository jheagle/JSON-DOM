"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const createDomItem_1 = __importDefault(require("../domItem/objects/createDomItem"));
/**
 * Update all the children for this domItem to match the domItem element childNodes.
 * @param domItem
 */
const updateChildren = domItem => {
  if (!domItem.element) {
    domItem.children = [];
    return domItem;
  }
  const previousChildren = domItem.children;
  domItem.children = [];
  domItem.element.childNodes.forEach((childNode, index) => {
    const existing = previousChildren.find(child => child.element === childNode);
    const child = existing ?? (0, createDomItem_1.default)({
      nodeName: childNode.nodeName.toLowerCase(),
      nodeValue: childNode.nodeValue,
      element: childNode
    });
    domItem.children[index] = child;
    child.parentItem = domItem;
  });
  return domItem;
};
exports.default = updateChildren;