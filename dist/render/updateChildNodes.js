"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const updateElement_1 = __importDefault(require("./updateElement"));
/**
 * Update all the childNodes for this domItem element to mach domItem children.
 * @param domItem
 */
const updateChildNodes = domItem => {
  if (!domItem.element) {
    domItem = (0, updateElement_1.default)(domItem);
  }
  if (!domItem.children || !domItem.children.length) {
    domItem.children = [];
    return domItem;
  }
  const element = domItem.element;
  const previousChildNodes = Array.from(element.childNodes);
  domItem.children.map((child, index) => {
    const existing = previousChildNodes.find(childNode => childNode === child.element);
    let childNode = existing ?? child.element;
    if (!childNode) {
      childNode = (0, updateElement_1.default)(child).element;
    }
    if (!previousChildNodes[index]) {
      element.appendChild(childNode);
      return childNode;
    }
    if (childNode !== previousChildNodes[index]) {
      element.replaceChild(childNode, previousChildNodes[index]);
    }
    return childNode;
  }).forEach((childNode, index) => {
    domItem.children[index].element = childNode;
  });
  if (element.childNodes.length > domItem.children.length) {
    const maxLength = domItem.children.length;
    let nodeToRemove = element.childNodes[maxLength];
    while (nodeToRemove) {
      element.removeChild(nodeToRemove);
      nodeToRemove = element.childNodes[maxLength];
    }
  }
  return domItem;
};
exports.default = updateChildNodes;