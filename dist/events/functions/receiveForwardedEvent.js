"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const itemIdIndex_1 = require("../../domItem/tree/itemIdIndex");
/**
 * The receiving end of makeForwardingListener's envelope: resolve the item it was built for, replay any live target
 * state it carried onto that item's real element (see captureTargetState in makeForwardingListener), then dispatch
 * a real event of the same type on it. The resolved item's own, already-bound listener runs exactly as it would for
 * a genuine local event - nothing here needs to know what that listener does.
 * @param root - The tree to resolve the envelope's itemId against. Its listeners must be the real ones (not
 * itself set up with setForwardEvents), or this would just forward the event again instead of running it.
 * @param envelope - As produced by makeForwardingListener on the sending end.
 * @param validator - Optional: when given and it returns false for the resolved item, the event is never
 * dispatched. Resolving by id is correct (it finds the right item even if this root's own tree shape differs
 * from the sender's), but not authorized on its own - a validator is the one place to plug an ownership check
 * in, instead of every caller re-deriving "resolve first, then check, then dispatch" by hand.
 */
const receiveForwardedEvent = (root, envelope, validator) => {
  const resolvedItem = (0, itemIdIndex_1.getItemById)(root, envelope.itemId);
  if (validator && !validator(resolvedItem, envelope)) {
    return;
  }
  const element = resolvedItem.element;
  if (!element) {
    throw new Error('The resolved item has no element to dispatch the event on.');
  }
  if (envelope.targetState) {
    Object.assign(element, envelope.targetState);
  }
  element.dispatchEvent(new Event(envelope.eventType, {
    bubbles: true,
    cancelable: true
  }));
};
exports.default = receiveForwardedEvent;