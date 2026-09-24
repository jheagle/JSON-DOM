import 'core-js/stable';
import type { OptionsObject, OptionsTemplate } from '../../types';
/**
 * Take an integer representation of the listener options and convert them to the listener options object.
 * @function
 * @memberOf module:optionFlags
 * @param {OptionsTemplate} optionsTemplate
 * @param {int} binaryOptions
 * @returns {EventListenerOptions}
 */
declare const numberToOptions: (optionsTemplate: OptionsTemplate, binaryOptions: number) => OptionsObject;
export default numberToOptions;
