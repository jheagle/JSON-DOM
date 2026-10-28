"use strict";

require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.for-each.js");
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const si_funciona_1 = __importDefault(require("si-funciona"));
const getListenerOptions_1 = __importDefault(require("../objects/options/getListenerOptions"));
const numberToOptions_1 = __importDefault(require("../objects/options/numberToOptions"));
const unassignListener_1 = __importDefault(require("./unassignListener"));
/**
 * Detach every active listener for one event type from a DomItem's element, regardless of which EventListener
 * descriptor each one belongs to, and clear that event's activeListeners bucket. Unlike {@link deactivateListener},
 * this does not update the listenerActive/activeResponder state on the individual descriptors.
 * @param eventName - The name of the trigger event whose active listeners will be revoked.
 * @param item - The DomItem to revoke active listeners from.
 * @returns The same DomItem, with all active listeners for this event detached.
 */
const revokeActiveListeners = (eventName, item) => {
  const listenerOptions = (0, getListenerOptions_1.default)();
  const eventOptions = si_funciona_1.default.dotGet(item, `activeListeners.${eventName}`);
  if (eventOptions === null) {
    return item;
  }
  si_funciona_1.default.objectKeys(eventOptions).forEach(binaryOptions => {
    const optionsToUse = (0, numberToOptions_1.default)(listenerOptions, parseInt(binaryOptions));
    const usesSignal = !!optionsToUse.signal;
    if (!usesSignal) {
      // Abort signal must be undefined if it is not required.
      delete optionsToUse.signal;
    }
    ;
    item.activeListeners[eventName][Number(binaryOptions)].forEach(eventResponder => {
      if (!eventResponder.assignedHandler) {
        // never actually attached to the element, nothing to detach
        return;
      }
      const finalOptions = usesSignal ? Object.assign({}, optionsToUse, {
        signal: eventResponder.abort.signal
      }) : optionsToUse;
      (0, unassignListener_1.default)(eventName, item.element, eventResponder.assignedHandler, finalOptions);
    });
  });
  delete item.activeListeners[eventName];
  return item;
};
exports.default = revokeActiveListeners;