"use strict";

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
Object.defineProperty(exports, "__esModule", {
  value: true
});
const CAPTURE = 1;
const ONCE = 2;
const PASSIVE = 4;
const SIGNAL = 8;
/**
 * Retrieve the OptionsTemplate for EventListenerOptions.
 */
const getListenerOptions = () => ({
  capture: CAPTURE,
  once: ONCE,
  passive: PASSIVE,
  signal: SIGNAL
});
exports.default = getListenerOptions;