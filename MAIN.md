# JSON-DOM

State management with JSON

json-dom represents a document as a **Virtual DOM**: a tree of plain `DomItem` objects (the **DomItem tree**) that
mirrors the real HTML DOM. You build and update the DomItem tree; json-dom syncs the corresponding real elements
for you. `domGeneral` below covers building and syncing the DomItem tree itself, and `domEvents` covers attaching
listeners to items in it.
