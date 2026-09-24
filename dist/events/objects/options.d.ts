/**
 * @file Be able to use Flags (Options) in a well-formed way.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module optionFlags
 * @memberOf module:domEvents
 */
import 'core-js/stable';
/**
 * A boolean value used to alter functionality.
 * @typedef {boolean} Option
 * @memberOf module:domEvents
 */
/**
 * A set of named options within an object, or simply a singular Option.
 * @typedef {Object.<string, Option>|Option} Options
 */
/**
 * A numeric value used as position in a binary number having any numeric value 2^n.
 * @typedef {int} Flag
 */
/**
 * Object containing available Option names and the Flag value associated with each.
 * @typedef {Object.<string, Flag>} OptionsTemplate
 */
declare const _default: {
    getListenerOptions: () => import("../types").OptionsTemplate;
    numberToOptions: (optionsTemplate: import("../types").OptionsTemplate, binaryOptions: number) => import("../types").OptionsObject;
    optionsToNumber: (optionsTemplate: import("../types").OptionsTemplate, listenerOptions?: import("../types").ListenerOptions | null) => number;
};
export default _default;
