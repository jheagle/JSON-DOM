'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/modules/es.symbol.js')

require('core-js/modules/es.symbol.description.js')

require('core-js/modules/es.object.to-string.js')

require('core-js/modules/es.symbol.iterator.js')

require('core-js/modules/es.array.iterator.js')

require('core-js/modules/es.string.iterator.js')

require('core-js/modules/web.dom-collections.iterator.js')

require('core-js/stable')

const _functionalHelpers = _interopRequireDefault(require('functional-helpers'))

const _elementHasAttribute = _interopRequireDefault(require('./elementHasAttribute'))

const _generateElement = _interopRequireDefault(require('./generateElement'))

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

/**
 * Given a domObjects.DomItem as config, this function will return the changes to be applied
 * to the stored element property.
 * @function
 * @memberOf module:domFunctions
 * @param {module:domObjects~DomItem} config - The DomItem having config changes to be applied to its
 * element
 * @returns {module:domObjects~DomItem}
 */
const elementChanges = function elementChanges (config) {
  return config.element.tagName.toLowerCase() !== config.tagName.toLowerCase() ? (0, _generateElement.default)(config) // Remove all the similarities
    : _functionalHelpers.default.setValue('attributes', _functionalHelpers.default.filterObject(config.attributes, // For each attribute, check if it becomes true / false based on the comparison results
      function (attr1, key1) {
        return _functionalHelpers.default.filterObject( // Get attributes as object of truthy and falsy values
          _functionalHelpers.default.mapObject(config.attributes, function (attr2, key2) {
            return _typeof(attr2) === 'object' || key2 === 'className' ? _functionalHelpers.default.filterObject((0, _elementHasAttribute.default)(config.element, key2, attr2), function (attr3) {
              return attr3 === 1
            }) // True when the element does not already have the attribute
              : !(0, _elementHasAttribute.default)(config.element, key2, attr2)
          }), // Remove when the attr4 value is 0 or false, or not empty object
          function (attr4) {
            return !!attr4
          })[key1]
      }), config)
}

const _default = elementChanges
exports.default = _default
