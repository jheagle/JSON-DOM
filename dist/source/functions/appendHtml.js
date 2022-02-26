"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/stable");

var _functionalHelpers = _interopRequireDefault(require("functional-helpers"));

var _documentItem = _interopRequireDefault(require("../objects/documentItem.js"));

var _appendAndReturnChild = _interopRequireDefault(require("./appendAndReturnChild.js"));

var _bindElement = _interopRequireDefault(require("./bindElement.js"));

var _retrieveParentItem = _interopRequireDefault(require("./retrieveParentItem.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Append a new DomItem which has the element generated.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - A new DomItem to append
 * @param {DomItem} parent - The parent to have DomItems appended
 * @returns {DomItem}
 */
var appendHtml = function appendHtml(item) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _documentItem.default.body;
  return (0, _appendAndReturnChild.default)((0, _bindElement.default)(item), _functionalHelpers.default.setValue('children', _functionalHelpers.default.addUniqueToArray(item, (0, _retrieveParentItem.default)(parent).children), (0, _retrieveParentItem.default)(parent)));
};

var _default = appendHtml;
exports.default = _default;