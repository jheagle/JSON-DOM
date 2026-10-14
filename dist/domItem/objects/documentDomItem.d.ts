import 'core-js/stable';
import type { DomItemRoot } from '../types';
import type { ListenerFunction } from '../../events/types';
/**
 * Return the root DomItem of a Virtual DOM (DomItem tree) for the document. The rootItem argument is a system
 * variable and not necessary to implement.
 * @param listeners - An object of all event
 * listeners to be registered in the Dom
 * @param rootItem - This is a
 * reference to DomItemRoot which will be defaulted with {@link initRoot}
 */
declare const documentDomItem: (listeners?: Record<string, ListenerFunction>, rootItem?: DomItemRoot) => DomItemRoot;
export default documentDomItem;
