/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import documentItem from '../../domItem/objects/documentItem'
import type { DomItemRoot } from '../../domItem/types'
import type { ListenerFunction } from '../types'

/**
 * Register a single listener function as part of the root domEvents.DomItem.
 * @param listener - Provide a function which will be called
 * when a Dom event is triggered.
 * @param name - The name of the listener to be used.
 * @param parent - The parent DomItem which is DomItemRoot which stores eventListeners property.
 */
const registerListener = (listener: ListenerFunction, name: string = listener.name, parent: DomItemRoot = documentItem): Record<string, ListenerFunction> => Object.assign(
  parent.eventActions,
  { [name]: listener }
)

export default registerListener
