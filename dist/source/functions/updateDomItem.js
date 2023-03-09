'use strict'

require('core-js/modules/es.object.define-property.js')
Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0
require('core-js/modules/es.array.splice.js')
require('core-js/stable')
var _siFunciona = _interopRequireDefault(require('si-funciona'))
var _elementChanges = _interopRequireDefault(require('./elementChanges.js'))
function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }
/**
 * Update a single objects.DomItem element with the provided attributes / style / elementProperties
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} config - The DomItem having config changes to be applied to its
 * element
 * @returns {DomItem}
 */
var updateDomItem = function updateDomItem (config) {
  if (!config.element) {
    // if element is not a valid element then return the config without changes
    return config
  }
  var changes = (0, _elementChanges.default)(config)
  for (var dotKey in changes.removed) {
    var attributeKey = _siFunciona.default.strAfter(dotKey, '.')
    if (_siFunciona.default.strBefore(attributeKey, '.') === 'className') {
      var classList = config.attributes.className.split(' ')
      classList.splice(_siFunciona.default.strAfterLast(attributeKey, '.'), 1)
      config.attributes.className = classList.join(' ')
      continue
    }
    _siFunciona.default.dotUnset(config, dotKey)
  }
  for (var _dotKey in changes.added) {
    var _attributeKey = _siFunciona.default.strAfter(_dotKey, '.')
    if (_siFunciona.default.strBefore(_attributeKey, '.') === 'className') {
      var _classList = config.attributes.className.split(' ')
      _classList.push(changes.added[_dotKey])
      config.attributes.className = _classList.join(' ')
      continue
    }
    _siFunciona.default.dotSet(config, _dotKey, changes.added[_dotKey])
  }
  return config
}
var _default = updateDomItem
exports.default = _default
