'use strict'

require('core-js/modules/es.object.define-property.js')
Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/es.array.includes.js')
require('core-js/modules/es.object.assign.js')
require('core-js/stable')
var _functionalHelpers = _interopRequireDefault(require('functional-helpers'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * @typedef {Function} appendChanges
 * @memberOf module:domObjects
 * @param {string} changeType - Either 'removed' or 'added'
 * @param {DotNotatedObject} changes - The changes to append to existing type
 */

/**
 * Initialize the appendChanges method with the changeList, return the appendChanges method.
 * @param {ChangeList} changeList
 * @returns {appendChanges}
 */
var appendChangesTo = function appendChangesTo (changeList) {
  return function (changeType, changes) {
    if (!['added', 'removed'].includes(changeType)) {
      throw Error("Method appendChanges change type must be 'added' or 'removed'; ".concat(changeType, ' given.'))
    }
    return _functionalHelpers.default.mergeObjects(changeList[changeType], changes)
  }
}

/**
 * Represent changes / a diff of an object, including removed, added, and changed properties.
 * @typedef {Object.<string, DotNotatedObject>} ChangeList
 * @memberOf module:domObjects
 * @property {DotNotatedObject} removed
 * @property {DotNotatedObject} added
 * @property {appendChanges} appendChanges
 */

/**
 * Create the change list template.
 * @function
 * @memberOf module:domObjects
 * @param {ChangeList} changeList
 * @param {DotNotatedObject} [changeList.removed={}]
 * @param {DotNotatedObject} [changeList.added={}]
 * @returns {ChangeList}
 */
var createChangeList = function createChangeList () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}
  var _ref$removed = _ref.removed
  var removed = _ref$removed === void 0 ? {} : _ref$removed
  var _ref$added = _ref.added
  var added = _ref$added === void 0 ? {} : _ref$added
  var changeList = {
    removed: Object.assign({}, removed),
    added: Object.assign({}, added)
  }
  changeList.appendChanges = appendChangesTo(changeList)
  return changeList
}
var _default = createChangeList
exports.default = _default
