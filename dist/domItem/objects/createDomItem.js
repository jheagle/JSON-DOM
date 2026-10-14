"use strict";

require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.for-each.js");
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
require("core-js/stable");
const createCoreItem_1 = __importDefault(require("./createCoreItem"));
const withTrait_1 = __importDefault(require("../traits/withTrait"));
/**
 * A plain child is an object which is not an item yet (an item always has a has map).
 * @private
 */
const isPlainChild = child => typeof child === 'object' && child !== null && !child.has;
/**
 * This is the basic Object for representing a node in json-dom's Virtual DOM (DomItem tree): a generic item (see
 * {@link createCoreItem}) with the render trait. All incoming attributes will be merged to the specified format, and the
 * given object is completed and returned (it is not copied). Children which are plain objects are completed the same way,
 * all the way down; a child which already has a has map is already an item, and is left alone.
 * @param item - DomItem-like object to be formatted as DomItem
 */
const createDomItem = (item = {}) => {
  if (Array.isArray(item.children)) {
    item.children.forEach(child => {
      if (isPlainChild(child)) {
        createDomItem(child);
      }
    });
  }
  return (0, withTrait_1.default)((0, createCoreItem_1.default)(item), 'render', {
    element: item.element ?? null
  });
};
exports.default = createDomItem;