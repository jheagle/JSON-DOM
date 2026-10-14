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
const removeEventListener_1 = __importDefault(require("./removeEventListener"));
/**
 * Find and remove a listener that was registered by name (e.g. via {@link fullAddEventListener}) - the counterpart
 * to fullAddEventListener. Resolves name the same way fullAddEventListener defaults it, so a caller only needs the
 * original listener function (not the internal name string it was registered under) to remove it:
 * 1. Resolve name (defaults to listener.name, same as {@link fullAddEventListener}).
 * 2. {@link removeEventListener} - find the descriptor by that name, detach it from the element if active, and
 *    splice it out of item.eventListeners.
 *
 * Does not remove the function from the root DomItem's eventActions registry, since that name may still be shared
 * by other DomItems - see {@link registerListener}.
 * @param eventName - The name of the trigger event (e.g. 'click').
 * @param listener - The same function originally passed to fullAddEventListener.
 * @param name - The name the listener was registered under in eventActions.
 * @param customArgs - The custom args the listener was registered with.
 * @param options - The options the listener was registered with.
 * @param item - The DomItem to remove the listener from.
 * @returns The same DomItem, with the matching listener removed if one was found.
 */
const fullRemoveEventListener = (eventName, listener, name, customArgs, options, item) => {
  const listenerName = name ?? listener.name;
  return (0, removeEventListener_1.default)(eventName, listenerName, customArgs, options, item);
};
exports.default = fullRemoveEventListener;