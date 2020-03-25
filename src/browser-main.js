/**
 * @file Make all of JSON DOM available from this file in the browser.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 */
;(function () {
  /**
   * Store a reference to this scope which will be Window if rendered via browser
   */
  const root = this || {}

  /*
   * Store reference to any pre-existing module of the same name
   * @type {jsonDom|*}
   */
  const previousJsonDom = root.jsonDom || {}

  /**
   * A reference to all functions to be used globally / exported
   * @typedef (Object) jsonDom
   */
  const jsonDom = {}
  root.jsonDom = jsonDom

  /**
   * Return a reference to this library while preserving the original same-named library
   * @function noConflict
   * @returns {jsonDom}
   */
  jsonDom.noConflict = () => {
    root.jsonDom = previousJsonDom
    return jsonDom
  }

  /**
   * Verify availability of functionalHelpers
   * @typedef {*|module:core/core} functionalHelpers
   */
  jsonDom.functionalHelpers = root.functionalHelpers

  /**
   * Verify availability of objects
   * @typedef {*|module:core/dom/objects} jDomObjects
   */
  jsonDom.jDomObjects = root.jDomObjects

  /**
   * Verify availability of jDomCore
   * @typedef {*|module:core/dom/core} jDomCore
   */
  jsonDom.jDomCore = root.jDomCore

  /**
   * Verify availability of objects
   * @typedef {*|module:matrix/objects} jDomMatrixObjects
   */
  jsonDom.jDomMatrixObjects = root.jDomMatrixObjects

  /**
   * Verify availability of jDomCore
   * @typedef {*|module:matrix/core} jDomMatrixCore
   */
  jsonDom.jDomMatrixCore = root.jDomMatrixCore

  /**
   * Create new private reference to the document
   * @typedef {module:core/dom/objects.documentItem} documentItem
   */
  jsonDom.documentItem = jsonDom.jDomObjects.documentDomItem()
}).call(this || window || {}) // Use the external context to assign this, which will be Window if rendered via browser
