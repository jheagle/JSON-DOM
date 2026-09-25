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
const setParentItemReferences_1 = __importDefault(require('../domItem/tree/setParentItemReferences'))
const addDomItemProperties_1 = __importDefault(require('../domItem/objects/addDomItemProperties'))
/**
 * Convert DOM Item to JSON string.
 * @function
 * @memberOf module:domGeneral
 * @param {string} jsonString
 * @returns {DomItem}
 */
const jsonToDomItem = jsonString => {
  const parsedJson = (0, setParentItemReferences_1.default)((0, addDomItemProperties_1.default)(JSON.parse(jsonString)))
  if (parsedJson.nodeName === '#document') {
    const root = parsedJson
    root.element = document
    root.head = root.children[0]
    root.body = root.children[1]
  }
  return parsedJson
}
exports.default = jsonToDomItem
