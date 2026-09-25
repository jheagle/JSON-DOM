import 'core-js/stable'
import siFunciona from 'si-funciona'
import elementHasAttribute from './elementHasAttribute'
import createChangeList from './createChangeList'
import type { DomItem, StyleValues } from '../domItem/types'
import type { compareArrayResult, compareArrayResultMap } from 'si-funciona/dist/helpers/arrays/compareArrays'
import type { AttributeComparison, ChangeList, DotNotated } from './types'

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
const checkAttribute = (element: HTMLElement | null) =>
  (attr: unknown, key: string): AttributeComparison => {
    if (typeof attr === 'object') {
      const styles = attr as StyleValues
      const elementStyle = (): StyleValues => element!.style as unknown as StyleValues
      const styleDiff = elementHasAttribute(element, key, attr)
      if (Array.isArray(styleDiff) && styleDiff.length === 1 && styleDiff[0].result[0] === 0 && elementStyle()[styleDiff[0].value] === styles[styleDiff[0].value]) {
        return 0
      }
      // Check new, removed, or changed styles
      return siFunciona.filterObject(
        styleDiff as compareArrayResultMap,
        (arrayDiff: compareArrayResult) => (arrayDiff.result[0] !== 0 || elementStyle()[arrayDiff.value] !== styles[arrayDiff.value])
      ) as AttributeComparison
    }
    if (key === 'class') {
      const classDiff = elementHasAttribute(element, key, attr)
      if (Array.isArray(classDiff) && classDiff.length === 1 && classDiff[0].result[0] === 0) {
        return 0
      }
      return siFunciona.filterObject(
        classDiff as compareArrayResultMap,
        (arrayDiff: compareArrayResult) => arrayDiff.result[0] !== 0
      ) as AttributeComparison
    }
    return elementHasAttribute(element, key, attr)
  }

/**
 * Updates all the keys to be kabob-case
 * @function
 * @memberOf module:domGeneral
 * @param {Object.<string, *>} attributesToSet
 * @returns {Object.<string, *>}
 */
const kabobCaseAttributes = (attributesToSet: Record<string, any>): Record<string, any> => siFunciona.reduceObject(
  attributesToSet,
  (attributes: Record<string, any>, value: unknown, name: string) => {
    let attrValue: unknown = attributesToSet[name] ?? value
    if (siFunciona.isObject(attrValue)) {
      attrValue = kabobCaseAttributes(attrValue as Record<string, any>)
    }
    const kabobKey = name === 'className' ? 'class' : siFunciona.kabobCase(name)
    attributes[kabobKey] = attrValue
    return attributes
  },
  {}
)

/**
 * Given a domGeneral.DomItem as domItem, this function will return the changes to be applied
 * to the stored element property.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} domItem - The DomItem having changes to be applied to its element
 * @returns {ChangeList}
 */
/**
 * Find the name an attribute was given on the item from its kabob-case name: innerHTML is compared as inner-html, and
 * camelCase cannot turn that back into innerHTML.
 */
const attributeName = (attributes: Record<string, unknown>, kabobKey: string): string => Object.keys(attributes).find(
  name => (name === 'className' ? 'class' : siFunciona.kabobCase(name)) === kabobKey
) ?? siFunciona.camelCase(kabobKey)

const domItemChanges = (domItem: DomItem): ChangeList => {
  const changeList = createChangeList()
  if (!domItem.element) {
    changeList.added.nodeName = domItem.nodeName.toLowerCase()
  }
  if (domItem.element && domItem.element.nodeName.toLowerCase() !== domItem.nodeName.toLowerCase()) {
    // This should trigger new element creation
    changeList.removed.nodeName = domItem.element.nodeName.toLowerCase()
    changeList.added.nodeName = domItem.nodeName.toLowerCase()
  }
  if (domItem.nodeValue !== null) {
    if (!siFunciona.emptyObject(domItem.attributes)) {
      changeList.added = changeList.appendChanges('added', siFunciona.dotNotate(domItem.attributes))
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

  const diffMap = siFunciona.mapObject(
    domItemAttributes,
    (attr: unknown, key: string) => checkAttribute(domItem.element as HTMLElement | null)(attr, key)
  )
  return siFunciona.reduceObject(
    diffMap,
    (changed: ChangeList, result: AttributeComparison, key: string) => {
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
        const name = attributeName(domItem.attributes, key)
        // A property of the element (innerHTML) is set by its own name, anything else as an attribute (aria-label)
        const element = domItem.element as HTMLElement | null
        changed.added[element && name in element && name !== 'form' ? name : key] = domItem.attributes[name]
        return changed
      }
      if (key !== 'class' && key !== 'style') {
        // Is an array, but not class or style; we don't know what this is, so we skip it.
        return changed
      }
      if (key === 'class') {
        changed.removed = result.reduce(
          (removed: DotNotated, results: compareArrayResult) => {
            if (results.result[0] === -1) {
              removed[`class.${results.keys[1]}`] = results.value
            }
            return removed
          },
          changed.removed
        )
        changed.added = result.reduce(
          (added: DotNotated, results: compareArrayResult) => {
            if (results.result[0] === 1) {
              added[`class.${results.keys[0]}`] = results.value
            }
            return added
          },
          changed.added
        )
        return changed
      }
      const elementStyle = (): StyleValues => (domItem.element as HTMLElement).style as unknown as StyleValues
      changed.removed = result.reduce(
        (removed: DotNotated, results: compareArrayResult) => {
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
        },
        changed.removed
      )
      changed.added = result.reduce(
        (added: DotNotated, results: compareArrayResult) => {
          if (results.result[0] === 1) {
            added[`style.${results.value}`] = domItemAttributes.style[results.value]
          }
          if (results.result[0] === 0 && elementStyle()[results.value] !== domItemAttributes.style[results.value]) {
            added[`style.${results.value}`] = domItemAttributes.style[results.value]
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

export default domItemChanges
