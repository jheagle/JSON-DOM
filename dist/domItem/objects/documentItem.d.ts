import type { DomItemRoot } from '../types';
/**
 * The shared root DomItem of the Virtual DOM (DomItem tree) for this environment's real document. It is built on the
 * first call, not when treeloom loads, so treeloom can be required where there is no document (Node, a server) as
 * long as nothing asks for it. Every later call returns the same root.
 * @returns {DomItemRoot}
 */
declare const getDocumentItem: () => DomItemRoot;
/**
 * Add the public `documentItem` property to an API object: a getter, so the root is still only built when it is first
 * read. Added after the API is assembled, since Object.assign would read (and so build) it.
 * @param api The assembled API object
 * @returns {T & { readonly documentItem: DomItemRoot }} The same object
 */
export declare const withDocumentItem: <T extends object>(api: T) => T & {
    readonly documentItem: DomItemRoot;
};
export default getDocumentItem;
