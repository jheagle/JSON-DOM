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
const si_funciona_1 = __importDefault(require("si-funciona"));
const appendChild_1 = __importDefault(require("../tree/appendChild"));
const removeChild_1 = __importDefault(require("../tree/removeChild"));
const itemIdIndex_1 = require("../tree/itemIdIndex");
/**
 * Create the generic item, without the render trait. Every property which is not given gets its default. The given
 * object is completed and returned (it is not copied). Children which are plain objects are completed the same way, all
 * the way down; a child which already has a has map is taken to be complete and is left alone.
 * @param item - Item-like object to be formatted as a CoreItem
 */
const createCoreItem = (item = {}) => {
  if (Array.isArray(item.children)) {
    item.children.forEach(child => {
      if (typeof child === 'object' && child !== null && !child.has) {
        createCoreItem(child);
      }
    });
  }
  const newItem = si_funciona_1.default.reduceObject({
    attributes: {},
    children: [],
    eventListeners: {},
    has: {},
    id: (0, itemIdIndex_1.generateItemId)(),
    jsonExclusions: [],
    nodeName: 'div',
    nodeValue: null,
    parentItem: null
  }, (coreItem, defaultValue, prop) => {
    if (!(prop in coreItem)) {
      coreItem[prop] = defaultValue;
      return coreItem;
    }
    return coreItem;
  }, item);
  newItem.appendChild = si_funciona_1.default.curry(appendChild_1.default)(newItem);
  newItem.removeChild = si_funciona_1.default.curry(removeChild_1.default)(newItem);
  return newItem;
};
exports.default = createCoreItem;