/**
 * @jest-environment jsdom
 */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import applyActiveListeners from './applyActiveListeners'
import createDomItem from '../../domItem/objects/createDomItem'
import activateListener from './activateListener'
import createEventListener from '../objects/createEventListener'
import registerListener from './registerListener'
import documentItem from '../../domItem/objects/documentItem'
import generateElement from '../../render/generateElement'

describe('applyActiveListeners', () => {
  test('will apply a click listener to the element', () => {
    const documentReference = documentItem
    const eventName = 'click'
    registerListener(() => {}, 'clickFn', documentReference)
    const clickEventListener = createEventListener({ listenerFunc: 'clickFn' })
    const inputElement = generateElement(createDomItem({ nodeName: 'input' }))
    documentReference.body.appendChild(inputElement)
    activateListener(eventName, clickEventListener, inputElement)
    const result = applyActiveListeners(eventName, inputElement)
    const newClickEvent = new Event(eventName)
    result.element.dispatchEvent(newClickEvent)
  })

  test('will apply a click listener to the element with signal true', () => {
    const documentReference = documentItem
    const eventName = 'click'
    registerListener(() => {}, 'clickFn', documentReference)
    const clickEventListener = createEventListener({ listenerFunc: 'clickFn', listenerOptions: { signal: true } })
    const inputElement = generateElement(createDomItem({ nodeName: 'input' }))
    documentReference.body.appendChild(inputElement)
    activateListener(eventName, clickEventListener, inputElement)
    const result = applyActiveListeners(eventName, inputElement)
    // the expection is that the listener will be applied with the signal option set to true, which means it can be aborted if needed
    const newClickEvent = new Event(eventName)
    result.element.dispatchEvent(newClickEvent)
  })
})
