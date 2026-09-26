'use strict'

const __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule
    ? mod
    : {
        default: mod
      }
}
Object.defineProperty(exports, '__esModule', {
  value: true
})
/**
 * Be able to use Flags (Options) in a well-formed way.
 */
require('core-js/stable')
const getListenerOptions_1 = __importDefault(require('./options/getListenerOptions'))
const numberToOptions_1 = __importDefault(require('./options/numberToOptions'))
const optionsToNumber_1 = __importDefault(require('./options/optionsToNumber'))
exports.default = {
  getListenerOptions: getListenerOptions_1.default,
  numberToOptions: numberToOptions_1.default,
  optionsToNumber: optionsToNumber_1.default
}
