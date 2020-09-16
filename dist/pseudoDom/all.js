'use strict'

function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

require('core-js/modules/es.object.assign')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

var PseudoEvent = _interopRequireWildcard(require('./class/PseudoEvent'))

var PseudoEventTarget = _interopRequireWildcard(require('./class/PseudoEventTarget'))

var PseudoNode = _interopRequireWildcard(require('./class/PseudoNode'))

var PseudoElement = _interopRequireWildcard(require('./class/PseudoElement'))

var PseudoHTMLElement = _interopRequireWildcard(require('./class/PseudoHTMLElement'))

var PseudoHTMLDocument = _interopRequireWildcard(require('./class/PseudoHTMLDocument'))

function _getRequireWildcardCache () { if (typeof WeakMap !== 'function') return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache () { return cache }; return cache }

function _interopRequireWildcard (obj) { if (obj && obj.__esModule) { return obj } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') { return { default: obj } } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj) } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc) } else { newObj[key] = obj[key] } } } newObj.default = obj; if (cache) { cache.set(obj, newObj) } return newObj }

/**
 * @file All of the Pseudo Dom Helper Objects functions for simulating parts of the DOM when running scripts in NodeJs.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
*/

/**
   * All methods exported from this module are encapsulated within pseudoDom.
   * @author Joshua Heagle <joshuaheagle@gmail.com>
   * @typedef {Object} pseudoDom
   * @module pseudoDom/objects
   */
var pseudoDom = {}
/**
   * Construct the Pseudo Dom to provide access to Dom objects which are otherwise not available outside of the browser
   * context.
   * @function generate
   * @param {Object} root
   * @param {Object} context
   * @returns {Window|PseudoEventTarget}
   */

pseudoDom.generate = function (root) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}

  /**
     *
     * @type {Window|PseudoEventTarget}
     */
  var window = typeof root.document === 'undefined' ? root : new pseudoDom.PseudoEventTarget()
  /**
     * @type {Node|PseudoNode}
     */

  var Node = root.Node || new pseudoDom.PseudoNode()

  if (typeof window.Node === 'undefined') {
    window.Node = Node
  }
  /**
     *
     * @type {Element|PseudoElement}
     */

  var Element = root.Element || new pseudoDom.PseudoElement()

  if (typeof window.Element === 'undefined') {
    window.Element = Element
  }
  /**
     * Create an instance of HTMLElement if not available
     * @type {HTMLElement|PseudoHTMLElement}
     */

  var HTMLElement = root.HTMLElement || new pseudoDom.PseudoHTMLElement()

  if (typeof window.HTMLElement === 'undefined') {
    window.HTMLElement = HTMLElement
  }
  /**
     * Define document when not available
     * @type {Document|PseudoHTMLDocument}
     */

  var document = root.document || new pseudoDom.PseudoHTMLDocument()

  if (typeof window.document === 'undefined') {
    window.document = document
  }

  return context ? Object.assign(context, pseudoDom, window) : Object.assign(root, window)
}

var _default = Object.assign(pseudoDom, PseudoEvent, PseudoEventTarget, PseudoNode, PseudoElement, PseudoHTMLElement, PseudoHTMLDocument)

exports.default = _default
