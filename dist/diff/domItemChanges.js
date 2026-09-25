'use strict'

require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.reduce.js')
const __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule
    ? mod
    : {
        default: mod
      }
}
Object.defineProperty(exports, '__esModule', {
  value: true
})
require('core-js/stable')
const si_funciona_1 = __importDefault(require('si-funciona'))
const elementHasAttribute_1 = __importDefault(require('./elementHasAttribute'))
const createChangeList_1 = __importDefault(require('./createChangeList'))
/**
 * @typedef {module:objectHelpers~mapCallback} testAttributeChange
 * @memberOf module:domGeneral
 * @param {*} attr - The current property being processed in the object.
 * @param {string} key - The property name of the current property being processed in the object.
 * @return {int} - -1: removed, 0: unchanged, 1: added.
 */
/**
 * Given some config, provide a function to testing attribute and key existence in that config.
 * @function
 * @memberOf module:domGeneral
 * @param {Node|HTMLElement} element
 * @returns {testAttributeChange}
 */
const checkAttribute = element => (attr, key) => {
  if (typeof attr === 'object') {
    const styles = attr
    const elementStyle = () => element.style
    const styleDiff = (0, elementHasAttribute_1.default)(element, key, attr)
    if (Array.isArray(styleDiff) && styleDiff.length === 1 && styleDiff[0].result[0] === 0 && elementStyle()[styleDiff[0].value] === styles[styleDiff[0].value]) {
      return 0
    }
    // Check new, removed, or changed styles
    return si_funciona_1.default.filterObject(styleDiff, arrayDiff => arrayDiff.result[0] !== 0 || elementStyle()[arrayDiff.value] !== styles[arrayDiff.value])
  }
  if (key === 'class') {
    const classDiff = (0, elementHasAttribute_1.default)(element, key, attr)
    if (Array.isArray(classDiff) && classDiff.length === 1 && classDiff[0].result[0] === 0) {
      return 0
    }
    return si_funciona_1.default.filterObject(classDiff, arrayDiff => arrayDiff.result[0] !== 0)
  }
  return (0, elementHasAttribute_1.default)(element, key, attr)
}
/**
 * Updates all the keys to be kabob-case
 * @function
 * @memberOf module:domGeneral
 * @param {Object.<string, *>} attributesToSet
 * @returns {Object.<string, *>}
 */
const kabobCaseAttributes = attributesToSet => si_funciona_1.default.reduceObject(attributesToSet, (attributes, value, name) => {
  let attrValue = attributesToSet[name] ?? value
  if (si_funciona_1.default.isObject(attrValue)) {
    attrValue = kabobCaseAttributes(attrValue)
  }
  const kabobKey = name === 'className' ? 'class' : si_funciona_1.default.kabobCase(name)
  attributes[kabobKey] = attrValue
  return attributes
}, {})
/**
 * Given a domGeneral.DomItem as domItem, this function will return the changes to be applied
 * to the stored element property.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} domItem - The DomItem having changes to be applied to its element
 * @returns {ChangeList}
 */
const domItemChanges = domItem => {
  const changeList = (0, createChangeList_1.default)()
  if (!domItem.element) {
    changeList.added.nodeName = domItem.nodeName.toLowerCase()
  }
  if (domItem.element && domItem.element.nodeName.toLowerCase() !== domItem.nodeName.toLowerCase()) {
    // This should trigger new element creation
    changeList.removed.nodeName = domItem.element.nodeName.toLowerCase()
    changeList.added.nodeName = domItem.nodeName.toLowerCase()
  }
  if (domItem.nodeValue !== null) {
    if (!si_funciona_1.default.emptyObject(domItem.attributes)) {
      changeList.added = changeList.appendChanges('added', si_funciona_1.default.dotNotate(domItem.attributes))
    }
    if (!domItem.element) {
      changeList.added.nodeValue = domItem.nodeValue
      return changeList
    }
    changeList.removed.nodeValue = domItem.element.nodeValue
    if (domItem.element.nodeValue !== domItem.nodeValue) {
      changeList.added.nodeValue = domItem.nodeValue
    }
    return changeList
  }
  const domItemAttributes = kabobCaseAttributes(domItem.attributes)
  const diffMap = si_funciona_1.default.mapObject(domItemAttributes, (attr, key) => checkAttribute(domItem.element)(attr, key))
  return si_funciona_1.default.reduceObject(diffMap, (changed, result, key) => {
    const isArray = Array.isArray(result)
    if (!isArray && !result) {
      // Skip if the attribute is not changed (false and not an array)
      return changed
    }
    if (!isArray && key === 'class') {
      // Full class name string set
      changed.added.className = domItem.attributes.className
      return changed
    }
    if (!isArray) {
      // Not an array, simply set the attribute as added
      changed.added[key] = domItem.attributes[si_funciona_1.default.camelCase(key)]
      return changed
    }
    if (key !== 'class' && key !== 'style') {
      // Is an array, but not class or style; we don't know what this is, so we skip it.
      return changed
    }
    if (key === 'class') {
      changed.removed = result.reduce((removed, results) => {
        if (results.result[0] === -1) {
          removed[`class.${results.keys[1]}`] = results.value
        }
        return removed
      }, changed.removed)
      changed.added = result.reduce((added, results) => {
        if (results.result[0] === 1) {
          added[`class.${results.keys[0]}`] = results.value
        }
        return added
      }, changed.added)
      return changed
    }
    const elementStyle = () => domItem.element.style
    changed.removed = result.reduce((removed, results) => {
      if (!domItem.element) {
        return removed
      }
      if (results.result[0] === -1) {
        removed[`style.${results.value}`] = elementStyle()[results.value]
      }
      if (results.result[0] === 0 && elementStyle()[results.value] !== domItemAttributes.style[results.value]) {
        removed[`style.${results.value}`] = elementStyle()[results.value]
      }
      return removed
    }, changed.removed)
    changed.added = result.reduce((added, results) => {
      if (results.result[0] === 1) {
        added[`style.${results.value}`] = domItemAttributes.style[results.value]
      }
      if (results.result[0] === 0 && elementStyle()[results.value] !== domItemAttributes.style[results.value]) {
        added[`style.${results.value}`] = domItemAttributes.style[results.value]
      }
      return added
    }, changed.added)
    return changed
  }, changeList)
}
exports.default = domItemChanges
