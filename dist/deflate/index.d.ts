import 'core-js/stable';
declare const _default: {
    domItemToJson: (item: import("../domItem/types").CoreItem, { mapLimit, relevancyRange }?: {
        mapLimit?: number;
        relevancyRange?: number;
    }) => string;
    removeEmptyProperties: (item: import("../domItem/types").CoreItem, propertiesToDelete?: string[]) => import("../domItem/types").CoreItem;
};
export default _default;
