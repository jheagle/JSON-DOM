import 'core-js/stable';
import type { DomItem } from '../domItem/types';
/**
 * This is a shortcut for syncing a Virtual DOM (DomItem tree) item onto the real HTML DOM: builds the real elements
 * for it and its descendants, appends them to parent (the document body by default), and binds their associated
 * listeners.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem|null} item - The DomItem that we want to render the element for
 * @param {DomItem} [parent] - Where to append item, when it does not already have a parent - defaults to the
 * document body, so passing nothing keeps working exactly as before
 * @returns {DomItem}
 */
declare const renderHtml: (item?: DomItem | null, parent?: DomItem) => DomItem;
export default renderHtml;
