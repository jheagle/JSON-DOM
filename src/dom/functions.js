/**
 * @file Core Dom management functions
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module domFunctions
 */
import 'core-js/stable'
import appendAndReturnChild from './functions/appendAndReturnChild'
import appendHtml from './functions/appendHtml'
import appendListeners from './functions/appendListeners'
import assignListener from './functions/assignListener'
import bindAllListeners from './functions/bindAllListeners'
import bindElement from './functions/bindElement'
import bindElementListeners from './functions/bindElementListeners'
import bindListeners from './functions/bindListeners'
import elementChanges from './functions/elementChanges'
import elementCompareClassList from './functions/elementCompareClassList'
import elementHasAttribute from './functions/elementHasAttribute'
import gatherChildItems from './functions/gatherChildItems'
import generateElement from './functions/generateElement'
import getChildTest from './functions/getChildTest'
import getChildrenByClass from './functions/getChildrenByClass'
import getChildrenByName from './functions/getChildrenByName'
import getChildrenFromAttribute from './functions/getChildrenFromAttribute'
import getParentsByClass from './functions/getParentsByClass'
import getParentsByName from './functions/getParentsByName'
import getParentsByTagName from './functions/getParentsByTagName'
import getParentsFromAttribute from './functions/getParentsFromAttribute'
import getTopParentItem from './functions/getTopParentItem'
import listenerOptions from './functions/listenerOptions'
import registerListener from './functions/registerListener'
import registerListeners from './functions/registerListeners'
import removeChild from './functions/removeChild'
import renderHtml from './functions/renderHtml'
import retrieveListener from './functions/retrieveListener'
import retrieveParentItem from './functions/retrieveParentItem'
import setAndReturnAttribute from './functions/setAndReturnAttribute'
import setAttribute from './functions/setAttribute'
import updateElement from './functions/updateElement'
import updateElements from './functions/updateElements'

export default {
  appendAndReturnChild,
  appendHtml,
  appendListeners,
  assignListener,
  bindAllListeners,
  bindElement,
  bindElementListeners,
  bindListeners,
  elementChanges,
  elementCompareClassList,
  elementHasAttribute,
  gatherChildItems,
  generateElement,
  getChildTest,
  getChildrenByClass,
  getChildrenByName,
  getChildrenFromAttribute,
  getParentsByClass,
  getParentsByName,
  getParentsByTagName,
  getParentsFromAttribute,
  getTopParentItem,
  listenerOptions,
  registerListener,
  registerListeners,
  removeChild,
  renderHtml,
  retrieveListener,
  retrieveParentItem,
  setAndReturnAttribute,
  setAttribute,
  updateElement,
  updateElements
}
