import 'core-js/stable';
import type { DomItemRoot } from '../../domItem/types';
import type { ForwardedEvent } from '../types';
/**
 * The receiving end of makeForwardingListener's envelope: resolve the item it was built for, replay any live target
 * state it carried onto that item's real element (see captureTargetState in makeForwardingListener), then dispatch
 * a real event of the same type on it. The resolved item's own, already-bound listener runs exactly as it would for
 * a genuine local event - nothing here needs to know what that listener does.
 * @param root - The tree to resolve the envelope's itemPath against. Its listeners must be the real ones (not
 * itself set up with setForwardEvents), or this would just forward the event again instead of running it.
 * @param envelope - As produced by makeForwardingListener on the sending end.
 */
declare const receiveForwardedEvent: (root: DomItemRoot, envelope: ForwardedEvent) => void;
export default receiveForwardedEvent;
