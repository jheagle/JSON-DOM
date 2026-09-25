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
const generateElement_1 = __importDefault(require('./generateElement'))
const renderHtml_1 = __importDefault(require('./renderHtml'))
const updateChildNodes_1 = __importDefault(require('./updateChildNodes'))
const updateElement_1 = __importDefault(require('./updateElement'))
const updateElements_1 = __importDefault(require('./updateElements'))
exports.default = {
  generateElement: generateElement_1.default,
  renderHtml: renderHtml_1.default,
  updateChildNodes: updateChildNodes_1.default,
  updateElement: updateElement_1.default,
  updateElements: updateElements_1.default
}
