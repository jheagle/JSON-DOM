import type { EventListeners, EventName, EventResponder, ForwardEventsFunction, ListenerFunction } from '../events/types';
/** CSS property names (written in camelCase, like element.style) and their values. */
export type StyleValues = {
    [property: string]: string;
};
/** A value an attribute can have. Objects are only used for the style attribute. */
export type AttributeValue = string | number | boolean | StyleValues | null | undefined;
/** All the HTML attributes of an element (className, style, id, innerHTML, data attributes, ...). */
export type Attributes = {
    className?: string;
    style?: StyleValues;
    /** The native custom element name (a customized built-in): <button is="fancy-button">. */
    is?: string;
    [attribute: string]: AttributeValue;
};
/** A real node which a DomItem is mirrored onto. */
export type DomElement = HTMLElement | Text | Comment | Document;
/** The path from the root to an item: each level's index among its parent's children, top-down. An empty array
 * means the item is the root itself. See getItemPath, getItemByPath. */
export type ItemPath = number[];
/** The parent of the root DomItem is an empty object (a null parent means the item is detached). */
export type EmptyParent = Record<string, never>;
/**
 * The traits an item can have, and the data each one puts on it. json-dom has one - render - and other libraries
 * add theirs by declaration merging:
 *
 *     declare module 'json-dom/dist/domItem/types' {
 *       interface TraitRegistry { 'matrix.row': { axis: 'y' } }
 *     }
 */
export interface TraitRegistry {
    /** The item has a place for a real element (it stays null until the item is rendered). */
    render: RenderProperties;
}
/** The name of a trait. */
export type TraitName = keyof TraitRegistry;
/** The traits an item has: a map of trait name to true. */
export type HasMap = {
    [Trait in TraitName]?: true;
};
/** What the render trait puts on an item. */
export type RenderProperties = {
    /** The real node this item is mirrored onto, or null while there is none. */
    element: DomElement | null;
    /** Generated: the listeners which are attached to the element, by event name. */
    activeListeners?: Record<EventName, Record<number, EventResponder[]>>;
};
type UnionToIntersection<Union> = (Union extends unknown ? (member: Union) => void : never) extends (member: infer All) => void ? All : never;
/** What an item gains from having all of these traits: they are in its has map, and their data is on it. */
export type WithTraits<Trait extends TraitName> = {
    has: {
        [Name in Trait]: true;
    };
} & UnionToIntersection<TraitRegistry[Trait]>;
/** The properties every item has, whatever traits it carries. */
export type CoreProperties = {
    attributes: Attributes;
    /** All the events to be registered for the element. */
    eventListeners: Record<EventName, EventListeners>;
    /** The traits this item has (see TraitRegistry). */
    has: HasMap;
    /** Property names to leave out when converting to json. */
    jsonExclusions: string[];
    /** Any document node name: a tag name, #text, #comment or #document. */
    nodeName: string;
    /** The text of a text or comment node, null for elements. */
    nodeValue: string | null;
    /** Attach a child to this item. */
    appendChild(child: CoreItem): CoreItem;
    /** Detach a child from this item (and its element, when it has one). */
    removeChild(child: CoreItem): CoreItem[];
};
/**
 * The generic item: one node of a tree, with the traits it carries. A back-end item which is never rendered is a
 * CoreItem; use hasTrait to find out what else it has.
 */
export type CoreItem = CoreProperties & {
    children: CoreItem[];
    /** The parent item: an empty object for the root, null for an item which is not attached. */
    parentItem: CoreItem | EmptyParent | null;
};
/**
 * An item with the render trait: the item json-dom mirrors onto a real element (render) and reads back from one
 * (sync). Its children have the render trait too.
 */
export type DomItem = CoreProperties & WithTraits<'render'> & {
    children: DomItem[];
    parentItem: DomItem | EmptyParent | null;
    appendChild(child: DomItem): DomItem;
    removeChild(child: DomItem): DomItem[];
};
/**
 * What can be given to build an item: any of its properties (the children may be plain configs as well), plus any
 * custom data. Whatever is left out gets its default.
 */
export type DomItemConfig = Partial<Omit<CoreProperties, 'appendChild' | 'removeChild'>> & Partial<RenderProperties> & {
    children?: DomItemConfig[];
    parentItem?: CoreItem | EmptyParent | null;
    [custom: string]: unknown;
};
/** The extra properties of the root of a Virtual DOM. */
export type RootProperties = {
    /** Registered listener functions, by name. */
    eventActions: Record<string, ListenerFunction>;
    /** Set with setForwardEvents to switch into render-only mode: every listener name resolves to a forwarder which
     * sends this function an envelope instead of running local logic. See retrieveListener. */
    forwardEvents?: ForwardEventsFunction;
    head: DomItem;
    body: DomItem;
};
/** The root of a Virtual DOM (the #document): the head and body items and the registered named listeners. */
export type DomItemRoot = DomItem & RootProperties;
/** What a trait is at runtime: which properties it puts on an item, and whether they belong in json. */
export type TraitDefinition = {
    /** The properties the trait puts on an item. */
    keys: string[];
    /** False for properties which only make sense where the item lives (an element): they are left out of json. */
    serializable?: boolean;
    /** The data a new item gets when it is given the trait. */
    defaults?: () => Record<string, unknown>;
};
/**
 * Decides which items below (and including) an item are wanted. It receives the item being tested and everything
 * gathered so far, and returns the gathered results with the item added if it qualifies.
 */
export type ChildTest = (item: DomItem, gatheredResults: DomItem[]) => DomItem[];
export {};
