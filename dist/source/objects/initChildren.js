"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/stable");

var _createDomItem = _interopRequireDefault(require("./createDomItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * DomItemHead defines the structure for a single element in the Dom
 * @typedef {DomItem} DomItemHead
 * @property {string} [tagName=head] - This is set to the string head referring to the HTML element of the same name
 * @property {Object.<string, string|Object>} attributes - All potential HTML element attributes can be defined here
 * @property {HTMLHeadElement} element - A reference to the HTML head element
 * @property {Array.<DomItem>} children - A reference to an array of child objects
 */

/**
 * DomItemBody defines the structure for a single element in the Dom
 * @typedef {DomItem} DomItemBody
 * @property {string} [tagName=body] - This is set to the string body referring to the HTML element of the same name
 * @property {Object.<string, string|Object>} attributes - All potential HTML element attributes can be defined here
 * @property {HTMLBodyElement} element - A reference to the HTML body element
 * @property {Array.<DomItem>} children - A reference to an array of child objects
 */

/**
 * Initiate the children of Root / DocumentItem. This is a helper for {@link documentDomItem}.
 * @function
 * @memberOf module:domObjects
 * @returns {Array.<DomItemHead|DomItemBody>}
 */
var initChildren = function initChildren() {
  return [(0, _createDomItem.default)({
    tagName: 'head',
    attributes: {},
    element: document.head,
    children: []
  }), (0, _createDomItem.default)({
    tagName: 'body',
    attributes: {},
    element: document.body,
    children: []
  })];
};

var _default = initChildren;
exports.default = _default;