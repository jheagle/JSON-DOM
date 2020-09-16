/**
 * @file All of the Pseudo Dom Helper Objects functions for simulating parts of the DOM when running scripts in NodeJs.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
*/

import * as PseudoEvent from './class/PseudoEvent'
import * as PseudoEventTarget from './class/PseudoEventTarget'
import * as PseudoNode from './class/PseudoNode'
import * as PseudoElement from './class/PseudoElement'
import * as PseudoHTMLElement from './class/PseudoHTMLElement'
import * as PseudoHTMLDocument from './class/PseudoHTMLDocument'

/**
   * All methods exported from this module are encapsulated within pseudoDom.
   * @author Joshua Heagle <joshuaheagle@gmail.com>
   * @typedef {Object} pseudoDom
   * @module pseudoDom/objects
   */
const pseudoDom = {}

/**
   * Construct the Pseudo Dom to provide access to Dom objects which are otherwise not available outside of the browser
   * context.
   * @function generate
   * @param {Object} root
   * @param {Object} context
   * @returns {Window|PseudoEventTarget}
   */
pseudoDom.generate = (root, context = {}) => {
  /**
     *
     * @type {Window|PseudoEventTarget}
     */
  const window = typeof root.document === 'undefined' ? root : new pseudoDom.PseudoEventTarget()

  /**
     * @type {Node|PseudoNode}
     */
  const Node = root.Node || new pseudoDom.PseudoNode()
  if (typeof window.Node === 'undefined') {
    window.Node = Node
  }

  /**
     *
     * @type {Element|PseudoElement}
     */
  const Element = root.Element || new pseudoDom.PseudoElement()
  if (typeof window.Element === 'undefined') {
    window.Element = Element
  }

  /**
     * Create an instance of HTMLElement if not available
     * @type {HTMLElement|PseudoHTMLElement}
     */
  const HTMLElement = root.HTMLElement || new pseudoDom.PseudoHTMLElement()
  if (typeof window.HTMLElement === 'undefined') {
    window.HTMLElement = HTMLElement
  }

  /**
     * Define document when not available
     * @type {Document|PseudoHTMLDocument}
     */
  const document = root.document || new pseudoDom.PseudoHTMLDocument()
  if (typeof window.document === 'undefined') {
    window.document = document
  }

  return context ? Object.assign(context, pseudoDom, window) : Object.assign(root, window)
}

export default Object.assign(
  pseudoDom,
  PseudoEvent,
  PseudoEventTarget,
  PseudoNode,
  PseudoElement,
  PseudoHTMLElement,
  PseudoHTMLDocument
)
