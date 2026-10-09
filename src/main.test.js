/**
 * @jest-environment jsdom
 */
import jsonDom from './main'

// The names other projects (matrix-dom, battleship, ...) call. Moving a function between folders must never change
// these; adding one is a deliberate change to this list.
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
  'createCoreItem',
  'createDomItem',
  'createEventListener',
  'createEventProxy',
  'createEventResponder',
  'deactivateListener',
  'deactivateListeners',
  'defineTrait',
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
  'getItemByElement',
  'getItemById',
  'getItemByPath',
  'getItemPath',
  'getParentsByClass',
  'getParentsByName',
  'getParentsByTagName',
  'getParentsFromAttribute',
  'getTopParentItem',
  'getTraitDefinition',
  'hasTrait',
  'hasTraits',
  'initChildren',
  'initRoot',
  'insertChild',
  'isDomItem',
  'jsonToDomItem',
  'listenerOptions',
  'makeEventHandler',
  'makeForwardingListener',
  'options',
  'receiveForwardedEvent',
  'registerListener',
  'registerListeners',
  'removeChild',
  'removeEmptyProperties',
  'removeEventListener',
  'renderHtml',
  'retrieveListener',
  'revokeActiveListeners',
  'setForwardEvents',
  'setParentItemReferences',
  'unassignListener',
  'updateChildNodes',
  'updateChildren',
  'updateDomItem',
  'updateDomItems',
  'updateElement',
  'updateElements',
  'withTrait'
]

describe('jsonDom public API', () => {
  test('has exactly these functions and objects', () => {
    expect(Object.keys(jsonDom).sort()).toEqual(publicApi)
  })

  test('every name is a function or a factory', () => {
    publicApi.forEach(name => expect(typeof jsonDom[name]).toMatch(/function|object/))
  })
})
