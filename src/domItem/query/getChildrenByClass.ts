import 'core-js/stable'
import documentItem from '../objects/documentItem'
import gatherChildItems from './gatherChildItems'
import type { DomItem } from '../types'

/**
 * Helper for getting all domGeneral.DomItems starting at item and carrying the given class, among possibly several
 * space-separated classes on that item - the same membership check as the real DOM's classList.contains, not an
 * exact match of the whole className attribute string (which getChildrenFromAttribute does, and which would miss
 * an item that also carries other classes).
 * @param className - The one class being searched for
 * @param item - The DomItem which may have child items carrying the class
 */
const getChildrenByClass = (className: string, item: DomItem = documentItem.body): DomItem[] => gatherChildItems(
  item,
  (child, gatheredResults) => ((child.attributes.className as string | undefined) ?? '').split(' ').includes(className)
    ? gatheredResults.concat([child])
    : gatheredResults
)

export default getChildrenByClass
