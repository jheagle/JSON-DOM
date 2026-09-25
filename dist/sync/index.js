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
const updateChildren_1 = __importDefault(require('./updateChildren'))
const updateDomItem_1 = __importDefault(require('./updateDomItem'))
const updateDomItems_1 = __importDefault(require('./updateDomItems'))
exports.default = {
  updateChildren: updateChildren_1.default,
  updateDomItem: updateDomItem_1.default,
  updateDomItems: updateDomItems_1.default
}
