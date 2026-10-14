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
require("core-js/stable");
const bindListeners_1 = __importDefault(require("../events/functions/bindListeners"));
const deactivateListeners_1 = __importDefault(require("../events/functions/deactivateListeners"));
const domItemChanges_1 = __importDefault(require("../diff/domItemChanges"));
const si_funciona_1 = __importDefault(require("si-funciona"));
const generateElement_1 = __importDefault(require("./generateElement"));
const updateChildNodes_1 = __importDefault(require("./updateChildNodes"));
/**
 * Update a single objects.DomItem element with the provided attributes / style / elementProperties.
 *
 * Safe to call standalone (not just through {@link updateElements}/{@link renderHtml}): whenever this ends up
 * (re)generating domItem.element - because it had none yet, or because nodeName changed - it also re-attaches
 * domItem's direct children onto that element via {@link updateChildNodes}, so a bare call never orphans an
 * existing child subtree. The plain attribute/style patch path below doesn't touch domItem.element itself, so it
 * doesn't need to.
 * @param domItem - The DomItem having domItem changes to be applied to its
 * element
 */
const updateElement = domItem => {
  if (!domItem.element) {
    return (0, updateChildNodes_1.default)((0, generateElement_1.default)((0, deactivateListeners_1.default)(domItem)));
  }
  const changes = (0, domItemChanges_1.default)(domItem);
  // From here on the item has an element (an element which is missing was generated above)
  const element = domItem.element;
  const properties = element;
  if (changes.removed.nodeName || changes.added.nodeName) {
    // if the nodeName has changed then remove the element and create a new one
    element.remove();
    return (0, updateChildNodes_1.default)((0, generateElement_1.default)((0, deactivateListeners_1.default)(domItem)));
  }
  for (const dotKey in changes.removed) {
    const value = changes.removed[dotKey];
    if (!dotKey.includes('.')) {
      if (dotKey in element) {
        delete properties[dotKey];
        continue;
      }
      element.removeAttribute(dotKey);
      continue;
    }
    const baseKey = si_funciona_1.default.strBefore(dotKey, '.');
    if (baseKey !== 'class' && baseKey !== 'style') {
      throw new Error('Unhandled dotKey: ' + dotKey);
    }
    if (baseKey === 'class') {
      element.classList.remove(value);
      continue;
    }
    // The key is usually already kebab-case here (domItemChanges normalizes it), but not always - see the fix
    // notes on the matching line below. kabobCase on an already-kebab string is a harmless no-op.
    element.style.removeProperty(si_funciona_1.default.kabobCase(si_funciona_1.default.strAfter(dotKey, '.')));
  }
  for (const dotKey in changes.added) {
    const value = changes.added[dotKey];
    if (dotKey === 'className') {
      element.className = value;
      continue;
    }
    if (dotKey === 'style') {
      // Update all styles based on incoming style object
      // setProperty wants CSS names (background-color), but the style object is written in camelCase (backgroundColor)
      for (const style in value) {
        element.style.setProperty(si_funciona_1.default.kabobCase(style), value[style]);
      }
      continue;
    }
    if (!dotKey.includes('.')) {
      if (dotKey in element && dotKey !== 'form') {
        // Some things can be assigned directly, but 'form' attribute cannot
        properties[dotKey] = value;
        continue;
      }
      element.setAttribute(dotKey, value);
      continue;
    }
    const baseKey = si_funciona_1.default.strBefore(dotKey, '.');
    if (baseKey !== 'class' && baseKey !== 'style') {
      throw new Error('Unhandled dotKey: ' + dotKey);
    }
    if (baseKey === 'class' && (/\s/.test(value) || !value)) {
      // Skip this empty class name
      continue;
    }
    if (baseKey === 'class') {
      element.classList.add(value);
      continue;
    }
    // domItemChanges is expected to hand this key through already kebab-cased, but a style property which was
    // already assigned on the element (changed, not newly added) can come back through as its original camelCase
    // form; CSSOM silently ignores setProperty with an invalid (camelCase) name, so the style is dropped with no
    // error. kabobCase here is a harmless no-op when the key is already kebab, and a real fix when it is not.
    element.style.setProperty(si_funciona_1.default.kabobCase(si_funciona_1.default.strAfter(dotKey, '.')), value);
  }
  return (0, bindListeners_1.default)(domItem);
};
exports.default = updateElement;