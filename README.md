# JSON-DOM

State management with JSON
## Modules

<dl>
<dt><a href="#module_jsonDom">jsonDom</a></dt>
<dd><p>All of the JSON DOM system functions for creating JSON components.</p>
</dd>
<dt><a href="#module_domFunctions">domFunctions</a></dt>
<dd><p>Core Dom management functions</p>
</dd>
<dt><a href="#module_domObjects">domObjects</a></dt>
<dd><p>Core objects for representing the DOM in JSON.</p>
</dd>
<dt><a href="#module_optionFlags">optionFlags</a></dt>
<dd><p>Be able to use Flags (Options) in a well-formed way.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#activateListener">activateListener(item, eventName, eventListener)</a> ⇒ <code>DomItem</code></dt>
<dd><p>Activate listener by pushing it to activeListeners.</p>
</dd>
<dt><a href="#applyActiveListeners">applyActiveListeners(item, eventName)</a> ⇒ <code>DomItem</code></dt>
<dd><p>Apply each active event listener for event type to the DOM Item&#39;s element.</p>
</dd>
<dt><a href="#checkAttribute">checkAttribute(element)</a> ⇒ <code><a href="#testAttributeChange">testAttributeChange</a></code></dt>
<dd><p>Given some config, provide a function to testing attribute and key existence in that config.</p>
</dd>
<dt><a href="#kabobCaseAttributes">kabobCaseAttributes(attributesToSet)</a> ⇒ <code>Object.&lt;string, *&gt;</code></dt>
<dd><p>Updates all the keys to be kabob-case</p>
</dd>
<dt><a href="#checkStyles">checkStyles(domItem, attr)</a> ⇒ <code>int</code> | <code>Object.&lt;string, number&gt;</code></dt>
<dd><p>For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute</p>
</dd>
<dt><a href="#checkClasses">checkClasses(domItem, attr)</a> ⇒ <code>int</code> | <code>Object.&lt;string, number&gt;</code></dt>
<dd><p>For attributes which are objects or multipart strings -1 = remove attribute, 0 = no change, 1 = add attribute</p>
</dd>
<dt><a href="#checkAttribute">checkAttribute(domItem)</a> ⇒ <code><a href="#testAttributeChange">testAttributeChange</a></code></dt>
<dd><p>Given some config, provide a function to testing attribute and key existence in that config.</p>
</dd>
<dt><a href="#camelCaseAttributes">camelCaseAttributes(domItem)</a> ⇒ <code>Object.&lt;string, *&gt;</code></dt>
<dd><p>Updates all the keys to be camelCase</p>
</dd>
<dt><a href="#checkStyles">checkStyles(element, attr)</a> ⇒ <code>int</code> | <code>Object.&lt;string, number&gt;</code></dt>
<dd><p>For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute</p>
</dd>
<dt><a href="#checkClasses">checkClasses(element, attr)</a> ⇒ <code>int</code> | <code>Object.&lt;string, number&gt;</code></dt>
<dd><p>For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute</p>
</dd>
<dt><a href="#makeElementType">makeElementType(nodeName, data)</a> ⇒ <code>Text</code> | <code>Comment</code> | <code>HTMLElement</code></dt>
<dd><p>Create a new DOM Node based on name and data.</p>
</dd>
<dt><a href="#makeEventHandler">makeEventHandler(listener, item, [...args])</a> ⇒ <code>eventHandler</code></dt>
<dd><p>Prepare a listener to be used before assigning to an element.</p>
</dd>
<dt><a href="#isEmpty">isEmpty(propertyValue)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if the value is an empty object / array, or if it is null or undefined.</p>
</dd>
<dt><a href="#appendChangesTo">appendChangesTo(changeList)</a> ⇒ <code>appendChanges</code></dt>
<dd><p>Initialize the appendChanges method with the changeList, return the appendChanges method.</p>
</dd>
<dt><a href="#createEventProxy">createEventProxy(event)</a> ⇒ <code>EventProxy</code></dt>
<dd><p>Return a modified version of the event.</p>
</dd>
<dt><a href="#getListenerOptions">getListenerOptions()</a> ⇒ <code>OptionsTemplate</code></dt>
<dd><p>Retrieve the OptionsTemplate for EventListenerOptions.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#MicrosoftHtmlObject">MicrosoftHtmlObject</a> : <code>EventTarget</code></dt>
<dd><p>Document attachEvent support for older browsers.</p>
</dd>
<dt><a href="#testAttributeChange">testAttributeChange</a> ⇒ <code>int</code></dt>
<dd></dd>
<dt><a href="#testAttributeChange">testAttributeChange</a> ⇒ <code>int</code></dt>
<dd></dd>
<dt><a href="#DomItemHead">DomItemHead</a> : <code>DomItem</code></dt>
<dd><p>DomItemHead defines the structure for a single element in the Dom</p>
</dd>
<dt><a href="#DomItemBody">DomItemBody</a> : <code>DomItem</code></dt>
<dd><p>DomItemBody defines the structure for a single element in the Dom</p>
</dd>
</dl>

<a name="module_jsonDom"></a>

## jsonDom
All of the JSON DOM system functions for creating JSON components.

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  
<a name="module_domFunctions"></a>

## domFunctions
Core Dom management functions

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [domFunctions](#module_domFunctions)
    * _static_
        * [.addDomItemProperties(item)](#module_domFunctions.addDomItemProperties) ⇒ <code>DomItem</code>
        * [.appendChild(parent, child)](#module_domFunctions.appendChild) ⇒ <code>DomItem</code>
        * [.assignListener(trigger, elem, fn, options)](#module_domFunctions.assignListener) ⇒ <code>listenerFunction</code> \| <code>function</code>
        * [.bindAllListeners(item)](#module_domFunctions.bindAllListeners) ⇒ <code>DomItem</code>
        * [.bindElementListeners(item)](#module_domFunctions.bindElementListeners) ⇒ <code>DomItem</code>
        * [.bindListeners(item)](#module_domFunctions.bindListeners) ⇒ <code>DomItem</code>
        * [.deactivateListeners(item)](#module_domFunctions.deactivateListeners) ⇒ <code>DomItem</code>
        * [.domItemChanges(domItem)](#module_domFunctions.domItemChanges) ⇒ <code>ChangeList</code>
        * [.domItemHasAttribute(domItem, key, attr)](#module_domFunctions.domItemHasAttribute) ⇒ <code>int</code> \| <code>Object.&lt;string, number&gt;</code>
        * [.domItemToJson(item, [options])](#module_domFunctions.domItemToJson) ⇒ <code>string</code>
        * [.elementChanges(domItem)](#module_domFunctions.elementChanges) ⇒ <code>ChangeList</code>
        * [.elementHasAttribute(element, key, attr)](#module_domFunctions.elementHasAttribute) ⇒ <code>int</code> \| <code>Object.&lt;string, number&gt;</code>
        * [.gatherChildItems(item, test)](#module_domFunctions.gatherChildItems) ⇒ <code>Array.&lt;DomItem&gt;</code>
        * [.generateElement(domItem)](#module_domFunctions.generateElement) ⇒ <code>DomItem</code>
        * [.getAssignedStyles(elementStyles)](#module_domFunctions.getAssignedStyles) ⇒ <code>object</code>
        * [.getChildrenByClass()](#module_domFunctions.getChildrenByClass) ⇒ <code>Array.&lt;DomItem&gt;</code>
        * [.getChildrenByName()](#module_domFunctions.getChildrenByName) ⇒ <code>Array.&lt;DomItem&gt;</code>
        * [.getChildrenFromAttribute(attr, value, item)](#module_domFunctions.getChildrenFromAttribute) ⇒ <code>Array.&lt;DomItem&gt;</code>
        * [.getChildTest(attr, value)](#module_domFunctions.getChildTest) ⇒ [<code>testChildItem</code>](#module_domFunctions..testChildItem)
        * [.getParentsByClass()](#module_domFunctions.getParentsByClass) ⇒ <code>Array</code>
        * [.getParentsByName()](#module_domFunctions.getParentsByName) ⇒ <code>Array</code>
        * [.getParentsByTagName()](#module_domFunctions.getParentsByTagName) ⇒ <code>Array</code>
        * [.getParentsFromAttribute(attr, value, item)](#module_domFunctions.getParentsFromAttribute) ⇒ <code>Array</code>
        * [.getTopParentItem(item)](#module_domFunctions.getTopParentItem) ⇒ <code>DomItemRoot</code>
        * [.jsonToDomItem(jsonString)](#module_domFunctions.jsonToDomItem) ⇒ <code>DomItem</code>
        * [.listenerOptions(options)](#module_domFunctions.listenerOptions) ⇒ <code>boolean</code>
        * [.registerListener(listener, [name], [parent])](#module_domFunctions.registerListener) ⇒ <code>Object.&lt;string, listenerFunction&gt;</code>
        * [.registerListeners(listeners, [parent])](#module_domFunctions.registerListeners) ⇒ <code>DomItemRoot</code> \| <code>Object</code>
        * [.removeChild(parent, child)](#module_domFunctions.removeChild) ⇒ <code>Array.&lt;DomItem&gt;</code>
        * [.removeEmptyProperties(item, propertiesToDelete)](#module_domFunctions.removeEmptyProperties) ⇒ <code>DomItem</code>
        * [.renderHtml(item)](#module_domFunctions.renderHtml) ⇒ <code>DomItem</code>
        * [.retrieveListener(listenerName, [parent])](#module_domFunctions.retrieveListener) ⇒ <code>listenerFunction</code> \| <code>function</code> \| <code>Object</code>
        * [.setParentItemReferences(item)](#module_domFunctions.setParentItemReferences) ⇒ <code>DomItem</code>
        * [.updateChildNodes(domItem)](#module_domFunctions.updateChildNodes) ⇒ <code>DomItem</code>
        * [.updateChildren(domItem)](#module_domFunctions.updateChildren) ⇒ <code>DomItem</code>
        * [.updateDomItem(config)](#module_domFunctions.updateDomItem) ⇒ <code>DomItem</code>
        * [.updateDomItems(config)](#module_domFunctions.updateDomItems) ⇒ <code>DomItem</code>
        * [.updateElement(domItem)](#module_domFunctions.updateElement) ⇒ <code>DomItem</code>
        * [.updateElements(config)](#module_domFunctions.updateElements) ⇒ <code>DomItem</code>
    * _inner_
        * [~testChildItem](#module_domFunctions..testChildItem) ⇒ <code>Array.&lt;DomItem&gt;</code>

<a name="module_domFunctions.addDomItemProperties"></a>

### domFunctions.addDomItemProperties(item) ⇒ <code>DomItem</code>
Ensure all basic properties of the DomItem are present.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>Object</code> | The object that will be formatted as a DomItem. |

<a name="module_domFunctions.appendChild"></a>

### domFunctions.appendChild(parent, child) ⇒ <code>DomItem</code>
Append a child to the end of given parent's children list.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| parent | <code>DomItem</code> | The parent that will receive the child. |
| child | <code>DomItem</code> | The new child to attach to the parent. |

<a name="module_domFunctions.assignListener"></a>

### domFunctions.assignListener(trigger, elem, fn, options) ⇒ <code>listenerFunction</code> \| <code>function</code>
Provide compatibility for assigning listeners.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| trigger | <code>string</code> |  | The name of the event which will trigger the listenerFunction on the element. (keyof HTMLElementEventMap) |
| elem | <code>EventTarget</code> \| [<code>MicrosoftHtmlObject</code>](#MicrosoftHtmlObject) |  | An element to append the listener onto |
| fn | <code>EventListenerOrEventListenerObject</code> \| <code>null</code> |  | The function which will be invoked when the event is triggered |
| options | <code>EventListenerOptions</code> \| <code>boolean</code> | <code>false</code> | Additional options to how the event will be fired |

<a name="module_domFunctions.bindAllListeners"></a>

### domFunctions.bindAllListeners(item) ⇒ <code>DomItem</code>
Based on the eventListeners property of the provided item, bind the listeners to the associated element propertyfor each item in the domObjects.DomItem structure.WARNING: This is a recursive function.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>DomItem</code> | The DomItem with an associated HTMLElement to have a listener assigned |

<a name="module_domFunctions.bindElementListeners"></a>

### domFunctions.bindElementListeners(item) ⇒ <code>DomItem</code>
Receive a DomItem with eventListeners and apply the event listeners onto the Dom element.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>DomItem</code> | The DomItem which has eventListeners to apply to its element |

<a name="module_domFunctions.bindListeners"></a>

### domFunctions.bindListeners(item) ⇒ <code>DomItem</code>
Based on the eventListeners property of the provided item, bind thelisteners to the associated element property for the provided domObjects.DomItem.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>DomItem</code> | The DomItem which may have eventListeners to apply to its element |

<a name="module_domFunctions.deactivateListeners"></a>

### domFunctions.deactivateListeners(item) ⇒ <code>DomItem</code>
Set all the listeners for this DOMItem to be inactive.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>DomItem</code> | The DomItem which will have its eventListeners updated. |

<a name="module_domFunctions.domItemChanges"></a>

### domFunctions.domItemChanges(domItem) ⇒ <code>ChangeList</code>
Given a domObjects.DomItem as domItem, this function will return the changes to be appliedto the stored element property.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| domItem | <code>DomItem</code> | The DomItem having changes to be applied to its element |

<a name="module_domFunctions.domItemHasAttribute"></a>

### domFunctions.domItemHasAttribute(domItem, key, attr) ⇒ <code>int</code> \| <code>Object.&lt;string, number&gt;</code>
Check if the provided DomItem has the provided attributes.Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| domItem | <code>DomItem</code> | Receive the DomItem to be assessed |
| key | <code>string</code> | The attribute name to search for |
| attr | <code>string</code> \| <code>Object</code> | The expected value of the attribute to compare against |

<a name="module_domFunctions.domItemToJson"></a>

### domFunctions.domItemToJson(item, [options]) ⇒ <code>string</code>
Convert DOM Item to JSON string.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Default |
| --- | --- | --- |
| item | <code>DomItem</code> |  | 
| [options] | <code>Object</code> | <code>{}</code> | 
| [options.mapLimit] | <code>int</code> | <code>100</code> | 
| [options.relevancyRange] | <code>int</code> | <code>1000</code> | 

<a name="module_domFunctions.elementChanges"></a>

### domFunctions.elementChanges(domItem) ⇒ <code>ChangeList</code>
Given a domObjects.DomItem as config, this function will return the changes from the elementto be applied to the domItem.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| domItem | <code>DomItem</code> | The DomItem having the element which changes to be applied to the config element |

<a name="module_domFunctions.elementHasAttribute"></a>

### domFunctions.elementHasAttribute(element, key, attr) ⇒ <code>int</code> \| <code>Object.&lt;string, number&gt;</code>
Check if the provided Element has the provided attributes.Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> | Receive the element to be assessed |
| key | <code>string</code> | The attribute name to search for |
| attr | <code>string</code> \| <code>Object.&lt;string, string&gt;</code> | The expected value of the attribute to compare against |

<a name="module_domFunctions.gatherChildItems"></a>

### domFunctions.gatherChildItems(item, test) ⇒ <code>Array.&lt;DomItem&gt;</code>
A selector function for retrieving existing child domObjects.DomItems from the given parent item.This function will check all the children starting from and including item, and run the test function on eachchild encountered. The return array contains children returned from the test from all levels.WARNING: This is a recursive function.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>DomItem</code> | The DomItem which may have child items matching the attribute criteria |
| test | [<code>testChildItem</code>](#module_domFunctions..testChildItem) | Assess each child, and return the ones which qualify |

<a name="module_domFunctions.generateElement"></a>

### domFunctions.generateElement(domItem) ⇒ <code>DomItem</code>
Create an HTML element based on the provided attributes and return the element as an Object.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| domItem | <code>DomItem</code> | The DomItem requiring matching HTML element property |

<a name="module_domFunctions.getAssignedStyles"></a>

### domFunctions.getAssignedStyles(elementStyles) ⇒ <code>object</code>
Get all the styles which have been assigned to this element. Assigned styles are indicated as numeric-keyproperties with a value indicating the string-key property which has been assigned. The string-key propertieshave the assigned values.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type |
| --- | --- |
| elementStyles | <code>Object.&lt;style, style&gt;</code> \| <code>CSSProperties</code> | 

<a name="module_domFunctions.getChildrenByClass"></a>

### domFunctions.getChildrenByClass() ⇒ <code>Array.&lt;DomItem&gt;</code>
Helper for getting all domObjects.DomItems starting at parent and having specified className attribute

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  
<a name="module_domFunctions.getChildrenByName"></a>

### domFunctions.getChildrenByName() ⇒ <code>Array.&lt;DomItem&gt;</code>
Helper for getting all domObjects.DomItems starting at parent and having specified name attribute

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  
<a name="module_domFunctions.getChildrenFromAttribute"></a>

### domFunctions.getChildrenFromAttribute(attr, value, item) ⇒ <code>Array.&lt;DomItem&gt;</code>
A selector function for retrieving existing child domObjects.DomItems from the given parent item.This function will check all the children starting from item, and scan the attributesproperty for matches. The returned array contains children matching from all levels.WARNING: This calls a recursive function.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| attr | <code>string</code> | Provide the attribute name to be searched |
| value | <code>\*</code> | The attribute value to be compared |
| item | <code>DomItem</code> | The DomItem which may have child items matching the attribute criteria |

<a name="module_domFunctions.getChildTest"></a>

### domFunctions.getChildTest(attr, value) ⇒ [<code>testChildItem</code>](#module_domFunctions..testChildItem)
Retrieve the [testChildItem](#module_domFunctions..testChildItem) function by providing an attribute and value to check.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| attr | <code>string</code> | Provide the attribute name to be searched |
| value | <code>\*</code> | The attribute value to be compared |

<a name="module_domFunctions.getParentsByClass"></a>

### domFunctions.getParentsByClass() ⇒ <code>Array</code>
Helper for getting all domObjects.DomItems starting at child and having specified className attribute

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  
<a name="module_domFunctions.getParentsByName"></a>

### domFunctions.getParentsByName() ⇒ <code>Array</code>
Helper for getting all domObjects.DomItems starting at child and having specified name attribute

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  
<a name="module_domFunctions.getParentsByTagName"></a>

### domFunctions.getParentsByTagName() ⇒ <code>Array</code>
Helper for getting all domObjects.DomItems starting at child and having specified nodeName

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  
<a name="module_domFunctions.getParentsFromAttribute"></a>

### domFunctions.getParentsFromAttribute(attr, value, item) ⇒ <code>Array</code>
A selector function for retrieving existing child domObjects.DomItems from the given parent item.This function will check all the children starting from item, and scan the attributesproperty for matches. The return array contains children matching from all levels.WARNING: This is a recursive function.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| attr | <code>string</code> | Provide the attribute name to be searched |
| value | <code>\*</code> | The attribute value to be compared |
| item | <code>DomItem</code> | The DomItem which may have parent items matching the attribute criteria |

<a name="module_domFunctions.getTopParentItem"></a>

### domFunctions.getTopParentItem(item) ⇒ <code>DomItemRoot</code>
Get the upper parentItem for the provided child. (usually this is a documentItem reference)WARNING: This is a recursive function.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>DomItem</code> | The DomItem which we want the highest parent item of |

<a name="module_domFunctions.jsonToDomItem"></a>

### domFunctions.jsonToDomItem(jsonString) ⇒ <code>DomItem</code>
Convert DOM Item to JSON string.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type |
| --- | --- |
| jsonString | <code>string</code> | 

<a name="module_domFunctions.listenerOptions"></a>

### domFunctions.listenerOptions(options) ⇒ <code>boolean</code>
Provide compatibility for using the options parameter of addEventListener

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>EventListenerOptions</code> | An object or boolean with the listener options |

<a name="module_domFunctions.registerListener"></a>

### domFunctions.registerListener(listener, [name], [parent]) ⇒ <code>Object.&lt;string, listenerFunction&gt;</code>
Register a single listener function as part of the root domObjects.DomItem.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| listener | <code>listenerFunction</code> \| <code>function</code> | Provide a function which will be called when a Dom event is triggered. |
| [name] | <code>string</code> | The name of the listener to be used. |
| [parent] | <code>DomItemRoot</code> \| <code>Object</code> | The parent DomItem which is DomItemRoot which stores eventListeners property. |

<a name="module_domFunctions.registerListeners"></a>

### domFunctions.registerListeners(listeners, [parent]) ⇒ <code>DomItemRoot</code> \| <code>Object</code>
Register multiple listeners from an array of functions.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| listeners | <code>Array.&lt;(listenerFunction\|function())&gt;</code> | An array of functions to be used as the registered event listeners. |
| [parent] | <code>DomItemRoot</code> \| <code>Object</code> | The parent DomItem which is DomItemRoot which has eventListeners property. |

<a name="module_domFunctions.removeChild"></a>

### domFunctions.removeChild(parent, child) ⇒ <code>Array.&lt;DomItem&gt;</code>
Reverse of appendHtml, remove a DomItem and have the associated element removed.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| parent | <code>DomItem</code> | The parent of the items |
| child | <code>DomItem</code> | The DomItem with HTMLElement to be removed |

<a name="module_domFunctions.removeEmptyProperties"></a>

### domFunctions.removeEmptyProperties(item, propertiesToDelete) ⇒ <code>DomItem</code>
Remove all empty properties to reduce total size of the object.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>DomItem</code> | The DomItem with properties to check for empty. |
| propertiesToDelete | <code>Array</code> | Optional array of additional property names to remove. |

<a name="module_domFunctions.renderHtml"></a>

### domFunctions.renderHtml(item) ⇒ <code>DomItem</code>
This is a shortcut for building the specified HTML elements and appending them to the Domwith associated listeners.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | <code>DomItem</code> \| <code>null</code> | <code></code> | The DomItem that we want to render the element for |

<a name="module_domFunctions.retrieveListener"></a>

### domFunctions.retrieveListener(listenerName, [parent]) ⇒ <code>listenerFunction</code> \| <code>function</code> \| <code>Object</code>
Based on the provided function / listener name, retrieve the associated function from the root domObjects.DomItem

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| listenerName | <code>string</code> | The name of one of the registered listener functions. |
| [parent] | <code>DomItemRoot</code> \| <code>Object</code> | The parent DomItem which is DomItemRoot which stores eventListeners property. |

<a name="module_domFunctions.setParentItemReferences"></a>

### domFunctions.setParentItemReferences(item) ⇒ <code>DomItem</code>
For each child of this item, set the parentItem references.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>DomItem</code> | The DomItem to have parent references applied. |

<a name="module_domFunctions.updateChildNodes"></a>

### domFunctions.updateChildNodes(domItem) ⇒ <code>DomItem</code>
Update all the childNodes for this domItem element to mach domItem children.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type |
| --- | --- |
| domItem | <code>DomItem</code> | 

<a name="module_domFunctions.updateChildren"></a>

### domFunctions.updateChildren(domItem) ⇒ <code>DomItem</code>
Update all the children for this domItem to match the domItem element childNodes.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type |
| --- | --- |
| domItem | <code>DomItem</code> | 

<a name="module_domFunctions.updateDomItem"></a>

### domFunctions.updateDomItem(config) ⇒ <code>DomItem</code>
Update a single objects.DomItem element with the provided attributes / style / elementProperties

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>DomItem</code> | The DomItem having config changes to be applied to its element |

<a name="module_domFunctions.updateDomItems"></a>

### domFunctions.updateDomItems(config) ⇒ <code>DomItem</code>
Generate HTML element data for each object in the matrixWARNING: This is a recursive function.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>DomItem</code> | The DomItem having child DomItems with config changes to be applied |

<a name="module_domFunctions.updateElement"></a>

### domFunctions.updateElement(domItem) ⇒ <code>DomItem</code>
Update a single objects.DomItem element with the provided attributes / style / elementProperties

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| domItem | <code>DomItem</code> | The DomItem having domItem changes to be applied to its element |

<a name="module_domFunctions.updateElements"></a>

### domFunctions.updateElements(config) ⇒ <code>DomItem</code>
Generate HTML element data for each object in the matrixWARNING: This is a recursive function.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>DomItem</code> | The DomItem having child DomItems with config changes to be applied |

<a name="module_domFunctions..testChildItem"></a>

### domFunctions~testChildItem ⇒ <code>Array.&lt;DomItem&gt;</code>
To be used with gatherChildItems which will start at item and recurse over all child items, this testwill then choose which child items will be returned as the result of the test.

**Kind**: inner typedef of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>DomItem</code> \| <code>Object</code> | The DomItem is the child being tested |
| gatheredResults | <code>Array.&lt;DomItem&gt;</code> | All of the child items gathered based on the test |

<a name="module_domObjects"></a>

## domObjects
Core objects for representing the DOM in JSON.

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [domObjects](#module_domObjects)
    * [.documentItem](#module_domObjects.documentItem) : <code>DomItemRoot</code>
    * [.createChangeList(changeList)](#module_domObjects.createChangeList) ⇒ <code>ChangeList</code>
    * [.createDomItem([item])](#module_domObjects.createDomItem) ⇒ <code>DomItem</code>
    * [.createEventResponder(eventHandler, [abort])](#module_domObjects.createEventResponder) ⇒ <code>EventResponder</code>
    * [.documentDomItem(listeners, [rootItem])](#module_domObjects.documentDomItem) ⇒ <code>DomItemRoot</code> \| <code>DomItem</code>
    * [.initChildren()](#module_domObjects.initChildren) ⇒ <code>Array.&lt;(DomItemHead\|DomItemBody)&gt;</code>
    * [.initRoot(children, listeners)](#module_domObjects.initRoot) ⇒ <code>DomItemRoot</code> \| <code>DomItem</code>
    * [.eventHandler](#module_domObjects.eventHandler) : <code>function</code>
    * [.appendChanges](#module_domObjects.appendChanges) : <code>function</code>
    * [.ChangeList](#module_domObjects.ChangeList) : <code>Object.&lt;string, DotNotatedObject&gt;</code>
    * [.listenerFunction](#module_domObjects.listenerFunction) : <code>function</code>
    * [.UseCapture](#module_domObjects.UseCapture) : <code>boolean</code>
    * [.OptionsObject](#module_domObjects.OptionsObject) : <code>Object</code>
    * [.EventListenerOptions](#module_domObjects.EventListenerOptions) : <code>OptionsObject</code> \| <code>UseCapture</code>
    * [.EventListener](#module_domObjects.EventListener) : <code>Object</code>
    * [.EventListeners](#module_domObjects.EventListeners) : <code>Array.&lt;EventListener&gt;</code>
    * [.EventName](#module_domObjects.EventName) : <code>string</code>
    * [.DomItem](#module_domObjects.DomItem) : <code>Object</code>
    * [.EventProxy](#module_domObjects.EventProxy) : <code>Event</code>
    * [.EventResponder](#module_domObjects.EventResponder) : <code>Object</code>
    * [.DomItemRoot](#module_domObjects.DomItemRoot) : <code>DomItem</code>
    * [.Option](#module_domObjects.Option) : <code>boolean</code>

<a name="module_domObjects.documentItem"></a>

### domObjects.documentItem : <code>DomItemRoot</code>
Create reference for storing document changes

**Kind**: static property of [<code>domObjects</code>](#module_domObjects)  
<a name="module_domObjects.createChangeList"></a>

### domObjects.createChangeList(changeList) ⇒ <code>ChangeList</code>
Create the change list template.

**Kind**: static method of [<code>domObjects</code>](#module_domObjects)  

| Param | Type | Default |
| --- | --- | --- |
| changeList | <code>ChangeList</code> |  | 
| [changeList.removed] | <code>DotNotatedObject</code> | <code>{}</code> | 
| [changeList.added] | <code>DotNotatedObject</code> | <code>{}</code> | 

<a name="module_domObjects.createDomItem"></a>

### domObjects.createDomItem([item]) ⇒ <code>DomItem</code>
This is the basic Object for representing the Dom from a virtual perspective. All incoming attributes will be mergedto the specified format.

**Kind**: static method of [<code>domObjects</code>](#module_domObjects)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [item] | <code>Object</code> | <code>{}</code> | DomItem-like object to be formatted as DomItem |

<a name="module_domObjects.createEventResponder"></a>

### domObjects.createEventResponder(eventHandler, [abort]) ⇒ <code>EventResponder</code>
Store the handler function and associated abort controller instance if available to be used when events are triggered.

**Kind**: static method of [<code>domObjects</code>](#module_domObjects)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| eventHandler | <code>eventHandler</code> |  | The eventHandler wrapped function to be called for the event. |
| [abort] | <code>AbortController</code> \| <code>boolean</code> \| <code>null</code> | <code></code> | Assign an AbortSignal provided or create one (if true), otherwise null. |

<a name="module_domObjects.documentDomItem"></a>

### domObjects.documentDomItem(listeners, [rootItem]) ⇒ <code>DomItemRoot</code> \| <code>DomItem</code>
Return a DomItem reference to the document. The rootItem argument is a system variable and not necessary toimplement.

**Kind**: static method of [<code>domObjects</code>](#module_domObjects)  

| Param | Type | Description |
| --- | --- | --- |
| listeners | <code>Object.&lt;string, listenerFunction&gt;</code> | An object of all event listeners to be registered in the Dom |
| [rootItem] | <code>DomItemRoot</code> \| <code>DomItem</code> | This is a reference to DomItemRoot which will be defaulted with [initRoot](initRoot) |

<a name="module_domObjects.initChildren"></a>

### domObjects.initChildren() ⇒ <code>Array.&lt;(DomItemHead\|DomItemBody)&gt;</code>
Initiate the children of Root / DocumentItem. This is a helper for [documentDomItem](documentDomItem).

**Kind**: static method of [<code>domObjects</code>](#module_domObjects)  
<a name="module_domObjects.initRoot"></a>

### domObjects.initRoot(children, listeners) ⇒ <code>DomItemRoot</code> \| <code>DomItem</code>
Initiate the Root for DocumentItem. This is primary a helper for [documentDomItem](documentDomItem).

**Kind**: static method of [<code>domObjects</code>](#module_domObjects)  

| Param | Type | Description |
| --- | --- | --- |
| children | <code>Array.&lt;(DomItemHead\|DomItemBody)&gt;</code> | Provide an array of Head and Body (usually via [initChildren](initChildren)) |
| listeners | <code>Object.&lt;string, listenerFunction&gt;</code> | An object of all event listeners to be registered in the Dom |

<a name="module_domObjects.eventHandler"></a>

### domObjects.eventHandler : <code>function</code>
Based on available flags, either proceed to process the listener or skip.

**Kind**: static typedef of [<code>domObjects</code>](#module_domObjects)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>EventProxy</code> | The event object passed to the listener |

<a name="module_domObjects.appendChanges"></a>

### domObjects.appendChanges : <code>function</code>
**Kind**: static typedef of [<code>domObjects</code>](#module_domObjects)  

| Param | Type | Description |
| --- | --- | --- |
| changeType | <code>string</code> | Either 'removed' or 'added' |
| changes | <code>DotNotatedObject</code> | The changes to append to existing type |

<a name="module_domObjects.ChangeList"></a>

### domObjects.ChangeList : <code>Object.&lt;string, DotNotatedObject&gt;</code>
Represent changes / a diff of an object, including removed, added, and changed properties.

**Kind**: static typedef of [<code>domObjects</code>](#module_domObjects)  
**Properties**

| Name | Type |
| --- | --- |
| removed | <code>DotNotatedObject</code> | 
| added | <code>DotNotatedObject</code> | 
| appendChanges | <code>appendChanges</code> | 

<a name="module_domObjects.listenerFunction"></a>

### domObjects.listenerFunction : <code>function</code>
This is the standard definition of a listenerFunction to be used

**Kind**: static typedef of [<code>domObjects</code>](#module_domObjects)  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>Event</code> \| <code>EventProxy</code> | The event object passed to the listener |
| target | <code>DomItem</code> | The element which triggered the event |
| [...args] | <code>\*</code> | Optional args as required by the listener |

<a name="module_domObjects.UseCapture"></a>

### domObjects.UseCapture : <code>boolean</code>
A Boolean indicating whether events of this type will be dispatched to the registered listerFunction before beingdispatched to any EventTarget beneath it in the Dom tree.

**Kind**: static typedef of [<code>domObjects</code>](#module_domObjects)  
<a name="module_domObjects.OptionsObject"></a>

### domObjects.OptionsObject : <code>Object</code>
OptionsObject defines the structure for the options to be passed to addEventListener

**Kind**: static typedef of [<code>domObjects</code>](#module_domObjects)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| capture | <code>boolean</code> | Indicate that events of this type will be dispatched to the registered listenerFunction before being dispatched to any EventTarget beneath it in the Dom tree. |
| once | <code>boolean</code> | Indicate that the listenerFunction should be invoked at most once after being added. If 'true', the listenerFunction would be automatically removed when invoked. |
| passive | <code>boolean</code> | Indicate that, if 'true', indicates that the listenerFunction will never call preventDefault(). If preventDefault() is called, the user agent will do nothing with it. |
| signal | <code>boolean</code> | The listener will be removed when the given AbortSignal object's abort() method is called. If not specified, no AbortSignal is associated with the listener. |

<a name="module_domObjects.EventListenerOptions"></a>

### domObjects.EventListenerOptions : <code>OptionsObject</code> \| <code>UseCapture</code>
EventListenerOptions is either a boolean as UseCapture or an Object as OptionsObject

**Kind**: static typedef of [<code>domObjects</code>](#module_domObjects)  
<a name="module_domObjects.EventListener"></a>

### domObjects.EventListener : <code>Object</code>
An EventListener Object to be appended to the element within the DomItem

**Kind**: static typedef of [<code>domObjects</code>](#module_domObjects)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| listenerFunc | <code>string</code> | A string function name matching an existing [listenerFunction](listenerFunction). |
| listenerArgs | <code>Object</code> | Additional args required for the listener function |
| listenerOptions | <code>EventListenerOptions</code> | Provides support for options parameter of addEventListener, or false for default |
| listenerActive | <code>boolean</code> | Indicate whether this listener has been applied to the element. |

<a name="module_domObjects.EventListeners"></a>

### domObjects.EventListeners : <code>Array.&lt;EventListener&gt;</code>
One or more listeners assigned to the same event.

**Kind**: static typedef of [<code>domObjects</code>](#module_domObjects)  
<a name="module_domObjects.EventName"></a>

### domObjects.EventName : <code>string</code>
The name of the trigger used to fire the event.

**Kind**: static typedef of [<code>domObjects</code>](#module_domObjects)  
<a name="module_domObjects.DomItem"></a>

### domObjects.DomItem : <code>Object</code>
DomItem defines the structure for a single element in the Dom

**Kind**: static typedef of [<code>domObjects</code>](#module_domObjects)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| activeListeners | <code>Object.&lt;EventName, Object.&lt;number, eventHandler&gt;&gt;</code> | Generated property storing assigned listeners. |
| attributes | <code>Object.&lt;string, (string\|Object)&gt;</code> | All potential HTML element attributes can be defined here (including the defaulted style object) |
| children | <code>Array.&lt;DomItem&gt;</code> | A reference to an array of child objects |
| element | <code>Object</code> \| <code>HTMLElement</code> \| <code>null</code> | A reference to an existing HTML element will be stored here (default null) |
| eventListeners | <code>Object.&lt;EventName, EventListeners&gt;</code> | An object holding all events to be registered for the associated element |
| jsonExclusions | <code>Array</code> | array of properties to exclude |
| nodeName | <code>string</code> | This is any document node name |
| nodeValue | <code>string</code> | Is a string of text, null for HTML elements |
| parentItem | <code>DomItem</code> \| <code>Object</code> \| <code>null</code> | A reference to the parent of this object |
| appendChild | <code>function</code> | Attach a child to this DOM Item |
| removeChild | <code>function</code> | Attach a child to this DOM Item |

<a name="module_domObjects.EventProxy"></a>

### domObjects.EventProxy : <code>Event</code>
A wrapped Event which provides additional utilities.

**Kind**: static typedef of [<code>domObjects</code>](#module_domObjects)  
**Properties**

| Name | Type |
| --- | --- |
| immediatePropagationStopped | <code>boolean</code> | 

<a name="module_domObjects.EventResponder"></a>

### domObjects.EventResponder : <code>Object</code>
Track an event handler and optional abort signal.

**Kind**: static typedef of [<code>domObjects</code>](#module_domObjects)  
**Properties**

| Name | Type |
| --- | --- |
| handler | <code>eventHandler</code> | 
| abort | <code>AbortController</code> \| <code>null</code> | 

<a name="module_domObjects.DomItemRoot"></a>

### domObjects.DomItemRoot : <code>DomItem</code>
DomItemRoot defines the structure for a single element in the Dom

**Kind**: static typedef of [<code>domObjects</code>](#module_domObjects)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [nodeName] | <code>string</code> | <code>&quot;&#x27;#document&#x27;&quot;</code> | This is set to the string html referring to the HTML element of the same name |
| [nodeValue] | <code>null</code> |  | Must be null |
| attributes | <code>Object</code> |  | Empty object as attributes placeholder |
| element | <code>HTMLDocument</code> |  | A reference to the entire Document |
| eventListeners | <code>Object.&lt;string, listenerFunction&gt;</code> |  | all registered listeners stored as listener name and function pairs |
| children | <code>Array.&lt;(DomItemHead\|DomItemBody)&gt;</code> |  | Two references: for head and body |
| head | [<code>DomItemHead</code>](#DomItemHead) |  | A specific reference to head item |
| body | [<code>DomItemBody</code>](#DomItemBody) |  | A specific reference to body item |

<a name="module_domObjects.Option"></a>

### domObjects.Option : <code>boolean</code>
A boolean value used to alter functionality.

**Kind**: static typedef of [<code>domObjects</code>](#module_domObjects)  
<a name="module_optionFlags"></a>

## optionFlags
Be able to use Flags (Options) in a well-formed way.

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [optionFlags](#module_optionFlags)
    * _static_
        * [.numberToOptions(optionsTemplate, binaryOptions)](#module_optionFlags.numberToOptions) ⇒ <code>EventListenerOptions</code>
        * [.optionsToNumber(optionsTemplate, listenerOptions)](#module_optionFlags.optionsToNumber) ⇒ <code>int</code>
    * _inner_
        * [~Options](#module_optionFlags..Options) : <code>Object.&lt;string, Option&gt;</code> \| <code>Option</code>
        * [~Flag](#module_optionFlags..Flag) : <code>int</code>
        * [~OptionsTemplate](#module_optionFlags..OptionsTemplate) : <code>Object.&lt;string, Flag&gt;</code>

<a name="module_optionFlags.numberToOptions"></a>

### optionFlags.numberToOptions(optionsTemplate, binaryOptions) ⇒ <code>EventListenerOptions</code>
Take an integer representation of the listener options and convert them to the listener options object.

**Kind**: static method of [<code>optionFlags</code>](#module_optionFlags)  

| Param | Type |
| --- | --- |
| optionsTemplate | <code>OptionsTemplate</code> | 
| binaryOptions | <code>int</code> | 

<a name="module_optionFlags.optionsToNumber"></a>

### optionFlags.optionsToNumber(optionsTemplate, listenerOptions) ⇒ <code>int</code>
Take the given options and convert them (using binary) to an integer. Given listener options, each one is assigned abitwise position. The resulting binary number represents any possible combination of the available flags set.

**Kind**: static method of [<code>optionFlags</code>](#module_optionFlags)  

| Param | Type |
| --- | --- |
| optionsTemplate | <code>OptionsTemplate</code> | 
| listenerOptions | <code>Options</code> \| <code>Option</code> | 

<a name="module_optionFlags..Options"></a>

### optionFlags~Options : <code>Object.&lt;string, Option&gt;</code> \| <code>Option</code>
A set of named options within an object, or simply a singular Option.

**Kind**: inner typedef of [<code>optionFlags</code>](#module_optionFlags)  
<a name="module_optionFlags..Flag"></a>

### optionFlags~Flag : <code>int</code>
A numeric value used as position in a binary number having any numeric value 2^n.

**Kind**: inner typedef of [<code>optionFlags</code>](#module_optionFlags)  
<a name="module_optionFlags..OptionsTemplate"></a>

### optionFlags~OptionsTemplate : <code>Object.&lt;string, Flag&gt;</code>
Object containing available Option names and the Flag value associated with each.

**Kind**: inner typedef of [<code>optionFlags</code>](#module_optionFlags)  
<a name="activateListener"></a>

## activateListener(item, eventName, eventListener) ⇒ <code>DomItem</code>
Activate listener by pushing it to activeListeners.

**Kind**: global function  

| Param | Type |
| --- | --- |
| item | <code>DomItem</code> | 
| eventName | <code>EventName</code> | 
| eventListener | <code>EventListener</code> | 

<a name="applyActiveListeners"></a>

## applyActiveListeners(item, eventName) ⇒ <code>DomItem</code>
Apply each active event listener for event type to the DOM Item's element.

**Kind**: global function  

| Param | Type |
| --- | --- |
| item | <code>DomItem</code> | 
| eventName | <code>EventName</code> | 

<a name="checkAttribute"></a>

## checkAttribute(element) ⇒ [<code>testAttributeChange</code>](#testAttributeChange)
Given some config, provide a function to testing attribute and key existence in that config.

**Kind**: global function  

| Param | Type |
| --- | --- |
| element | <code>Node</code> \| <code>HTMLElement</code> | 

<a name="kabobCaseAttributes"></a>

## kabobCaseAttributes(attributesToSet) ⇒ <code>Object.&lt;string, \*&gt;</code>
Updates all the keys to be kabob-case

**Kind**: global function  

| Param | Type |
| --- | --- |
| attributesToSet | <code>Object.&lt;string, \*&gt;</code> | 

<a name="checkStyles"></a>

## checkStyles(domItem, attr) ⇒ <code>int</code> \| <code>Object.&lt;string, number&gt;</code>
For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute

**Kind**: global function  

| Param | Type |
| --- | --- |
| domItem | <code>DomItem</code> | 
| attr | <code>Object.&lt;string, string&gt;</code> | 

<a name="checkClasses"></a>

## checkClasses(domItem, attr) ⇒ <code>int</code> \| <code>Object.&lt;string, number&gt;</code>
For attributes which are objects or multipart strings -1 = remove attribute, 0 = no change, 1 = add attribute

**Kind**: global function  

| Param | Type |
| --- | --- |
| domItem | <code>DomItem</code> | 
| attr | <code>string</code> | 

<a name="checkAttribute"></a>

## checkAttribute(domItem) ⇒ [<code>testAttributeChange</code>](#testAttributeChange)
Given some config, provide a function to testing attribute and key existence in that config.

**Kind**: global function  

| Param | Type |
| --- | --- |
| domItem | <code>DomItem</code> | 

<a name="camelCaseAttributes"></a>

## camelCaseAttributes(domItem) ⇒ <code>Object.&lt;string, \*&gt;</code>
Updates all the keys to be camelCase

**Kind**: global function  

| Param | Type |
| --- | --- |
| domItem | <code>DomItem</code> | 

<a name="checkStyles"></a>

## checkStyles(element, attr) ⇒ <code>int</code> \| <code>Object.&lt;string, number&gt;</code>
For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute

**Kind**: global function  

| Param | Type |
| --- | --- |
| element | <code>HTMLElement</code> | 
| attr | <code>string</code> \| <code>Object.&lt;string, string&gt;</code> | 

<a name="checkClasses"></a>

## checkClasses(element, attr) ⇒ <code>int</code> \| <code>Object.&lt;string, number&gt;</code>
For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute

**Kind**: global function  

| Param | Type |
| --- | --- |
| element | <code>HTMLElement</code> | 
| attr | <code>string</code> | 

<a name="makeElementType"></a>

## makeElementType(nodeName, data) ⇒ <code>Text</code> \| <code>Comment</code> \| <code>HTMLElement</code>
Create a new DOM Node based on name and data.

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| nodeName | <code>string</code> |  | 
| data | <code>string</code> \| <code>null</code> | <code>null</code> | 

<a name="makeEventHandler"></a>

## makeEventHandler(listener, item, [...args]) ⇒ <code>eventHandler</code>
Prepare a listener to be used before assigning to an element.

**Kind**: global function  

| Param | Type |
| --- | --- |
| listener | <code>listenerFunction</code> | 
| item | <code>DomItem</code> | 
| [...args] | <code>\*</code> | 

<a name="isEmpty"></a>

## isEmpty(propertyValue) ⇒ <code>boolean</code>
Check if the value is an empty object / array, or if it is null or undefined.

**Kind**: global function  

| Param | Type |
| --- | --- |
| propertyValue | <code>\*</code> | 

<a name="appendChangesTo"></a>

## appendChangesTo(changeList) ⇒ <code>appendChanges</code>
Initialize the appendChanges method with the changeList, return the appendChanges method.

**Kind**: global function  

| Param | Type |
| --- | --- |
| changeList | <code>ChangeList</code> | 

<a name="createEventProxy"></a>

## createEventProxy(event) ⇒ <code>EventProxy</code>
Return a modified version of the event.

**Kind**: global function  

| Param | Type |
| --- | --- |
| event | <code>Event</code> | 

<a name="getListenerOptions"></a>

## getListenerOptions() ⇒ <code>OptionsTemplate</code>
Retrieve the OptionsTemplate for EventListenerOptions.

**Kind**: global function  
<a name="MicrosoftHtmlObject"></a>

## MicrosoftHtmlObject : <code>EventTarget</code>
Document attachEvent support for older browsers.

**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| attachEvent | <code>function</code> | 

<a name="testAttributeChange"></a>

## testAttributeChange ⇒ <code>int</code>
**Kind**: global typedef  
**Returns**: <code>int</code> - - -1: removed, 0: unchanged, 1: added.  

| Param | Type | Description |
| --- | --- | --- |
| attr | <code>\*</code> | The current property being processed in the object. |
| key | <code>string</code> | The property name of the current property being processed in the object. |

<a name="testAttributeChange"></a>

## testAttributeChange ⇒ <code>int</code>
**Kind**: global typedef  
**Returns**: <code>int</code> - - -1: removed, 0: unchanged, 1: added.  

| Param | Type | Description |
| --- | --- | --- |
| attr | <code>\*</code> | The current property being processed in the object. |
| key | <code>string</code> | The property name of the current property being processed in the object. |

<a name="DomItemHead"></a>

## DomItemHead : <code>DomItem</code>
DomItemHead defines the structure for a single element in the Dom

**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [nodeName] | <code>string</code> | <code>&quot;head&quot;</code> | This is set to the string head referring to the HTML element of the same name |
| attributes | <code>Object.&lt;string, (string\|Object)&gt;</code> |  | All potential HTML element attributes can be defined here |
| element | <code>HTMLHeadElement</code> |  | A reference to the HTML head element |
| children | <code>Array.&lt;DomItem&gt;</code> |  | A reference to an array of child objects |

<a name="DomItemBody"></a>

## DomItemBody : <code>DomItem</code>
DomItemBody defines the structure for a single element in the Dom

**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [nodeName] | <code>string</code> | <code>&quot;body&quot;</code> | This is set to the string body referring to the HTML element of the same name |
| attributes | <code>Object.&lt;string, (string\|Object)&gt;</code> |  | All potential HTML element attributes can be defined here |
| element | <code>HTMLBodyElement</code> |  | A reference to the HTML body element |
| children | <code>Array.&lt;DomItem&gt;</code> |  | A reference to an array of child objects |

