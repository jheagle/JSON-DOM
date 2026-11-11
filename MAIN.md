# treeloom

State management with JSON.

treeloom represents a document as a **Virtual DOM**: a tree of plain objects (the **DomItem tree**) which mirrors the
real HTML DOM. You build and change the tree; treeloom keeps the real elements in step with it, and can turn the tree
into JSON and back.

## The items

Every node of the tree is an item: its `nodeName`, `attributes`, `children`, the `eventListeners` it wants and a `has`
map of the **traits** it carries. Custom data can sit right on the item, next to these.

* A **CoreItem** is the generic item. It knows nothing about a real element, so it can live in a back-end which never
  renders anything.
* A **DomItem** is an item with the `render` trait, which adds the `element` it is mirrored onto. treeloom's render and
  sync functions work on these.
* Other libraries add their own traits (matrix-dom has `matrix.row`, `matrix.column`, ...), see `defineTrait`. In
  TypeScript, `hasTrait(item, 'matrix.row')` narrows an item to what that trait adds.

## The modules

Each module of the documentation is a folder of the source:

* `domItem`: create items (`createDomItem`, `createCoreItem`), the traits, and find or change items in the tree.
* `render`: mirror the tree onto real elements (`renderHtml`, `updateElement`).
* `sync`: the other direction, read the real elements back into the tree (`updateDomItem`).
* `inflate` and `deflate`: turn a tree into JSON (`domItemToJson`) and JSON back into a tree (`jsonToDomItem`).
* `diff`: work out what differs between an item and its element.
* `events`: attach listeners to the elements of items. Listeners are registered by name, so they survive being turned
  into JSON.

## Example

```js
const { createDomItem, documentDomItem, renderHtml, updateElement, domItemToJson, jsonToDomItem } = require('treeloom')

// Named listeners are registered once on the document item, and items refer to them by name
const documentItem = documentDomItem({
  greet: (event, item) => {
    item.attributes.innerHTML = 'Clicked!'
    updateElement(item)
  }
})

const button = createDomItem({
  nodeName: 'button',
  attributes: { className: 'greeting', innerHTML: 'Hello' },
  eventListeners: { click: [{ listenerFunc: 'greet', listenerArgs: {}, listenerOptions: false }] }
})

renderHtml(button, documentItem.body) // <button class="greeting">Hello</button>
button.element.click()                // <button class="greeting">Clicked!</button>

const json = domItemToJson(button)    // a string, without the element and the listener functions
const copy = jsonToDomItem(json)      // an item again, ready to render
```
