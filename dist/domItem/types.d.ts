import type { EventListeners, EventName, EventResponder, ListenerFunction } from '../events/types';
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
    [attribute: string]: AttributeValue;
};
/** A real node which a DomItem is mirrored onto. */
export type DomElement = HTMLElement | Text | Comment | Document;
/** The parent of the root DomItem is an empty object (a null parent means the item is detached). */
export type EmptyParent = Record<string, never>;
/**
 * The properties every DomItem has: a plain object representation of one node of a Virtual DOM, mirrored onto a real
 * element by render and read back by sync.
 */
export type DomItemProperties = {
    /** Generated: the listeners which are attached to the element, by event name. */
    activeListeners?: Record<EventName, Record<number, EventResponder[]>>;
    attributes: Attributes;
    children: DomItem[];
    /** The real node this item is mirrored onto, or null while there is none. */
    element: DomElement | null;
    /** All the events to be registered for the element. */
    eventListeners: Record<EventName, EventListeners>;
    /** Property names to leave out when converting to json. */
    jsonExclusions: string[];
    /** Any document node name: a tag name, #text, #comment or #document. */
    nodeName: string;
    /** The text of a text or comment node, null for elements. */
    nodeValue: string | null;
    /** The parent item: an empty object for the root, null for an item which is not attached. */
    parentItem: DomItem | EmptyParent | null;
    /** Attach a child to this item. */
    appendChild: (child: DomItem) => DomItem;
    /** Detach a child from this item (and its element). */
    removeChild: (child: DomItem) => DomItem[];
    /** Optionally defines the type of object for custom elements. */
    is?: string;
};
/**
 * A DomItem, plus any custom data the project attaches to its items. Give the type of that extra data to get it typed:
 * `DomItem<{ point: Point }>`.
 */
export type DomItem<Custom extends object = {}> = DomItemProperties & Custom;
/**
 * What can be given to build a DomItem: any of its properties, with the children allowed to be plain configs as well,
 * plus any custom data. Whatever is left out gets its default.
 */
export type DomItemConfig<Custom extends object = {}> = Partial<Omit<DomItemProperties, 'children'>> & {
    children?: DomItemConfig[];
} & Custom;
/** The extra properties of the root of a Virtual DOM. */
export type RootProperties = {
    /** Registered listener functions, by name. */
    eventActions: Record<string, ListenerFunction>;
    head: DomItem;
    body: DomItem;
};
/** The root of a Virtual DOM (the #document): the head and body items and the registered named listeners. */
export type DomItemRoot = DomItem<RootProperties>;
/**
 * Decides which items below (and including) an item are wanted. It receives the item being tested and everything
 * gathered so far, and returns the gathered results with the item added if it qualifies.
 */
export type ChildTest = (item: DomItem, gatheredResults: DomItem[]) => DomItem[];
