"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/stable");

var _functionalHelpers = _interopRequireDefault(require("functional-helpers"));

var _getParentsFromAttribute = _interopRequireDefault(require("./getParentsFromAttribute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Helper for getting all domObjects.DomItems starting at child and having specified className attribute
 * @function
 * @memberOf module:domFunctions
 * @returns {Array}
 */
var getParentsByClass = _functionalHelpers.default.curry(_getParentsFromAttribute.default)('className');

var _default = getParentsByClass;
exports.default = _default;