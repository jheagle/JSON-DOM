import type { ListenerOptions } from '../types';
/** The options which will be used, and a flag remembering whether the browser understands an options object. */
type ListenerOptionsSupport = {
    (options?: ListenerOptions | null): ListenerOptions | null;
    supportsOptions?: boolean;
};
/**
 * Provide compatibility for using the options parameter of addEventListener
 * @param options - An object or boolean with the listener options
 */
declare const listenerOptions: ListenerOptionsSupport;
export default listenerOptions;
