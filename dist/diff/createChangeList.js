'use strict'

require('core-js/modules/es.array.includes.js')
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
const si_funciona_1 = __importDefault(require('si-funciona'))
/**
 * Initialize the appendChanges method with the changeList, return the appendChanges method.
 * @param changeList
 * @private
 */
const appendChangesTo = changeList => (changeType, changes) => {
  if (!['added', 'removed'].includes(changeType)) {
    throw Error(`Method appendChanges change type must be 'added' or 'removed'; ${changeType} given.`)
  }
  return si_funciona_1.default.mergeObjects(changeList[changeType], changes)
}
/**
 * Create the change list template.
 * @param changeList
 * @param changeList.removed
 * @param changeList.added
 */
const createChangeList = ({
  removed = {},
  added = {}
} = {}) => {
  const changeList = {
    removed: Object.assign({}, removed),
    added: Object.assign({}, added)
  }
  changeList.appendChanges = appendChangesTo(changeList)
  return changeList
}
exports.default = createChangeList
