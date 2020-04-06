const jDomCoreDom = require('../../src/dom/core')

const coolFunc = () => 'hello'
// appendAllHTML
// appendHTML
// appendListeners
// assignListener
// bindAllElements
// bindAllListeners
// bindElement
// bindListeners
// buildHTML
// elementChanges
// elementHasAttribute
// generateElement
// getChildrenByClass
// getChildrenByName
// getChildrenFromAttribute
// getParentsByClass
// getParentsByName
// getParentsByTagName
// getTopParentItem
// noConflict
// registerListener
test('can register a listener', () => {
  expect(jDomCoreDom.registerListener(coolFunc).coolFunc).toBe(coolFunc)
})

// registerListeners
// removeChild
// renderHTML
// retrieveListener
// updateElement
// updateElements
