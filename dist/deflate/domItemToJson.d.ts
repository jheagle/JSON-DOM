import 'core-js/stable';
import type { DomItem } from '../domItem/types';
/**
 * Convert DOM Item to JSON string.
 * @function
 * @memberOf module:domGeneral
 * @param {DomItem} item
 * @param {Object} [options={}]
 * @param {int} [options.mapLimit=100]
 * @param {int} [options.relevancyRange=1000]
 * @returns {string}
 */
declare const domItemToJson: (item: DomItem, { mapLimit, relevancyRange }?: {
    mapLimit?: number;
    relevancyRange?: number;
}) => string;
export default domItemToJson;
