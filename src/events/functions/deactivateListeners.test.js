/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import deactivateListeners from './deactivateListeners'
import createDomItem from '../../domItem/objects/createDomItem'

describe('deactivateListeners', () => {
  test('listeners are set to inactive and active listeners cleared', () => {
    const domItem = createDomItem({
      nodeName: 'button',
      eventListeners: {
        click: [
          {
            listenerFunc: 'click1',
            listenerActive: true
          },
          {
            listenerFunc: 'click2',
            listenerActive: true
          },
          {
            listenerFunc: 'click3',
            listenerActive: true
          }
        ],
        onmouseover: [
          {
            listenerFunc: 'mouseover1',
            listenerActive: true
          }
        ]
      }
    })
    const deactivated = deactivateListeners(domItem)
    // All listeners are inactive
    expect(deactivated.eventListeners.click.filter(eventListener => eventListener.listenerActive)).toEqual([])
    expect(deactivated.eventListeners.onmouseover.filter(eventListener => eventListener.listenerActive)).toEqual([])
    // Active listeners have been deleted
    expect(deactivated).not.toHaveProperty('activeListeners')
  })
})
