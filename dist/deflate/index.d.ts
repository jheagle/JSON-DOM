declare const _default: {
    domItemToJson: (item: import("../domItem/types").CoreItem, { propertiesToDelete }?: {
        propertiesToDelete?: string[];
    }) => string;
    removeEmptyProperties: (item: import("../domItem/types").CoreItem, propertiesToDelete?: string[]) => import("../domItem/types").CoreItem;
};
export default _default;
