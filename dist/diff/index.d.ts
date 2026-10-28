declare const _default: {
    createChangeList: ({ removed, added }?: Partial<Pick<import("./types").ChangeList, "removed" | "added">>) => import("./types").ChangeList;
    domItemChanges: (domItem: import("../domItem/types").DomItem) => import("./types").ChangeList;
    domItemHasAttribute: (domItem: import("../domItem/types").DomItem, key: string, attr: unknown) => import("./types").AttributeComparison;
    elementChanges: (domItem: import("../domItem/types").DomItem) => import("./types").ChangeList;
    elementHasAttribute: (element: HTMLElement | null | undefined, key: string, attr: unknown) => import("./types").AttributeComparison;
    getAssignedStyles: (elementStyles: CSSStyleDeclaration | import("../domItem/types").StyleValues) => import("../domItem/types").StyleValues;
};
export default _default;
