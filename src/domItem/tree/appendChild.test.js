/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import appendChild from './appendChild'
import createDomItem from '../objects/createDomItem'

describe('appendChild', () => {
  test('will attach a DomItem as a child with proper references', () => {
    const intendedParent = createDomItem({ nodeName: 'p' })
    expect(intendedParent.children.length).toBe(0)
    const intendedChild = createDomItem({ nodeName: '#text', nodeValue: 'some text for the paragraph' })
    appendChild(intendedParent, intendedChild)
    expect(intendedParent.children[0]).toBe(intendedChild)
    expect(intendedChild.parentItem).toBe(intendedParent)
  })
})
