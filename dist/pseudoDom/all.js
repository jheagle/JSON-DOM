'use strict'

function _typeof (obj) { '@babel/helpers - typeof'; if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') { _typeof = function _typeof (obj) { return typeof obj } } else { _typeof = function _typeof (obj) { return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj } } return _typeof(obj) }

require('core-js/modules/es.array.iterator.js')

require('core-js/modules/es.object.to-string.js')

require('core-js/modules/es.string.iterator.js')

require('core-js/modules/es.weak-map.js')

require('core-js/modules/esnext.weak-map.delete-all.js')

require('core-js/modules/web.dom-collections.iterator.js')

require('core-js/modules/es.object.get-own-property-descriptor.js')

require('core-js/modules/es.symbol.js')

require('core-js/modules/es.symbol.description.js')

require('core-js/modules/es.symbol.iterator.js')

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

require('core-js/modules/es.object.assign.js')

var PseudoEvent = _interopRequireWildcard(require('./class/PseudoEvent'))

var PseudoEventTarget = _interopRequireWildcard(require('./class/PseudoEventTarget'))

var PseudoNode = _interopRequireWildcard(require('./class/PseudoNode'))

var PseudoElement = _interopRequireWildcard(require('./class/PseudoElement'))

var PseudoHTMLElement = _interopRequireWildcard(require('./class/PseudoHTMLElement'))

var PseudoHTMLDocument = _interopRequireWildcard(require('./class/PseudoHTMLDocument'))

function _getRequireWildcardCache (nodeInterop) { if (typeof WeakMap !== 'function') return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop })(nodeInterop) }

function _interopRequireWildcard (obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj } if (obj === null || _typeof(obj) !== 'object' && typeof obj !== 'function') { return { default: obj } } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj) } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc) } else { newObj[key] = obj[key] } } } newObj.default = obj; if (cache) { cache.set(obj, newObj) } return newObj }

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
  var newWindow = typeof root.document === 'undefined' ? root : new pseudoDom.PseudoEventTarget()
  /**
     * @type {Node|PseudoNode}
     */

  var Node = root.Node || new pseudoDom.PseudoNode()

  if (typeof newWindow.Node === 'undefined') {
    newWindow.Node = Node
  }
  /**
     *
     * @type {Element|PseudoElement}
     */

  var Element = root.Element || new pseudoDom.PseudoElement()

  if (typeof newWindow.Element === 'undefined') {
    newWindow.Element = Element
  }
  /**
     * Create an instance of HTMLElement if not available
     * @type {HTMLElement|PseudoHTMLElement}
     */

  var HTMLElement = root.HTMLElement || new pseudoDom.PseudoHTMLElement()

  if (typeof newWindow.HTMLElement === 'undefined') {
    newWindow.HTMLElement = HTMLElement
  }
  /**
     * Define document when not available
     * @type {Document|PseudoHTMLDocument}
     */

  var document = root.document || new pseudoDom.PseudoHTMLDocument()

  if (typeof newWindow.document === 'undefined') {
    newWindow.document = document
  }

  return context ? Object.assign(context, pseudoDom, newWindow) : Object.assign(root, newWindow)
}

var _default = Object.assign(pseudoDom, PseudoEvent, PseudoEventTarget, PseudoNode, PseudoElement, PseudoHTMLElement, PseudoHTMLDocument)

exports.default = _default
