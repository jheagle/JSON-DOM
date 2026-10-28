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
 * Take an integer representation of the listener options and convert them to the listener options object.
 * @param optionsTemplate
 * @param binaryOptions
 */
const numberToOptions = (optionsTemplate, binaryOptions) => si_funciona_1.default.mapObject(optionsTemplate, flag => !!(binaryOptions & flag));
exports.default = numberToOptions;