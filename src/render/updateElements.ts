import 'core-js/stable'
import updateChildNodes from './updateChildNodes'
import updateElement from './updateElement'
import type { DomItem } from '../domItem/types'

/**
 * Generate HTML element data for each object in the matrix
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} config - The DomItem having child DomItems with config changes to be
 * applied
 * @returns {DomItem}
 */
const updateElements = (config: DomItem): DomItem => {
  if (config.nodeName === '#document') {
    for (const child of config.children) {
      updateElements(child)
    }
    return config
  }
  const domItem = updateChildNodes(updateElement(config))
  domItem.children.forEach(updateElements)
  return domItem
}

export default updateElements
