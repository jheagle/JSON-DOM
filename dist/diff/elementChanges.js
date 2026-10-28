"use strict";

require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.reduce.js");
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const si_funciona_1 = __importDefault(require("si-funciona"));
const domItemHasAttribute_1 = __importDefault(require("./domItemHasAttribute"));
const createChangeList_1 = __importDefault(require("./createChangeList"));
/**
 * Given some config, provide a function to testing attribute and key existence in that config.
 * @param domItem
 */
const checkAttribute = domItem => (attr, key) => {
  if (key === 'className') {
    const diff = (0, domItemHasAttribute_1.default)(domItem, key, attr);
    if (Array.isArray(diff) && diff.length === 1 && diff[0].result[0] === 0) {
      return 0;
    }
    return si_funciona_1.default.filterObject(diff, arrayDiff => arrayDiff.result[0] !== 0);
  }
  if (key === 'style') {
    const diff = (0, domItemHasAttribute_1.default)(domItem, key, attr);
    const styles = attr;
    const itemStyle = () => domItem.attributes.style;
    if (Array.isArray(diff) && diff.length === 1 && diff[0].result[0] === 0 && itemStyle()[diff[0].value] === styles[diff[0].value]) {
      return 0;
    }
    return si_funciona_1.default.filterObject(diff, arrayDiff => arrayDiff.result[0] !== 0 || itemStyle()[arrayDiff.value] !== styles[arrayDiff.value]);
  }
  return (0, domItemHasAttribute_1.default)(domItem, key, attr);
};
/**
 * Updates all the keys to be camelCase
 * @param domItem
 */
const camelCaseAttributes = domItem => domItem.element ? si_funciona_1.default.reduceObject(domItem.element.attributes, (attributes, attr) => {
  if (!attr.name) {
    return attributes;
  }
  const camelKey = attr.name === 'class' ? 'className' : si_funciona_1.default.camelCase(attr.name);
  const attributeValue = domItem.element[attr.name] ?? attr.value;
  if (typeof attributeValue === 'undefined') {
    return attributes;
  }
  attributes[camelKey] = attributeValue;
  return attributes;
}, {}) : {};
/**
 * Given a domGeneral.DomItem as config, this function will return the changes from the element
 * to be applied to the domItem.
 * @param domItem - The DomItem having the element which changes to be applied to the config
 * element
 */
const elementChanges = domItem => {
  const changeList = (0, createChangeList_1.default)();
  if (!domItem.element) {
    changeList.removed.nodeName = domItem.nodeName.toLowerCase();
  }
  if (domItem.element && domItem.element.nodeName.toLowerCase() !== domItem.nodeName.toLowerCase()) {
    changeList.removed.nodeName = domItem.nodeName.toLowerCase();
    changeList.added.nodeName = domItem.element.nodeName.toLowerCase();
  }
  if (!domItem.element && domItem.nodeValue !== null) {
    changeList.removed.nodeValue = domItem.nodeValue;
    if (!si_funciona_1.default.emptyObject(domItem.attributes)) {
      changeList.removed = changeList.appendChanges('removed', si_funciona_1.default.dotNotate({
        attributes: domItem.attributes
      }));
    }
    return changeList;
  }
  if (domItem.element && !(domItem.element instanceof Element)) {
    if (domItem.element.nodeValue !== domItem.nodeValue) {
      changeList.added.nodeValue = domItem.element.nodeValue;
    }
    if (!si_funciona_1.default.emptyObject(domItem.attributes)) {
      changeList.removed = changeList.appendChanges('removed', si_funciona_1.default.dotNotate({
        attributes: domItem.attributes
      }));
    }
    return changeList;
  }
  if (!(domItem.element && domItem.element.hasAttributes()) && !si_funciona_1.default.emptyObject(domItem.attributes)) {
    changeList.removed = changeList.appendChanges('removed', si_funciona_1.default.dotNotate({
      attributes: domItem.attributes
    }));
    return changeList;
  }
  const elementAttributes = camelCaseAttributes(domItem);
  const diffMap = si_funciona_1.default.mapObject(elementAttributes, (attr, key) => checkAttribute(domItem)(attr, key));
  return si_funciona_1.default.reduceObject(diffMap, (changed, result, key) => {
    const isArray = Array.isArray(result);
    if (!isArray && !result) {
      // Skip if the attribute is not changed (false and not an array)
      return changed;
    }
    if (!isArray) {
      // Not an array, simply set the attribute as added
      changed.added[`attributes.${key}`] = domItem.element[key] ?? domItem.element.getAttribute(si_funciona_1.default.kabobCase(key));
      return changed;
    }
    if (key !== 'className' && key !== 'style') {
      // Is an array, but not class or style; we don't know what this is, so we skip it.
      return changed;
    }
    if (key === 'className') {
      changed.removed = result.reduce((removed, results) => {
        if (results.result[0] === -1) {
          removed[`attributes.className.${results.keys[1]}`] = results.value;
        }
        return removed;
      }, changed.removed);
      changed.added = result.reduce((added, results) => {
        if (results.result[0] === 1) {
          added[`attributes.className.${results.keys[0]}`] = results.value;
        }
        return added;
      }, changed.added);
      return changed;
    }
    const itemStyle = () => domItem.attributes.style;
    changed.removed = result.reduce((removed, results) => {
      if (results.result[0] === -1) {
        removed[`attributes.style.${results.value}`] = itemStyle()[results.value];
      }
      if (results.result[0] === 0 && itemStyle()[results.value] !== elementAttributes.style[results.value]) {
        removed[`attributes.style.${results.value}`] = itemStyle()[results.value];
      }
      return removed;
    }, changed.removed);
    changed.added = result.reduce((added, results) => {
      if (results.result[0] === 1) {
        added[`attributes.style.${results.value}`] = elementAttributes.style[results.value];
      }
      if (results.result[0] === 0 && itemStyle()[results.value] !== elementAttributes.style[results.value]) {
        added[`attributes.style.${results.value}`] = elementAttributes.style[results.value];
      }
      return added;
    }, changed.added);
    return changed;
  }, changeList);
};
exports.default = elementChanges;