/**
 * Add matrix ability using JSON DOM components
 * @file
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module jDomMatrix
 */

import 'core-js/stable'
import * as jDomMatrixCore from './source/functions'
import * as jDomMatrixObjects from './source/objects'

/**
 * Store a reference to this scope which will be Window if rendered via browser
 */
const root = this || {}

/**
 * Store reference to any pre-existing module of the same name
 * @type {module|*}
 */
const previousJDomMatrix = root.jDomMatrix || {}

/**
 * All methods exported from this module are encapsulated within jDomMatrix.
 * @typedef {module:jDomMatrix|module:jDomMatrixCore|module:jDomMatrixObjects} jDomMatrix
 */
const jDomMatrix = {}
root.jDomMatrix = jDomMatrix

/**
 * Return a reference to this library while preserving the original same-named library
 * @function
 * @returns {module:jDomMatrix~jDomMatrix}
 */
const noConflict = () => {
  root.jDomMatrix = previousJDomMatrix
  return jDomMatrix
}
jDomMatrix.noConflict = noConflict

export default Object.assign(
  jDomMatrix,
  jDomMatrixCore,
  jDomMatrixObjects
)
