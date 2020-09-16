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

export default Object.assign(
  jDomMatrixCore,
  jDomMatrixObjects
)
