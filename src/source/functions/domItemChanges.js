import 'core-js/stable'
import functionalHelpers from 'functional-helpers'
import elementHasAttribute from './elementHasAttribute.js'
import generateElement from './generateElement.js'
import { logObject } from '../../../tests/testHelpers'

const checkAttribute = element =>
  (attr, key) => {
    if (typeof attr === 'object') {
      const styleDiff = elementHasAttribute(element, key, attr)
      // Check new, removed, or changed styles
      const result = functionalHelpers.filterObject(
        styleDiff,
        arrayDiff => {
          if (arrayDiff.result[0] === 0) {
            return element[key][arrayDiff.value] !== attr[arrayDiff.value]
          }
          return arrayDiff.result[0] === 1
        }
      )
      return result
    }
    if (key === 'className') {
      const classDiff = elementHasAttribute(element, key, attr)
      // Check new or removed class names
      return functionalHelpers.filterObject(
        classDiff,
        arrayDiff => arrayDiff.result[0] !== -1
      )
    }
    // True when the element does not already have the attribute
    return !elementHasAttribute(element, key, attr)
  }

/**
 * Given a domObjects.DomItem as domItem, this function will return the changes to be applied
 * to the stored element property.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} domItem - The DomItem having changes to be applied to its element
 * @returns {DomItem}
 */
const domItemChanges = domItem => {
  if (!domItem.element) {
    return domItem
  }
  if (!domItem.element.tagName || domItem.element.tagName.toLowerCase() !== domItem.tagName.toLowerCase()) {
    // Generate a new element since the tag has changed
    return generateElement(domItem)
  }
  const diffMap = functionalHelpers.mapObject(
    domItem.attributes,
    checkAttribute(domItem.element)
  )
  domItem.attributes = functionalHelpers.reduceObject(
    diffMap,
    (changed, result, key) => {
      const isArray = Array.isArray(result)
      if (!isArray && !result) {
        return changed
      }
      if (!isArray) {
        changed[key] = domItem.attributes[key]
        return changed
      }
      if (key !== 'className' && key !== 'style') {
        return changed
      }
      const sortedResults = result.sort(
        (current, next) => {
          const currentKeys = current.keys[1]
          const nextKeys = next.keys[1]
          if (!currentKeys.length) {
            return !nextKeys.length ? 0 : 1
          }
          if (!nextKeys.length) {
            return -1
          }
          const currentIndex = currentKeys[0]
          const nextIndex = nextKeys[0]
          if (currentIndex !== nextIndex) {
            return currentIndex < nextIndex ? -1 : 1
          }
          return 0
        }
      )
      if (key === 'className') {
        changed[key] = sortedResults.reduce(
          (classes, classResult) => {
            if (classes !== '') {
              classes += ' '
            }
            classes += classResult.value
            return classes
          },
          ''
        )
        return changed
      }
      changed[key] = sortedResults.reduce(
        (styles, styleResult) => {
          styles[styleResult.value] = domItem.attributes[key][styleResult.value]
          return styles
        },
        {}
      )
      return changed
    },
    {}
  )

  return domItem
}

export default domItemChanges
