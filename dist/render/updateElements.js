"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const updateChildNodes_1 = __importDefault(require("./updateChildNodes"));
const updateElement_1 = __importDefault(require("./updateElement"));
/**
 * Generate HTML element data for each object in the matrix
 * WARNING: This is a recursive function.
 * @param config - The DomItem having child DomItems with config changes to be
 * applied
 */
const updateElements = config => {
  if (config.nodeName === '#document') {
    for (const child of config.children) {
      updateElements(child);
    }
    return config;
  }
  const domItem = (0, updateChildNodes_1.default)((0, updateElement_1.default)(config));
  domItem.children.forEach(updateElements);
  return domItem;
};
exports.default = updateElements;