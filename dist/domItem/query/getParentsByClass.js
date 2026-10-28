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
const si_funciona_1 = __importDefault(require("si-funciona"));
/**
 * Helper for getting all domGeneral.DomItems going up from item's parent, each one carrying the given class, among
 * possibly several space-separated classes on that item - the same membership check as the real DOM's
 * classList.contains, not an exact match of the whole className attribute string (which getParentsFromAttribute
 * does, and which would miss a parent that also carries other classes).
 * WARNING: This is a recursive function.
 * @param className - The one class being searched for
 * @param item - The DomItem which may have parent items carrying the class
 */
const getParentsByClass = (className, item = documentItem_1.default.body) => {
  if (item.parentItem === null) {
    if (item.nodeName === '#document') {
      throw new Error('Root parent item must be an empty object, null reference found.');
    }
    throw new Error('Detached child, missing parentItem reference. Use empty object if this is the root item.');
  }
  if (si_funciona_1.default.emptyObject(item.parentItem)) {
    return [];
  }
  const parent = item.parentItem;
  const carriesClass = (parent.attributes.className ?? '').split(' ').includes(className);
  return carriesClass ? getParentsByClass(className, parent).concat([parent]) : getParentsByClass(className, parent);
};
exports.default = getParentsByClass;