/**
 * @file Core objects for representing the DOM in JSON.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 */
;(function () {
  /**
   * Store a reference to this scope which will be Window if rendered via browser
   */
  let root = this || {}

  /**
   * Verify availability of document
   * @typedef {HTMLDocument|module:pseudoDom/objects.PseudoHTMLDocument} document
   */
  let document = root.document

  /**
   * If document remains undefined, attempt to retrieve it as a module
   */
  if (!Object.keys(root).length) {
    if (typeof require !== 'undefined') {
      // noinspection JSUnresolvedFunction
      /**
       * @see module:pseudoDom/objects.generate
       * @typedef {Window|module:pseudoDom/objects.PseudoEventTarget} root
       */
      root = require('../pseudoDom/objects.js').generate(root)
      document = root.document
    } else {
      console.error('objects.js requires pseudoDom/objects')
    }
  }

  /**
   * Store reference to any pre-existing module of the same name
   * @type {module|*}
   */
  const previousJDomObjectsDom = root.jDomObjects || {}

  /**
   * All methods exported from this module are encapsulated within jDomObjects
   * @author Joshua Heagle <joshuaheagle@gmail.com>
   * @typedef {Object} jDomObjects
   * @module dom/objects
   */
  const jDomObjects = {}
  root.jDomObjects = jDomObjects

  /**
   * Return a reference to this library while preserving the original same-named library
   * @function noConflict
   * @returns {jDomObjects}
   */
  jDomObjects.noConflict = () => {
    root.jDomObjects = previousJDomObjectsDom
    return jDomObjects
  }

  /**
   * Verify availability of functionalHelpers
   * @typedef {*|module:functionalHelpers} functionalHelpers
   */
  let functionalHelpers = root.functionalHelpers

  /**
   * If functionalHelpers remains undefined, attempt to retrieve it as a module
   */
  if (typeof functionalHelpers === 'undefined') {
    if (typeof require !== 'undefined') {
      functionalHelpers = require('functional-helpers')
    } else {
      console.error('dom/objects requires functional-helpers')
    }
  }

  /**
   * This is the standard definition of a listenerFunction to be used
   * @callback jDomObjects.listenerFunction
   * @callback listenerFunction
   * @param {Event|module:pseudoDom/objects.PseudoEvent} e - The event object passed to the listener
   * @param {module:dom/objects.DomItem} target - The element which triggered the event
   * @param {...*} [args] - Optional args as required by the listener
   */

  /**
   * A Boolean indicating whether events of this type will be dispatched to the registered listerFunction before being
   * dispatched to any EventTarget beneath it in the Dom tree.
   * @typedef {boolean} module:dom/objects.UseCapture
   */

  /**
   * OptionsObject defines the structure for the options to be passed to addEventListener
   * @typedef {Object} module:dom/objects.OptionsObject
   * @property {boolean} capture - Indicate that events of this type will be dispatched to the registered
   * listenerFunction before being dispatched to any EventTarget beneath it in the Dom tree.
   * @property {boolean} once - Indicate that the listenerFunction should be invoked at most once after being added. If
   * 'true', the listenerFunction would be automatically removed when invoked.
   * @property {boolean} passive - Indicate that, if 'true', indicates that the listenerFunction will never call
   * preventDefault(). If preventDefault() is called, the user agent will do nothing with it.
   */

  /**
   * EventListenerOptions is either a boolean as UseCapture or an Object as OptionsObject
   * @typedef {
   * module:dom/objects.OptionsObject|module:dom/objects.UseCapture
   * } module:dom/objects.EventListenerOptions
   */

  /**
   * An EventListener Object to be appended to the element within the DomItem
   * @typedef {Object} jDomObjects.EventListener
   * @typedef {Object} EventListener
   * @property {string} listenerFunc - A string function name matching an existing
   * {@link module:dom/objects~listenerFunction}.
   * @property {Object} listenerArgs - Additional args required for the listener function
   * @property {module:dom/objects.EventListenerOptions} listenerOptions - Provides support for options
   * parameter of addEventListener, or false for default
   */

  /**
   * DomItem defines the structure for a single element in the Dom
   * @typedef {Object} module:dom/objects.DomItem
   * @property {string} tagName - This is any valid HTMLElement tagName
   * @property {Object.<string, string|Object>} attributes - All potential HTML element attributes can be defined here
   * (including the defaulted style object)
   * @property {(Object|HTMLElement|module:pseudoDom/objects.PseudoHTMLElement)} element - A reference to an existing HTML element will be stored here (default
   * empty object)
   * @property {Object.<Event, module:dom/objects~EventListener>} eventListeners - An object holding all
   * events to be registered for the associated element
   * @property {module:dom/objects.DomItem} parentItem - A reference to the parent of this object
   * @property {Array.<module:dom/objects.DomItem>} children - A reference to an array of child objects
   */

  /**
   * This is the basic Object for representing the Dom in a virtual perspective. All incoming attributes will be merged
   * to the specified format.
   * @function createDomItem
   * @param {...Object} attributes - DomItem-like object(s) to be merged as a DomItem
   * @returns {module:dom/objects.DomItem}
   */
  jDomObjects.createDomItem = (...attributes) => functionalHelpers.mergeObjectsMutable({
    tagName: 'div',
    attributes: {
      style: {}
    },
    element: {},
    eventListeners: {},
    parentItem: {},
    children: []
  }, ...attributes)

  /**
   * DomItemHead defines the structure for a single element in the Dom
   * @typedef {module:dom/objects.DomItem} module:dom/objects.DomItemHead
   * @typedef {module:dom/objects.DomItem} DomItemHead
   * @property {string} [tagName=head] - This is set to the string head referring to the HTML element of the same name
   * @property {Object.<string, string|Object>} attributes - All potential HTML element attributes can be defined here
   * @property {HTMLHeadElement|module:pseudoDom/objects.PseudoHTMLElement} element - A reference to the HTML head element
   * @property {Array.<module:dom/objects.DomItem>} children - A reference to an array of child objects
   */

  /**
   * DomItemBody defines the structure for a single element in the Dom
   * @typedef {module:dom/objects.DomItem} module:dom/objects.DomItemBody
   * @typedef {module:dom/objects.DomItem} DomItemBody
   * @property {string} [tagName=body] - This is set to the string body referring to the HTML element of the same name
   * @property {Object.<string, string|Object>} attributes - All potential HTML element attributes can be defined here
   * @property {HTMLBodyElement|module:pseudoDom/objects.PseudoHTMLElement} element - A reference to the HTML body element
   * @property {Array.<module:dom/objects.DomItem>} children - A reference to an array of child objects
   */

  /**
   * Initiate the children of Root / DocumentItem. This is a helper for {@link documentDomItem}.
   * @returns {Array.<module:dom/objects~DomItemHead|module:dom/objects~DomItemBody>}
   */
  const initChildren = () => [
    jDomObjects.createDomItem({
      tagName: 'head',
      attributes: {},
      element: document.head,
      children: []
    }),
    jDomObjects.createDomItem({
      tagName: 'body',
      attributes: {},
      element: document.body,
      children: []
    })
  ]

  /**
   * DomItemRoot defines the structure for a single element in the Dom
   * @typedef {module:dom/objects.DomItem} module:dom/objects.DomItemRoot
   * @property {string} [tagName=html] - This is set to the string html referring to the HTML element of the same name
   * @property {Object} attributes - Empty object as attributes placeholder
   * @property {HTMLDocument|module:pseudoDom/objects.PseudoHTMLDocument} element - A reference to the entire Document
   * @property {Object.<string, module:dom/objects~listenerFunction>} eventListeners - all registered
   * listeners stored as listener name and function pairs
   * @property {
   * Array.<module:dom/objects~DomItemHead|module:dom/objects~DomItemBody>
   *   } children - Two references: for head and body
   * @property {module:dom/objects~DomItemHead} head - A specific reference to head item
   * @property {module:dom/objects~DomItemBody} body - A specific reference to body item
   */

  /**
   * Initiate the Root for DocumentItem. This is primary a helper for {@link documentDomItem}.
   * @param {
   * Array.<module:dom/objects~DomItemHead|module:dom/objects~DomItemBody>
   *   } children - Provide an array of Head and Body (usually via {@link initChildren})
   * @param {Object.<string, module:dom/objects~listenerFunction>} listeners - An object of all event
   * listeners to be registered in the Dom
   * @returns {module:dom/objects.DomItemRoot|module:dom/objects.DomItem}
   */
  const initRoot = (children, listeners = {}) => jDomObjects.createDomItem({
    tagName: 'html',
    attributes: {},
    element: document,
    eventListeners: listeners,
    children: children,
    head: children[0],
    body: children[1]
  })

  /**
   * Return a DomItem reference to the document. The rootItem argument is a system variable and not necessary to
   * implement.
   * @function documentDomItem
   * @param {Object.<string, module:dom/objects~listenerFunction>} listeners - An object of all event
   * listeners to be registered in the Dom
   * @param {module:dom/objects.DomItemRoot|module:dom/objects.DomItem} [rootItem] - This is a
   * reference to DomItemRoot which will be defaulted with {@link initRoot}
   * @returns {module:dom/objects.DomItemRoot|module:dom/objects.DomItem}
   */
  jDomObjects.documentDomItem = (listeners = [], rootItem = initRoot(initChildren(), listeners)) => {
    rootItem.children = rootItem.children.map(child => jDomObjects.createDomItem(child, { parentItem: rootItem }))
    Object.assign(rootItem.head, rootItem.children[0])
    Object.assign(rootItem.body, rootItem.children[1])
    return jDomObjects.createDomItem(rootItem)
  }

  /**
   * Create reference for storing document changes
   * @member documentItem
   * @type {module:dom/objects.DomItemRoot}
   */
  jDomObjects.documentItem = jDomObjects.documentDomItem()

  /**
   * Either export all functions to be exported, or assign to the Window context
   */
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = jDomObjects
    }
    exports = Object.assign(exports, jDomObjects)
  }
}).call(this || window || {})
// Use the external context to assign this, which will be Window if rendered via browser
