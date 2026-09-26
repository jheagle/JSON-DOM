'use strict'

require('core-js/modules/esnext.iterator.constructor.js')
require('core-js/modules/esnext.iterator.flat-map.js')
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
const definitions_1 = __importDefault(require('./definitions'))
/**
 * The properties an item has only because of its traits, and which do not belong in json (the element of the render
 * trait, for one).
 * @param item - The item to look at.
 * @private
 */
const getNonSerializableKeys = item => Object.keys(item.has ?? {}).flatMap(trait => {
  const definition = definitions_1.default.get(trait)
  return definition && definition.serializable === false ? definition.keys : []
})
exports.default = getNonSerializableKeys
