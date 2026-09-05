import 'core-js/stable'
import documentDomItem from './documentDomItem.js'

let existingItem = null

/**
 * Create reference for storing document changes
 * @member documentItem
 * @memberOf module:domGeneral
 * @type {DomItemRoot}
 */
const documentItem = (() => {
  if (existingItem === null) {
    existingItem = documentDomItem()
  }
  return existingItem
})()

export default documentItem
