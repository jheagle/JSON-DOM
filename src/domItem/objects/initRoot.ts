import createDomItem from './createDomItem'
import type { DomItem, DomItemRoot } from '../types'
import type { ListenerFunction } from '../../events/types'

/**
 * Initiate the Root for DocumentItem. This is primary a helper for {@link documentDomItem}.
 * @param children - Provide an array of Head and Body (usually via {@link initChildren})
 * @param listeners - An object of all event listeners to be registered in the Dom
 */
const initRoot = (children: DomItem[] = [{} as DomItem, {} as DomItem], listeners: Record<string, ListenerFunction> = {}): DomItemRoot => createDomItem({
  nodeName: '#document',
  nodeValue: null,
  attributes: {},
  element: document,
  eventActions: listeners,
  eventListeners: {},
  children,
  parentItem: {},
  head: children[0],
  body: children[1]
}) as DomItemRoot

export default initRoot
