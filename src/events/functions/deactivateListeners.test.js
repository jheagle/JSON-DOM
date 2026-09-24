import deactivateListeners from './deactivateListeners.js'
import createDomItem from '../../domItem/objects/createDomItem.js'

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
