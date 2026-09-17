import 'core-js/stable'
import bindListeners from '../../events/functions/bindListeners.js'
import deactivateListeners from '../../events/functions/deactivateListeners.js'
import domItemChanges from './domItemChanges.js'
import siFunciona from 'si-funciona'
import generateElement from './generateElement.js'

/**
 * Update a single objects.DomItem element with the provided attributes / style / elementProperties
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} domItem - The DomItem having domItem changes to be applied to its
 * element
 * @returns {DomItem}
 */
const updateElement = domItem => {
  if (!domItem.element) {
    return generateElement(deactivateListeners(domItem))
  }
  const changes = domItemChanges(domItem)
  if (changes.removed.nodeName || changes.added.nodeName) {
    // if the nodeName has changed then remove the element and create a new one
    domItem.element.remove()
    return generateElement(deactivateListeners(domItem))
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
    const baseKey = siFunciona.strBefore(dotKey, '.')
    if (baseKey !== 'class' && baseKey !== 'style') {
      throw new Error('Unhandled dotKey: ' + dotKey)
    }
    if (baseKey === 'class') {
      domItem.element.classList.remove(value)
      continue
    }
    domItem.element.style.removeProperty(siFunciona.strAfter(dotKey, '.'))
  }
  for (const dotKey in changes.added) {
    const value = changes.added[dotKey]
    if (dotKey === 'className') {
      domItem.element.className = value
      continue
    }
    if (dotKey === 'style') {
      // Update all styles based on incoming style object
      for (const style in value) {
        domItem.element.style.setProperty(style, value[style])
      }
      continue
    }
    if (!dotKey.includes('.')) {
      if (dotKey in domItem.element && dotKey !== 'form') {
        // Some things can be assigned directly, but 'form' attribute cannot
        domItem.element[dotKey] = value
        continue
      }
      domItem.element.setAttribute(dotKey, value)
      continue
    }
    const baseKey = siFunciona.strBefore(dotKey, '.')
    if (baseKey !== 'class' && baseKey !== 'style') {
      throw new Error('Unhandled dotKey: ' + dotKey)
    }
    if (baseKey === 'class' && (/\s/.test(value) || !value)) {
      // Skip this empty class name
      continue
    }
    if (baseKey === 'class') {
      domItem.element.classList.add(value)
      continue
    }
    domItem.element.style.setProperty(siFunciona.strAfter(dotKey, '.'), value)
  }
  return bindListeners(domItem)
}

export default updateElement
