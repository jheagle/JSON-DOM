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
const documentItem_1 = __importDefault(require("../../domItem/objects/documentItem"));
/**
 * Register a single listener function as part of the root domEvents.DomItem.
 * @param listener - Provide a function which will be called
 * when a Dom event is triggered.
 * @param name - The name of the listener to be used.
 * @param parent - The parent DomItem which is DomItemRoot which stores eventListeners property.
 */
const registerListener = (listener, name = listener.name, parent = documentItem_1.default) => Object.assign(parent.eventActions, {
  [name]: listener
});
exports.default = registerListener;