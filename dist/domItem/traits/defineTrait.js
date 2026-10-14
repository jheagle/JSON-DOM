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
 * Describe a trait so json-dom knows what it is at runtime: the properties it puts on an item (so they can be left out
 * of json when they only make sense where the item lives), and the defaults a new item gets. Types are added
 * separately, by merging into TraitRegistry.
 * @param name - The name of the trait, prefixed by the package which defines it: matrix.row
 * @param definition - The properties the trait puts on an item, whether they are serializable and the defaults.
 */
const defineTrait = (name, definition) => {
  definitions_1.default.set(name, definition);
  return definition;
};
exports.default = defineTrait;