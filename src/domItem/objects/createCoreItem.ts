import 'core-js/stable'
import siFunciona from 'si-funciona'
import appendChild from '../tree/appendChild'
import removeChild from '../tree/removeChild'
import type { CoreItem, DomItemConfig } from '../types'

/** The next id to assign - a plain, process-local counter (not a UUID): cheap to generate/compare/serialize,
 * and nothing ever resolves an id against a different process's tree, so global uniqueness is never needed. */
let nextItemId = 0

/**
 * Create the generic item, without the render trait. Every property which is not given gets its default. The given
 * object is completed and returned (it is not copied). Children which are plain objects are completed the same way, all
 * the way down; a child which already has a has map is taken to be complete and is left alone.
 * @param item - Item-like object to be formatted as a CoreItem
 */
const createCoreItem = (item: DomItemConfig = {}): CoreItem => {
  if (Array.isArray(item.children)) {
    item.children.forEach((child: DomItemConfig) => {
      if (typeof child === 'object' && child !== null && !child.has) {
        createCoreItem(child)
      }
    })
  }
  const newItem = siFunciona.reduceObject(
    {
      attributes: {},
      children: [],
      eventListeners: {},
      has: {},
      id: nextItemId++,
      jsonExclusions: [],
      nodeName: 'div',
      nodeValue: null,
      parentItem: null
    },
    (coreItem: Record<string, unknown>, defaultValue: unknown, prop: string) => {
      if (!(prop in coreItem)) {
        coreItem[prop] = defaultValue
        return coreItem
      }
      return coreItem
    },
    item
  ) as CoreItem
  newItem.appendChild = siFunciona.curry(appendChild)(newItem)
  newItem.removeChild = siFunciona.curry(removeChild)(newItem)
  return newItem
}

export default createCoreItem
