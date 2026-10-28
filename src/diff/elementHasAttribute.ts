import getAssignedStyles from './getAssignedStyles'
import siFunciona from 'si-funciona'
import type { StyleValues } from '../domItem/types'
import type { AttributeComparison } from './types'

/**
 * For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute
 * @param element
 * @param attr
 */
const checkStyles = (element: HTMLElement, attr: StyleValues = {}): AttributeComparison => {
  const assignedStyles = getAssignedStyles(element.style) ?? {}
  if (siFunciona.emptyObject(assignedStyles)) {
    return 1
  }
  return siFunciona.compareArrays(
    Object.keys(attr).map(siFunciona.kabobCase),
    Object.keys(assignedStyles)
  )
}

/**
 * For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute
 * @param element
 * @param attr
 */
const checkClasses = (element: HTMLElement, attr: string | object = ''): AttributeComparison => {
  if (typeof attr !== 'string') {
    // Somehow an empty object got in here one time
    attr = ''
  }
  const assignedClasses = Array.from(element.classList)
  if (!assignedClasses.length) {
    return 1
  }
  return siFunciona.compareArrays(
    attr.split(' '),
    assignedClasses
  )
}

/**
 * Check if the provided Element has the provided attributes.
 * Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.
 * @param element - Receive the element to be assessed
 * @param key - The attribute name to search for
 * @param attr - The expected value of the attribute to compare against
 */
const elementHasAttribute = (element: HTMLElement | null | undefined, key: string, attr: unknown): AttributeComparison => {
  if (!element) {
    return 1
  }
  if (key === 'style') {
    return checkStyles(element, attr as StyleValues)
  }
  if (key === 'class') {
    return checkClasses(element, attr as string | object)
  }
  const kabobKey = siFunciona.kabobCase(key)
  if (!element.hasAttribute(kabobKey)) {
    return 1
  }
  if (element.getAttribute(kabobKey) === attr) {
    return 0
  }
  return 1
}

export default elementHasAttribute
