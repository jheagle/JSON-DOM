/**
 * Core Virtual DOM (DomItem tree) management: building items, the traits they carry, and finding and changing
 * items in a tree.
 */
import 'core-js/stable';
declare const _default: {
    addDomItemProperties: (item: import("./types").DomItemConfig) => import("./types").DomItem;
    appendChild: (parent: import("./types").DomItem, child: import("./types").DomItem) => import("./types").DomItem;
    createCoreItem: (item?: import("./types").DomItemConfig) => import("./types").CoreItem;
    createDomItem: (item?: import("./types").DomItemConfig) => import("./types").DomItem;
    defineTrait: (name: string, definition: import("./types").TraitDefinition) => import("./types").TraitDefinition;
    documentDomItem: (listeners?: Record<string, import("../events/types").ListenerFunction>, rootItem?: import("./types").DomItemRoot) => import("./types").DomItemRoot;
    documentItem: import("./types").DomItemRoot;
    gatherChildItems: (item: import("./types").DomItem, test: import("./types").ChildTest) => import("./types").DomItem[];
    getChildrenByClass: (className: string, item?: import("./types").DomItem) => import("./types").DomItem[];
    getChildrenByName: (name: string, item?: import("./types").DomItem) => import("./types").DomItem[];
    getChildrenFromAttribute: (attr: string, value: unknown, item?: import("./types").DomItem) => import("./types").DomItem[];
    getChildTest: (attr: string, value: unknown) => import("./types").ChildTest;
    getParentsByClass: (className: string, item?: import("./types").DomItem) => import("./types").DomItem[];
    getParentsByName: (name: string, item?: import("./types").DomItem) => import("./types").DomItem[];
    getParentsByTagName: (nodeName: string, item?: import("./types").DomItem) => import("./types").DomItem[];
    getParentsFromAttribute: (attr: string, value: unknown, item?: import("./types").DomItem) => import("./types").DomItem[];
    getTopParentItem: (item: import("./types").DomItem) => import("./types").DomItemRoot;
    getTraitDefinition: (name: string) => import("./types").TraitDefinition | undefined;
    hasTrait: <Trait extends import("./types").TraitName>(item: import("./types").CoreItem, trait: Trait) => item is import("./types").CoreItem & import("./types").WithTraits<Trait>;
    hasTraits: <Trait extends import("./types").TraitName>(item: import("./types").CoreItem, ...traits: Trait[]) => item is import("./types").CoreItem & import("./types").WithTraits<Trait>;
    initChildren: () => import("./types").DomItem[];
    initRoot: (children?: import("./types").DomItem[], listeners?: Record<string, import("../events/types").ListenerFunction>) => import("./types").DomItemRoot;
    insertChild: (parent: import("./types").DomItem, child: import("./types").DomItem, index: number) => import("./types").DomItem;
    isDomItem: (item: import("./types").CoreItem) => item is import("./types").DomItem;
    removeChild: (parent: import("./types").DomItem, child: import("./types").DomItem) => import("./types").DomItem[];
    setParentItemReferences: (item: import("./types").DomItem) => import("./types").DomItem;
    withTrait: <Item extends import("./types").CoreItem, Trait extends import("./types").TraitName>(item: Item, trait: Trait, data: import("./types").TraitRegistry[Trait]) => Item & import("./types").WithTraits<Trait>;
};
export default _default;
