/**
 * @jest-environment jsdom
 */
import applyActiveListeners from './applyActiveListeners.js'
import createDomItem from '../../general/objects/createDomItem.js'
import activateListener from './activateListener.js'
import createEventListener from '../objects/createEventListener.js'
import documentItem from '../../general/objects/documentItem.js'
import generateElement from '../../general/functions/generateElement.js'

describe('applyActiveListeners', () => {
  test('will apply a click listener to the element', () => {
    const documentReference = documentItem
    const eventName = 'click'
    const clickEventListener = createEventListener({listenerFunc: eventName})
    const inputElement = generateElement(createDomItem({ nodeName: 'input' }))
    documentReference.body.appendChild(inputElement)
    activateListener(inputElement, eventName, clickEventListener)
    const result = applyActiveListeners(inputElement, eventName)
    const newClickEvent = new Event(eventName)
    result.element.dispatchEvent(newClickEvent)
  })

  test('will apply a click listener to the element with signal true', () => {
    const documentReference = documentItem
    const eventName = 'click'
    const clickEventListener = createEventListener({listenerFunc: eventName, listenerOptions: { signal: true } })
    const inputElement = generateElement(createDomItem({ nodeName: 'input' }))
    documentReference.body.appendChild(inputElement)
    activateListener(inputElement, eventName, clickEventListener)
    const result = applyActiveListeners(inputElement, eventName)
    // the expection is that the listener will be applied with the signal option set to true, which means it can be aborted if needed
    const newClickEvent = new Event(eventName)
    result.element.dispatchEvent(newClickEvent)
  })
})
