"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.keys.js");

require("core-js/modules/es.array.concat.js");

require("core-js/stable");

var _documentItem = _interopRequireDefault(require("../objects/documentItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A selector function for retrieving existing child domObjects.DomItems from the given parent item.
 * This function will check all the children starting from item, and scan the attributes
 * property for matches. The return array contains children matching from all levels.
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {string} attr - Provide the attribute name to be searched
 * @param {*} value - The attribute value to be compared
 * @param {DomItem} item - The DomItem which may have parent items matching the
 * attribute criteria
 * @returns {Array}
 */
var getParentsFromAttribute = function getParentsFromAttribute(attr, value) {
  var item = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _documentItem.default.body;
  return Object.keys(item.parentItem).length ? (item.parentItem.attributes[attr] || item[attr] || false) === value ? getParentsFromAttribute(attr, value, item.parentItem).concat([item.parentItem]) : getParentsFromAttribute(attr, value, item.parentItem) : [];
};

var _default = getParentsFromAttribute;
exports.default = _default;