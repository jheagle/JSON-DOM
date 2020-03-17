/**
 * @file All of the Pseudo Dom Helper Objects functions for simulating parts of the DOM when running scripts in NodeJs.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 */
'use strict'
;(function () {
  /**
   * Store a reference to this scope which will be Window if rendered via browser
   */
  const root = this || {}

  /**
   * Store reference to any pre-existing module of the same name
   * @type {module|*}
   */
  const previousJDomPseudoDom = root.pseudoDom || {}

  /**
   * All methods exported from this module are encapsulated within pseudoDom.
   * @author Joshua Heagle <joshuaheagle@gmail.com>
   * @typedef {Object} pseudoDom
   * @module pseudoDom/objects
   */
  const pseudoDom = {}
  root.pseudoDom = pseudoDom

  /**
   * Return a reference to this library while preserving the original same-named library
   * @function noConflict
   * @returns {pseudoDom}
   */
  pseudoDom.noConflict = () => {
    root.pseudoDom = previousJDomPseudoDom
    return pseudoDom
  }

  /**
   * @type {PseudoEvent}
   */
  pseudoDom.PseudoEvent = require('./class/PseudoEvent')
  /**
   * @type {PseudoEventTarget}
   */
  pseudoDom.PseudoEventTarget = require('./class/PseudoEventTarget')
  /**
   * @type {PseudoNode}
   */
  pseudoDom.PseudoNode = require('./class/PseudoNode').PseudoNode
  /**
   * @type {PseudoElement}
   */
  pseudoDom.PseudoElement = require('./class/PseudoElement')
  /**
   * @type {PseudoHTMLElement}
   */
  pseudoDom.PseudoHTMLElement = require('./class/PseudoHTMLElement')
  /**
   * @type {PseudoHTMLDocument}
   */
  pseudoDom.PseudoHTMLDocument = require('./class/PseudoHTMLDocument')

  /**
   * Construct the Pseudo Dom to provide access to Dom objects which are otherwise not available outside of the browser
   * context.
   * @function generate
   * @param {Object} context
   * @returns {Window|PseudoEventTarget}
   */
  pseudoDom.generate = (context = {}) => {
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

  /**
   * Either export all functions to be exported, or assign to the Window context
   */
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = pseudoDom
    }
    exports = Object.assign(exports, pseudoDom)
  }
}).call(this || window || {}) // Use the external context to assign this, which will be Window if rendered via browser
