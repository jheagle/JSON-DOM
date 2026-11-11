"use strict";

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Provide compatibility for using the options parameter of addEventListener
 * @param options - An object or boolean with the listener options
 */
const listenerOptions = options => {
  if (typeof listenerOptions.supportsOptions === 'undefined') {
    // Check if supportsOptions has been defined. This is a compatibility checking flag.
    listenerOptions.supportsOptions = true;
    try {
      // If it is possible to use OptionsObject, then set our flag to true
      window.addEventListener('test', null, {
        capture: false,
        once: false,
        passive: false
      });
    } catch (err) {
      // When using an OptionsObjects fails, it is only possible to pass the boolean UseCapture as the option
      listenerOptions.supportsOptions = false;
    }
  }
  return typeof options === 'object' && listenerOptions.supportsOptions ? options : false;
};
exports.default = listenerOptions;