/**
 * @file Access all modules available within JSON DOM from this file.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 */
;(function () {
  /**
   * Store a reference to this scope which will be Window if rendered via browser
   */
  let root = this || {}

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
      root = require('./pseudoDom/objects.js').generate(root)
    } else {
      console.error('main.js requires pseudoDom/objects')
    }
  }

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
   * Verify availability of objects
   * @typedef {*|module:dom//objects} jDomObjects
   */
  jsonDom.jDomObjects = root.jDomObjects

  /**
   * If objects remains undefined, attempt to retrieve it as a module
   */
  if (typeof jsonDom.jDomObjects === 'undefined') {
    if (typeof require !== 'undefined') {
      jsonDom.jDomObjects = require('./dom//objects.js')
    } else {
      console.error('main.js requires dom//objects')
    }
  }

  /**
   * Verify availability of jDomCore
   * @typedef {*|module:dom//core} jDomCore
   */
  jsonDom.jDomCore = root.jDomCore

  /**
   * If jDomCore remains undefined, attempt to retrieve it as a module
   */
  if (typeof jsonDom.jDomCore === 'undefined') {
    if (typeof require !== 'undefined') {
      jsonDom.jDomCore = require('./dom//core.js')
    } else {
      console.error('main.js requires dom//core')
    }
  }

  /**
   * Verify availability of objects
   * @typedef {*|module:matrix/objects} jDomMatrixObjects
   */
  jsonDom.jDomMatrixObjects = root.jDomMatrixObjects

  /**
   * If objects remains undefined, attempt to retrieve it as a module
   */
  if (typeof jsonDom.jDomMatrixObjects === 'undefined') {
    if (typeof require !== 'undefined') {
      jsonDom.jDomMatrixObjects = require('./matrix/objects.js')
    } else {
      console.error('main.js requires matrix/objects')
    }
  }

  /**
   * Verify availability of jDomCore
   * @typedef {*|module:matrix/core} jDomMatrixCore
   */
  jsonDom.jDomMatrixCore = root.jDomMatrixCore

  /**
   * If jDomCore remains undefined, attempt to retrieve it as a module
   */
  if (typeof jsonDom.jDomMatrixCore === 'undefined') {
    if (typeof require !== 'undefined') {
      jsonDom.jDomMatrixCore = require('./matrix/core.js')
    } else {
      console.error('main.js requires matrix/core')
    }
  }

  /**
   * Create new private reference to the document
   * @typedef {module:dom//objects.documentItem} documentItem
   */
  jsonDom.documentItem = jsonDom.jDomObjects.documentDomItem()

  /**
   * Either export all functions to be exported, or assign to the Window context
   */
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = jsonDom
    }
    exports = Object.assign(exports, jsonDom)
  }
}).call(this || window || {}) // Use the external context to assign this, which will be Window if rendered via browser
