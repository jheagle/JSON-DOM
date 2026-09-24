import 'core-js/stable'
import documentDomItem from './documentDomItem.js'

let existingItem = null

/**
 * The shared root DomItem of the Virtual DOM (DomItem tree) for this environment's real document.
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
