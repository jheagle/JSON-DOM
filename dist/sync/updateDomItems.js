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
require("core-js/stable");
const updateChildren_1 = __importDefault(require("./updateChildren"));
const updateDomItem_1 = __importDefault(require("./updateDomItem"));
/**
 * Generate HTML element data for each object in the matrix
 * WARNING: This is a recursive function.
 * @param config - The DomItem having child DomItems with config changes to be
 * applied
 */
const updateDomItems = config => {
  if (config.nodeName === '#document') {
    for (const child of config.children) {
      updateDomItems(child);
    }
    return config;
  }
  const domItem = (0, updateChildren_1.default)((0, updateDomItem_1.default)(config));
  domItem.children.forEach(updateDomItems);
  return domItem;
};
exports.default = updateDomItems;