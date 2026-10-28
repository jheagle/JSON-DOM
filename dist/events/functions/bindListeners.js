"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const bindElementListeners_1 = __importDefault(require("./bindElementListeners"));
const si_funciona_1 = __importDefault(require("si-funciona"));
/**
 * Based on the eventListeners property of the provided item, bind the
 * listeners to the associated element property for the provided domEvents.DomItem.
 * @param item - The DomItem which may have eventListeners to apply to its
 * element
 */
const bindListeners = item => !si_funciona_1.default.emptyObject(item.eventListeners) && item.element ? (0, bindElementListeners_1.default)(item) : item;
exports.default = bindListeners;