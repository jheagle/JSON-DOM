"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
require("core-js/stable");
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