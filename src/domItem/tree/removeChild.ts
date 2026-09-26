import 'core-js/stable'
import type { DomItem } from '../types'

/**
 * Reverse of appendHtml, remove a DomItem and have the associated element removed.
 * @param parent - The parent of the items
 * @param child - The DomItem with HTMLElement to be removed
 */
const removeChild = (parent: DomItem, child: DomItem): DomItem[] => {
  parent.element!.removeChild(child.element!)
  return parent.children.splice(parent.children.indexOf(child), 1)
}

export default removeChild
