import 'core-js/stable'
import updateChildren from './updateChildren'
import updateDomItem from './updateDomItem'
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
const updateDomItems = (config: DomItem): DomItem => {
  if (config.nodeName === '#document') {
    for (const child of config.children) {
      updateDomItems(child)
    }
    return config
  }
  const domItem = updateChildren(updateDomItem(config))
  domItem.children.forEach(updateDomItems)
  return domItem
}

export default updateDomItems
