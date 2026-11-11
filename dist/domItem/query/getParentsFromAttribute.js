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
const documentItem_1 = __importDefault(require("../objects/documentItem"));
const si_funciona_1 = __importDefault(require("si-funciona"));
/**
 * A selector function for retrieving existing child domGeneral.DomItems from the given parent item.
 * This function will check all the children starting from item, and scan the attributes
 * property for matches. The return array contains children matching from all levels.
 * WARNING: This is a recursive function.
 * @param attr - Provide the attribute name to be searched
 * @param value - The attribute value to be compared
 * @param item - The DomItem which may have parent items matching the
 * attribute criteria
 */
const getParentsFromAttribute = (attr, value, item = (0, documentItem_1.default)().body) => {
  if (item.parentItem === null) {
    if (item.nodeName === '#document') {
      throw new Error('Root parent item must be an empty object, null reference found.');
    }
    throw new Error('Detached child, missing parentItem reference. Use empty object if this is the root item.');
  }
  if (si_funciona_1.default.emptyObject(item.parentItem)) {
    return [];
  }
  const parent = item.parentItem;
  return (parent.attributes[attr] || item[attr] || false) === value ? getParentsFromAttribute(attr, value, parent).concat([parent]) : getParentsFromAttribute(attr, value, parent);
};
exports.default = getParentsFromAttribute;