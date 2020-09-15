/**
 * All of the JSON DOM system functions for creating JSON components.
 * @file
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module jsonDom
 */

import 'core-js/stable'
import * as collections from './collections/main'
import * as jDom from './dom/main'
import * as pseudoDom from './pseudoDom/main'
import * as matrix from './matrix/main'

/**
   * Store a reference to this scope which will be Window if rendered via browser
   */
const root = this || window || global || {}

/**
   * Store reference to any pre-existing module of the same name
   * @type {module|*}
   */
const previousJsonDom = root.jsonDom || {}

/**
   * All methods exported from this module are encapsulated within jsonDom.
   * @typedef {module:jsonDom|module:collections|module:jDom|module:pseudoDom|module:matrix} jsonDom
   */
const jsonDom = {}
root.jsonDom = jsonDom

/**
   * Return a reference to this library while preserving the original same-named library
   * @function
   * @returns {module:jsonDom~jsonDom}
   */
const noConflict = () => {
  root.jsonDom = previousJsonDom
  return jsonDom
}
jsonDom.noConflict = noConflict

root.jsonDom = Object.assign(
  jsonDom,
  collections,
  jDom,
  pseudoDom,
  matrix
)

export default root.jsonDom
