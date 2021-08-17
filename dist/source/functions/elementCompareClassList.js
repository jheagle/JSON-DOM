"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.split.js");

require("core-js/stable");

var _functionalHelpers = _interopRequireDefault(require("functional-helpers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Check if a class exists on the element, return object with keys for each class and a -1, 0, 1 difference indicator.
 * @function
 * @memberOf module:domFunctions
 * @param {HTMLElement} element - Provide an element to check classes
 * on.
 * @param {string} classes - A string of classes (like the content of the 'class' attribute) to be compared
 * @returns {Object<string, number>|*}
 */
var elementCompareClassList = function elementCompareClassList(element, classes) {
  return _functionalHelpers.default.compareArrays(classes.split(' '), [].from(element.classList));
};

var _default = elementCompareClassList;
exports.default = _default;