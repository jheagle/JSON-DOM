import 'core-js/stable'
import documentItem from '../../domItem/objects/documentItem'
import type { DomItemRoot } from '../../domItem/types'
import type { ListenerFunction } from '../types'

/**
 * Register a single listener function as part of the root domEvents.DomItem.
 * @function
 * @memberOf module:domEvents
 * @param {listenerFunction|function} listener - Provide a function which will be called
 * when a Dom event is triggered.
 * @param {string} [name] - The name of the listener to be used.
 * @param {DomItemRoot|Object} [parent] - The parent DomItem which is DomItemRoot which stores eventListeners property.
 * @returns {Object.<string, listenerFunction>}
 */
const registerListener = (listener: ListenerFunction, name: string = listener.name, parent: DomItemRoot = documentItem): Record<string, ListenerFunction> => Object.assign(
  parent.eventActions,
  { [name]: listener }
)

export default registerListener
