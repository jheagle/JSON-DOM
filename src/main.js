'use strict'
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
      root = require('./pseudoDom/objects.js').generate(root)
      document = root.document
    } else {
      console.error('main.js requires pseudoDom/objects')
    }
  }
  root.document = document
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
   * Verify availability of core
   * @typedef {*|module:core/core} core
   */
  jsonDom.core = root.core

  /**
   * If core remains undefined, attempt to retrieve it as a module
   */
  if (typeof jsonDom.core === 'undefined') {
    if (typeof require !== 'undefined') {
      jsonDom.core = require('./core/core.js')
    } else {
      console.error('main.js requires core/core')
    }
  }

  /**
   * Verify availability of objects
   * @typedef {*|module:core/dom/objects} domObjects
   */
  jsonDom.domObjects = root.domObjects

  /**
   * If objects remains undefined, attempt to retrieve it as a module
   */
  if (typeof jsonDom.domObjects === 'undefined') {
    if (typeof require !== 'undefined') {
      jsonDom.domObjects = require('./core/dom/objects.js')
    } else {
      console.error('main.js requires core/dom/objects')
    }
  }

  /**
   * Verify availability of coreDom
   * @typedef {*|module:core/dom/core} domCore
   */
  jsonDom.domCore = root.domCore

  /**
   * If coreDom remains undefined, attempt to retrieve it as a module
   */
  if (typeof jsonDom.domCore === 'undefined') {
    if (typeof require !== 'undefined') {
      jsonDom.domCore = require('./core/dom/core.js')
    } else {
      console.error('main.js requires core/dom/core')
    }
  }

  /**
   * Verify availability of objects
   * @typedef {*|module:matrix/objects} matrixObjects
   */
  jsonDom.matrixObjects = root.matrixObjects

  /**
   * If objects remains undefined, attempt to retrieve it as a module
   */
  if (typeof jsonDom.matrixObjects === 'undefined') {
    if (typeof require !== 'undefined') {
      jsonDom.matrixObjects = require('./matrix/objects.js')
    } else {
      console.error('main.js requires matrix/objects')
    }
  }

  /**
   * Verify availability of coreDom
   * @typedef {*|module:matrix/core} matrixCore
   */
  jsonDom.matrixCore = root.matrixCore

  /**
   * If coreDom remains undefined, attempt to retrieve it as a module
   */
  if (typeof jsonDom.matrixCore === 'undefined') {
    if (typeof require !== 'undefined') {
      jsonDom.matrixCore = require('./matrix/core.js')
    } else {
      console.error('main.js requires matrix/core')
    }
  }

  /**
   * Create new private reference to the document
   * @typedef {module:core/dom/objects.documentItem} documentItem
   */
  jsonDom.documentItem = jsonDom.domObjects.documentDomItem()

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
