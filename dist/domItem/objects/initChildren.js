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
const onBodyLoad_1 = __importDefault(require("si-funciona/dist/helpers/functions/onBodyLoad"));
/**
 * Initiate the children of Root / DocumentItem. This is a helper for {@link documentDomItem}.
 */
const initChildren = () => {
  const head = document.head;
  const body = document.body;
  const children = [(0, createDomItem_1.default)({
    nodeName: 'head',
    attributes: {},
    element: head,
    children: []
  }), (0, createDomItem_1.default)({
    nodeName: 'body',
    attributes: {},
    element: body,
    children: []
  })];
  if (!head || !body) {
    (0, onBodyLoad_1.default)(() => {
      if (children[1].element === null) {
        children[0].element = document.head;
        children[1].element = document.body;
      }
      return children;
    });
  }
  return children;
};
exports.default = initChildren;