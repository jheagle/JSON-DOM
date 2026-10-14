"use strict";

require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.map.js");
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
require("core-js/stable");
const si_funciona_1 = __importDefault(require("si-funciona"));
const getAssignedStyles_1 = __importDefault(require("./getAssignedStyles"));
/**
 * For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute
 * @param domItem
 * @param attr
 */
const checkStyles = (domItem, attr = {}) => {
  const assignedStyles = domItem.attributes.style ?? {};
  if (si_funciona_1.default.emptyObject(assignedStyles)) {
    return 1;
  }
  return si_funciona_1.default.compareArrays(Object.keys((0, getAssignedStyles_1.default)(attr)).map(si_funciona_1.default.camelCase), Object.keys(assignedStyles));
};
/**
 * For attributes which are objects or multipart strings -1 = remove attribute, 0 = no change, 1 = add attribute
 * @param domItem
 * @param attr
 */
const checkClasses = (domItem, attr = '') => {
  const assignedClasses = domItem.attributes.className ?? '';
  if (!assignedClasses.length) {
    return 1;
  }
  return si_funciona_1.default.compareArrays(attr.split(' '), assignedClasses.split(' '));
};
/**
 * Check if the provided DomItem has the provided attributes.
 * Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.
 * @param domItem - Receive the DomItem to be assessed
 * @param key - The attribute name to search for
 * @param attr - The expected value of the attribute to compare against
 */
const domItemHasAttribute = (domItem, key, attr) => {
  if (key === 'style') {
    return checkStyles(domItem, attr);
  }
  if (key === 'className') {
    return checkClasses(domItem, attr);
  }
  const camelKey = si_funciona_1.default.camelCase(key);
  if (typeof domItem.attributes[camelKey] === 'undefined') {
    return 1;
  }
  if (domItem.attributes[camelKey] === attr) {
    return 0;
  }
  return 1;
};
exports.default = domItemHasAttribute;