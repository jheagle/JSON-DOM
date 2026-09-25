/**
 * Be able to use Flags (Options) in a well-formed way.
 */
import 'core-js/stable';
declare const _default: {
    getListenerOptions: () => import("../types").OptionsTemplate;
    numberToOptions: (optionsTemplate: import("../types").OptionsTemplate, binaryOptions: number) => import("../types").OptionsObject;
    optionsToNumber: (optionsTemplate: import("../types").OptionsTemplate, listenerOptions?: import("../types").ListenerOptions | null) => number;
};
export default _default;
