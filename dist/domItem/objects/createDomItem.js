"use strict";

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const createCoreItem_1 = __importDefault(require("./createCoreItem"));
const withTrait_1 = __importDefault(require("../traits/withTrait"));
/**
 * A plain child is an object which is not an item yet (an item always has a has map).
 * @private
 */
const isPlainChild = child => typeof child === 'object' && child !== null && !child.has;
/**
 * This is the basic Object for representing a node in treeloom's Virtual DOM (DomItem tree): a generic item (see
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