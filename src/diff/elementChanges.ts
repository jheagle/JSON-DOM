import siFunciona from 'si-funciona'
import domItemHasAttribute from './domItemHasAttribute'
import createChangeList from './createChangeList'
import type { DomItem, StyleValues } from '../domItem/types'
import type { compareArrayResult, compareArrayResultMap } from 'si-funciona/dist/helpers/arrays/compareArrays'
import type { AttributeComparison, ChangeList, DotNotated } from './types'

/**
 * Given some config, provide a function to testing attribute and key existence in that config.
 * @param domItem
 */
const checkAttribute = (domItem: DomItem) =>
  (attr: unknown, key: string): AttributeComparison => {
    if (key === 'className') {
      const diff = domItemHasAttribute(domItem, key, attr)
      if (Array.isArray(diff) && diff.length === 1 && diff[0].result[0] === 0) {
        return 0
      }
      return siFunciona.filterObject(
        diff as compareArrayResultMap,
        (arrayDiff: compareArrayResult) => arrayDiff.result[0] !== 0
      ) as AttributeComparison
    }
    if (key === 'style') {
      const diff = domItemHasAttribute(domItem, key, attr)
      const styles = attr as StyleValues
      const itemStyle = (): StyleValues => domItem.attributes.style as StyleValues
      if (Array.isArray(diff) && diff.length === 1 && diff[0].result[0] === 0 && itemStyle()[diff[0].value] === styles[diff[0].value]) {
        return 0
      }
      return siFunciona.filterObject(
        diff as compareArrayResultMap,
        (arrayDiff: compareArrayResult) => (arrayDiff.result[0] !== 0 || itemStyle()[arrayDiff.value] !== styles[arrayDiff.value])
      ) as AttributeComparison
    }
    return domItemHasAttribute(domItem, key, attr)
  }

/**
 * Updates all the keys to be camelCase
 * @param domItem
 */
const camelCaseAttributes = (domItem: DomItem): Record<string, any> => domItem.element
  ? siFunciona.reduceObject(
    (domItem.element as HTMLElement).attributes as unknown as Record<string, Attr>,
    (attributes: Record<string, any>, attr: Attr) => {
      if (!attr.name) {
        return attributes
      }
      const camelKey = attr.name === 'class' ? 'className' : siFunciona.camelCase(attr.name)
      const attributeValue = (domItem.element as unknown as Record<string, unknown>)[attr.name] ?? attr.value
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
 * @param domItem - The DomItem having the element which changes to be applied to the config
 * element
 */
const elementChanges = (domItem: DomItem): ChangeList => {
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
    (attr: unknown, key: string) => checkAttribute(domItem)(attr, key)
  )
  return siFunciona.reduceObject(
    diffMap,
    (changed: ChangeList, result: AttributeComparison, key: string) => {
      const isArray = Array.isArray(result)
      if (!isArray && !result) {
        // Skip if the attribute is not changed (false and not an array)
        return changed
      }
      if (!isArray) {
        // Not an array, simply set the attribute as added
        changed.added[`attributes.${key}`] = (domItem.element as unknown as Record<string, unknown>)[key] ?? (domItem.element as HTMLElement).getAttribute(siFunciona.kabobCase(key))
        return changed
      }
      if (key !== 'className' && key !== 'style') {
        // Is an array, but not class or style; we don't know what this is, so we skip it.
        return changed
      }
      if (key === 'className') {
        changed.removed = result.reduce(
          (removed: DotNotated, results: compareArrayResult) => {
            if (results.result[0] === -1) {
              removed[`attributes.className.${results.keys[1]}`] = results.value
            }
            return removed
          },
          changed.removed
        )
        changed.added = result.reduce(
          (added: DotNotated, results: compareArrayResult) => {
            if (results.result[0] === 1) {
              added[`attributes.className.${results.keys[0]}`] = results.value
            }
            return added
          },
          changed.added
        )
        return changed
      }
      const itemStyle = (): StyleValues => domItem.attributes.style as StyleValues
      changed.removed = result.reduce(
        (removed: DotNotated, results: compareArrayResult) => {
          if (results.result[0] === -1) {
            removed[`attributes.style.${results.value}`] = itemStyle()[results.value]
          }
          if (results.result[0] === 0 && itemStyle()[results.value] !== elementAttributes.style[results.value]) {
            removed[`attributes.style.${results.value}`] = itemStyle()[results.value]
          }
          return removed
        },
        changed.removed
      )
      changed.added = result.reduce(
        (added: DotNotated, results: compareArrayResult) => {
          if (results.result[0] === 1) {
            added[`attributes.style.${results.value}`] = elementAttributes.style[results.value]
          }
          if (results.result[0] === 0 && itemStyle()[results.value] !== elementAttributes.style[results.value]) {
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
