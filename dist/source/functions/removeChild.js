"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.splice.js");

require("core-js/modules/es.array.index-of.js");

require("core-js/stable");

var _documentItem = _interopRequireDefault(require("../objects/documentItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Reverse of appendHtml, remove a DomItem and have the associated element removed.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem with HTMLElement to be removed
 * @param {DomItem} parent - The parent of the items
 * @returns {Array.<DomItem>}
 */
var removeChild = function removeChild(item) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _documentItem.default.body;
  parent.element.removeChild(item.element);
  return parent.children.splice(parent.children.indexOf(item), 1);
};

var _default = removeChild;
exports.default = _default;