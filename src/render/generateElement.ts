/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import updateElement from './updateElement'
import type { DomItem } from '../domItem/types'

/**
 * Create a new DOM Node based on name and data.
 * @param nodeName
 * @param data
 */
const makeElementType = (nodeName: string, data: string | null = null, is?: string): Text | Comment | HTMLElement => {
  switch (nodeName) {
    case '#text':
      return document.createTextNode(data as string)
    case '#comment':
      return document.createComment(data as string)
    default:
      // A customized built-in element (<button is="fancy-button">) has to be given its name when it is created
      return is ? document.createElement(nodeName, { is }) : document.createElement(nodeName)
  }
}

/**
 * Create an HTML element based on the provided attributes and return the element as an Object.
 * @param domItem - The DomItem requiring matching HTML element property
 */
const generateElement = (domItem: DomItem): DomItem => {
  domItem.element = makeElementType(domItem.nodeName, domItem.nodeValue, typeof domItem.attributes.is === 'string' ? domItem.attributes.is : undefined)
  return updateElement(domItem)
}

export default generateElement
