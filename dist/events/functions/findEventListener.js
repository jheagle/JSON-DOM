"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
require("core-js/stable");
const si_funciona_1 = __importDefault(require("si-funciona"));
const getListenerOptions_1 = __importDefault(require("../objects/options/getListenerOptions"));
const optionsToNumber_1 = __importDefault(require("../objects/options/optionsToNumber"));
/**
 * Whether the options ask for the capture phase.
 * @private
 */
const capturing = options => {
  const template = (0, getListenerOptions_1.default)();
  return ((0, optionsToNumber_1.default)(template, options) & template.capture) !== 0;
};
/**
 * Search a DOM item's eventListeners for a specific event listener, matched by listener function, custom args, and
 * whether it listens in the capture phase. Returns its index and the matching descriptor as a tuple.
 *
 * As with the DOM's removeEventListener, only the capture flag tells two listeners of the same function apart: once,
 * passive and signal only change how a listener behaves, not which listener it is.
 *
 * item is the last parameter (instead of customArgs/options having literal defaults) so this can be curried and
 * piped directly - see {@link fullAddEventListener} for an example of the pattern.
 * @param eventName - The name of the trigger event the listener was registered under.
 * @param listenerFunction - The listener function to match against.
 * @param customArgs - The custom args the listener was registered with.
 * @param options - The options the listener was registered with; only
 * the capture flag is compared.
 * @param item - The DomItem whose eventListeners will be searched.
 * @returns A 2-element [index, matchingListener] tuple. If no match is
 * found, index is -1 and matchingListener is undefined.
 */
const findEventListener = (eventName, listenerFunction, customArgs, options, item) => {
  customArgs = customArgs ?? null;
  if (!si_funciona_1.default.isObject(item.eventListeners)) {
    return [-1, undefined];
  }
  if (typeof item.eventListeners[eventName] === 'undefined') {
    return [-1, undefined];
  }
  const findListener = {
    listenerFunc: listenerFunction,
    listenerArgs: si_funciona_1.default.describeObject(customArgs)
  };
  const listenerIndex = item.eventListeners[eventName].findIndex(eventListener => {
    const argDescriptor = si_funciona_1.default.describeObject(eventListener.listenerArgs);
    return eventListener.listenerFunc === findListener.listenerFunc && si_funciona_1.default.sameDescriptor(findListener.listenerArgs, argDescriptor) && capturing(eventListener.listenerOptions) === capturing(options);
  });
  return [listenerIndex, item.eventListeners[eventName][listenerIndex]];
};
exports.default = findEventListener;