"use strict";

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