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
const createDomItem_1 = __importDefault(require("./createDomItem"));
/**
 * Ensure all basic properties of the DomItem are present.
 * @param item - The object that will be formatted as a DomItem.
 */
const addDomItemProperties = item => {
  if (typeof item.children !== 'undefined') {
    item.children.forEach(child => {
      addDomItemProperties(child);
    });
  }
  return (0, createDomItem_1.default)(item);
};
exports.default = addDomItemProperties;