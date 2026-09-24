import 'core-js/stable';
import type { ListenerOptions, OptionsTemplate } from '../../types';
/**
 * Take the given options and convert them (using binary) to an integer. Given listener options, each one is assigned a
 * bitwise position. The resulting binary number represents any possible combination of the available flags set.
 * @function
 * @memberOf module:optionFlags
 * @param {OptionsTemplate} optionsTemplate
 * @param {Options|Option} listenerOptions
 * @returns {int}
 */
declare const optionsToNumber: (optionsTemplate: OptionsTemplate, listenerOptions?: ListenerOptions | null) => number;
export default optionsToNumber;
