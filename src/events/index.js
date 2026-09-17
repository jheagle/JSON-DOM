/**
 * @file Setting up and handling events
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module domEvents
 * @memberOf module:jsonDom
 */
import 'core-js/stable'
import activateListener from './functions/activateListener.js'
import addEventListener from './functions/addEventListener.js'
import applyActiveListeners from './functions/applyActiveListeners.js'
import assignListener from './functions/assignListener.js'
import bindAllListeners from './functions/bindAllListeners.js'
import bindElementListeners from './functions/bindElementListeners.js'
import bindListeners from './functions/bindListeners.js'
import deactivateListener from './functions/deactivateListener.js'
import deactivateListeners from './functions/deactivateListeners.js'
import findEventListener from './functions/findEventListener.js'
import fullAddEventListener from './functions/fullAddEventListener.js'
import fullRemoveEventListener from './functions/fullRemoveEventListener.js'
import listenerOptions from './functions/listenerOptions.js'
import makeEventHandler from './functions/makeEventHandler.js'
import registerListener from './functions/registerListener.js'
import registerListeners from './functions/registerListeners.js'
import removeEventListener from './functions/removeEventListener.js'
import retrieveListener from './functions/retrieveListener.js'
import revokeActiveListeners from './functions/revokeActiveListeners.js'
import unassignListener from './functions/unassignListener.js'
import createEventListener from './objects/createEventListener.js'
import createEventProxy from './objects/createEventProxy.js'
import createEventResponder from './objects/createEventResponder.js'
import options from './objects/options.js'

export default {
  activateListener,
  addEventListener,
  applyActiveListeners,
  assignListener,
  bindAllListeners,
  bindElementListeners,
  bindListeners,
  deactivateListener,
  deactivateListeners,
  findEventListener,
  fullAddEventListener,
  fullRemoveEventListener,
  listenerOptions,
  makeEventHandler,
  registerListener,
  registerListeners,
  removeEventListener,
  retrieveListener,
  revokeActiveListeners,
  unassignListener,
  createEventListener,
  createEventProxy,
  createEventResponder,
  options
}
