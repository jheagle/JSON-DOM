import 'core-js/stable'
import siFunciona from 'si-funciona'
import domItemHasAttribute from './domItemHasAttribute.js'
import createChangeList from '../objects/createChangeList.js'

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
 * @param {DomItem} domItem
 * @returns {testAttributeChange}
 */
const checkAttribute = domItem =>
  (attr, key) => {
    if (key === 'className') {
      const diff = domItemHasAttribute(domItem, key, attr)
      if (diff.length === 1 && diff[0].result[0] === 0) {
        return 0
      }
      return siFunciona.filterObject(
        diff,
        arrayDiff => arrayDiff.result[0] !== 0
      )
    }
    if (key === 'style') {
      const diff = domItemHasAttribute(domItem, key, attr)
      const firstDiffResult = diff[0]
      if (diff.length === 1 && firstDiffResult.result[0] === 0 && domItem.attributes.style[firstDiffResult.value] === attr[firstDiffResult.value]) {
        return 0
      }
      return siFunciona.filterObject(
        diff,
        arrayDiff => (arrayDiff.result[0] !== 0 || domItem.attributes.style[arrayDiff.value] !== attr[arrayDiff.value])
      )
    }
    return domItemHasAttribute(domItem, key, attr)
  }

/**
 * Updates all the keys to be camelCase
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} domItem
 * @returns {Object.<string, *>}
 */
const camelCaseAttributes = domItem => domItem.element
  ? siFunciona.reduceObject(
    domItem.element.attributes,
    (attributes, attr) => {
      if (!attr.name) {
        return attributes
      }
      const camelKey = attr.name === 'class' ? 'className' : siFunciona.camelCase(attr.name)
      const attributeValue = domItem.element[attr.name] ?? attr.value
      if (typeof attributeValue === 'undefined') {
        return attributes
      }
      attributes[camelKey] = attributeValue
      return attributes
    },
    {}
  )
  : {}

/**
 * Given a domGeneral.DomItem as config, this function will return the changes from the element
 * to be applied to the domItem.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} domItem - The DomItem having the element which changes to be applied to the config
 * element
 * @returns {ChangeList}
 */
const elementChanges = domItem => {
  const changeList = createChangeList()
  if (!domItem.element) {
    changeList.removed.nodeName = domItem.nodeName.toLowerCase()
  }
  if (domItem.element && domItem.element.nodeName.toLowerCase() !== domItem.nodeName.toLowerCase()) {
    changeList.removed.nodeName = domItem.nodeName.toLowerCase()
    changeList.added.nodeName = domItem.element.nodeName.toLowerCase()
  }
  if (!domItem.element && domItem.nodeValue !== null) {
    changeList.removed.nodeValue = domItem.nodeValue
    if (!siFunciona.emptyObject(domItem.attributes)) {
      changeList.removed = changeList.appendChanges('removed', siFunciona.dotNotate({ attributes: domItem.attributes }))
    }
    return changeList
  }
  if (domItem.element && !(domItem.element instanceof Element)) {
    if (domItem.element.nodeValue !== domItem.nodeValue) {
      changeList.added.nodeValue = domItem.element.nodeValue
    }
    if (!siFunciona.emptyObject(domItem.attributes)) {
      changeList.removed = changeList.appendChanges('removed', siFunciona.dotNotate({ attributes: domItem.attributes }))
    }
    return changeList
  }
  if (!(domItem.element && domItem.element.hasAttributes()) && !siFunciona.emptyObject(domItem.attributes)) {
    changeList.removed = changeList.appendChanges('removed', siFunciona.dotNotate({ attributes: domItem.attributes }))
    return changeList
  }
  const elementAttributes = camelCaseAttributes(domItem)

  const diffMap = siFunciona.mapObject(
    elementAttributes,
    (attr, key) => checkAttribute(domItem)(attr, key)
  )
  return siFunciona.reduceObject(
    diffMap,
    (changed, result, key) => {
      const isArray = Array.isArray(result)
      if (!isArray && !result) {
        // Skip if the attribute is not changed (false and not an array)
        return changed
      }
      if (!isArray) {
        // Not an array, simply set the attribute as added
        changed.added[`attributes.${key}`] = domItem.element[key] ?? domItem.element.getAttribute(siFunciona.kabobCase(key))
        return changed
      }
      if (key !== 'className' && key !== 'style') {
        // Is an array, but not class or style; we don't know what this is, so we skip it.
        return changed
      }
      if (key === 'className') {
        changed.removed = result.reduce(
          (removed, results) => {
            if (results.result[0] === -1) {
              removed[`attributes.className.${results.keys[1]}`] = results.value
            }
            return removed
          },
          changed.removed
        )
        changed.added = result.reduce(
          (added, results) => {
            if (results.result[0] === 1) {
              added[`attributes.className.${results.keys[0]}`] = results.value
            }
            return added
          },
          changed.added
        )
        return changed
      }
      changed.removed = result.reduce(
        (removed, results) => {
          if (results.result[0] === -1) {
            removed[`attributes.style.${results.value}`] = domItem.attributes.style[results.value]
          }
          if (results.result[0] === 0 && domItem.attributes.style[results.value] !== elementAttributes.style[results.value]) {
            removed[`attributes.style.${results.value}`] = domItem.attributes.style[results.value]
          }
          return removed
        },
        changed.removed
      )
      changed.added = result.reduce(
        (added, results) => {
          if (results.result[0] === 1) {
            added[`attributes.style.${results.value}`] = elementAttributes.style[results.value]
          }
          if (results.result[0] === 0 && domItem.attributes.style[results.value] !== elementAttributes.style[results.value]) {
            added[`attributes.style.${results.value}`] = elementAttributes.style[results.value]
          }
          return added
        },
        changed.added
      )
      return changed
    },
    changeList
  )
}

export default elementChanges
