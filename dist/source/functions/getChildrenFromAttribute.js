'use strict'

require('core-js/modules/es.object.define-property.js')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/stable')

var _documentItem = _interopRequireDefault(require('../objects/documentItem.js'))

var _gatherChildItems = _interopRequireDefault(require('./gatherChildItems.js'))

var _getChildTest = _interopRequireDefault(require('./getChildTest.js'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

/**
 * A selector function for retrieving existing child domObjects.DomItems from the given parent item.
 * This function will check all the children starting from item, and scan the attributes
 * property for matches. The returned array contains children matching from all levels.
 * WARNING: This calls a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {string} attr - Provide the attribute name to be searched
 * @param {*} value - The attribute value to be compared
 * @param {DomItem} item - The DomItem which may have child items matching the attribute
 * criteria
 * @returns {Array.<DomItem>}
 */
var getChildrenFromAttribute = function getChildrenFromAttribute (attr, value) {
  var item = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _documentItem.default.body
  return (0, _gatherChildItems.default)(item, (0, _getChildTest.default)(attr, value))
}

var _default = getChildrenFromAttribute
exports.default = _default
