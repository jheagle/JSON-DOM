/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import documentDomItem from './documentDomItem'
import type { DomItemRoot } from '../types'

let existingItem: DomItemRoot | null = null

/**
 * The shared root DomItem of the Virtual DOM (DomItem tree) for this environment's real document. It is built on the
 * first call, not when treeloom loads, so treeloom can be required where there is no document (Node, a server) as
 * long as nothing asks for it. Every later call returns the same root.
 * @returns {DomItemRoot}
 */
const getDocumentItem = (): DomItemRoot => {
  if (existingItem === null) {
    existingItem = documentDomItem()
  }
  return existingItem
}

/**
 * Add the public `documentItem` property to an API object: a getter, so the root is still only built when it is first
 * read. Added after the API is assembled, since Object.assign would read (and so build) it.
 * @param api The assembled API object
 * @returns {T & { readonly documentItem: DomItemRoot }} The same object
 */
export const withDocumentItem = <T extends object>(api: T): T & { readonly documentItem: DomItemRoot } =>
  Object.defineProperty(api, 'documentItem', { enumerable: true, get: getDocumentItem }) as T & { readonly documentItem: DomItemRoot }

export default getDocumentItem
