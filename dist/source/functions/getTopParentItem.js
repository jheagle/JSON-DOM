"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.keys.js");

require("core-js/stable");

/**
 * Get the upper parentItem for the provided child. (usually this is a documentItem reference)
 * WARNING: This is a recursive function.
 * @function
 * @memberOf module:domFunctions
 * @param {DomItem} item - The DomItem which we want the highest parent item of
 * @returns {DomItemRoot}
 */
var getTopParentItem = function getTopParentItem(item) {
  return Object.keys(item.parentItem).length ? getTopParentItem(item.parentItem) : item;
};

var _default = getTopParentItem;
exports.default = _default;