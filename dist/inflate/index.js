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
const jsonToDomItem_1 = __importDefault(require('./jsonToDomItem'))
exports.default = {
  jsonToDomItem: jsonToDomItem_1.default
}
