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
 * Switch the root item into render-only mode: every registered listener name resolves to a forwarder instead of a
 * local function (see retrieveListener, makeForwardingListener), so no local listener functions need to be
 * registered at all.
 * @param transport - Called with the envelope of each forwarded event.
 * @param parent - The parent DomItem which is DomItemRoot to switch into render-only mode.
 */
const setForwardEvents = (transport, parent = documentItem_1.default) => {
  parent.forwardEvents = transport;
  return parent;
};
exports.default = setForwardEvents;