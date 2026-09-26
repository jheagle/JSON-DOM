/**
 * Setting up and handling events for items in a Virtual DOM (DomItem tree)
 */
import 'core-js/stable'
import activateListener from './functions/activateListener'
import addEventListener from './functions/addEventListener'
import applyActiveListeners from './functions/applyActiveListeners'
import assignListener from './functions/assignListener'
import bindAllListeners from './functions/bindAllListeners'
import bindElementListeners from './functions/bindElementListeners'
import bindListeners from './functions/bindListeners'
import deactivateListener from './functions/deactivateListener'
import deactivateListeners from './functions/deactivateListeners'
import findEventListener from './functions/findEventListener'
import fullAddEventListener from './functions/fullAddEventListener'
import fullRemoveEventListener from './functions/fullRemoveEventListener'
import listenerOptions from './functions/listenerOptions'
import makeEventHandler from './functions/makeEventHandler'
import registerListener from './functions/registerListener'
import registerListeners from './functions/registerListeners'
import removeEventListener from './functions/removeEventListener'
import retrieveListener from './functions/retrieveListener'
import revokeActiveListeners from './functions/revokeActiveListeners'
import unassignListener from './functions/unassignListener'
import createEventListener from './objects/createEventListener'
import createEventProxy from './objects/createEventProxy'
import createEventResponder from './objects/createEventResponder'
import options from './objects/options'

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
