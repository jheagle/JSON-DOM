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
 * Initiate the Root for DocumentItem. This is primary a helper for {@link documentDomItem}.
 * @param children - Provide an array of Head and Body (usually via {@link initChildren})
 * @param listeners - An object of all event listeners to be registered in the Dom
 */
const initRoot = (children = [{}, {}], listeners = {}) => (0, createDomItem_1.default)({
  nodeName: '#document',
  nodeValue: null,
  attributes: {},
  element: document,
  eventActions: listeners,
  eventListeners: {},
  children,
  parentItem: {},
  head: children[0],
  body: children[1]
});
exports.default = initRoot;