"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const si_funciona_1 = __importDefault(require("si-funciona"));
const documentItem_1 = __importDefault(require("../../domItem/objects/documentItem"));
/**
 * Register multiple listeners from an array of functions.
 * @param listeners - An array of functions to be
 * used as the registered event listeners.
 * @param parent - The parent DomItem which is DomItemRoot which has eventActions property.
 */
const registerListeners = (listeners, parent = documentItem_1.default) => {
  si_funciona_1.default.mergeObjectsMutable(parent.eventActions, listeners);
  return parent;
};
exports.default = registerListeners;