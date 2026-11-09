"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const getAssignedStyles_1 = __importDefault(require("./getAssignedStyles"));
const si_funciona_1 = __importDefault(require("si-funciona"));
/**
 * For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute
 * @param element
 * @param attr
 */
const checkStyles = (element, attr = {}) => {
  const assignedStyles = (0, getAssignedStyles_1.default)(element.style) ?? {};
  if (si_funciona_1.default.emptyObject(assignedStyles)) {
    return 1;
  }
  return si_funciona_1.default.compareArrays(Object.keys(attr).map(si_funciona_1.default.kabobCase), Object.keys(assignedStyles));
};
/**
 * For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute
 * @param element
 * @param attr
 */
const checkClasses = (element, attr = '') => {
  if (typeof attr !== 'string') {
    // Somehow an empty object got in here one time
    attr = '';
  }
  const assignedClasses = Array.from(element.classList);
  if (!assignedClasses.length) {
    return 1;
  }
  return si_funciona_1.default.compareArrays(attr.split(' '), assignedClasses);
};
/**
 * Check if the provided Element has the provided attributes.
 * Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.
 * @param element - Receive the element to be assessed
 * @param key - The attribute name to search for
 * @param attr - The expected value of the attribute to compare against
 */
const elementHasAttribute = (element, key, attr) => {
  if (!element) {
    return 1;
  }
  if (key === 'style') {
    return checkStyles(element, attr);
  }
  if (key === 'class') {
    return checkClasses(element, attr);
  }
  const kabobKey = si_funciona_1.default.kabobCase(key);
  if (!element.hasAttribute(kabobKey)) {
    return 1;
  }
  if (element.getAttribute(kabobKey) === attr) {
    return 0;
  }
  return 1;
};
exports.default = elementHasAttribute;