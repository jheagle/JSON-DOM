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
const definitions_1 = __importDefault(require("./definitions"));
/**
 * The runtime definition of a trait, if it was defined.
 * @param name - The name of the trait.
 */
const getTraitDefinition = name => definitions_1.default.get(name);
exports.default = getTraitDefinition;