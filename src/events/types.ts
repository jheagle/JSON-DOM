/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import type { DomItem } from '../domItem/types'

/** The name of a DOM event: click, submit, keydown, ... */
export type EventName = string

/** The old boolean form of the options argument of addEventListener. */
export type UseCapture = boolean

/** The listener options which treeloom understands (each one is a flag, see {@link OptionsTemplate}). */
export type OptionsObject = {
  /** Events of this type are dispatched to the listener before any other target beneath it. */
  capture?: boolean
  /** The listener is removed after it has been invoked once. */
  once?: boolean
  /** The listener will never call preventDefault(). */
  passive?: boolean
  /** The listener is removed when the AbortSignal's abort() is called. */
  signal?: boolean | AbortSignal
}

/** The options given with a listener: an options object, or just the useCapture boolean. */
export type ListenerOptions = OptionsObject | UseCapture

/** An Event which also remembers whether stopImmediatePropagation() was called on it, and carries the DomItems
 * target/currentTarget correspond to. */
export type EventProxy = Event & {
  immediatePropagationStopped: boolean
  /** The DomItem whose element matches the real event's target, searched for within currentDomItemTarget's own
   * subtree (an event's target is always itself or a descendant of the item a listener is attached to - that is
   * what bubbling means). Null when none is found. */
  domItemTarget: DomItem | null
  /** The DomItem the listener is attached to (the real event's currentTarget). */
  currentDomItemTarget: DomItem
}

/**
 * A function which handles an event on a DomItem. It receives the event, the DomItem which owns the listener and any
 * listenerArgs. (The extra arguments are whatever the listener needs, so they can only be typed by the listener.)
 */
export type ListenerFunction = (event: EventProxy | Event, target: DomItem, ...args: any[]) => unknown

/** A listenerFunction wrapped so it skips events which stopped propagating, ready to be attached to an element. */
export type EventHandler = (event?: EventProxy | Event | null) => unknown

/** The description of one listener on a DomItem: what to call, with what, and how. */
export type ListenerDescriptor = {
  /** Prefer a string name registered with registerListener: it survives being converted to json. */
  listenerFunc: string | ListenerFunction
  /** Additional arguments for the listener function. */
  listenerArgs?: object | null
  listenerOptions?: ListenerOptions
  /** Whether this listener has been applied to the element. */
  listenerActive?: boolean
  /** Set while the listener is active: the responder which attaches it to the element and can detach it again. */
  activeResponder?: EventResponder | null
}

/** All the listeners of one event type. */
export type EventListeners = ListenerDescriptor[]

/** What a forwarded event is packaged as in render-only mode. See retrieveListener, makeForwardingListener. */
export type ForwardedEvent = {
  /** The id of the item the event fired on (domItemTarget, falling back to the item the listener is attached
   * to when no domItemTarget was found) - read directly off that item's own id, not computed. Resolution is a
   * lookup (getItemById) rather than a tree walk, so it still finds the right item even if the receiving end's
   * own tree does not match the sending end's shape exactly (see getItemById vs the position-based
   * getItemPath/getItemByPath this replaced). */
  itemId: number
  /** The type of event which fired (event.type). */
  eventType: EventName
  /** The registered name of the listener which would have run locally. */
  listenerFunc: string
  /** The custom args the listener was registered with. */
  data: unknown[]
  /** Live state read directly off the real event's target when present - a listener which reads e.g.
   * (event.target as HTMLInputElement).checked needs this replayed onto the real target on the receiving end
   * (see receiveForwardedEvent), since the two ends' elements are otherwise independent objects. */
  targetState?: { checked?: boolean, value?: string }
}

/** Where a forwarded event's envelope is sent, in render-only mode. Set on the root item with setForwardEvents. */
export type ForwardEventsFunction = (envelope: ForwardedEvent) => unknown

/** An event handler and the way to detach it again: the handler as attached, and an optional AbortController. */
export type EventResponder = {
  handler: EventHandler
  abort: AbortController | null
  /** The exact function reference passed to the element's addEventListener, needed to remove it again. */
  assignedHandler: EventHandler | null
}

/** Bit flags for each of the listener options. */
export type OptionsTemplate = Record<string, number>

/** What treeloom needs from an element to attach a listener, including the very old ways of doing it. */
export type ListenerTarget = EventTarget & {
  attachEvent?: (eventName: string, handler: EventHandler) => void
}
