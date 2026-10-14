# JSON-DOM

State management with JSON.

json-dom represents a document as a **Virtual DOM**: a tree of plain objects (the **DomItem tree**) which mirrors the
real HTML DOM. You build and change the tree; json-dom keeps the real elements in step with it, and can turn the tree
into JSON and back.

## Install

json-dom is not published to npm, install it from GitHub:

```shell
npm install github:jheagle/JSON-DOM
```

It is written in TypeScript and ships its types. In a browser, use `browser/jsonDom.min.js` (it defines `jsonDom`) -
or, for a build that renders JSON to HTML and forwards fired events elsewhere instead of running local listener
functions, `browser/jsonDomRenderOnly.min.js` (it defines `jsonDomRenderOnly`; see `setForwardEvents`).

## Example

```js
const { createDomItem, documentDomItem, renderHtml, updateElement, domItemToJson, jsonToDomItem } = require('json-dom')

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

## Documentation

The reference for every function and type is in [`docs/`](docs/index.html) (open `docs/index.html` in a browser). It is
generated from the TypeScript source, and each module is a folder of `src/`:

| Module | What it does |
| --- | --- |
| `domItem` | Create items, the traits they carry, and find or change items in the tree |
| `render` | Mirror the tree onto real elements |
| `sync` | Read the real elements back into the tree |
| `inflate`, `deflate` | Turn a tree into JSON, and JSON back into a tree |
| `diff` | Work out what differs between an item and its element |
| `events` | Attach listeners to the elements of items |

## Development

```shell
npm install
npm test          # the tests
npm run typecheck # the types, and the type tests
npm run build     # dist/, browser/ and docs/
npm run docs      # only the documentation
```
