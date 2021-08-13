/**
 * All of the JSON DOM system functions for creating JSON components.
 * @file
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module jsonDom
 */

import 'core-js/stable'
import domFunctions from './source/functions'
import domObjects from './source/objects'

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
 * @typedef {module:jsonDom|module:domFunctions|module:domObjects} jsonDom
 */
const jsonDom = {}
root.jsonDom = jsonDom

/**
 * Return a reference to this library while preserving the original same-named library
 * @function
 * @returns {module:jsonDom~jsonDom|module:domFunctions|module:domObjects}
 */
const noConflict = () => {
  root.jsonDom = previousJsonDom
  return jsonDom
}
jsonDom.noConflict = noConflict

export default root.jsonDom = Object.assign(
  jsonDom,
  domFunctions,
  domObjects
)
