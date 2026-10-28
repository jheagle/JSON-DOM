"use strict";

require("core-js/modules/es.array.includes.js");
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const documentItem_1 = __importDefault(require("../objects/documentItem"));
const gatherChildItems_1 = __importDefault(require("./gatherChildItems"));
/**
 * Helper for getting all domGeneral.DomItems starting at item and carrying the given class, among possibly several
 * space-separated classes on that item - the same membership check as the real DOM's classList.contains, not an
 * exact match of the whole className attribute string (which getChildrenFromAttribute does, and which would miss
 * an item that also carries other classes).
 * @param className - The one class being searched for
 * @param item - The DomItem which may have child items carrying the class
 */
const getChildrenByClass = (className, item = documentItem_1.default.body) => (0, gatherChildItems_1.default)(item, (child, gatheredResults) => (child.attributes.className ?? '').split(' ').includes(className) ? gatheredResults.concat([child]) : gatheredResults);
exports.default = getChildrenByClass;