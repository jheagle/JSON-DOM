import type { DomItem, DomItemRoot } from '../types';
import type { ListenerFunction } from '../../events/types';
/**
 * Initiate the Root for DocumentItem. This is primary a helper for {@link documentDomItem}.
 * @param children - Provide an array of Head and Body (usually via {@link initChildren})
 * @param listeners - An object of all event listeners to be registered in the Dom
 */
declare const initRoot: (children?: DomItem[], listeners?: Record<string, ListenerFunction>) => DomItemRoot;
export default initRoot;
