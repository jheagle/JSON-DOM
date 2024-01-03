import deactivateListeners from './deactivateListeners.js'
import createDomItem from '../objects/createDomItem'

describe('deactivateListeners', () => {
  test('listeners are set to inactive and active listeners cleared', () => {
    const click1 = event => {}
    const click2 = event => {}
    const click3 = event => {}
    const mouseover1 = event => {}
    const domItem = createDomItem({
      nodeName: 'button',
      eventListeners: {
        click: [
          {
            listenerFunc: 'click1',
            listenerActive: true,
          },
          {
            listenerFunc: 'click2',
            listenerActive: true,
          },
          {
            listenerFunc: 'click3',
            listenerActive: true,
          },
        ],
        onmouseover: [
          {
            listenerFunc: 'mouseover1',
            listenerActive: true,
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
