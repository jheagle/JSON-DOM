"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.assign.js");

require("core-js/stable");

var _functions = _interopRequireDefault(require("./source/functions"));

var _objects = _interopRequireDefault(require("./source/objects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * All of the JSON DOM system functions for creating JSON components.
 * @file
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module jsonDom
 */

/**
 * Store a reference to this scope which will be Window if rendered via browser
 */
var root = void 0 || window || global || {};
/**
 * Store reference to any pre-existing module of the same name
 * @type {module|*}
 */

var previousJsonDom = root.jsonDom || {};
/**
 * All methods exported from this module are encapsulated within jsonDom.
 * @typedef {module:jsonDom|module:domFunctions|module:domObjects} jsonDom
 */

var jsonDom = {};
root.jsonDom = jsonDom;
/**
 * Return a reference to this library while preserving the original same-named library
 * @function
 * @returns {module:jsonDom~jsonDom|module:domFunctions|module:domObjects}
 */

var noConflict = function noConflict() {
  root.jsonDom = previousJsonDom;
  return jsonDom;
};

jsonDom.noConflict = noConflict;

var _default = root.jsonDom = Object.assign(jsonDom, _functions.default, _objects.default);

exports.default = _default;