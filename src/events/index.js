/**
 * @file Setting up and handling events
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module domFunctions
 * @memberOf module:jsonDom
 */
import 'core-js/stable'
import activateListener from './functions/activateListener.js'
import applyActiveListeners from './functions/applyActiveListeners.js'
import assignListener from './functions/assignListener.js'
import bindAllListeners from './functions/bindAllListeners.js'
import bindElementListeners from './functions/bindElementListeners.js'
import bindListeners from './functions/bindListeners.js'
import deactivateListeners from './functions/deactivateListeners.js'
import listenerOptions from './functions/listenerOptions.js'
import makeEventHandler from './functions/makeEventHandler.js'
import registerListener from './functions/registerListener.js'
import registerListeners from './functions/registerListeners.js'
import retrieveListener from './functions/retrieveListener.js'
import createEventListener from './objects/createEventListener.js'
import createEventProxy from './objects/createEventProxy.js'
import createEventResponder from './objects/createEventResponder.js'
import options from './objects/options.js'

export default {
  activateListener,
  applyActiveListeners,
  assignListener,
  bindAllListeners,
  bindElementListeners,
  bindListeners,
  deactivateListeners,
  listenerOptions,
  makeEventHandler,
  registerListener,
  registerListeners,
  retrieveListener,
  createEventListener,
  createEventProxy,
  createEventResponder,
  options,
}
