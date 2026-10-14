"use strict";

require("core-js/modules/es.array.includes.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
require("core-js/stable");
/** Form-control elements whose state a listener might read directly off the event target. */
const FORM_CONTROL_TAGS = ['INPUT', 'SELECT', 'TEXTAREA'];
/**
 * Whatever live state a listener commonly reads directly off the real event's target - a checkbox's checked, an
 * input's value - captured here since the receiving end's corresponding element is otherwise an independent object
 * with no way to know what the user actually set. Omitted for anything that is not a form control (every element
 * has a non-undefined value or checked is not a safe enough check on its own - a plain button also has a value,
 * defaulting to '', and any input has checked defaulting to false even when it is not a checkbox).
 * @param target
 */
const captureTargetState = target => {
  const element = target;
  if (!element || !FORM_CONTROL_TAGS.includes(element.tagName)) {
    return undefined;
  }
  return element.type === 'checkbox' || element.type === 'radio' ? {
    checked: element.checked
  } : {
    value: element.value
  };
};
/**
 * Build the listener function used in render-only mode: instead of running real logic locally, it packages the
 * event as a plain envelope (the id of the item it fired on, the event type, the registered listener name, any
 * custom args, and any live target state - see captureTargetState) and hands it to the injected transport
 * function. See retrieveListener.
 * @param listenerName - The registered name this forwarder stands in for.
 * @param transport - Where the envelope is sent (set on the root item with setForwardEvents).
 */
const makeForwardingListener = (listenerName, transport) => (event, item, ...args) => transport({
  itemId: (event.domItemTarget ?? item).id,
  eventType: event.type,
  listenerFunc: listenerName,
  data: args,
  targetState: captureTargetState(event.target)
});
exports.default = makeForwardingListener;