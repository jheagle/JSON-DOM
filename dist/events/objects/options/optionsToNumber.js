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
/**
 * Take the given options and convert them (using binary) to an integer. Given listener options, each one is assigned a
 * bitwise position. The resulting binary number represents any possible combination of the available flags set.
 * @param optionsTemplate
 * @param listenerOptions
 */
const optionsToNumber = (optionsTemplate, listenerOptions) => {
  if (!listenerOptions) {
    return 0;
  }
  return si_funciona_1.default.reduceObject(optionsTemplate, (binaryOptions, flag, name) => listenerOptions[name] ? binaryOptions | flag : binaryOptions, 0);
};
exports.default = optionsToNumber;