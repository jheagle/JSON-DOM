'use strict'

require('core-js/modules/es.object.define-property.js')
Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/stable')
var _functionalHelpers = _interopRequireDefault(require('functional-helpers'))
var _getParentsFromAttribute = _interopRequireDefault(require('./getParentsFromAttribute.js'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * Helper for getting all domObjects.DomItems starting at child and having specified nodeName
 * @function
 * @memberOf module:domFunctions
 * @returns {Array}
 */
var getParentsByTagName = _functionalHelpers.default.curry(_getParentsFromAttribute.default)('nodeName')
var _default = getParentsByTagName
exports.default = _default
