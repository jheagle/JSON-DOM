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
exports.withDocumentItem = void 0;
const documentDomItem_1 = __importDefault(require("./documentDomItem"));
let existingItem = null;
/**
 * The shared root DomItem of the Virtual DOM (DomItem tree) for this environment's real document. It is built on the
 * first call, not when treeloom loads, so treeloom can be required where there is no document (Node, a server) as
 * long as nothing asks for it. Every later call returns the same root.
 * @returns {DomItemRoot}
 */
const getDocumentItem = () => {
  if (existingItem === null) {
    existingItem = (0, documentDomItem_1.default)();
  }
  return existingItem;
};
/**
 * Add the public `documentItem` property to an API object: a getter, so the root is still only built when it is first
 * read. Added after the API is assembled, since Object.assign would read (and so build) it.
 * @param api The assembled API object
 * @returns {T & { readonly documentItem: DomItemRoot }} The same object
 */
const withDocumentItem = api => Object.defineProperty(api, 'documentItem', {
  enumerable: true,
  get: getDocumentItem
});
exports.withDocumentItem = withDocumentItem;
exports.default = getDocumentItem;