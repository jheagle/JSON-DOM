import 'core-js/stable';
import type { CoreItem } from '../domItem/types';
/**
 * Convert DOM Item to JSON string.
 * @param item
 * @param options
 * @param options.mapLimit
 * @param options.relevancyRange
 */
declare const domItemToJson: (item: CoreItem, { mapLimit, relevancyRange }?: {
    mapLimit?: number;
    relevancyRange?: number;
}) => string;
export default domItemToJson;
