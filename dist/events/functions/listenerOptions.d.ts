import 'core-js/stable';
import type { ListenerOptions } from '../types';
/**
 * Provide compatibility for using the options parameter of addEventListener
 * @function
 * @memberOf module:domEvents
 * @param {EventListenerOptions} options - An object or boolean with the listener options
 * @returns {boolean}
 */
/** The options which will be used, and a flag remembering whether the browser understands an options object. */
type ListenerOptionsSupport = {
    (options?: ListenerOptions | null): ListenerOptions | null;
    supportsOptions?: boolean;
};
declare const listenerOptions: ListenerOptionsSupport;
export default listenerOptions;
