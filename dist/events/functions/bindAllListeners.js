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
const bindListeners_1 = __importDefault(require("./bindListeners"));
/**
 * Based on the eventListeners property of the provided item, bind the listeners to the associated element property
 * for each item in the domEvents.DomItem structure.
 * WARNING: This is a recursive function.
 * @param item - The DomItem with an associated HTMLElement to have a listener
 * assigned
 */
const bindAllListeners = item => {
  for (const child of item.children) {
    bindAllListeners(child);
  }
  return (0, bindListeners_1.default)(item);
};
exports.default = bindAllListeners;