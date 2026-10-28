import type { OptionsObject, OptionsTemplate } from '../../types';
/**
 * Take an integer representation of the listener options and convert them to the listener options object.
 * @param optionsTemplate
 * @param binaryOptions
 */
declare const numberToOptions: (optionsTemplate: OptionsTemplate, binaryOptions: number) => OptionsObject;
export default numberToOptions;
