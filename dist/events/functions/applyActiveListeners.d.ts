import 'core-js/stable';
import type { DomItem } from '../../domItem/types';
import type { EventName } from '../types';
/**
 * Apply each active event listener for event type to the DOM Item's element.
 * @param eventName
 * @param item
 */
declare const applyActiveListeners: (eventName: EventName, item: DomItem) => DomItem;
export default applyActiveListeners;
