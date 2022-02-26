"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.regexp.test.js");

require("core-js/stable");

var _functionalHelpers = _interopRequireDefault(require("functional-helpers"));

var _domItemChanges = _interopRequireDefault(require("./domItemChanges.js"));

var _setAndReturnAttribute = _interopRequireDefault(require("./setAndReturnAttribute.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Update a single objects.DomItem element with the provided attributes / style / elementProperties
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} domItem - The DomItem having domItem changes to be applied to its
 * element
 * @returns {DomItem}
 */
var updateElement = function updateElement(domItem) {
  if (!domItem.element.style) {
    // if element is not a valid element then return the domItem without changes
    return domItem;
  }

  domItem = (0, _domItemChanges.default)(domItem); // Set the the current attributes to contain all the changes

  domItem.attributes = _functionalHelpers.default.mapObject( // Retrieve only the changes to be applied from the attributes
  domItem.attributes, function (attr, key) {
    if (!_functionalHelpers.default.isObject(attr) || _functionalHelpers.default.emptyObject(attr)) {
      return key in domItem.element ? _functionalHelpers.default.setAndReturnValue(domItem.element, key, attr) : (0, _setAndReturnAttribute.default)(domItem, key, attr);
    }

    var cleanedStyles = _functionalHelpers.default.filterObject( // Remove attributes which have a numeric key (these are unwanted styles stored on elements)
    attr, function (param, k) {
      return /^\D+$/.test(k);
    });

    return _functionalHelpers.default.reduceObject(cleanedStyles, function (newStyle, p, i) {
      return _functionalHelpers.default.setValue(i, p, newStyle);
    }, domItem.element.style);
  });
  return domItem;
};

var _default = updateElement;
exports.default = _default;