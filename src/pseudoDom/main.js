/**
 * @file All of the Pseudo Dom Helper Objects functions for simulating parts of the DOM when running scripts in NodeJs.
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
*/

import allPseudoDom from './all'

/**
   * Store a reference to this scope which will be Window if rendered via browser
   */
const root = this || window || global || {}

/**
   * Store reference to any pre-existing module of the same name
   * @type {module|*}
   */
const previousPseudoDom = root.pseudoDom || {}

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
  root.pseudoDom = previousPseudoDom
  return pseudoDom
}

export default Object.assign(
  pseudoDom,
  allPseudoDom
)
