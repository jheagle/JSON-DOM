import 'core-js/stable';
import type { DomItemRoot } from '../../domItem/types';
import type { ForwardEventsFunction } from '../types';
/**
 * Switch the root item into render-only mode: every registered listener name resolves to a forwarder instead of a
 * local function (see retrieveListener, makeForwardingListener), so no local listener functions need to be
 * registered at all.
 * @param transport - Called with the envelope of each forwarded event.
 * @param parent - The parent DomItem which is DomItemRoot to switch into render-only mode.
 */
declare const setForwardEvents: (transport: ForwardEventsFunction, parent?: DomItemRoot) => DomItemRoot;
export default setForwardEvents;
