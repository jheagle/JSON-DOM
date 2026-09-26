import 'core-js/stable'
import documentDomItem from './documentDomItem'
import type { DomItemRoot } from '../types'

let existingItem: DomItemRoot | null = null

/**
 * The shared root DomItem of the Virtual DOM (DomItem tree) for this environment's real document.
 */
const documentItem: DomItemRoot = (() => {
  if (existingItem === null) {
    existingItem = documentDomItem()
  }
  return existingItem
})()

export default documentItem
