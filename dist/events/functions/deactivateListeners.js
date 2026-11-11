"use strict";

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Set all the listeners for this DOMItem to be inactive.
 * @param item - The DomItem which will have its eventListeners updated.
 */
const deactivateListeners = item => {
  for (const eventName in item.eventListeners) {
    item.eventListeners[eventName].forEach(eventListener => {
      eventListener.listenerActive = false;
    });
  }
  delete item.activeListeners;
  return item;
};
exports.default = deactivateListeners;