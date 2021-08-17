"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.array.concat.js");

require("core-js/stable");

/**
 * Retrieve the {@link module:domFunctions~testChildItem} function by providing an attribute and value to check.
 * @function
 * @memberOf module:domFunctions
 * @param {string} attr - Provide the attribute name to be searched
 * @param {*} value - The attribute value to be compared
 * @returns {module:domFunctions~testChildItem}
 */
var getChildTest = function getChildTest(attr, value) {
  return function (item, gatheredResults) {
    return item.attributes[attr] && item.attributes[attr] === value ? gatheredResults.concat([item]) : gatheredResults;
  };
};

var _default = getChildTest;
exports.default = _default;