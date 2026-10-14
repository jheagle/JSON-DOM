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
const documentItem_1 = __importDefault(require("../objects/documentItem"));
const gatherChildItems_1 = __importDefault(require("./gatherChildItems"));
const getChildTest_1 = __importDefault(require("./getChildTest"));
/**
 * A selector function for retrieving existing child domGeneral.DomItems from the given parent item.
 * This function will check all the children starting from item, and scan the attributes
 * property for matches. The returned array contains children matching from all levels.
 * WARNING: This calls a recursive function.
 * @param attr - Provide the attribute name to be searched
 * @param value - The attribute value to be compared
 * @param item - The DomItem which may have child items matching the attribute
 * criteria
 */
const getChildrenFromAttribute = (attr, value, item = documentItem_1.default.body) => (0, gatherChildItems_1.default)(item, (0, getChildTest_1.default)(attr, value));
exports.default = getChildrenFromAttribute;