import 'core-js/stable';
declare const _default: {
    domItemToJson: (item: import("../domItem/types").DomItem, { mapLimit, relevancyRange }?: {
        mapLimit?: number;
        relevancyRange?: number;
    }) => string;
    removeEmptyProperties: (item: import("../domItem/types").DomItem, propertiesToDelete?: string[]) => import("../domItem/types").DomItem;
};
export default _default;
