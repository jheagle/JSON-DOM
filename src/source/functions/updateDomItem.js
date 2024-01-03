import 'core-js/stable'
import siFunciona from 'si-funciona'
import elementChanges from './elementChanges.js'

/**
 * Update a single objects.DomItem element with the provided attributes / style / elementProperties
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} config - The DomItem having config changes to be applied to its
 * element
 * @returns {DomItem}
 */
const updateDomItem = config => {
  if (!config.element) {
    // if element is not a valid element then return the config without changes
    return config
  }
  const changes = elementChanges(config)
  for (const dotKey in changes.removed) {
    const attributeKey = siFunciona.strAfter(dotKey, '.')
    if (siFunciona.strBefore(attributeKey, '.') === 'className') {
      const classList = config.attributes.className.split(' ')
      classList.splice(siFunciona.strAfterLast(attributeKey, '.'), 1)
      config.attributes.className = classList.join(' ')
      continue
    }
    siFunciona.dotUnset(config, dotKey)
  }
  for (const dotKey in changes.added) {
    const attributeKey = siFunciona.strAfter(dotKey, '.')
    if (siFunciona.strBefore(attributeKey, '.') === 'className') {
      const classList = config.attributes.className.split(' ')
      classList.push(changes.added[dotKey])
      config.attributes.className = classList.join(' ')
      continue
    }
    siFunciona.dotSet(config, dotKey, changes.added[dotKey])
  }
  return config
}

export default updateDomItem
