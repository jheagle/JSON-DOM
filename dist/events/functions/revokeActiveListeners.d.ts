import type { DomItem } from '../../domItem/types';
import type { EventName } from '../types';
/**
 * Detach every active listener for one event type from a DomItem's element, regardless of which EventListener
 * descriptor each one belongs to, and clear that event's activeListeners bucket. Unlike {@link deactivateListener},
 * this does not update the listenerActive/activeResponder state on the individual descriptors.
 * @param eventName - The name of the trigger event whose active listeners will be revoked.
 * @param item - The DomItem to revoke active listeners from.
 * @returns The same DomItem, with all active listeners for this event detached.
 */
declare const revokeActiveListeners: (eventName: EventName, item: DomItem) => DomItem;
export default revokeActiveListeners;
