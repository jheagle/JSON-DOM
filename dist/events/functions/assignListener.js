"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const listenerOptions_1 = __importDefault(require("./listenerOptions"));
/**
 * Provide compatibility for assigning listeners.
 * @param trigger - The name of the event which will trigger the listenerFunction on the element. (keyof HTMLElementEventMap)
 * @param elem - An element to append the listener onto
 * @param fn - The function which will be invoked when the
 * event is triggered
 * @param options - Additional options to how the event will be
 * fired
 */
const assignListener = (trigger, elem, fn, options = false) => {
  // Attaching a listener may be done differently based on the browser support
  if (elem.addEventListener) {
    // Latest support is provided from addEventListener with the options parameter varying slightly
    elem.addEventListener(trigger, fn, (0, listenerOptions_1.default)(options));
  } else if (elem.attachEvent) {
    // Older browsers, especially Internet Explorer
    elem.attachEvent(`on${trigger}`, fn);
  } else {
    // General support for adding a new function onto the element which can be called to trigger the function
    ;
    elem[`on${trigger}`] = fn;
  }
  return fn;
};
exports.default = assignListener;