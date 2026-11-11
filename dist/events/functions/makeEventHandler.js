"use strict";

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Prepare a listener to be used before assigning to an element.
 * @param listener
 * @param item
 * @param args
 */
const makeEventHandler = (listener, item, ...args) => {
  return event => {
    if (!event || event.immediatePropagationStopped) {
      return event;
    }
    return listener(event, item, ...args);
  };
};
exports.default = makeEventHandler;