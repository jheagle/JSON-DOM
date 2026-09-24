/**
 * @jest-environment jsdom
 */
import jsonDom from './main'

// The names other projects (matrix-dom, battleship, ...) call. Moving a function between folders must never change these.
const publicApi = [
  'activateListener',
  'addDomItemProperties',
  'addEventListener',
  'appendChild',
  'applyActiveListeners',
  'assignListener',
  'bindAllListeners',
  'bindElementListeners',
  'bindListeners',
  'createChangeList',
  'createDomItem',
  'createEventListener',
  'createEventProxy',
  'createEventResponder',
  'deactivateListener',
  'deactivateListeners',
  'documentDomItem',
  'documentItem',
  'domItemChanges',
  'domItemHasAttribute',
  'domItemToJson',
  'elementChanges',
  'elementHasAttribute',
  'findEventListener',
  'fullAddEventListener',
  'fullRemoveEventListener',
  'gatherChildItems',
  'generateElement',
  'getAssignedStyles',
  'getChildTest',
  'getChildrenByClass',
  'getChildrenByName',
  'getChildrenFromAttribute',
  'getParentsByClass',
  'getParentsByName',
  'getParentsByTagName',
  'getParentsFromAttribute',
  'getTopParentItem',
  'initChildren',
  'initRoot',
  'jsonToDomItem',
  'listenerOptions',
  'makeEventHandler',
  'options',
  'registerListener',
  'registerListeners',
  'removeChild',
  'removeEmptyProperties',
  'removeEventListener',
  'renderHtml',
  'retrieveListener',
  'revokeActiveListeners',
  'setParentItemReferences',
  'unassignListener',
  'updateChildNodes',
  'updateChildren',
  'updateDomItem',
  'updateDomItems',
  'updateElement',
  'updateElements'
]

describe('jsonDom public API', () => {
  test('has exactly the functions and objects it had before the folders were regrouped', () => {
    expect(Object.keys(jsonDom).sort()).toEqual(publicApi)
  })

  test('every name is a function or a factory', () => {
    publicApi.forEach(name => expect(typeof jsonDom[name]).toMatch(/function|object/))
  })
})
