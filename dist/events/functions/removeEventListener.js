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
const findEventListener_1 = __importDefault(require("./findEventListener"));
const deactivateListener_1 = __importDefault(require("./deactivateListener"));
/**
 * Find and remove an event listener from a DomItem: detaches it from the element first (via
 * {@link deactivateListener}) if it was active, then splices its descriptor out of eventListeners. A no-op if no
 * matching listener is found.
 *
 * item is the last parameter (instead of customArgs/options having literal defaults) so this can be curried and
 * piped directly - see {@link fullAddEventListener} for an example of the pattern.
 * @param eventName - The name of the trigger event the listener was registered under.
 * @param listenerFunction - The listener function to match against.
 * @param customArgs - The custom args the listener was registered with.
 * @param options - The options the listener was registered with.
 * @param item - The DomItem to remove the listener from.
 * @returns The same DomItem, with the matching listener removed if one was found.
 */
const removeEventListener = (eventName, listenerFunction, customArgs, options, item) => {
  const [listenerIndex, foundListener] = (0, findEventListener_1.default)(eventName, listenerFunction, customArgs, options, item);
  if (listenerIndex < 0 || typeof foundListener === 'undefined') {
    // listener not found
    return item;
  }
  if (foundListener.listenerActive === true) {
    item = (0, deactivateListener_1.default)(eventName, foundListener, item);
  }
  item.eventListeners[eventName].splice(listenerIndex, 1);
  return item;
};
exports.default = removeEventListener;