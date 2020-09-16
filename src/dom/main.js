/**
 * All of the JSON DOM system functions for creating JSON components.
 * @file
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module jDom
 */

import 'core-js/stable'
import allJDom from './all'

/**
 * Store a reference to this scope which will be Window if rendered via browser
 */
const root = this || window || global || {}

/**
 * Store reference to any pre-existing module of the same name
 * @type {module|*}
 */
const previousJDom = root.jDom || {}

/**
 * All methods exported from this module are encapsulated within jDom.
 * @typedef {module:jDom|module:jDomCore|module:jDomObjects} jDom
 */
const jDom = {}
root.jDom = jDom

/**
 * Return a reference to this library while preserving the original same-named library
 * @function
 * @returns {module:jDom~jDom}
 */
const noConflict = () => {
  root.jDom = previousJDom
  return jDom
}
jDom.noConflict = noConflict

export default Object.assign(
  jDom,
  allJDom
)
