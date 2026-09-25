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
require('core-js/stable')
const domItemToJson_1 = __importDefault(require('./domItemToJson'))
const removeEmptyProperties_1 = __importDefault(require('./removeEmptyProperties'))
exports.default = {
  domItemToJson: domItemToJson_1.default,
  removeEmptyProperties: removeEmptyProperties_1.default
}
