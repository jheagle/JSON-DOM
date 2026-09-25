/**
 * Setting up and handling events for items in a Virtual DOM (DomItem tree)
 */
import 'core-js/stable';
declare const _default: {
    activateListener: (eventName: import("./types").EventName, eventListener: import("./types").ListenerDescriptor, item: import("../domItem/types").DomItem) => import("../domItem/types").DomItem;
    addEventListener: (eventName: import("./types").EventName, listenerFunction: string | import("./types").ListenerFunction, customArgs: object | null | undefined, options: import("./types").ListenerOptions | null | undefined, item: import("../domItem/types").DomItem) => import("../domItem/types").DomItem;
    applyActiveListeners: (eventName: import("./types").EventName, item: import("../domItem/types").DomItem) => import("../domItem/types").DomItem;
    assignListener: (trigger: string, elem: import("./types").ListenerTarget, fn: import("./types").EventHandler, options?: import("./types").ListenerOptions) => import("./types").EventHandler;
    bindAllListeners: (item: import("../domItem/types").DomItem) => import("../domItem/types").DomItem;
    bindElementListeners: (item: import("../domItem/types").DomItem) => import("../domItem/types").DomItem;
    bindListeners: (item: import("../domItem/types").DomItem) => import("../domItem/types").DomItem;
    deactivateListener: (eventName: import("./types").EventName, eventListener: import("./types").ListenerDescriptor, item: import("../domItem/types").DomItem) => import("../domItem/types").DomItem;
    deactivateListeners: (item: import("../domItem/types").DomItem) => import("../domItem/types").DomItem;
    findEventListener: (eventName: import("./types").EventName, listenerFunction: string | import("./types").ListenerFunction, customArgs: object | null | undefined, options: import("./types").ListenerOptions | null | undefined, item: import("../domItem/types").DomItem) => [number, import("./types").ListenerDescriptor | undefined];
    fullAddEventListener: (eventName: import("./types").EventName, listener: import("./types").ListenerFunction, name: string | null | undefined, customArgs: object | null | undefined, options: import("./types").ListenerOptions | null | undefined, item: import("../domItem/types").DomItem) => import("../domItem/types").DomItem;
    fullRemoveEventListener: (eventName: import("./types").EventName, listener: import("./types").ListenerFunction, name: string | null | undefined, customArgs: object | null | undefined, options: import("./types").ListenerOptions | null | undefined, item: import("../domItem/types").DomItem) => import("../domItem/types").DomItem;
    listenerOptions: {
        (options?: import("./types").ListenerOptions | null): import("./types").ListenerOptions | null;
        supportsOptions?: boolean;
    };
    makeEventHandler: (listener: import("./types").ListenerFunction, item: import("../domItem/types").DomItem, ...args: unknown[]) => import("./types").EventHandler;
    registerListener: (listener: import("./types").ListenerFunction, name?: string, parent?: import("../domItem/types").DomItemRoot) => Record<string, import("./types").ListenerFunction>;
    registerListeners: (listeners: import("./types").ListenerFunction[] | Record<string, import("./types").ListenerFunction>, parent?: import("../domItem/types").DomItemRoot) => import("../domItem/types").DomItemRoot;
    removeEventListener: (eventName: import("./types").EventName, listenerFunction: string | import("./types").ListenerFunction, customArgs: object | null | undefined, options: import("./types").ListenerOptions | null | undefined, item: import("../domItem/types").DomItem) => import("../domItem/types").DomItem;
    retrieveListener: (listenerName: string | import("./types").ListenerFunction, parent?: import("../domItem/types").DomItemRoot) => import("./types").ListenerFunction;
    revokeActiveListeners: (eventName: import("./types").EventName, item: import("../domItem/types").DomItem) => import("../domItem/types").DomItem;
    unassignListener: (trigger: string, elem: import("./types").ListenerTarget, fn: import("./types").EventHandler, options?: import("./types").ListenerOptions) => import("./types").EventHandler;
    createEventListener: ({ listenerFunc, listenerArgs, listenerOptions, listenerActive }?: Partial<import("./types").ListenerDescriptor>) => import("./types").ListenerDescriptor;
    createEventProxy: (event: Event) => import("./types").EventProxy;
    createEventResponder: (eventHandler: import("./types").EventHandler, abort?: AbortController | boolean | null) => import("./types").EventResponder;
    options: {
        getListenerOptions: () => import("./types").OptionsTemplate;
        numberToOptions: (optionsTemplate: import("./types").OptionsTemplate, binaryOptions: number) => import("./types").OptionsObject;
        optionsToNumber: (optionsTemplate: import("./types").OptionsTemplate, listenerOptions?: import("./types").ListenerOptions | null) => number;
    };
};
export default _default;
