import 'core-js/stable'
import functionalHelpers from 'functional-helpers'
import domItemChanges from './domItemChanges.js'
import generateElement from './generateElement'

/**
 * Update a single objects.DomItem element with the provided attributes / style / elementProperties
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} domItem - The DomItem having domItem changes to be applied to its
 * element
 * @returns {DomItem}
 */
const updateElement = domItem => {
  if (!domItem.element) {
    return generateElement(domItem)
  }
  const changes = domItemChanges(domItem)
  if (changes.removed['nodeName'] || changes.added['nodeName']) {
    // if the nodeName has changed then remove the element and create a new one
    domItem.element.remove()
    return generateElement(domItem)
  }
  for (const dotKey in changes.removed) {
    const value = changes.removed[dotKey]
    if (!dotKey.includes('.')) {
      if (dotKey in domItem.element) {
        delete domItem.element[dotKey]
        continue
      }
      domItem.element.removeAttribute(dotKey)
      continue
    }
    const baseKey = functionalHelpers.strBefore(dotKey, '.')
    if (baseKey !== 'class' && baseKey !== 'style') {
      throw new Error('Unhandled dotKey: ' + dotKey)
    }
    if (baseKey === 'class') {
      domItem.element.classList.remove(value)
      continue
    }
    domItem.element.style.removeProperty(functionalHelpers.strAfter(dotKey, '.'))
  }
  for (const dotKey in changes.added) {
    const value = changes.added[dotKey]
    if (dotKey === 'className') {
      domItem.element.className = value
      continue
    }
    if (dotKey === 'style') {
      // Update all styles based on incoming style object
      for (let style in value) {
        domItem.element.style.setProperty(style, value[style])
      }
      continue
    }
    if (!dotKey.includes('.')) {
      if (dotKey in domItem.element) {
        domItem.element[dotKey] = value
        continue
      }
      domItem.element.setAttribute(dotKey, value)
      continue
    }
    const baseKey = functionalHelpers.strBefore(dotKey, '.')
    if (baseKey !== 'class' && baseKey !== 'style') {
      throw new Error('Unhandled dotKey: ' + dotKey)
    }
    if (baseKey === 'class') {
      domItem.element.classList.add(value)
      continue
    }
    domItem.element.style.setProperty(functionalHelpers.strAfter(dotKey, '.'), value)
  }
  return domItem
}

export default updateElement
