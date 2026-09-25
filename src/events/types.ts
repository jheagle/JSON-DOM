import type { DomItem } from '../domItem/types'

/** The name of a DOM event: click, submit, keydown, ... */
export type EventName = string

/** The old boolean form of the options argument of addEventListener. */
export type UseCapture = boolean

/** The listener options which json-dom understands (each one is a flag, see {@link OptionsTemplate}). */
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

/** An Event which also remembers whether stopImmediatePropagation() was called on it. */
export type EventProxy = Event & { immediatePropagationStopped: boolean }

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

/** An event handler and the way to detach it again: the handler as attached, and an optional AbortController. */
export type EventResponder = {
  handler: EventHandler
  abort: AbortController | null
  /** The exact function reference passed to the element's addEventListener, needed to remove it again. */
  assignedHandler: EventHandler | null
}

/** Bit flags for each of the listener options. */
export type OptionsTemplate = Record<string, number>

/** What json-dom needs from an element to attach a listener, including the very old ways of doing it. */
export type ListenerTarget = EventTarget & {
  attachEvent?: (eventName: string, handler: EventHandler) => void
}
