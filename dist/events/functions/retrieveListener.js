"use strict";

require("core-js/modules/es.array.includes.js");
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const documentItem_1 = __importDefault(require("../../domItem/objects/documentItem"));
const makeForwardingListener_1 = __importDefault(require("./makeForwardingListener"));
/**
 * Based on the provided function / listener name, retrieve the associated function from the root domEvents.DomItem.
 * If a raw function is passed instead of a registered name, it is returned as-is - see {@link EventListener}'s
 * listenerFunc property for the tradeoffs of that discretionary path. When the root has forwardEvents set (render-
 * only mode - see setForwardEvents), every name resolves to a forwarder instead, whether or not it is registered in
 * eventActions: see makeForwardingListener.
 * @param listenerName - The name of one of the registered listener functions, or an
 * already-resolved listener function.
 * @param parent - The parent DomItem which is DomItemRoot which stores eventListeners property.
 */
const retrieveListener = (listenerName, parent = documentItem_1.default) => {
  if (typeof listenerName === 'function') {
    return listenerName;
  }
  if (parent.forwardEvents) {
    return (0, makeForwardingListener_1.default)(listenerName, parent.forwardEvents);
  }
  if (!Object.keys(parent.eventActions).includes(listenerName)) {
    throw new Error(`Undefined listener function on this DomItemRoot: ${listenerName}`);
  }
  return parent.eventActions[listenerName];
};
exports.default = retrieveListener;