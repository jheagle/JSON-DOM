"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const getTopParentItem_1 = __importDefault(require("../../domItem/tree/getTopParentItem"));
const makeEventHandler_1 = __importDefault(require("./makeEventHandler"));
const createEventResponder_1 = __importDefault(require("../objects/createEventResponder"));
const getListenerOptions_1 = __importDefault(require("../objects/options/getListenerOptions"));
const optionsToNumber_1 = __importDefault(require("../objects/options/optionsToNumber"));
const retrieveListener_1 = __importDefault(require("./retrieveListener"));
/**
 * Activate listener by pushing it to activeListeners.
 * @param eventName
 * @param eventListener
 * @param item
 */
const activateListener = (eventName, eventListener, item) => {
  const listenerOptions = (0, getListenerOptions_1.default)();
  if (typeof item.activeListeners === 'undefined') {
    item.activeListeners = {};
  }
  if (!(eventName in item.activeListeners)) {
    item.activeListeners[eventName] = {};
  }
  const optionIdentifier = (0, optionsToNumber_1.default)(listenerOptions, eventListener.listenerOptions);
  if (!(optionIdentifier in item.activeListeners[eventName])) {
    item.activeListeners[eventName][optionIdentifier] = [];
  }
  const listenerFunc = (0, retrieveListener_1.default)(eventListener.listenerFunc, (0, getTopParentItem_1.default)(item));
  const eventHandler = (0, makeEventHandler_1.default)(listenerFunc, item, eventListener.listenerArgs);
  const eventResponder = (0, createEventResponder_1.default)(eventHandler, !!(optionIdentifier & listenerOptions.signal));
  item.activeListeners[eventName][optionIdentifier].push(eventResponder);
  eventListener.activeResponder = eventResponder;
  return item;
};
exports.default = activateListener;