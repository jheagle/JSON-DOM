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
const documentItem_1 = __importDefault(require("../../domItem/objects/documentItem"));
/**
 * Register multiple listeners from an array of functions.
 * @param listeners - An array of functions to be
 * used as the registered event listeners.
 * @param parent - The parent DomItem which is DomItemRoot which has eventActions property.
 */
const registerListeners = (listeners, parent = (0, documentItem_1.default)()) => {
  si_funciona_1.default.mergeObjectsMutable(parent.eventActions, listeners);
  return parent;
};
exports.default = registerListeners;