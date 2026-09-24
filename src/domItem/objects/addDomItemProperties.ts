import 'core-js/stable'
import createDomItem from './createDomItem'
import type { DomItem, DomItemConfig } from '../types'

/**
 * Ensure all basic properties of the DomItem are present.
 * @function
 * @memberOf module:domGeneral
 * @param {Object} item - The object that will be formatted as a DomItem.
 * @returns {DomItem}
 */
const addDomItemProperties = <Custom extends object = {}>(item: DomItemConfig<Custom>): DomItem<Custom> => {
  if (typeof item.children !== 'undefined') {
    item.children.forEach(child => {
      addDomItemProperties(child)
    })
  }
  return createDomItem(item)
}

export default addDomItemProperties
