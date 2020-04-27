# JSON-DOM
State management with JSON

## Modules

<dl>
<dt><a href="#module_dom/core">dom/core</a> : <code>Object</code></dt>
<dd><p>All methods exported from this module are encapsulated within jDomCore.</p>
</dd>
<dt><a href="#module_dom/objects">dom/objects</a> : <code>Object</code></dt>
<dd><p>All methods exported from this module are encapsulated within jDomObjects</p>
</dd>
<dt><a href="#module_matrix/core">matrix/core</a> : <code>Object</code></dt>
<dd><p>All methods exported from this module are encapsulated within jDomMatrixCore.</p>
</dd>
<dt><a href="#module_matrix/objects">matrix/objects</a> : <code>Object</code></dt>
<dd><p>All methods exported from this module are encapsulated within jDomMatrixObjects.</p>
</dd>
<dt><a href="#module_pseudoDom/objects">pseudoDom/objects</a> : <code>Object</code></dt>
<dd><p>All methods exported from this module are encapsulated within pseudoDom.</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#LinkedList">LinkedList</a></dt>
<dd></dd>
<dt><a href="#Linker">Linker</a></dt>
<dd></dd>
<dt><a href="#TreeLinker">TreeLinker</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#document">document</a> : <code>HTMLDocument</code> | <code>module:pseudoDom/objects.PseudoHTMLDocument</code></dt>
<dd><p>Verify availability of document</p>
</dd>
<dt><a href="#root">root</a> : <code>Window</code> | <code>module:pseudoDom/objects.PseudoEventTarget</code></dt>
<dd></dd>
</dl>

<a name="module_dom/core"></a>

## dom/core : <code>Object</code>
All methods exported from this module are encapsulated within jDomCore.

**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [dom/core](#module_dom/core) : <code>Object</code>
    * [~noConflict()](#module_dom/core..noConflict) ⇒ <code>jDomCore</code>
    * [~elementHasAttribute(element, key, attr)](#module_dom/core..elementHasAttribute) ⇒ <code>boolean</code> \| <code>Object.&lt;string, number&gt;</code>
    * [~elementChanges(config)](#module_dom/core..elementChanges) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
    * [~setAttribute(config, name, value)](#module_dom/core..setAttribute) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
    * [~setAndReturnAttribute(config, name, value)](#module_dom/core..setAndReturnAttribute) ⇒ <code>string</code>
    * [~updateElement(config)](#module_dom/core..updateElement) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
    * [~updateElements(config)](#module_dom/core..updateElements) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
    * [~generateElement(config)](#module_dom/core..generateElement) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
    * [~bindElement(item)](#module_dom/core..bindElement) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
    * [~appendHTML(item, parent)](#module_dom/core..appendHTML) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
    * [~removeChild(item, parent)](#module_dom/core..removeChild) ⇒ <code>Array.&lt;(HTMLElement\|PseudoHTMLElement)&gt;</code>
    * [~registerListener(listener, [name], [parent])](#module_dom/core..registerListener) ⇒ <code>Object.&lt;string, module:dom/objects~listenerFunction&gt;</code>
    * [~registerListeners(listeners, [parent])](#module_dom/core..registerListeners) ⇒ [<code>DomItemRoot</code>](#module_dom/objects.DomItemRoot) \| <code>Object</code>
    * [~retrieveListener(listenerName, [parent])](#module_dom/core..retrieveListener) ⇒ [<code>listenerFunction</code>](#module_dom/objects..listenerFunction) \| <code>function</code> \| <code>Object</code>
    * [~assignListener(trigger, elem, fn, options)](#module_dom/core..assignListener) ⇒ [<code>listenerFunction</code>](#module_dom/objects..listenerFunction) \| <code>function</code>
    * [~appendListeners(item, event, listener, args, options)](#module_dom/core..appendListeners) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
    * [~bindListeners(item)](#module_dom/core..bindListeners) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
    * [~bindAllListeners(item)](#module_dom/core..bindAllListeners) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
    * [~gatherChildItems(item, test)](#module_dom/core..gatherChildItems) ⇒ [<code>Array.&lt;DomItem&gt;</code>](#module_dom/objects.DomItem)
    * [~getChildrenFromAttribute(attr, value, item)](#module_dom/core..getChildrenFromAttribute) ⇒ [<code>Array.&lt;DomItem&gt;</code>](#module_dom/objects.DomItem)
    * [~getChildrenByClass()](#module_dom/core..getChildrenByClass) ⇒ [<code>Array.&lt;DomItem&gt;</code>](#module_dom/objects.DomItem)
    * [~getChildrenByName()](#module_dom/core..getChildrenByName) ⇒ [<code>Array.&lt;DomItem&gt;</code>](#module_dom/objects.DomItem)
    * [~getParentsFromAttribute(attr, value, item)](#module_dom/core..getParentsFromAttribute) ⇒ <code>Array</code>
    * [~getParentsByClass()](#module_dom/core..getParentsByClass) ⇒ <code>Array</code>
    * [~getParentsByName()](#module_dom/core..getParentsByName) ⇒ <code>Array</code>
    * [~getParentsByTagName()](#module_dom/core..getParentsByTagName) ⇒ <code>Array</code>
    * [~getTopParentItem(item)](#module_dom/core..getTopParentItem) ⇒ [<code>DomItemRoot</code>](#module_dom/objects.DomItemRoot)
    * [~renderHTML(item, parent)](#module_dom/core..renderHTML) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
    * [~document](#module_dom/core..document) : <code>HTMLDocument</code> \| <code>module:pseudoDom/objects.PseudoHTMLDocument</code>
    * [~root](#module_dom/core..root) : <code>Window</code> \| <code>module:pseudoDom/objects.PseudoEventTarget</code>
    * [~functionalHelpers](#module_dom/core..functionalHelpers) : <code>\*</code> \| <code>module:functionalHelpers</code>
    * [~jDomObjects](#module_dom/core..jDomObjects) : <code>\*</code> \| [<code>dom/objects</code>](#module_dom/objects)
    * [~testChildItem](#module_dom/core..testChildItem) ⇒ [<code>Array.&lt;DomItem&gt;</code>](#module_dom/objects.DomItem)

<a name="module_dom/core..noConflict"></a>

### dom/core~noConflict() ⇒ <code>jDomCore</code>
Return a reference to this library while preserving the original same-named library

**Kind**: inner method of [<code>dom/core</code>](#module_dom/core)  
<a name="module_dom/core..elementHasAttribute"></a>

### dom/core~elementHasAttribute(element, key, attr) ⇒ <code>boolean</code> \| <code>Object.&lt;string, number&gt;</code>
Check if the provided Element has the provided attributes.
Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.

**Kind**: inner method of [<code>dom/core</code>](#module_dom/core)  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> \| <code>module:pseudoDom/objects.PseudoHTMLElement</code> | Receive the element to be assessed |
| key | <code>string</code> | The attribute name to search for |
| attr | <code>string</code> \| <code>Object</code> | The expected value of the attribute to compare against |

<a name="module_dom/core..elementChanges"></a>

### dom/core~elementChanges(config) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
Given a jDomObjects.DomItem as config, this function will return the changes to be applied
to the stored element property.

**Kind**: inner method of [<code>dom/core</code>](#module_dom/core)  

| Param | Type | Description |
| --- | --- | --- |
| config | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem having config changes to be applied to its element |

<a name="module_dom/core..setAttribute"></a>

### dom/core~setAttribute(config, name, value) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
Set an attribute on the element within a DomItem, then return the config data.

**Kind**: inner method of [<code>dom/core</code>](#module_dom/core)  

| Param | Type | Description |
| --- | --- | --- |
| config | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem having config changes to be applied to its element |
| name | <code>string</code> | The attribute name to be updated |
| value | <code>string</code> | The new value to be applied to the attribute |

<a name="module_dom/core..setAndReturnAttribute"></a>

### dom/core~setAndReturnAttribute(config, name, value) ⇒ <code>string</code>
Set an attribute on the element within a DomItem, then return the attribute.

**Kind**: inner method of [<code>dom/core</code>](#module_dom/core)  

| Param | Type | Description |
| --- | --- | --- |
| config | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem having config changes to be applied to its element |
| name | <code>string</code> | The attribute name to be updated |
| value | <code>string</code> | The new value to be applied to the attribute |

<a name="module_dom/core..updateElement"></a>

### dom/core~updateElement(config) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
Update a single objects.DomItem element with the provided attributes / style / elementProperties

**Kind**: inner method of [<code>dom/core</code>](#module_dom/core)  

| Param | Type | Description |
| --- | --- | --- |
| config | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem having config changes to be applied to its element |

<a name="module_dom/core..updateElements"></a>

### dom/core~updateElements(config) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
Generate HTML element data for each object in the matrix
WARNING: This is a recursive function.

**Kind**: inner method of [<code>dom/core</code>](#module_dom/core)  

| Param | Type | Description |
| --- | --- | --- |
| config | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem having child DomItems with config changes to be applied |

<a name="module_dom/core..generateElement"></a>

### dom/core~generateElement(config) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
Create an HTML element based on the provided attributes and return the element as an Object.

**Kind**: inner method of [<code>dom/core</code>](#module_dom/core)  

| Param | Type | Description |
| --- | --- | --- |
| config | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem requiring matching HTML element property |

<a name="module_dom/core..bindElement"></a>

### dom/core~bindElement(item) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
Generate HTML element data for a provided DomItem

**Kind**: inner method of [<code>dom/core</code>](#module_dom/core)  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem needing element to be generated |

<a name="module_dom/core..appendHTML"></a>

### dom/core~appendHTML(item, parent) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
Append a new DomItem which has the element generated.

**Kind**: inner method of [<code>dom/core</code>](#module_dom/core)  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_dom/objects.DomItem) | A new DomItem to append |
| parent | [<code>DomItem</code>](#module_dom/objects.DomItem) | The parent to have DomItems appended |

<a name="module_dom/core..removeChild"></a>

### dom/core~removeChild(item, parent) ⇒ <code>Array.&lt;(HTMLElement\|PseudoHTMLElement)&gt;</code>
Reverse of appendHTML, remove a DomItem and have the associated element removed.

**Kind**: inner method of [<code>dom/core</code>](#module_dom/core)  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem with HTMLElement to be removed |
| parent | [<code>DomItem</code>](#module_dom/objects.DomItem) | The parent of the items |

<a name="module_dom/core..registerListener"></a>

### dom/core~registerListener(listener, [name], [parent]) ⇒ <code>Object.&lt;string, module:dom/objects~listenerFunction&gt;</code>
Register a single listener function as part of the root jDomObjects.DomItem.

**Kind**: inner method of [<code>dom/core</code>](#module_dom/core)  

| Param | Type | Description |
| --- | --- | --- |
| listener | [<code>listenerFunction</code>](#module_dom/objects..listenerFunction) \| <code>function</code> | Provide a function which will be called when a Dom event is triggered. |
| [name] | <code>string</code> | The name of the listener to be used. |
| [parent] | [<code>DomItemRoot</code>](#module_dom/objects.DomItemRoot) \| <code>Object</code> | The parent DomItem which is DomItemRoot which stores has eventListeners property. |

<a name="module_dom/core..registerListeners"></a>

### dom/core~registerListeners(listeners, [parent]) ⇒ [<code>DomItemRoot</code>](#module_dom/objects.DomItemRoot) \| <code>Object</code>
Register multiple listeners from an array of functions.

**Kind**: inner method of [<code>dom/core</code>](#module_dom/core)  

| Param | Type | Description |
| --- | --- | --- |
| listeners | <code>Array.&lt;(module:dom/objects~listenerFunction\|function())&gt;</code> | An array of functions to be used as the registered event listeners. |
| [parent] | [<code>DomItemRoot</code>](#module_dom/objects.DomItemRoot) \| <code>Object</code> | The parent DomItem which is DomItemRoot which stores has eventListeners property. |

<a name="module_dom/core..retrieveListener"></a>

### dom/core~retrieveListener(listenerName, [parent]) ⇒ [<code>listenerFunction</code>](#module_dom/objects..listenerFunction) \| <code>function</code> \| <code>Object</code>
Based on the provided function / listener name, retrieve the associated function from the root jDomObjects.DomItem

**Kind**: inner method of [<code>dom/core</code>](#module_dom/core)  

| Param | Type | Description |
| --- | --- | --- |
| listenerName | <code>string</code> | The name of one of the registered listener functions. |
| [parent] | [<code>DomItemRoot</code>](#module_dom/objects.DomItemRoot) \| <code>Object</code> | The parent DomItem which is DomItemRoot which stores has eventListeners property. |

<a name="module_dom/core..assignListener"></a>

### dom/core~assignListener(trigger, elem, fn, options) ⇒ [<code>listenerFunction</code>](#module_dom/objects..listenerFunction) \| <code>function</code>
Provide compatibility for assigning listeners.

**Kind**: inner method of [<code>dom/core</code>](#module_dom/core)  

| Param | Type | Description |
| --- | --- | --- |
| trigger | <code>string</code> | The name of the event which will trigger the listenerFunction on the element. |
| elem | <code>HTMLElement</code> \| <code>module:pseudoDom/objects~PseudoHTMLElement</code> | An element to append the listener onto |
| fn | [<code>listenerFunction</code>](#module_dom/objects..listenerFunction) \| <code>function</code> | The function which will be invoked when the event is triggered |
| options | [<code>EventListenerOptions</code>](#module_dom/objects.EventListenerOptions) | Additional options to how the event will be fired |

<a name="module_dom/core..appendListeners"></a>

### dom/core~appendListeners(item, event, listener, args, options) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
When there may be extra data needed for the event listener function call, this function may be used as a helper
to pass the additional data. Also, if it is desirable to add event listeners during run-time, this function can be
used to achieve this.
WARNING: This is a recursive function.

**Kind**: inner method of [<code>dom/core</code>](#module_dom/core)  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem which will have its eventListeners updated. |
| event | <code>string</code> | The string name of the event trigger type to be added. |
| listener | <code>string</code> | The name of the function to be called once the event is triggered. |
| args | <code>Object</code> | Additional arguments to be used in the listener function. |
| options | [<code>EventListenerOptions</code>](#module_dom/objects.EventListenerOptions) | The strategy used when the event is triggered. |

<a name="module_dom/core..bindListeners"></a>

### dom/core~bindListeners(item) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
Based on the eventListeners property of the provided item, bind the
listeners to the associated element property for the provided jDomObjects.DomItem.

**Kind**: inner method of [<code>dom/core</code>](#module_dom/core)  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem which may have eventListeners to apply to its element |

<a name="module_dom/core..bindAllListeners"></a>

### dom/core~bindAllListeners(item) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
Based on the eventListeners property of the provided item, bind the listeners to the associated element property
for each item in the jDomObjects.DomItem structure.
WARNING: This is a recursive function.

**Kind**: inner method of [<code>dom/core</code>](#module_dom/core)  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem with an associated HTMLElement to have a listener assigned |

<a name="module_dom/core..gatherChildItems"></a>

### dom/core~gatherChildItems(item, test) ⇒ [<code>Array.&lt;DomItem&gt;</code>](#module_dom/objects.DomItem)
A selector function for retrieving existing child jDomObjects.DomItems from the given parent item.
This function will check all the children starting from and including item, and run the test function on each
child encountered. The return array contains children returned from the test from all levels.
WARNING: This is a recursive function.

**Kind**: inner method of [<code>dom/core</code>](#module_dom/core)  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem which may have child items matching the attribute criteria |
| test | [<code>testChildItem</code>](#module_dom/core..testChildItem) | Assess each child, and return the ones which qualify |

<a name="module_dom/core..getChildrenFromAttribute"></a>

### dom/core~getChildrenFromAttribute(attr, value, item) ⇒ [<code>Array.&lt;DomItem&gt;</code>](#module_dom/objects.DomItem)
A selector function for retrieving existing child jDomObjects.DomItems from the given parent item.
This function will check all the children starting from item, and scan the attributes
property for matches. The returned array contains children matching from all levels.
WARNING: This calls a recursive function.

**Kind**: inner method of [<code>dom/core</code>](#module_dom/core)  

| Param | Type | Description |
| --- | --- | --- |
| attr | <code>string</code> | Provide the attribute name to be searched |
| value | <code>\*</code> | The attribute value to be compared |
| item | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem which may have child items matching the attribute criteria |

<a name="module_dom/core..getChildrenByClass"></a>

### dom/core~getChildrenByClass() ⇒ [<code>Array.&lt;DomItem&gt;</code>](#module_dom/objects.DomItem)
Helper for getting all jDomObjects.DomItems starting at parent and having specified className attribute

**Kind**: inner method of [<code>dom/core</code>](#module_dom/core)  
<a name="module_dom/core..getChildrenByName"></a>

### dom/core~getChildrenByName() ⇒ [<code>Array.&lt;DomItem&gt;</code>](#module_dom/objects.DomItem)
Helper for getting all jDomObjects.DomItems starting at parent and having specified name attribute

**Kind**: inner method of [<code>dom/core</code>](#module_dom/core)  
<a name="module_dom/core..getParentsFromAttribute"></a>

### dom/core~getParentsFromAttribute(attr, value, item) ⇒ <code>Array</code>
A selector function for retrieving existing child jDomObjects.DomItems from the given parent item.
This function will check all the children starting from item, and scan the attributes
property for matches. The return array contains children matching from all levels.
WARNING: This is a recursive function.

**Kind**: inner method of [<code>dom/core</code>](#module_dom/core)  

| Param | Type | Description |
| --- | --- | --- |
| attr | <code>string</code> | Provide the attribute name to be searched |
| value | <code>\*</code> | The attribute value to be compared |
| item | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem which may have parent items matching the attribute criteria |

<a name="module_dom/core..getParentsByClass"></a>

### dom/core~getParentsByClass() ⇒ <code>Array</code>
Helper for getting all jDomObjects.DomItems starting at child and having specified className attribute

**Kind**: inner method of [<code>dom/core</code>](#module_dom/core)  
<a name="module_dom/core..getParentsByName"></a>

### dom/core~getParentsByName() ⇒ <code>Array</code>
Helper for getting all jDomObjects.DomItems starting at child and having specified name attribute

**Kind**: inner method of [<code>dom/core</code>](#module_dom/core)  
<a name="module_dom/core..getParentsByTagName"></a>

### dom/core~getParentsByTagName() ⇒ <code>Array</code>
Helper for getting all jDomObjects.DomItems starting at child and having specified tagName

**Kind**: inner method of [<code>dom/core</code>](#module_dom/core)  
<a name="module_dom/core..getTopParentItem"></a>

### dom/core~getTopParentItem(item) ⇒ [<code>DomItemRoot</code>](#module_dom/objects.DomItemRoot)
Get the upper parentItem for the provided child. (usually this is a jDomObjects.documentItem reference)
WARNING: This is a recursive function.

**Kind**: inner method of [<code>dom/core</code>](#module_dom/core)  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem which we want the highest parent item of |

<a name="module_dom/core..renderHTML"></a>

### dom/core~renderHTML(item, parent) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
This is a shortcut for building the specified HTML elements and appending them to the Dom
with associated listeners.
The final argument is specific for adding event listeners with options.

**Kind**: inner method of [<code>dom/core</code>](#module_dom/core)  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem that we want to render the element for |
| parent | [<code>DomItemRoot</code>](#module_dom/objects.DomItemRoot) | The Base Dom item which is the parent of all the items |

<a name="module_dom/core..document"></a>

### dom/core~document : <code>HTMLDocument</code> \| <code>module:pseudoDom/objects.PseudoHTMLDocument</code>
Verify availability of document

**Kind**: inner typedef of [<code>dom/core</code>](#module_dom/core)  
<a name="module_dom/core..root"></a>

### dom/core~root : <code>Window</code> \| <code>module:pseudoDom/objects.PseudoEventTarget</code>
**Kind**: inner typedef of [<code>dom/core</code>](#module_dom/core)  
**See**: module:pseudoDom/objects.generate  
<a name="module_dom/core..functionalHelpers"></a>

### dom/core~functionalHelpers : <code>\*</code> \| <code>module:functionalHelpers</code>
Verify availability of functionalHelpers

**Kind**: inner typedef of [<code>dom/core</code>](#module_dom/core)  
<a name="module_dom/core..jDomObjects"></a>

### dom/core~jDomObjects : <code>\*</code> \| [<code>dom/objects</code>](#module_dom/objects)
Verify availability of jDomObjects

**Kind**: inner typedef of [<code>dom/core</code>](#module_dom/core)  
<a name="module_dom/core..testChildItem"></a>

### dom/core~testChildItem ⇒ [<code>Array.&lt;DomItem&gt;</code>](#module_dom/objects.DomItem)
To be used with jDomCore.gatherChildItems which will start at item and recurse over all child items, this test
will then choose which child items will be returned as the result of the test.

**Kind**: inner typedef of [<code>dom/core</code>](#module_dom/core)  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_dom/objects.DomItem) \| <code>Object</code> | The DomItem is the child being tested |
| gatheredResults | [<code>Array.&lt;DomItem&gt;</code>](#module_dom/objects.DomItem) | All of the child items gathered based on the test |

<a name="module_dom/objects"></a>

## dom/objects : <code>Object</code>
All methods exported from this module are encapsulated within jDomObjects

**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [dom/objects](#module_dom/objects) : <code>Object</code>
    * _static_
        * [.UseCapture](#module_dom/objects.UseCapture) : <code>boolean</code>
        * [.OptionsObject](#module_dom/objects.OptionsObject) : <code>Object</code>
        * [.EventListenerOptions](#module_dom/objects.EventListenerOptions) : [<code>OptionsObject</code>](#module_dom/objects.OptionsObject) \| [<code>UseCapture</code>](#module_dom/objects.UseCapture)
        * [.DomItem](#module_dom/objects.DomItem) : <code>Object</code>
        * [.DomItemRoot](#module_dom/objects.DomItemRoot) : [<code>DomItem</code>](#module_dom/objects.DomItem)
    * _inner_
        * [~documentItem](#module_dom/objects..documentItem) : [<code>DomItemRoot</code>](#module_dom/objects.DomItemRoot)
        * [~noConflict()](#module_dom/objects..noConflict) ⇒ <code>jDomObjects</code>
        * [~createDomItem(...attributes)](#module_dom/objects..createDomItem) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
        * [~documentDomItem(listeners, [rootItem])](#module_dom/objects..documentDomItem) ⇒ [<code>DomItemRoot</code>](#module_dom/objects.DomItemRoot) \| [<code>DomItem</code>](#module_dom/objects.DomItem)
        * [~functionalHelpers](#module_dom/objects..functionalHelpers) : <code>\*</code> \| <code>module:functionalHelpers</code>
        * [~listenerFunction](#module_dom/objects..listenerFunction) : <code>function</code>
        * [~EventListener](#module_dom/objects..EventListener) : <code>Object</code>
        * [~DomItemHead](#module_dom/objects..DomItemHead) : [<code>DomItem</code>](#module_dom/objects.DomItem)
        * [~DomItemBody](#module_dom/objects..DomItemBody) : [<code>DomItem</code>](#module_dom/objects.DomItem)

<a name="module_dom/objects.UseCapture"></a>

### dom/objects.UseCapture : <code>boolean</code>
A Boolean indicating whether events of this type will be dispatched to the registered listerFunction before being
dispatched to any EventTarget beneath it in the Dom tree.

**Kind**: static typedef of [<code>dom/objects</code>](#module_dom/objects)  
<a name="module_dom/objects.OptionsObject"></a>

### dom/objects.OptionsObject : <code>Object</code>
OptionsObject defines the structure for the options to be passed to addEventListener

**Kind**: static typedef of [<code>dom/objects</code>](#module_dom/objects)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| capture | <code>boolean</code> | Indicate that events of this type will be dispatched to the registered listenerFunction before being dispatched to any EventTarget beneath it in the Dom tree. |
| once | <code>boolean</code> | Indicate that the listenerFunction should be invoked at most once after being added. If 'true', the listenerFunction would be automatically removed when invoked. |
| passive | <code>boolean</code> | Indicate that, if 'true', indicates that the listenerFunction will never call preventDefault(). If preventDefault() is called, the user agent will do nothing with it. |

<a name="module_dom/objects.EventListenerOptions"></a>

### dom/objects.EventListenerOptions : [<code>OptionsObject</code>](#module_dom/objects.OptionsObject) \| [<code>UseCapture</code>](#module_dom/objects.UseCapture)
EventListenerOptions is either a boolean as UseCapture or an Object as OptionsObject

**Kind**: static typedef of [<code>dom/objects</code>](#module_dom/objects)  
<a name="module_dom/objects.DomItem"></a>

### dom/objects.DomItem : <code>Object</code>
DomItem defines the structure for a single element in the Dom

**Kind**: static typedef of [<code>dom/objects</code>](#module_dom/objects)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| tagName | <code>string</code> | This is any valid HTMLElement tagName |
| attributes | <code>Object.&lt;string, (string\|Object)&gt;</code> | All potential HTML element attributes can be defined here (including the defaulted style object) |
| element | <code>Object</code> \| <code>HTMLElement</code> \| <code>module:pseudoDom/objects.PseudoHTMLElement</code> | A reference to an existing HTML element will be stored here (default empty object) |
| eventListeners | <code>Object.&lt;Event, module:dom/objects~EventListener&gt;</code> | An object holding all events to be registered for the associated element |
| parentItem | [<code>DomItem</code>](#module_dom/objects.DomItem) | A reference to the parent of this object |
| children | [<code>Array.&lt;DomItem&gt;</code>](#module_dom/objects.DomItem) | A reference to an array of child objects |

<a name="module_dom/objects.DomItemRoot"></a>

### dom/objects.DomItemRoot : [<code>DomItem</code>](#module_dom/objects.DomItem)
DomItemRoot defines the structure for a single element in the Dom

**Kind**: static typedef of [<code>dom/objects</code>](#module_dom/objects)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [tagName] | <code>string</code> | <code>&quot;html&quot;</code> | This is set to the string html referring to the HTML element of the same name |
| attributes | <code>Object</code> |  | Empty object as attributes placeholder |
| element | <code>HTMLDocument</code> \| <code>module:pseudoDom/objects.PseudoHTMLDocument</code> |  | A reference to the entire Document |
| eventListeners | <code>Object.&lt;string, module:dom/objects~listenerFunction&gt;</code> |  | all registered listeners stored as listener name and function pairs |
| children | <code>Array.&lt;(module:dom/objects~DomItemHead\|module:dom/objects~DomItemBody)&gt;</code> |  | Two references: for head and body |
| head | [<code>DomItemHead</code>](#module_dom/objects..DomItemHead) |  | A specific reference to head item |
| body | [<code>DomItemBody</code>](#module_dom/objects..DomItemBody) |  | A specific reference to body item |

<a name="module_dom/objects..documentItem"></a>

### dom/objects~documentItem : [<code>DomItemRoot</code>](#module_dom/objects.DomItemRoot)
Create reference for storing document changes

**Kind**: inner property of [<code>dom/objects</code>](#module_dom/objects)  
<a name="module_dom/objects..noConflict"></a>

### dom/objects~noConflict() ⇒ <code>jDomObjects</code>
Return a reference to this library while preserving the original same-named library

**Kind**: inner method of [<code>dom/objects</code>](#module_dom/objects)  
<a name="module_dom/objects..createDomItem"></a>

### dom/objects~createDomItem(...attributes) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
This is the basic Object for representing the Dom in a virtual perspective. All incoming attributes will be merged
to the specified format.

**Kind**: inner method of [<code>dom/objects</code>](#module_dom/objects)  

| Param | Type | Description |
| --- | --- | --- |
| ...attributes | <code>Object</code> | DomItem-like object(s) to be merged as a DomItem |

<a name="module_dom/objects..documentDomItem"></a>

### dom/objects~documentDomItem(listeners, [rootItem]) ⇒ [<code>DomItemRoot</code>](#module_dom/objects.DomItemRoot) \| [<code>DomItem</code>](#module_dom/objects.DomItem)
Return a DomItem reference to the document. The rootItem argument is a system variable and not necessary to
implement.

**Kind**: inner method of [<code>dom/objects</code>](#module_dom/objects)  

| Param | Type | Description |
| --- | --- | --- |
| listeners | <code>Object.&lt;string, module:dom/objects~listenerFunction&gt;</code> | An object of all event listeners to be registered in the Dom |
| [rootItem] | [<code>DomItemRoot</code>](#module_dom/objects.DomItemRoot) \| [<code>DomItem</code>](#module_dom/objects.DomItem) | This is a reference to DomItemRoot which will be defaulted with [initRoot](initRoot) |

<a name="module_dom/objects..functionalHelpers"></a>

### dom/objects~functionalHelpers : <code>\*</code> \| <code>module:functionalHelpers</code>
Verify availability of functionalHelpers

**Kind**: inner typedef of [<code>dom/objects</code>](#module_dom/objects)  
<a name="module_dom/objects..listenerFunction"></a>

### dom/objects~listenerFunction : <code>function</code>
This is the standard definition of a listenerFunction to be used

**Kind**: inner typedef of [<code>dom/objects</code>](#module_dom/objects)  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>Event</code> \| <code>module:pseudoDom/objects.PseudoEvent</code> | The event object passed to the listener |
| target | [<code>DomItem</code>](#module_dom/objects.DomItem) | The element which triggered the event |
| [...args] | <code>\*</code> | Optional args as required by the listener |

<a name="module_dom/objects..EventListener"></a>

### dom/objects~EventListener : <code>Object</code>
An EventListener Object to be appended to the element within the DomItem

**Kind**: inner typedef of [<code>dom/objects</code>](#module_dom/objects)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| listenerFunc | <code>string</code> | A string function name matching an existing [listenerFunction](#module_dom/objects..listenerFunction). |
| listenerArgs | <code>Object</code> | Additional args required for the listener function |
| listenerOptions | [<code>EventListenerOptions</code>](#module_dom/objects.EventListenerOptions) | Provides support for options parameter of addEventListener, or false for default |

<a name="module_dom/objects..DomItemHead"></a>

### dom/objects~DomItemHead : [<code>DomItem</code>](#module_dom/objects.DomItem)
DomItemHead defines the structure for a single element in the Dom

**Kind**: inner typedef of [<code>dom/objects</code>](#module_dom/objects)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [tagName] | <code>string</code> | <code>&quot;head&quot;</code> | This is set to the string head referring to the HTML element of the same name |
| attributes | <code>Object.&lt;string, (string\|Object)&gt;</code> |  | All potential HTML element attributes can be defined here |
| element | <code>HTMLHeadElement</code> \| <code>module:pseudoDom/objects.PseudoHTMLElement</code> |  | A reference to the HTML head element |
| children | [<code>Array.&lt;DomItem&gt;</code>](#module_dom/objects.DomItem) |  | A reference to an array of child objects |

<a name="module_dom/objects..DomItemBody"></a>

### dom/objects~DomItemBody : [<code>DomItem</code>](#module_dom/objects.DomItem)
DomItemBody defines the structure for a single element in the Dom

**Kind**: inner typedef of [<code>dom/objects</code>](#module_dom/objects)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [tagName] | <code>string</code> | <code>&quot;body&quot;</code> | This is set to the string body referring to the HTML element of the same name |
| attributes | <code>Object.&lt;string, (string\|Object)&gt;</code> |  | All potential HTML element attributes can be defined here |
| element | <code>HTMLBodyElement</code> \| <code>module:pseudoDom/objects.PseudoHTMLElement</code> |  | A reference to the HTML body element |
| children | [<code>Array.&lt;DomItem&gt;</code>](#module_dom/objects.DomItem) |  | A reference to an array of child objects |

<a name="module_matrix/core"></a>

## matrix/core : <code>Object</code>
All methods exported from this module are encapsulated within jDomMatrixCore.

**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [matrix/core](#module_matrix/core) : <code>Object</code>
    * [~noConflict()](#module_matrix/core..noConflict) ⇒ <code>jDomMatrixCore</code>
    * [~bindPointData(item, pnt)](#module_matrix/core..bindPointData) ⇒ [<code>MatrixColumn</code>](#module_matrix/objects.MatrixColumn) \| [<code>MatrixRow</code>](#module_matrix/objects.MatrixRow)
    * [~nextCell(pnt, dir)](#module_matrix/core..nextCell) ⇒ [<code>Point</code>](#module_matrix/objects.Point)
    * [~pointDifference(start, end)](#module_matrix/core..pointDifference) ⇒ [<code>Point</code>](#module_matrix/objects.Point)
    * [~areEqualPoints(p1, p2)](#module_matrix/core..areEqualPoints) ⇒ <code>boolean</code>
    * [~getHighestAbsoluteCoordinate(pnt)](#module_matrix/core..getHighestAbsoluteCoordinate) ⇒ [<code>coordinate</code>](#module_matrix/objects.coordinate)
    * [~getFirstAxisOfCoordinate(pnt, coordinate)](#module_matrix/core..getFirstAxisOfCoordinate) ⇒ <code>false</code> \| [<code>axis</code>](#module_matrix/objects.axis)
    * [~pointsToDirection(start, end)](#module_matrix/core..pointsToDirection) ⇒ [<code>Direction</code>](#module_matrix/objects.Direction)
    * [~randomStart(length, dir, [lengthLimits])](#module_matrix/core..randomStart) ⇒ [<code>Point</code>](#module_matrix/objects.Point)
    * [~lineEndPoint(start, length, dir)](#module_matrix/core..lineEndPoint) ⇒ [<code>Point</code>](#module_matrix/objects.Point)
    * [~getPointsLine(start, end, [line])](#module_matrix/core..getPointsLine) ⇒ [<code>Array.&lt;Point&gt;</code>](#module_matrix/objects.Point)
    * [~getPointsLines(lines)](#module_matrix/core..getPointsLines) ⇒ <code>Array.&lt;Array.&lt;module:matrix/objects.Point&gt;&gt;</code>
    * [~testPointsBetween(start, end, matrix, func, [inclusive])](#module_matrix/core..testPointsBetween) ⇒ <code>Object.&lt;string, Array.&lt;module:matrix/objects.Point&gt;&gt;</code>
    * [~checkInBetween(...args)](#module_matrix/core..checkInBetween) ⇒ <code>boolean</code>
    * [~getAxisLengths(matrix)](#module_matrix/core..getAxisLengths) ⇒ [<code>Point</code>](#module_matrix/objects.Point)
    * [~randDirection([useCoordinates])](#module_matrix/core..randDirection) ⇒ [<code>Direction</code>](#module_matrix/objects.Direction)
    * [~checkValidPoint(pnt, matrix)](#module_matrix/core..checkValidPoint) ⇒ <code>boolean</code>
    * [~getDomItemFromPoint(pnt, matrix)](#module_matrix/core..getDomItemFromPoint) ⇒ <code>false</code> \| [<code>DomItem</code>](#module_dom/objects.DomItem)
    * [~getAllPoints(matrix, [allPoints])](#module_matrix/core..getAllPoints) ⇒ [<code>Array.&lt;Point&gt;</code>](#module_matrix/objects.Point)
    * [~adjacentPoints(pnt, matrix)](#module_matrix/core..adjacentPoints) ⇒ [<code>Array.&lt;Point&gt;</code>](#module_matrix/objects.Point)
    * [~adjacentEdgePoints(pnt, matrix)](#module_matrix/core..adjacentEdgePoints) ⇒ [<code>Array.&lt;Point&gt;</code>](#module_matrix/objects.Point)
    * [~getPointFromElement(elem)](#module_matrix/core..getPointFromElement) ⇒ [<code>Point</code>](#module_matrix/objects.Point)
    * [~getDomItemFromElement(elem, matrix)](#module_matrix/core..getDomItemFromElement) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
    * [~functionalHelpers](#module_matrix/core..functionalHelpers) : <code>\*</code> \| <code>module:functionalHelpers</code>
    * [~jDomMatrixObjects](#module_matrix/core..jDomMatrixObjects) : <code>\*</code> \| [<code>matrix/objects</code>](#module_matrix/objects)
    * [~testPointStatus](#module_matrix/core..testPointStatus) ⇒ <code>boolean</code>

<a name="module_matrix/core..noConflict"></a>

### matrix/core~noConflict() ⇒ <code>jDomMatrixCore</code>
Return a reference to this library while preserving the original same-named library

**Kind**: inner method of [<code>matrix/core</code>](#module_matrix/core)  
<a name="module_matrix/core..bindPointData"></a>

### matrix/core~bindPointData(item, pnt) ⇒ [<code>MatrixColumn</code>](#module_matrix/objects.MatrixColumn) \| [<code>MatrixRow</code>](#module_matrix/objects.MatrixRow)
Generate point data for each item in the matrix
WARNING: This is a recursive function.

**Kind**: inner method of [<code>matrix/core</code>](#module_matrix/core)  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>MatrixColumn</code>](#module_matrix/objects.MatrixColumn) \| [<code>MatrixRow</code>](#module_matrix/objects.MatrixRow) | A special DomItem which is either a layer, row, or column in a matrix. |
| pnt | [<code>Point</code>](#module_matrix/objects.Point) | A point to be added to a specific Matrix Column |

<a name="module_matrix/core..nextCell"></a>

### matrix/core~nextCell(pnt, dir) ⇒ [<code>Point</code>](#module_matrix/objects.Point)
Based on provided point and point direction generate next point.

**Kind**: inner method of [<code>matrix/core</code>](#module_matrix/core)  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrix/objects.Point) | Provide the current / initial point |
| dir | [<code>Direction</code>](#module_matrix/objects.Direction) | Provide the direction to be applied to find the next point |

<a name="module_matrix/core..pointDifference"></a>

### matrix/core~pointDifference(start, end) ⇒ [<code>Point</code>](#module_matrix/objects.Point)
Based on provided point and another point, get a point with the difference between each axis

**Kind**: inner method of [<code>matrix/core</code>](#module_matrix/core)  

| Param | Type | Description |
| --- | --- | --- |
| start | [<code>Point</code>](#module_matrix/objects.Point) | The first point to compare |
| end | [<code>Point</code>](#module_matrix/objects.Point) | The other point to be compared |

<a name="module_matrix/core..areEqualPoints"></a>

### matrix/core~areEqualPoints(p1, p2) ⇒ <code>boolean</code>
Given two points, compare the x, y, and z of each to see if they are the same

**Kind**: inner method of [<code>matrix/core</code>](#module_matrix/core)  

| Param | Type | Description |
| --- | --- | --- |
| p1 | [<code>Point</code>](#module_matrix/objects.Point) | The first point to compare |
| p2 | [<code>Point</code>](#module_matrix/objects.Point) | The other point to be compared |

<a name="module_matrix/core..getHighestAbsoluteCoordinate"></a>

### matrix/core~getHighestAbsoluteCoordinate(pnt) ⇒ [<code>coordinate</code>](#module_matrix/objects.coordinate)
Return the first coordinate number with the highest absolute value.

**Kind**: inner method of [<code>matrix/core</code>](#module_matrix/core)  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrix/objects.Point) | A Point to be assessed. |

<a name="module_matrix/core..getFirstAxisOfCoordinate"></a>

### matrix/core~getFirstAxisOfCoordinate(pnt, coordinate) ⇒ <code>false</code> \| [<code>axis</code>](#module_matrix/objects.axis)
Having provided a coordinate number, find all corresponding axis, return the first match.

**Kind**: inner method of [<code>matrix/core</code>](#module_matrix/core)  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrix/objects.Point) | The Point containing a matching coordinate. |
| coordinate | [<code>coordinate</code>](#module_matrix/objects.coordinate) | The coordinate to search for. |

<a name="module_matrix/core..pointsToDirection"></a>

### matrix/core~pointsToDirection(start, end) ⇒ [<code>Direction</code>](#module_matrix/objects.Direction)
Retrieve a directional coordinate value based on two provided points
(directions consist of two zero coordinates and a single coordinate of 1 / -1)

**Kind**: inner method of [<code>matrix/core</code>](#module_matrix/core)  

| Param | Type | Description |
| --- | --- | --- |
| start | [<code>Point</code>](#module_matrix/objects.Point) | The first point to assess. |
| end | [<code>Point</code>](#module_matrix/objects.Point) | The other point to assess. |

<a name="module_matrix/core..randomStart"></a>

### matrix/core~randomStart(length, dir, [lengthLimits]) ⇒ [<code>Point</code>](#module_matrix/objects.Point)
Generate a random starting point for a line with the provided length and direction.

**Kind**: inner method of [<code>matrix/core</code>](#module_matrix/core)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| length | <code>number</code> |  | The intended length the resulting line. |
| dir | [<code>Direction</code>](#module_matrix/objects.Direction) |  | The direction the line will extend towards. |
| [lengthLimits] | [<code>Point</code>](#module_matrix/objects.Point) | <code>{x: 10, y: 10, z: 10}</code> | The maximum grid size. |

<a name="module_matrix/core..lineEndPoint"></a>

### matrix/core~lineEndPoint(start, length, dir) ⇒ [<code>Point</code>](#module_matrix/objects.Point)
Given a start point, line length, and a direction, generate the end point of the line.

**Kind**: inner method of [<code>matrix/core</code>](#module_matrix/core)  

| Param | Type | Description |
| --- | --- | --- |
| start | [<code>Point</code>](#module_matrix/objects.Point) | The selected starting point. |
| length | <code>number</code> | The total length of the line. |
| dir | [<code>Direction</code>](#module_matrix/objects.Direction) | The direction of the line. |

<a name="module_matrix/core..getPointsLine"></a>

### matrix/core~getPointsLine(start, end, [line]) ⇒ [<code>Array.&lt;Point&gt;</code>](#module_matrix/objects.Point)
Having provided two points, return an array of transition points connecting 'start' and 'end'. Return array
includes 'start' (line[0]) and 'end' (line[line.length-1])

**Kind**: inner method of [<code>matrix/core</code>](#module_matrix/core)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Point</code>](#module_matrix/objects.Point) |  | The starting location of the line. |
| end | [<code>Point</code>](#module_matrix/objects.Point) |  | The final line destination. |
| [line] | [<code>Array.&lt;Point&gt;</code>](#module_matrix/objects.Point) | <code>[]</code> | The resulting line to connect start and end. |

<a name="module_matrix/core..getPointsLines"></a>

### matrix/core~getPointsLines(lines) ⇒ <code>Array.&lt;Array.&lt;module:matrix/objects.Point&gt;&gt;</code>
Takes an array of arrays containing two points each. Calls getPointsLine for each array of points. Returns an
array of all points captured for each line segment

**Kind**: inner method of [<code>matrix/core</code>](#module_matrix/core)  

| Param | Type | Description |
| --- | --- | --- |
| lines | <code>Array.&lt;Array.&lt;module:matrix/objects.Point&gt;&gt;</code> | An array of lines only containing start and end. |

<a name="module_matrix/core..testPointsBetween"></a>

### matrix/core~testPointsBetween(start, end, matrix, func, [inclusive]) ⇒ <code>Object.&lt;string, Array.&lt;module:matrix/objects.Point&gt;&gt;</code>
Given a start and end point, test the points between with the provided function. Return the points as part of true
and / or false properties based on the test.

**Kind**: inner method of [<code>matrix/core</code>](#module_matrix/core)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Point</code>](#module_matrix/objects.Point) |  | The beginning point to check. |
| end | [<code>Point</code>](#module_matrix/objects.Point) |  | The terminating point to check between. |
| matrix | [<code>Matrix</code>](#module_matrix/objects.Matrix) |  | The grid of points all the points can exist on. |
| func | [<code>testPointStatus</code>](#module_matrix/core..testPointStatus) |  | The test function which will return true or false. |
| [inclusive] | <code>boolean</code> | <code>true</code> | Choose whether to include or exclude the start and end points in the results. |

<a name="module_matrix/core..checkInBetween"></a>

### matrix/core~checkInBetween(...args) ⇒ <code>boolean</code>
Given two points, check the cells between using specified function.
When inclusive is set to true the provided start and end points will also be tested

**Kind**: inner method of [<code>matrix/core</code>](#module_matrix/core)  

| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>\*</code> | These args match the parameter list for [testPointsBetween](#module_matrix/core..testPointsBetween) |

<a name="module_matrix/core..getAxisLengths"></a>

### matrix/core~getAxisLengths(matrix) ⇒ [<code>Point</code>](#module_matrix/objects.Point)
Return point-like object with all of the axis lengths.

**Kind**: inner method of [<code>matrix/core</code>](#module_matrix/core)  

| Param | Type | Description |
| --- | --- | --- |
| matrix | [<code>Matrix</code>](#module_matrix/objects.Matrix) | The matrix to get the dimensions of. |

<a name="module_matrix/core..randDirection"></a>

### matrix/core~randDirection([useCoordinates]) ⇒ [<code>Direction</code>](#module_matrix/objects.Direction)
Get random direction point

**Kind**: inner method of [<code>matrix/core</code>](#module_matrix/core)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [useCoordinates] | [<code>Array.&lt;Point&gt;</code>](#module_matrix/objects.Point) | <code>[]</code> | An array of possible directions. |

<a name="module_matrix/core..checkValidPoint"></a>

### matrix/core~checkValidPoint(pnt, matrix) ⇒ <code>boolean</code>
Test if the provided point exists in the matrix.

**Kind**: inner method of [<code>matrix/core</code>](#module_matrix/core)  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrix/objects.Point) | Provide a point to validate. |
| matrix | [<code>Matrix</code>](#module_matrix/objects.Matrix) | The matrix that contains valid points. |

<a name="module_matrix/core..getDomItemFromPoint"></a>

### matrix/core~getDomItemFromPoint(pnt, matrix) ⇒ <code>false</code> \| [<code>DomItem</code>](#module_dom/objects.DomItem)
Retrieve the DomItem associated with the provided point

**Kind**: inner method of [<code>matrix/core</code>](#module_matrix/core)  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrix/objects.Point) | A point corresponding to a DomItem. |
| matrix | [<code>Matrix</code>](#module_matrix/objects.Matrix) | The matrix containing the point. |

<a name="module_matrix/core..getAllPoints"></a>

### matrix/core~getAllPoints(matrix, [allPoints]) ⇒ [<code>Array.&lt;Point&gt;</code>](#module_matrix/objects.Point)
Return an array of all the points in the matrix

**Kind**: inner method of [<code>matrix/core</code>](#module_matrix/core)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| matrix | [<code>Matrix</code>](#module_matrix/objects.Matrix) \| [<code>MatrixColumn</code>](#module_matrix/objects.MatrixColumn) |  | The matrix to retrieve points from. |
| [allPoints] | [<code>Array.&lt;Point&gt;</code>](#module_matrix/objects.Point) | <code>[]</code> | The array of points to be returned |

<a name="module_matrix/core..adjacentPoints"></a>

### matrix/core~adjacentPoints(pnt, matrix) ⇒ [<code>Array.&lt;Point&gt;</code>](#module_matrix/objects.Point)
Return all valid points surrounding a provided point

**Kind**: inner method of [<code>matrix/core</code>](#module_matrix/core)  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrix/objects.Point) | The point we want to find adjacent points for. |
| matrix | [<code>Matrix</code>](#module_matrix/objects.Matrix) | The matrix having the point. |

<a name="module_matrix/core..adjacentEdgePoints"></a>

### matrix/core~adjacentEdgePoints(pnt, matrix) ⇒ [<code>Array.&lt;Point&gt;</code>](#module_matrix/objects.Point)
Return all points which touch on edges (not diagonal)

**Kind**: inner method of [<code>matrix/core</code>](#module_matrix/core)  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrix/objects.Point) | The point we want to find adjacent points for. |
| matrix | [<code>Matrix</code>](#module_matrix/objects.Matrix) | The matrix having the point. |

<a name="module_matrix/core..getPointFromElement"></a>

### matrix/core~getPointFromElement(elem) ⇒ [<code>Point</code>](#module_matrix/objects.Point)
Retrieve the point associated with the provided element.

**Kind**: inner method of [<code>matrix/core</code>](#module_matrix/core)  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Node</code> \| <code>HTMLElement</code> \| <code>module:pseudoDom/objects.PseudoHTMLElement</code> | Provide an element associated with a point. |

<a name="module_matrix/core..getDomItemFromElement"></a>

### matrix/core~getDomItemFromElement(elem, matrix) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
Retrieve the DomItem associated with the provided element in the matrix

**Kind**: inner method of [<code>matrix/core</code>](#module_matrix/core)  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Node</code> \| <code>HTMLElement</code> \| <code>module:pseudoDom/objects.PseudoHTMLElement</code> | Provide an element having an associated DomItem. |
| matrix | [<code>Matrix</code>](#module_matrix/objects.Matrix) | The matrix potentially containing the DomItem with Point. |

<a name="module_matrix/core..functionalHelpers"></a>

### matrix/core~functionalHelpers : <code>\*</code> \| <code>module:functionalHelpers</code>
Verify availability of jDomMatrixObjects

**Kind**: inner typedef of [<code>matrix/core</code>](#module_matrix/core)  
<a name="module_matrix/core..jDomMatrixObjects"></a>

### matrix/core~jDomMatrixObjects : <code>\*</code> \| [<code>matrix/objects</code>](#module_matrix/objects)
Verify availability of jDomMatrixObjects

**Kind**: inner typedef of [<code>matrix/core</code>](#module_matrix/core)  
<a name="module_matrix/core..testPointStatus"></a>

### matrix/core~testPointStatus ⇒ <code>boolean</code>
Function that produces a property of the new Object, taking three arguments

**Kind**: inner typedef of [<code>matrix/core</code>](#module_matrix/core)  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>MatrixColumn</code>](#module_matrix/objects.MatrixColumn) \| <code>Object</code> | A point which may have some status. |
| matrix | [<code>Matrix</code>](#module_matrix/objects.Matrix) \| <code>Object</code> | A matrix of points to find the point within. |

<a name="module_matrix/objects"></a>

## matrix/objects : <code>Object</code>
All methods exported from this module are encapsulated within jDomMatrixObjects.

**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [matrix/objects](#module_matrix/objects) : <code>Object</code>
    * _static_
        * [.axis](#module_matrix/objects.axis) : <code>string</code>
        * [.coordinate](#module_matrix/objects.coordinate) : <code>number</code>
        * [.Point](#module_matrix/objects.Point) : <code>Object.&lt;module:matrix/objects.axis, module:matrix/objects.coordinate&gt;</code>
        * [.Direction](#module_matrix/objects.Direction) : [<code>Point</code>](#module_matrix/objects.Point)
        * [.MatrixTile](#module_matrix/objects.MatrixTile) : <code>Object.&lt;string, module:matrix/objects.Point&gt;</code>
        * [.MatrixColumn](#module_matrix/objects.MatrixColumn) : [<code>DomItem</code>](#module_dom/objects.DomItem) \| [<code>MatrixTile</code>](#module_matrix/objects.MatrixTile)
        * [.MatrixRow](#module_matrix/objects.MatrixRow) : [<code>DomItem</code>](#module_dom/objects.DomItem)
        * [.MatrixLayer](#module_matrix/objects.MatrixLayer) : [<code>DomItem</code>](#module_dom/objects.DomItem)
        * [.Matrix](#module_matrix/objects.Matrix) : [<code>DomItem</code>](#module_dom/objects.DomItem)
    * _inner_
        * [~noConflict()](#module_matrix/objects..noConflict) ⇒ <code>jDomMatrixObjects</code>
        * [~point(x, y, [z])](#module_matrix/objects..point) ⇒ [<code>Point</code>](#module_matrix/objects.Point)
        * [~tile()](#module_matrix/objects..tile) ⇒ [<code>MatrixTile</code>](#module_matrix/objects.MatrixTile)
        * [~matrix(x, y, z, matrixProps)](#module_matrix/objects..matrix) ⇒ [<code>Matrix</code>](#module_matrix/objects.Matrix)
        * [~square([x], [y], [z], [matrixProps], size)](#module_matrix/objects..square) ⇒ [<code>Matrix</code>](#module_matrix/objects.Matrix)
        * [~cube([x], [y], [z], [matrixProps], size)](#module_matrix/objects..cube) ⇒ [<code>Matrix</code>](#module_matrix/objects.Matrix)
        * [~functionalHelpers](#module_matrix/objects..functionalHelpers) : <code>\*</code> \| <code>module:functionalHelpers</code>
        * [~jDomObjects](#module_matrix/objects..jDomObjects) : <code>\*</code> \| [<code>dom/objects</code>](#module_dom/objects)

<a name="module_matrix/objects.axis"></a>

### matrix/objects.axis : <code>string</code>
A string representing an axis: x, y, z

**Kind**: static typedef of [<code>matrix/objects</code>](#module_matrix/objects)  
<a name="module_matrix/objects.coordinate"></a>

### matrix/objects.coordinate : <code>number</code>
A number representing a coordinate in a [Matrix](#module_matrix/objects.Matrix)

**Kind**: static typedef of [<code>matrix/objects</code>](#module_matrix/objects)  
<a name="module_matrix/objects.Point"></a>

### matrix/objects.Point : <code>Object.&lt;module:matrix/objects.axis, module:matrix/objects.coordinate&gt;</code>
Point stores a location in a [Matrix](#module_matrix/objects.Matrix) defined by three key-value pairs
([axis](#module_matrix/objects.axis)=>[coordinate](#module_matrix/objects.coordinate))

**Kind**: static typedef of [<code>matrix/objects</code>](#module_matrix/objects)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| x | [<code>coordinate</code>](#module_matrix/objects.coordinate) | The X-coordinate of a Point |
| y | [<code>coordinate</code>](#module_matrix/objects.coordinate) | The Y-coordinate of a Point |
| z | [<code>coordinate</code>](#module_matrix/objects.coordinate) | The Z-coordinate of a Point |

<a name="module_matrix/objects.Direction"></a>

### matrix/objects.Direction : [<code>Point</code>](#module_matrix/objects.Point)
Point stores a location in a [Matrix](#module_matrix/objects.Matrix) defined by three key-value pairs

**Kind**: static typedef of [<code>matrix/objects</code>](#module_matrix/objects)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| x | [<code>coordinate</code>](#module_matrix/objects.coordinate) | The X-coordinate must be either -1, 0, or 1 |
| y | [<code>coordinate</code>](#module_matrix/objects.coordinate) | The Y-coordinate must be either -1, 0, or 1 |
| z | [<code>coordinate</code>](#module_matrix/objects.coordinate) | The Z-coordinate must be either -1, 0, or 1 |

<a name="module_matrix/objects.MatrixTile"></a>

### matrix/objects.MatrixTile : <code>Object.&lt;string, module:matrix/objects.Point&gt;</code>
MatrixTile is an Object which stores a reference a [Point](Point) and can be populated with additionally associated
fields.

**Kind**: static typedef of [<code>matrix/objects</code>](#module_matrix/objects)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#module_matrix/objects.Point) | a reference to its location in a [Matrix](#module_matrix/objects.Matrix) |
| axis | [<code>axis</code>](#module_matrix/objects.axis) | The axis will be 'x' |

<a name="module_matrix/objects.MatrixColumn"></a>

### matrix/objects.MatrixColumn : [<code>DomItem</code>](#module_dom/objects.DomItem) \| [<code>MatrixTile</code>](#module_matrix/objects.MatrixTile)
MatrixColumn is a DomItem which represents the x axis and also stores [MatrixTile](#module_matrix/objects.MatrixTile)

**Kind**: static typedef of [<code>matrix/objects</code>](#module_matrix/objects)  
<a name="module_matrix/objects.MatrixRow"></a>

### matrix/objects.MatrixRow : [<code>DomItem</code>](#module_dom/objects.DomItem)
MatrixRow is the parent of a group of [MatrixTile](#module_matrix/objects.MatrixTile)

**Kind**: static typedef of [<code>matrix/objects</code>](#module_matrix/objects)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| axis | [<code>axis</code>](#module_matrix/objects.axis) | The axis will be 'y' |
| children | [<code>Array.&lt;MatrixColumn&gt;</code>](#module_matrix/objects.MatrixColumn) | all of the MatrixTile items as part of this MatrixRow |

<a name="module_matrix/objects.MatrixLayer"></a>

### matrix/objects.MatrixLayer : [<code>DomItem</code>](#module_dom/objects.DomItem)
MatrixLayer is the parent of a group of [MatrixTile](#module_matrix/objects.MatrixTile)

**Kind**: static typedef of [<code>matrix/objects</code>](#module_matrix/objects)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| axis | [<code>axis</code>](#module_matrix/objects.axis) | The axis will be 'y' |
| children | [<code>Array.&lt;MatrixRow&gt;</code>](#module_matrix/objects.MatrixRow) | all of the MatrixRow items as part of this MatrixLayer |

<a name="module_matrix/objects.Matrix"></a>

### matrix/objects.Matrix : [<code>DomItem</code>](#module_dom/objects.DomItem)
Matrix is a multi-level [DomItem](#module_dom/objects.DomItem) which is used to visually represent a
mathematical grid / matrix.
The matrix consists of four DomItem levels, at the top tier is the Matrix container with class matrix.
The second tier represents the z axis (with property axis='z') and has the class layer.
The third tier represents the y axis (with property axis='y') and has the class row.
The fourth (final) tier represents the x axis (with property axis='x') and has the class column.
The [MatrixTile](#module_matrix/objects.MatrixTile) is attached on the x axis tier.
The number of children at each level is defined by the size of the matrix, the end result is a multidimensional
array.

**Kind**: static typedef of [<code>matrix/objects</code>](#module_matrix/objects)  
**Extends**: [<code>DomItem</code>](#module_dom/objects.DomItem)  
<a name="module_matrix/objects..noConflict"></a>

### matrix/objects~noConflict() ⇒ <code>jDomMatrixObjects</code>
Return a reference to this library while preserving the original same-named library

**Kind**: inner method of [<code>matrix/objects</code>](#module_matrix/objects)  
<a name="module_matrix/objects..point"></a>

### matrix/objects~point(x, y, [z]) ⇒ [<code>Point</code>](#module_matrix/objects.Point)
Store the point data for an x, y, z [Matrix](#module_matrix/objects.Matrix).

**Kind**: inner method of [<code>matrix/objects</code>](#module_matrix/objects)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | [<code>coordinate</code>](#module_matrix/objects.coordinate) |  | The numeric value for X-coordinate |
| y | [<code>coordinate</code>](#module_matrix/objects.coordinate) |  | The numeric value for Y-coordinate |
| [z] | [<code>coordinate</code>](#module_matrix/objects.coordinate) | <code>0</code> | The numeric value for Z-coordinate (default to 0 for 2D [Matrix](#module_matrix/objects.Matrix)) |

<a name="module_matrix/objects..tile"></a>

### matrix/objects~tile() ⇒ [<code>MatrixTile</code>](#module_matrix/objects.MatrixTile)
A default tile in the [Matrix](#module_matrix/objects.Matrix)

**Kind**: inner method of [<code>matrix/objects</code>](#module_matrix/objects)  
<a name="module_matrix/objects..matrix"></a>

### matrix/objects~matrix(x, y, z, matrixProps) ⇒ [<code>Matrix</code>](#module_matrix/objects.Matrix)
Create a 3d matrix of i with x by y by z size, add additional objects for each layer as well

**Kind**: inner method of [<code>matrix/objects</code>](#module_matrix/objects)  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Object</code> | Properties and a coordinate defining the width of the matrix. |
| y | <code>Object</code> | Properties and a coordinate defining the height of the matrix. |
| z | <code>Object</code> | Properties and a coordinate defining the depth of the matrix. |
| matrixProps | [<code>Array.&lt;Matrix&gt;</code>](#module_matrix/objects.Matrix) | Properties to be added to the matrix |

<a name="module_matrix/objects..square"></a>

### matrix/objects~square([x], [y], [z], [matrixProps], size) ⇒ [<code>Matrix</code>](#module_matrix/objects.Matrix)
Return a single layer matrix where x and y are equal

**Kind**: inner method of [<code>matrix/objects</code>](#module_matrix/objects)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [x] | [<code>Array.&lt;MatrixTile&gt;</code>](#module_matrix/objects.MatrixTile) | <code>[]</code> | All the data to be presented as part of the specified point, requires MatrixTile base |
| [y] | [<code>Array.&lt;MatrixRow&gt;</code>](#module_matrix/objects.MatrixRow) | <code>[]</code> | Additional data to append to the MatrixRow |
| [z] | [<code>Array.&lt;MatrixLayer&gt;</code>](#module_matrix/objects.MatrixLayer) | <code>[]</code> | Additional data to append to the MatrixLayer |
| [matrixProps] | [<code>Array.&lt;Matrix&gt;</code>](#module_matrix/objects.Matrix) | <code>[]</code> | Additional data to append to the Matrix |
| size | <code>number</code> |  | Used to define height and width as equal values (depth is set to 1) |

<a name="module_matrix/objects..cube"></a>

### matrix/objects~cube([x], [y], [z], [matrixProps], size) ⇒ [<code>Matrix</code>](#module_matrix/objects.Matrix)
Return a matrix where x, y, and z are equal

**Kind**: inner method of [<code>matrix/objects</code>](#module_matrix/objects)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [x] | [<code>Array.&lt;MatrixTile&gt;</code>](#module_matrix/objects.MatrixTile) | <code>[]</code> | All the data to be presented as part of the specified point, requires MatrixTile base |
| [y] | [<code>Array.&lt;MatrixRow&gt;</code>](#module_matrix/objects.MatrixRow) | <code>[]</code> | Additional data to append to the MatrixRow |
| [z] | [<code>Array.&lt;MatrixLayer&gt;</code>](#module_matrix/objects.MatrixLayer) | <code>[]</code> | Additional data to append to the MatrixLayer |
| [matrixProps] | [<code>Array.&lt;Matrix&gt;</code>](#module_matrix/objects.Matrix) | <code>[]</code> | Additional data to append to the Matrix |
| size | <code>number</code> |  | Used to define height, width, and depth as equal values |

<a name="module_matrix/objects..functionalHelpers"></a>

### matrix/objects~functionalHelpers : <code>\*</code> \| <code>module:functionalHelpers</code>
Verify availability of functionalHelpers

**Kind**: inner typedef of [<code>matrix/objects</code>](#module_matrix/objects)  
<a name="module_matrix/objects..jDomObjects"></a>

### matrix/objects~jDomObjects : <code>\*</code> \| [<code>dom/objects</code>](#module_dom/objects)
Verify availability of jDomObjects

**Kind**: inner typedef of [<code>matrix/objects</code>](#module_matrix/objects)  
<a name="module_pseudoDom/objects"></a>

## pseudoDom/objects : <code>Object</code>
All methods exported from this module are encapsulated within pseudoDom.

**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [pseudoDom/objects](#module_pseudoDom/objects) : <code>Object</code>
    * [~noConflict()](#module_pseudoDom/objects..noConflict) ⇒ <code>pseudoDom</code>
    * [~generate(context)](#module_pseudoDom/objects..generate) ⇒ <code>Window</code> \| <code>PseudoEventTarget</code>

<a name="module_pseudoDom/objects..noConflict"></a>

### pseudoDom/objects~noConflict() ⇒ <code>pseudoDom</code>
Return a reference to this library while preserving the original same-named library

**Kind**: inner method of [<code>pseudoDom/objects</code>](#module_pseudoDom/objects)  
<a name="module_pseudoDom/objects..generate"></a>

### pseudoDom/objects~generate(context) ⇒ <code>Window</code> \| <code>PseudoEventTarget</code>
Construct the Pseudo Dom to provide access to Dom objects which are otherwise not available outside of the browser
context.

**Kind**: inner method of [<code>pseudoDom/objects</code>](#module_pseudoDom/objects)  

| Param | Type |
| --- | --- |
| context | <code>Object</code> | 

<a name="LinkedList"></a>

## LinkedList
**Kind**: global class  

* [LinkedList](#LinkedList)
    * [new LinkedList(LinkerClass, ListClass)](#new_LinkedList_new)
    * _instance_
        * [.first](#LinkedList+first) ⇒ [<code>Linker</code>](#Linker)
        * [.last](#LinkedList+last) ⇒ [<code>Linker</code>](#Linker)
        * [.length](#LinkedList+length) ⇒ <code>number</code>
        * [.append(node)](#LinkedList+append)
        * [.prepend(node)](#LinkedList+prepend)
        * [.item(index)](#LinkedList+item) ⇒ <code>null</code> \| <code>\*</code>
        * [.forEach(callback)](#LinkedList+forEach)
    * _static_
        * [.fromArray(values, LinkerClass, ListClass)](#LinkedList.fromArray) ⇒ [<code>LinkedList</code>](#LinkedList)

<a name="new_LinkedList_new"></a>

### new LinkedList(LinkerClass, ListClass)

| Param |
| --- |
| LinkerClass | 
| ListClass | 

<a name="LinkedList+first"></a>

### linkedList.first ⇒ [<code>Linker</code>](#Linker)
**Kind**: instance property of [<code>LinkedList</code>](#LinkedList)  
<a name="LinkedList+last"></a>

### linkedList.last ⇒ [<code>Linker</code>](#Linker)
**Kind**: instance property of [<code>LinkedList</code>](#LinkedList)  
<a name="LinkedList+length"></a>

### linkedList.length ⇒ <code>number</code>
**Kind**: instance property of [<code>LinkedList</code>](#LinkedList)  
<a name="LinkedList+append"></a>

### linkedList.append(node)
**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  

| Param |
| --- |
| node | 

<a name="LinkedList+prepend"></a>

### linkedList.prepend(node)
**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  

| Param |
| --- |
| node | 

<a name="LinkedList+item"></a>

### linkedList.item(index) ⇒ <code>null</code> \| <code>\*</code>
**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  

| Param |
| --- |
| index | 

<a name="LinkedList+forEach"></a>

### linkedList.forEach(callback)
**Kind**: instance method of [<code>LinkedList</code>](#LinkedList)  

| Param |
| --- |
| callback | 

<a name="LinkedList.fromArray"></a>

### LinkedList.fromArray(values, LinkerClass, ListClass) ⇒ [<code>LinkedList</code>](#LinkedList)
**Kind**: static method of [<code>LinkedList</code>](#LinkedList)  

| Param |
| --- |
| values | 
| LinkerClass | 
| ListClass | 

<a name="Linker"></a>

## Linker
**Kind**: global class  

* [Linker](#Linker)
    * [new Linker(data, prev, next, LinkerClass)](#new_Linker_new)
    * _instance_
        * [.after(node)](#Linker+after) ⇒ [<code>Linker</code>](#Linker)
        * [.before(node)](#Linker+before) ⇒ [<code>Linker</code>](#Linker)
    * _static_
        * [.fromArray(values, LinkerClass)](#Linker.fromArray) ⇒ [<code>Linker</code>](#Linker)

<a name="new_Linker_new"></a>

### new Linker(data, prev, next, LinkerClass)

| Param |
| --- |
| data | 
| prev | 
| next | 
| LinkerClass | 

<a name="Linker+after"></a>

### linker.after(node) ⇒ [<code>Linker</code>](#Linker)
**Kind**: instance method of [<code>Linker</code>](#Linker)  

| Param |
| --- |
| node | 

<a name="Linker+before"></a>

### linker.before(node) ⇒ [<code>Linker</code>](#Linker)
**Kind**: instance method of [<code>Linker</code>](#Linker)  

| Param |
| --- |
| node | 

<a name="Linker.fromArray"></a>

### Linker.fromArray(values, LinkerClass) ⇒ [<code>Linker</code>](#Linker)
**Kind**: static method of [<code>Linker</code>](#Linker)  

| Param |
| --- |
| values | 
| LinkerClass | 

<a name="TreeLinker"></a>

## TreeLinker
**Kind**: global class  
<a name="new_TreeLinker_new"></a>

### new TreeLinker(data, prev, next, children, parent, LinkerClass)

| Param |
| --- |
| data | 
| prev | 
| next | 
| children | 
| parent | 
| LinkerClass | 

<a name="document"></a>

## document : <code>HTMLDocument</code> \| <code>module:pseudoDom/objects.PseudoHTMLDocument</code>
Verify availability of document

**Kind**: global typedef  
<a name="root"></a>

## root : <code>Window</code> \| <code>module:pseudoDom/objects.PseudoEventTarget</code>
**Kind**: global typedef  
**See**: module:pseudoDom/objects.generate  
