# JSON-DOM

State management with JSON
## Modules

<dl>
<dt><a href="#module_jsonDom">jsonDom</a></dt>
<dd><p>All of the JSON DOM system functions for creating JSON components.</p>
</dd>
<dt><a href="#module_domGeneral">domGeneral</a></dt>
<dd><p>Core Dom management</p>
</dd>
<dt><a href="#module_domEvents">domEvents</a></dt>
<dd><p>Setting up and handling events</p>
</dd>
<dt><a href="#module_optionFlags">optionFlags</a></dt>
<dd><p>Be able to use Flags (Options) in a well-formed way.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#appendChangesTo">appendChangesTo(changeList)</a> ⇒ <code>appendChanges</code></dt>
<dd><p>Initialize the appendChanges method with the changeList, return the appendChanges method.</p>
</dd>
<dt><a href="#isEmpty">isEmpty(propertyValue)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if the value is an empty object / array, or if it is null or undefined.</p>
</dd>
</dl>

## Typedefs

<dl>
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
<a name="module_domGeneral"></a>

## domGeneral
Core Dom management

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [domGeneral](#module_domGeneral)
    * _static_
        * [.documentItem](#module_domGeneral.documentItem) : <code>DomItemRoot</code>
        * [.initRoot(children, listeners)](#module_domGeneral.initRoot) ⇒ <code>DomItemRoot</code> \| <code>DomItem</code>
        * [.initChildren()](#module_domGeneral.initChildren) ⇒ <code>Array.&lt;(DomItemHead\|DomItemBody)&gt;</code>
        * [.documentDomItem(listeners, [rootItem])](#module_domGeneral.documentDomItem) ⇒ <code>DomItemRoot</code> \| <code>DomItem</code>
        * [.createDomItem([item])](#module_domGeneral.createDomItem) ⇒ <code>DomItem</code>
        * [.createChangeList(changeList)](#module_domGeneral.createChangeList) ⇒ <code>ChangeList</code>
        * [.updateElements(config)](#module_domGeneral.updateElements) ⇒ <code>DomItem</code>
        * [.updateElement(domItem)](#module_domGeneral.updateElement) ⇒ <code>DomItem</code>
        * [.updateDomItems(config)](#module_domGeneral.updateDomItems) ⇒ <code>DomItem</code>
        * [.updateDomItem(config)](#module_domGeneral.updateDomItem) ⇒ <code>DomItem</code>
        * [.updateChildren(domItem)](#module_domGeneral.updateChildren) ⇒ <code>DomItem</code>
        * [.updateChildNodes(domItem)](#module_domGeneral.updateChildNodes) ⇒ <code>DomItem</code>
        * [.setParentItemReferences(item)](#module_domGeneral.setParentItemReferences) ⇒ <code>DomItem</code>
        * [.renderHtml(item)](#module_domGeneral.renderHtml) ⇒ <code>DomItem</code>
        * [.removeEmptyProperties(item, propertiesToDelete)](#module_domGeneral.removeEmptyProperties) ⇒ <code>DomItem</code>
        * [.removeChild(parent, child)](#module_domGeneral.removeChild) ⇒ <code>Array.&lt;DomItem&gt;</code>
        * [.jsonToDomItem(jsonString)](#module_domGeneral.jsonToDomItem) ⇒ <code>DomItem</code>
        * [.getTopParentItem(item)](#module_domGeneral.getTopParentItem) ⇒ <code>DomItemRoot</code>
        * [.getParentsFromAttribute(attr, value, item)](#module_domGeneral.getParentsFromAttribute) ⇒ <code>Array</code>
        * [.getParentsByTagName(nodeName, item)](#module_domGeneral.getParentsByTagName) ⇒ <code>Array</code>
        * [.getParentsByName(name, item)](#module_domGeneral.getParentsByName) ⇒ <code>Array</code>
        * [.getParentsByClass(className, item)](#module_domGeneral.getParentsByClass) ⇒ <code>Array</code>
        * [.getChildrenFromAttribute(attr, value, item)](#module_domGeneral.getChildrenFromAttribute) ⇒ <code>Array.&lt;DomItem&gt;</code>
        * [.getChildrenByName(name, item)](#module_domGeneral.getChildrenByName) ⇒ <code>Array.&lt;DomItem&gt;</code>
        * [.getChildrenByClass(className, item)](#module_domGeneral.getChildrenByClass) ⇒ <code>Array.&lt;DomItem&gt;</code>
        * [.getChildTest(attr, value)](#module_domGeneral.getChildTest) ⇒ [<code>testChildItem</code>](#module_domGeneral..testChildItem)
        * [.getAssignedStyles(elementStyles)](#module_domGeneral.getAssignedStyles) ⇒ <code>object</code>
        * [.makeElementType(nodeName, data)](#module_domGeneral.makeElementType) ⇒ <code>Text</code> \| <code>Comment</code> \| <code>HTMLElement</code>
        * [.generateElement(domItem)](#module_domGeneral.generateElement) ⇒ <code>DomItem</code>
        * [.gatherChildItems(item, test)](#module_domGeneral.gatherChildItems) ⇒ <code>Array.&lt;DomItem&gt;</code>
        * [.checkStyles(element, attr)](#module_domGeneral.checkStyles) ⇒ <code>int</code> \| <code>Object.&lt;string, number&gt;</code>
        * [.checkClasses(element, attr)](#module_domGeneral.checkClasses) ⇒ <code>int</code> \| <code>Object.&lt;string, number&gt;</code>
        * [.elementHasAttribute(element, key, attr)](#module_domGeneral.elementHasAttribute) ⇒ <code>int</code> \| <code>Object.&lt;string, number&gt;</code>
        * [.checkAttribute(domItem)](#module_domGeneral.checkAttribute) ⇒ <code>testAttributeChange</code>
        * [.camelCaseAttributes(domItem)](#module_domGeneral.camelCaseAttributes) ⇒ <code>Object.&lt;string, \*&gt;</code>
        * [.elementChanges(domItem)](#module_domGeneral.elementChanges) ⇒ <code>ChangeList</code>
        * [.domItemToJson(item, [options])](#module_domGeneral.domItemToJson) ⇒ <code>string</code>
        * [.checkStyles(domItem, attr)](#module_domGeneral.checkStyles) ⇒ <code>int</code> \| <code>Object.&lt;string, number&gt;</code>
        * [.checkClasses(domItem, attr)](#module_domGeneral.checkClasses) ⇒ <code>int</code> \| <code>Object.&lt;string, number&gt;</code>
        * [.domItemHasAttribute(domItem, key, attr)](#module_domGeneral.domItemHasAttribute) ⇒ <code>int</code> \| <code>Object.&lt;string, number&gt;</code>
        * [.checkAttribute(element)](#module_domGeneral.checkAttribute) ⇒ <code>testAttributeChange</code>
        * [.kabobCaseAttributes(attributesToSet)](#module_domGeneral.kabobCaseAttributes) ⇒ <code>Object.&lt;string, \*&gt;</code>
        * [.domItemChanges(domItem)](#module_domGeneral.domItemChanges) ⇒ <code>ChangeList</code>
        * [.appendChild(parent, child)](#module_domGeneral.appendChild) ⇒ <code>DomItem</code>
        * [.addDomItemProperties(item)](#module_domGeneral.addDomItemProperties) ⇒ <code>DomItem</code>
        * [.DomItemRoot](#module_domGeneral.DomItemRoot) : <code>DomItem</code>
        * [.DomItem](#module_domGeneral.DomItem) : <code>Object</code>
        * [.appendChanges](#module_domGeneral.appendChanges) : <code>function</code>
        * [.ChangeList](#module_domGeneral.ChangeList) : <code>Object.&lt;string, DotNotatedObject&gt;</code>
        * [.testAttributeChange](#module_domGeneral.testAttributeChange) ⇒ <code>int</code>
        * [.testAttributeChange](#module_domGeneral.testAttributeChange) ⇒ <code>int</code>
    * _inner_
        * [~testChildItem](#module_domGeneral..testChildItem) ⇒ <code>Array.&lt;DomItem&gt;</code>

<a name="module_domGeneral.documentItem"></a>

### domGeneral.documentItem : <code>DomItemRoot</code>
Create reference for storing document changes

**Kind**: static property of [<code>domGeneral</code>](#module_domGeneral)  
<a name="module_domGeneral.initRoot"></a>

### domGeneral.initRoot(children, listeners) ⇒ <code>DomItemRoot</code> \| <code>DomItem</code>
Initiate the Root for DocumentItem. This is primary a helper for [documentDomItem](documentDomItem).

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Description |
| --- | --- | --- |
| children | <code>Array.&lt;(DomItemHead\|DomItemBody)&gt;</code> | Provide an array of Head and Body (usually via [initChildren](initChildren)) |
| listeners | <code>Object.&lt;string, listenerFunction&gt;</code> | An object of all event listeners to be registered in the Dom |

<a name="module_domGeneral.initChildren"></a>

### domGeneral.initChildren() ⇒ <code>Array.&lt;(DomItemHead\|DomItemBody)&gt;</code>
Initiate the children of Root / DocumentItem. This is a helper for [documentDomItem](documentDomItem).

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  
<a name="module_domGeneral.documentDomItem"></a>

### domGeneral.documentDomItem(listeners, [rootItem]) ⇒ <code>DomItemRoot</code> \| <code>DomItem</code>
Return a DomItem reference to the document. The rootItem argument is a system variable and not necessary toimplement.

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Description |
| --- | --- | --- |
| listeners | <code>Object.&lt;string, listenerFunction&gt;</code> | An object of all event listeners to be registered in the Dom |
| [rootItem] | <code>DomItemRoot</code> \| <code>DomItem</code> | This is a reference to DomItemRoot which will be defaulted with [initRoot](initRoot) |

<a name="module_domGeneral.createDomItem"></a>

### domGeneral.createDomItem([item]) ⇒ <code>DomItem</code>
This is the basic Object for representing the Dom from a virtual perspective. All incoming attributes will be mergedto the specified format.

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [item] | <code>Object</code> | <code>{}</code> | DomItem-like object to be formatted as DomItem |

<a name="module_domGeneral.createChangeList"></a>

### domGeneral.createChangeList(changeList) ⇒ <code>ChangeList</code>
Create the change list template.

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Default |
| --- | --- | --- |
| changeList | <code>ChangeList</code> |  | 
| [changeList.removed] | <code>DotNotatedObject</code> | <code>{}</code> | 
| [changeList.added] | <code>DotNotatedObject</code> | <code>{}</code> | 

<a name="module_domGeneral.updateElements"></a>

### domGeneral.updateElements(config) ⇒ <code>DomItem</code>
Generate HTML element data for each object in the matrixWARNING: This is a recursive function.

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>DomItem</code> | The DomItem having child DomItems with config changes to be applied |

<a name="module_domGeneral.updateElement"></a>

### domGeneral.updateElement(domItem) ⇒ <code>DomItem</code>
Update a single objects.DomItem element with the provided attributes / style / elementProperties

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Description |
| --- | --- | --- |
| domItem | <code>DomItem</code> | The DomItem having domItem changes to be applied to its element |

<a name="module_domGeneral.updateDomItems"></a>

### domGeneral.updateDomItems(config) ⇒ <code>DomItem</code>
Generate HTML element data for each object in the matrixWARNING: This is a recursive function.

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>DomItem</code> | The DomItem having child DomItems with config changes to be applied |

<a name="module_domGeneral.updateDomItem"></a>

### domGeneral.updateDomItem(config) ⇒ <code>DomItem</code>
Update a single objects.DomItem element with the provided attributes / style / elementProperties

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>DomItem</code> | The DomItem having config changes to be applied to its element |

<a name="module_domGeneral.updateChildren"></a>

### domGeneral.updateChildren(domItem) ⇒ <code>DomItem</code>
Update all the children for this domItem to match the domItem element childNodes.

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type |
| --- | --- |
| domItem | <code>DomItem</code> | 

<a name="module_domGeneral.updateChildNodes"></a>

### domGeneral.updateChildNodes(domItem) ⇒ <code>DomItem</code>
Update all the childNodes for this domItem element to mach domItem children.

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type |
| --- | --- |
| domItem | <code>DomItem</code> | 

<a name="module_domGeneral.setParentItemReferences"></a>

### domGeneral.setParentItemReferences(item) ⇒ <code>DomItem</code>
For each child of this item, set the parentItem references.

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>DomItem</code> | The DomItem to have parent references applied. |

<a name="module_domGeneral.renderHtml"></a>

### domGeneral.renderHtml(item) ⇒ <code>DomItem</code>
This is a shortcut for building the specified HTML elements and appending them to the Domwith associated listeners.

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | <code>DomItem</code> \| <code>null</code> | <code></code> | The DomItem that we want to render the element for |

<a name="module_domGeneral.removeEmptyProperties"></a>

### domGeneral.removeEmptyProperties(item, propertiesToDelete) ⇒ <code>DomItem</code>
Remove all empty properties to reduce total size of the object.

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>DomItem</code> | The DomItem with properties to check for empty. |
| propertiesToDelete | <code>Array</code> | Optional array of additional property names to remove. |

<a name="module_domGeneral.removeChild"></a>

### domGeneral.removeChild(parent, child) ⇒ <code>Array.&lt;DomItem&gt;</code>
Reverse of appendHtml, remove a DomItem and have the associated element removed.

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Description |
| --- | --- | --- |
| parent | <code>DomItem</code> | The parent of the items |
| child | <code>DomItem</code> | The DomItem with HTMLElement to be removed |

<a name="module_domGeneral.jsonToDomItem"></a>

### domGeneral.jsonToDomItem(jsonString) ⇒ <code>DomItem</code>
Convert DOM Item to JSON string.

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type |
| --- | --- |
| jsonString | <code>string</code> | 

<a name="module_domGeneral.getTopParentItem"></a>

### domGeneral.getTopParentItem(item) ⇒ <code>DomItemRoot</code>
Get the upper parentItem for the provided child. (usually this is a documentItem reference)WARNING: This is a recursive function.

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>DomItem</code> | The DomItem which we want the highest parent item of |

<a name="module_domGeneral.getParentsFromAttribute"></a>

### domGeneral.getParentsFromAttribute(attr, value, item) ⇒ <code>Array</code>
A selector function for retrieving existing child domGeneral.DomItems from the given parent item.This function will check all the children starting from item, and scan the attributesproperty for matches. The return array contains children matching from all levels.WARNING: This is a recursive function.

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Description |
| --- | --- | --- |
| attr | <code>string</code> | Provide the attribute name to be searched |
| value | <code>\*</code> | The attribute value to be compared |
| item | <code>DomItem</code> | The DomItem which may have parent items matching the attribute criteria |

<a name="module_domGeneral.getParentsByTagName"></a>

### domGeneral.getParentsByTagName(nodeName, item) ⇒ <code>Array</code>
Helper for getting all domGeneral.DomItems starting at child and having specified nodeName

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Description |
| --- | --- | --- |
| nodeName | <code>\*</code> | The nodeName to search for |
| item | <code>DomItem</code> | The DomItem which may have parent items matching the attribute criteria |

<a name="module_domGeneral.getParentsByName"></a>

### domGeneral.getParentsByName(name, item) ⇒ <code>Array</code>
Helper for getting all domGeneral.DomItems starting at child and having specified name attribute

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>\*</code> | The name to search for |
| item | <code>DomItem</code> | The DomItem which may have parent items matching the attribute criteria |

<a name="module_domGeneral.getParentsByClass"></a>

### domGeneral.getParentsByClass(className, item) ⇒ <code>Array</code>
Helper for getting all domGeneral.DomItems starting at child and having specified className attribute

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Description |
| --- | --- | --- |
| className | <code>\*</code> | The className to search for |
| item | <code>DomItem</code> | The DomItem which may have parent items matching the attribute criteria |

<a name="module_domGeneral.getChildrenFromAttribute"></a>

### domGeneral.getChildrenFromAttribute(attr, value, item) ⇒ <code>Array.&lt;DomItem&gt;</code>
A selector function for retrieving existing child domGeneral.DomItems from the given parent item.This function will check all the children starting from item, and scan the attributesproperty for matches. The returned array contains children matching from all levels.WARNING: This calls a recursive function.

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Description |
| --- | --- | --- |
| attr | <code>string</code> | Provide the attribute name to be searched |
| value | <code>\*</code> | The attribute value to be compared |
| item | <code>DomItem</code> | The DomItem which may have child items matching the attribute criteria |

<a name="module_domGeneral.getChildrenByName"></a>

### domGeneral.getChildrenByName(name, item) ⇒ <code>Array.&lt;DomItem&gt;</code>
Helper for getting all domGeneral.DomItems starting at parent and having specified name attribute

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>\*</code> | The name searched for |
| item | <code>DomItem</code> | The DomItem which may have child items matching the attribute criteria |

<a name="module_domGeneral.getChildrenByClass"></a>

### domGeneral.getChildrenByClass(className, item) ⇒ <code>Array.&lt;DomItem&gt;</code>
Helper for getting all domGeneral.DomItems starting at parent and having specified className attribute

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Description |
| --- | --- | --- |
| className | <code>\*</code> | The className searched for |
| item | <code>DomItem</code> | The DomItem which may have child items matching the attribute criteria |

<a name="module_domGeneral.getChildTest"></a>

### domGeneral.getChildTest(attr, value) ⇒ [<code>testChildItem</code>](#module_domGeneral..testChildItem)
Retrieve the [testChildItem](#module_domGeneral..testChildItem) function by providing an attribute and value to check.

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Description |
| --- | --- | --- |
| attr | <code>string</code> | Provide the attribute name to be searched |
| value | <code>\*</code> | The attribute value to be compared |

<a name="module_domGeneral.getAssignedStyles"></a>

### domGeneral.getAssignedStyles(elementStyles) ⇒ <code>object</code>
Get all the styles which have been assigned to this element. Assigned styles are indicated as numeric-keyproperties with a value indicating the string-key property which has been assigned. The string-key propertieshave the assigned values.

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type |
| --- | --- |
| elementStyles | <code>Object.&lt;style, style&gt;</code> \| <code>CSSProperties</code> | 

<a name="module_domGeneral.makeElementType"></a>

### domGeneral.makeElementType(nodeName, data) ⇒ <code>Text</code> \| <code>Comment</code> \| <code>HTMLElement</code>
Create a new DOM Node based on name and data.

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Default |
| --- | --- | --- |
| nodeName | <code>string</code> |  | 
| data | <code>string</code> \| <code>null</code> | <code>null</code> | 

<a name="module_domGeneral.generateElement"></a>

### domGeneral.generateElement(domItem) ⇒ <code>DomItem</code>
Create an HTML element based on the provided attributes and return the element as an Object.

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Description |
| --- | --- | --- |
| domItem | <code>DomItem</code> | The DomItem requiring matching HTML element property |

<a name="module_domGeneral.gatherChildItems"></a>

### domGeneral.gatherChildItems(item, test) ⇒ <code>Array.&lt;DomItem&gt;</code>
A selector function for retrieving existing child domGeneral.DomItems from the given parent item.This function will check all the children starting from and including item, and run the test function on eachchild encountered. The return array contains children returned from the test from all levels.WARNING: This is a recursive function.

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>DomItem</code> | The DomItem which may have child items matching the attribute criteria |
| test | [<code>testChildItem</code>](#module_domGeneral..testChildItem) | Assess each child, and return the ones which qualify |

<a name="module_domGeneral.checkStyles"></a>

### domGeneral.checkStyles(element, attr) ⇒ <code>int</code> \| <code>Object.&lt;string, number&gt;</code>
For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type |
| --- | --- |
| element | <code>HTMLElement</code> | 
| attr | <code>string</code> \| <code>Object.&lt;string, string&gt;</code> | 

<a name="module_domGeneral.checkClasses"></a>

### domGeneral.checkClasses(element, attr) ⇒ <code>int</code> \| <code>Object.&lt;string, number&gt;</code>
For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type |
| --- | --- |
| element | <code>HTMLElement</code> | 
| attr | <code>string</code> | 

<a name="module_domGeneral.elementHasAttribute"></a>

### domGeneral.elementHasAttribute(element, key, attr) ⇒ <code>int</code> \| <code>Object.&lt;string, number&gt;</code>
Check if the provided Element has the provided attributes.Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> | Receive the element to be assessed |
| key | <code>string</code> | The attribute name to search for |
| attr | <code>string</code> \| <code>Object.&lt;string, string&gt;</code> | The expected value of the attribute to compare against |

<a name="module_domGeneral.checkAttribute"></a>

### domGeneral.checkAttribute(domItem) ⇒ <code>testAttributeChange</code>
Given some config, provide a function to testing attribute and key existence in that config.

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type |
| --- | --- |
| domItem | <code>DomItem</code> | 

<a name="module_domGeneral.camelCaseAttributes"></a>

### domGeneral.camelCaseAttributes(domItem) ⇒ <code>Object.&lt;string, \*&gt;</code>
Updates all the keys to be camelCase

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type |
| --- | --- |
| domItem | <code>DomItem</code> | 

<a name="module_domGeneral.elementChanges"></a>

### domGeneral.elementChanges(domItem) ⇒ <code>ChangeList</code>
Given a domGeneral.DomItem as config, this function will return the changes from the elementto be applied to the domItem.

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Description |
| --- | --- | --- |
| domItem | <code>DomItem</code> | The DomItem having the element which changes to be applied to the config element |

<a name="module_domGeneral.domItemToJson"></a>

### domGeneral.domItemToJson(item, [options]) ⇒ <code>string</code>
Convert DOM Item to JSON string.

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Default |
| --- | --- | --- |
| item | <code>DomItem</code> |  | 
| [options] | <code>Object</code> | <code>{}</code> | 
| [options.mapLimit] | <code>int</code> | <code>100</code> | 
| [options.relevancyRange] | <code>int</code> | <code>1000</code> | 

<a name="module_domGeneral.checkStyles"></a>

### domGeneral.checkStyles(domItem, attr) ⇒ <code>int</code> \| <code>Object.&lt;string, number&gt;</code>
For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type |
| --- | --- |
| domItem | <code>DomItem</code> | 
| attr | <code>Object.&lt;string, string&gt;</code> | 

<a name="module_domGeneral.checkClasses"></a>

### domGeneral.checkClasses(domItem, attr) ⇒ <code>int</code> \| <code>Object.&lt;string, number&gt;</code>
For attributes which are objects or multipart strings -1 = remove attribute, 0 = no change, 1 = add attribute

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type |
| --- | --- |
| domItem | <code>DomItem</code> | 
| attr | <code>string</code> | 

<a name="module_domGeneral.domItemHasAttribute"></a>

### domGeneral.domItemHasAttribute(domItem, key, attr) ⇒ <code>int</code> \| <code>Object.&lt;string, number&gt;</code>
Check if the provided DomItem has the provided attributes.Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Description |
| --- | --- | --- |
| domItem | <code>DomItem</code> | Receive the DomItem to be assessed |
| key | <code>string</code> | The attribute name to search for |
| attr | <code>string</code> \| <code>Object</code> | The expected value of the attribute to compare against |

<a name="module_domGeneral.checkAttribute"></a>

### domGeneral.checkAttribute(element) ⇒ <code>testAttributeChange</code>
Given some config, provide a function to testing attribute and key existence in that config.

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type |
| --- | --- |
| element | <code>Node</code> \| <code>HTMLElement</code> | 

<a name="module_domGeneral.kabobCaseAttributes"></a>

### domGeneral.kabobCaseAttributes(attributesToSet) ⇒ <code>Object.&lt;string, \*&gt;</code>
Updates all the keys to be kabob-case

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type |
| --- | --- |
| attributesToSet | <code>Object.&lt;string, \*&gt;</code> | 

<a name="module_domGeneral.domItemChanges"></a>

### domGeneral.domItemChanges(domItem) ⇒ <code>ChangeList</code>
Given a domGeneral.DomItem as domItem, this function will return the changes to be appliedto the stored element property.

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Description |
| --- | --- | --- |
| domItem | <code>DomItem</code> | The DomItem having changes to be applied to its element |

<a name="module_domGeneral.appendChild"></a>

### domGeneral.appendChild(parent, child) ⇒ <code>DomItem</code>
Append a child to the end of given parent's children list.

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Description |
| --- | --- | --- |
| parent | <code>DomItem</code> | The parent that will receive the child. |
| child | <code>DomItem</code> | The new child to attach to the parent. |

<a name="module_domGeneral.addDomItemProperties"></a>

### domGeneral.addDomItemProperties(item) ⇒ <code>DomItem</code>
Ensure all basic properties of the DomItem are present.

**Kind**: static method of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>Object</code> | The object that will be formatted as a DomItem. |

<a name="module_domGeneral.DomItemRoot"></a>

### domGeneral.DomItemRoot : <code>DomItem</code>
DomItemRoot defines the structure for a single element in the Dom

**Kind**: static typedef of [<code>domGeneral</code>](#module_domGeneral)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [nodeName] | <code>string</code> | <code>&quot;&#x27;#document&#x27;&quot;</code> | This is set to the string html referring to the HTML element of the same name |
| [nodeValue] | <code>null</code> |  | Must be null |
| attributes | <code>Object</code> |  | Empty object as attributes placeholder |
| element | <code>HTMLDocument</code> |  | A reference to the entire Document |
| eventActions | <code>Object.&lt;string, listenerFunction&gt;</code> |  | Registered event actions (listenerFunctions), keyed by name |
| eventListeners | <code>Object.&lt;module:domEvents~EventName, module:domEvents~EventListeners&gt;</code> |  | all registered listeners stored as listener name and function pairs |
| children | <code>Array.&lt;(DomItemHead\|DomItemBody)&gt;</code> |  | Two references: for head and body |
| head | [<code>DomItemHead</code>](#DomItemHead) |  | A specific reference to head item |
| body | [<code>DomItemBody</code>](#DomItemBody) |  | A specific reference to body item |

<a name="module_domGeneral.DomItem"></a>

### domGeneral.DomItem : <code>Object</code>
DomItem defines the structure for a single element in the Dom

**Kind**: static typedef of [<code>domGeneral</code>](#module_domGeneral)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| activeListeners | <code>Object.&lt;module:domEvents~EventName, Object.&lt;number, eventHandler&gt;&gt;</code> | Generated property storing assigned listeners. |
| attributes | <code>Object.&lt;string, (string\|Object)&gt;</code> | All potential HTML element attributes can be defined here (including the defaulted style object) |
| children | <code>Array.&lt;DomItem&gt;</code> | A reference to an array of child objects |
| element | <code>Object</code> \| <code>HTMLElement</code> \| <code>null</code> | A reference to an existing HTML element will be stored here (default null) |
| eventListeners | <code>Object.&lt;module:domEvents~EventName, module:domEvents~EventListeners&gt;</code> | An object holding all events to be registered for the associated element |
| jsonExclusions | <code>Array</code> | array of properties to exclude |
| nodeName | <code>string</code> | This is any document node name |
| nodeValue | <code>string</code> | Is a string of text, null for HTML elements |
| parentItem | <code>DomItem</code> \| <code>Object</code> \| <code>null</code> | A reference to the parent of this object |
| appendChild | <code>function</code> | Attach a child to this DOM Item |
| removeChild | <code>function</code> | Attach a child to this DOM Item |
| [is] | <code>string</code> | Optional property to define the type of object for custom elements. |

<a name="module_domGeneral.appendChanges"></a>

### domGeneral.appendChanges : <code>function</code>
**Kind**: static typedef of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Description |
| --- | --- | --- |
| changeType | <code>string</code> | Either 'removed' or 'added' |
| changes | <code>DotNotatedObject</code> | The changes to append to existing type |

<a name="module_domGeneral.ChangeList"></a>

### domGeneral.ChangeList : <code>Object.&lt;string, DotNotatedObject&gt;</code>
Represent changes / a diff of an object, including removed, added, and changed properties.

**Kind**: static typedef of [<code>domGeneral</code>](#module_domGeneral)  
**Properties**

| Name | Type |
| --- | --- |
| removed | <code>DotNotatedObject</code> | 
| added | <code>DotNotatedObject</code> | 
| appendChanges | <code>appendChanges</code> | 

<a name="module_domGeneral.testAttributeChange"></a>

### domGeneral.testAttributeChange ⇒ <code>int</code>
**Kind**: static typedef of [<code>domGeneral</code>](#module_domGeneral)  
**Returns**: <code>int</code> - - -1: removed, 0: unchanged, 1: added.  

| Param | Type | Description |
| --- | --- | --- |
| attr | <code>\*</code> | The current property being processed in the object. |
| key | <code>string</code> | The property name of the current property being processed in the object. |

<a name="module_domGeneral.testAttributeChange"></a>

### domGeneral.testAttributeChange ⇒ <code>int</code>
**Kind**: static typedef of [<code>domGeneral</code>](#module_domGeneral)  
**Returns**: <code>int</code> - - -1: removed, 0: unchanged, 1: added.  

| Param | Type | Description |
| --- | --- | --- |
| attr | <code>\*</code> | The current property being processed in the object. |
| key | <code>string</code> | The property name of the current property being processed in the object. |

<a name="module_domGeneral..testChildItem"></a>

### domGeneral~testChildItem ⇒ <code>Array.&lt;DomItem&gt;</code>
To be used with gatherChildItems which will start at item and recurse over all child items, this testwill then choose which child items will be returned as the result of the test.

**Kind**: inner typedef of [<code>domGeneral</code>](#module_domGeneral)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>DomItem</code> \| <code>Object</code> | The DomItem is the child being tested |
| gatheredResults | <code>Array.&lt;DomItem&gt;</code> | All of the child items gathered based on the test |

<a name="module_domEvents"></a>

## domEvents
Setting up and handling events

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [domEvents](#module_domEvents)
    * [.createEventResponder(eventHandler, [abort])](#module_domEvents.createEventResponder) ⇒ <code>EventResponder</code>
    * [.createEventProxy(event)](#module_domEvents.createEventProxy) ⇒ <code>EventProxy</code>
    * [.createEventListener([listenerProperties])](#module_domEvents.createEventListener) ⇒ <code>EventListener</code>
    * [.commonEvents()](#module_domEvents.commonEvents) ⇒ <code>Object</code>
    * [.unassignListener(trigger, elem, fn, options)](#module_domEvents.unassignListener) ⇒ <code>listenerFunction</code> \| <code>function</code>
    * [.revokeActiveListeners(eventName, item)](#module_domEvents.revokeActiveListeners) ⇒ <code>module:domGeneral~DomItem</code>
    * [.retrieveListener(listenerName, [parent])](#module_domEvents.retrieveListener) ⇒ <code>listenerFunction</code> \| <code>function</code> \| <code>Object</code>
    * [.removeEventListener(eventName, listenerFunction, [customArgs], [options], item)](#module_domEvents.removeEventListener) ⇒ <code>module:domGeneral~DomItem</code>
    * [.registerListeners(listeners, [parent])](#module_domEvents.registerListeners) ⇒ <code>DomItemRoot</code> \| <code>Object</code>
    * [.registerListener(listener, [name], [parent])](#module_domEvents.registerListener) ⇒ <code>Object.&lt;string, listenerFunction&gt;</code>
    * [.makeEventHandler(listener, item, [...args])](#module_domEvents.makeEventHandler) ⇒ <code>eventHandler</code>
    * [.listenerOptions(options)](#module_domEvents.listenerOptions) ⇒ <code>boolean</code>
    * [.fullAddEventListener(eventName, listener, [name], [customArgs], [options], item)](#module_domEvents.fullAddEventListener) ⇒ <code>DomItem</code>
    * [.findEventListener(eventName, listenerFunction, [customArgs], [options], item)](#module_domEvents.findEventListener) ⇒ <code>Array.&lt;(number\|EventListener\|undefined)&gt;</code>
    * [.deactivateListeners(item)](#module_domEvents.deactivateListeners) ⇒ <code>DomItem</code>
    * [.deactivateListener(eventName, eventListener, item)](#module_domEvents.deactivateListener) ⇒ <code>module:domGeneral~DomItem</code>
    * [.bindListeners(item)](#module_domEvents.bindListeners) ⇒ <code>DomItem</code>
    * [.bindElementListeners(item)](#module_domEvents.bindElementListeners) ⇒ <code>DomItem</code>
    * [.bindAllListeners(item)](#module_domEvents.bindAllListeners) ⇒ <code>DomItem</code>
    * [.assignListener(trigger, elem, fn, options)](#module_domEvents.assignListener) ⇒ <code>listenerFunction</code> \| <code>function</code>
    * [.applyActiveListeners(eventName, item)](#module_domEvents.applyActiveListeners) ⇒ <code>DomItem</code>
    * [.addEventListener(eventName, listenerFunction, [customArgs], [options], item)](#module_domEvents.addEventListener) ⇒ <code>module:domGeneral~DomItem</code>
    * [.activateListener(eventName, eventListener, item)](#module_domEvents.activateListener) ⇒ <code>DomItem</code>
    * [.Option](#module_domEvents.Option) : <code>boolean</code>
    * [.EventResponder](#module_domEvents.EventResponder) : <code>Object</code>
    * [.EventProxy](#module_domEvents.EventProxy) : <code>Event</code>
    * [.listenerFunction](#module_domEvents.listenerFunction) : <code>function</code>
    * [.UseCapture](#module_domEvents.UseCapture) : <code>boolean</code>
    * [.OptionsObject](#module_domEvents.OptionsObject) : <code>Object</code>
    * [.EventListenerOptions](#module_domEvents.EventListenerOptions) : <code>OptionsObject</code> \| <code>UseCapture</code>
    * [.EventListener](#module_domEvents.EventListener) : <code>Object</code>
    * [.EventListeners](#module_domEvents.EventListeners) : <code>Array.&lt;EventListener&gt;</code>
    * [.EventName](#module_domEvents.EventName) : <code>string</code>
    * [.eventHandler](#module_domEvents.eventHandler) : <code>function</code>
    * [.MicrosoftHtmlObject](#module_domEvents.MicrosoftHtmlObject) : <code>EventTarget</code>

<a name="module_domEvents.createEventResponder"></a>

### domEvents.createEventResponder(eventHandler, [abort]) ⇒ <code>EventResponder</code>
Store the handler function and associated abort controller instance if available to be used when events are triggered.

**Kind**: static method of [<code>domEvents</code>](#module_domEvents)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| eventHandler | <code>eventHandler</code> |  | The eventHandler wrapped function to be called for the event. |
| [abort] | <code>AbortController</code> \| <code>boolean</code> \| <code>null</code> | <code></code> | Assign an AbortSignal provided or create one (if true), otherwise null. |

<a name="module_domEvents.createEventProxy"></a>

### domEvents.createEventProxy(event) ⇒ <code>EventProxy</code>
Return a modified version of the event.

**Kind**: static method of [<code>domEvents</code>](#module_domEvents)  

| Param | Type |
| --- | --- |
| event | <code>Event</code> | 

<a name="module_domEvents.createEventListener"></a>

### domEvents.createEventListener([listenerProperties]) ⇒ <code>EventListener</code>
Prepare an eventListener object to attach to a DOMItem

**Kind**: static method of [<code>domEvents</code>](#module_domEvents)  
**Returns**: <code>EventListener</code> - An EventListener descriptor ready to be pushed onto a DomItem's eventListeners  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [listenerProperties] | <code>Object</code> | <code>{}</code> |  |
| listenerProperties.listenerFunc | <code>string</code> \| <code>listenerFunction</code> |  | The function or name (string) of the listener action |
| [listenerProperties.listenerArgs] | <code>Object</code> \| <code>null</code> | <code></code> | Additional parameters to apply to the function |
| [listenerProperties.listenerOptions] | <code>EventListenerOptions</code> | <code>false</code> | The listener options to apply to the element |
| [listenerProperties.listenerActive] | <code>boolean</code> | <code>false</code> | Flag for listener applied to element |

<a name="module_domEvents.commonEvents"></a>

### domEvents.commonEvents() ⇒ <code>Object</code>
Create the default listeners for common events.

**Kind**: static method of [<code>domEvents</code>](#module_domEvents)  
<a name="module_domEvents.unassignListener"></a>

### domEvents.unassignListener(trigger, elem, fn, options) ⇒ <code>listenerFunction</code> \| <code>function</code>
Provide compatibility for unassigning listeners.

**Kind**: static method of [<code>domEvents</code>](#module_domEvents)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| trigger | <code>string</code> |  | The name of the event which will trigger the listenerFunction on the element. (keyof HTMLElementEventMap) |
| elem | <code>EventTarget</code> \| <code>MicrosoftHtmlObject</code> |  | An element to append the listener onto |
| fn | <code>EventListenerOrEventListenerObject</code> \| <code>null</code> |  | The function which will be invoked when the event is triggered |
| options | <code>EventListenerOptions</code> \| <code>boolean</code> | <code>false</code> | Additional options to how the event will be fired |

<a name="module_domEvents.revokeActiveListeners"></a>

### domEvents.revokeActiveListeners(eventName, item) ⇒ <code>module:domGeneral~DomItem</code>
Detach every active listener for one event type from a DomItem's element, regardless of which EventListenerdescriptor each one belongs to, and clear that event's activeListeners bucket. Unlike [deactivateListener](deactivateListener),this does not update the listenerActive/activeResponder state on the individual descriptors.

**Kind**: static method of [<code>domEvents</code>](#module_domEvents)  
**Returns**: <code>module:domGeneral~DomItem</code> - The same DomItem, with all active listeners for this event detached.  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>EventName</code> | The name of the trigger event whose active listeners will be revoked. |
| item | <code>module:domGeneral~DomItem</code> | The DomItem to revoke active listeners from. |

<a name="module_domEvents.retrieveListener"></a>

### domEvents.retrieveListener(listenerName, [parent]) ⇒ <code>listenerFunction</code> \| <code>function</code> \| <code>Object</code>
Based on the provided function / listener name, retrieve the associated function from the root domEvents.DomItem

**Kind**: static method of [<code>domEvents</code>](#module_domEvents)  

| Param | Type | Description |
| --- | --- | --- |
| listenerName | <code>string</code> | The name of one of the registered listener functions. |
| [parent] | <code>DomItemRoot</code> \| <code>Object</code> | The parent DomItem which is DomItemRoot which stores eventListeners property. |

<a name="module_domEvents.removeEventListener"></a>

### domEvents.removeEventListener(eventName, listenerFunction, [customArgs], [options], item) ⇒ <code>module:domGeneral~DomItem</code>
Find and remove an event listener from a DomItem: detaches it from the element first (via
[deactivateListener](deactivateListener)) if it was active, then splices its descriptor out of eventListeners. A no-op if no
matching listener is found.

item is the last parameter (instead of customArgs/options having literal defaults) so this can be curried and
piped directly - see [fullAddEventListener](fullAddEventListener) for an example of the pattern.

**Kind**: static method of [<code>domEvents</code>](#module_domEvents)  
**Returns**: <code>module:domGeneral~DomItem</code> - The same DomItem, with the matching listener removed if one was found.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| eventName | <code>EventName</code> |  | The name of the trigger event the listener was registered under. |
| listenerFunction | <code>module:domEvents~listenerFunction</code> |  | The listener function to match against. |
| [customArgs] | <code>Object</code> \| <code>null</code> | <code></code> | The custom args the listener was registered with. |
| [options] | <code>module:domEvents~EventListenerOptions</code> | <code>false</code> | The options the listener was registered with. |
| item | <code>module:domGeneral~DomItem</code> |  | The DomItem to remove the listener from. |

<a name="module_domEvents.registerListeners"></a>

### domEvents.registerListeners(listeners, [parent]) ⇒ <code>DomItemRoot</code> \| <code>Object</code>
Register multiple listeners from an array of functions.

**Kind**: static method of [<code>domEvents</code>](#module_domEvents)  

| Param | Type | Description |
| --- | --- | --- |
| listeners | <code>Array.&lt;(listenerFunction\|function())&gt;</code> | An array of functions to be used as the registered event listeners. |
| [parent] | <code>DomItemRoot</code> \| <code>Object</code> | The parent DomItem which is DomItemRoot which has eventActions property. |

<a name="module_domEvents.registerListener"></a>

### domEvents.registerListener(listener, [name], [parent]) ⇒ <code>Object.&lt;string, listenerFunction&gt;</code>
Register a single listener function as part of the root domEvents.DomItem.

**Kind**: static method of [<code>domEvents</code>](#module_domEvents)  

| Param | Type | Description |
| --- | --- | --- |
| listener | <code>listenerFunction</code> \| <code>function</code> | Provide a function which will be called when a Dom event is triggered. |
| [name] | <code>string</code> | The name of the listener to be used. |
| [parent] | <code>DomItemRoot</code> \| <code>Object</code> | The parent DomItem which is DomItemRoot which stores eventListeners property. |

<a name="module_domEvents.makeEventHandler"></a>

### domEvents.makeEventHandler(listener, item, [...args]) ⇒ <code>eventHandler</code>
Prepare a listener to be used before assigning to an element.

**Kind**: static method of [<code>domEvents</code>](#module_domEvents)  

| Param | Type |
| --- | --- |
| listener | <code>listenerFunction</code> | 
| item | <code>DomItem</code> | 
| [...args] | <code>\*</code> | 

<a name="module_domEvents.listenerOptions"></a>

### domEvents.listenerOptions(options) ⇒ <code>boolean</code>
Provide compatibility for using the options parameter of addEventListener

**Kind**: static method of [<code>domEvents</code>](#module_domEvents)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>EventListenerOptions</code> | An object or boolean with the listener options |

<a name="module_domEvents.fullAddEventListener"></a>

### domEvents.fullAddEventListener(eventName, listener, [name], [customArgs], [options], item) ⇒ <code>DomItem</code>
Register the listener function, attach it as a descriptor on the item, then bind it onto the
real element - the full setup sequence for a single event listener, in order:
1. [registerListener](registerListener) - store the real function in the root DomItem's eventActions, keyed by name.
2. [addEventListener](addEventListener) - push an EventListener descriptor referencing that name onto item.eventListeners.
3. [bindListeners](bindListeners) - activate and apply any unbound descriptors, attaching them to item.element.

item is the last parameter (instead of name/customArgs/options having literal defaults) so addEventListener can
be curried directly into the pipe below without an argument-reordering wrapper.

**Kind**: static method of [<code>domEvents</code>](#module_domEvents)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| eventName | <code>EventName</code> |  | The name of the trigger event (e.g. 'click'). |
| listener | <code>listenerFunction</code> \| <code>function</code> |  | The function to be called when the event is triggered. |
| [name] | <code>string</code> | <code>&quot;listener.name&quot;</code> | The name the listener will be registered under in eventActions. |
| [customArgs] | <code>Object</code> \| <code>null</code> | <code></code> | Additional args passed through to the listener when called. |
| [options] | <code>EventListenerOptions</code> | <code>false</code> | Options to be used when the listener is attached to the element. |
| item | <code>DomItem</code> |  | The DomItem which will receive the event listener. |

<a name="module_domEvents.findEventListener"></a>

### domEvents.findEventListener(eventName, listenerFunction, [customArgs], [options], item) ⇒ <code>Array.&lt;(number\|EventListener\|undefined)&gt;</code>
Search a DOM item's eventListeners for a specific event listener, matched by listener function, custom args, and
options. Returns its index and the matching descriptor as a tuple.

item is the last parameter (instead of customArgs/options having literal defaults) so this can be curried and
piped directly - see [fullAddEventListener](fullAddEventListener) for an example of the pattern.

**Kind**: static method of [<code>domEvents</code>](#module_domEvents)  
**Returns**: <code>Array.&lt;(number\|EventListener\|undefined)&gt;</code> - A 2-element [index, matchingListener] tuple. If no match is
found, index is -1 and matchingListener is undefined.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| eventName | <code>EventName</code> |  | The name of the trigger event the listener was registered under. |
| listenerFunction | <code>module:domEvents~listenerFunction</code> |  | The listener function to match against. |
| [customArgs] | <code>Object</code> \| <code>null</code> | <code></code> | The custom args the listener was registered with. |
| [options] | <code>module:domEvents~EventListenerOptions</code> | <code>false</code> | The options the listener was registered with. |
| item | <code>module:domGeneral~DomItem</code> |  | The DomItem whose eventListeners will be searched. |

<a name="module_domEvents.deactivateListeners"></a>

### domEvents.deactivateListeners(item) ⇒ <code>DomItem</code>
Set all the listeners for this DOMItem to be inactive.

**Kind**: static method of [<code>domEvents</code>](#module_domEvents)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>DomItem</code> | The DomItem which will have its eventListeners updated. |

<a name="module_domEvents.deactivateListener"></a>

### domEvents.deactivateListener(eventName, eventListener, item) ⇒ <code>module:domGeneral~DomItem</code>
Deactivate a single listener: detach it from the element (if it was actually attached) and remove it fromactiveListeners, without disturbing any other listener sharing the same options bucket.

**Kind**: static method of [<code>domEvents</code>](#module_domEvents)  
**Returns**: <code>module:domGeneral~DomItem</code> - The same DomItem, with this listener detached and marked inactive.  

| Param | Type | Description |
| --- | --- | --- |
| eventName | <code>EventName</code> | The name of the trigger event the listener was activated under. |
| eventListener | <code>EventListener</code> | The EventListener descriptor to deactivate, as found via [findEventListener](findEventListener) or returned from [activateListener](activateListener). |
| item | <code>module:domGeneral~DomItem</code> | The DomItem the listener is attached to. |

<a name="module_domEvents.bindListeners"></a>

### domEvents.bindListeners(item) ⇒ <code>DomItem</code>
Based on the eventListeners property of the provided item, bind thelisteners to the associated element property for the provided domEvents.DomItem.

**Kind**: static method of [<code>domEvents</code>](#module_domEvents)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>DomItem</code> | The DomItem which may have eventListeners to apply to its element |

<a name="module_domEvents.bindElementListeners"></a>

### domEvents.bindElementListeners(item) ⇒ <code>DomItem</code>
Receive a DomItem with eventListeners and apply the event listeners onto the Dom element.

**Kind**: static method of [<code>domEvents</code>](#module_domEvents)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>DomItem</code> | The DomItem which has eventListeners to apply to its element |

<a name="module_domEvents.bindAllListeners"></a>

### domEvents.bindAllListeners(item) ⇒ <code>DomItem</code>
Based on the eventListeners property of the provided item, bind the listeners to the associated element propertyfor each item in the domEvents.DomItem structure.WARNING: This is a recursive function.

**Kind**: static method of [<code>domEvents</code>](#module_domEvents)  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>DomItem</code> | The DomItem with an associated HTMLElement to have a listener assigned |

<a name="module_domEvents.assignListener"></a>

### domEvents.assignListener(trigger, elem, fn, options) ⇒ <code>listenerFunction</code> \| <code>function</code>
Provide compatibility for assigning listeners.

**Kind**: static method of [<code>domEvents</code>](#module_domEvents)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| trigger | <code>string</code> |  | The name of the event which will trigger the listenerFunction on the element. (keyof HTMLElementEventMap) |
| elem | <code>EventTarget</code> \| <code>MicrosoftHtmlObject</code> |  | An element to append the listener onto |
| fn | <code>EventListenerOrEventListenerObject</code> \| <code>null</code> |  | The function which will be invoked when the event is triggered |
| options | <code>EventListenerOptions</code> \| <code>boolean</code> | <code>false</code> | Additional options to how the event will be fired |

<a name="module_domEvents.applyActiveListeners"></a>

### domEvents.applyActiveListeners(eventName, item) ⇒ <code>DomItem</code>
Apply each active event listener for event type to the DOM Item's element.

**Kind**: static method of [<code>domEvents</code>](#module_domEvents)  

| Param | Type |
| --- | --- |
| eventName | <code>EventName</code> | 
| item | <code>DomItem</code> | 

<a name="module_domEvents.addEventListener"></a>

### domEvents.addEventListener(eventName, listenerFunction, [customArgs], [options], item) ⇒ <code>module:domGeneral~DomItem</code>
Create an EventListener descriptor and push it onto a DomItem's eventListeners for the given event name.
Does not attach anything to the real element - see [bindListeners](bindListeners) or [fullAddEventListener](fullAddEventListener) for that.

item is the last parameter (instead of customArgs/options having literal defaults) so this can be curried and
piped directly - see [fullAddEventListener](fullAddEventListener) for an example.

**Kind**: static method of [<code>domEvents</code>](#module_domEvents)  
**Returns**: <code>module:domGeneral~DomItem</code> - The same DomItem, with the new EventListener descriptor appended.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| eventName | <code>EventName</code> |  | The name of the trigger event (e.g. 'click'). |
| listenerFunction | <code>module:domEvents~listenerFunction</code> |  | The listener function to be registered. |
| [customArgs] | <code>Object</code> \| <code>null</code> | <code></code> | Additional args passed through to the listener when called. |
| [options] | <code>module:domEvents~EventListenerOptions</code> | <code>false</code> | Options to be used when the listener is attached to the element. |
| item | <code>module:domGeneral~DomItem</code> |  | The DomItem which will receive the event listener. |

<a name="module_domEvents.activateListener"></a>

### domEvents.activateListener(eventName, eventListener, item) ⇒ <code>DomItem</code>
Activate listener by pushing it to activeListeners.

**Kind**: static method of [<code>domEvents</code>](#module_domEvents)  

| Param | Type |
| --- | --- |
| eventName | <code>EventName</code> | 
| eventListener | <code>EventListener</code> | 
| item | <code>DomItem</code> | 

<a name="module_domEvents.Option"></a>

### domEvents.Option : <code>boolean</code>
A boolean value used to alter functionality.

**Kind**: static typedef of [<code>domEvents</code>](#module_domEvents)  
<a name="module_domEvents.EventResponder"></a>

### domEvents.EventResponder : <code>Object</code>
Track an event handler and optional abort signal.

**Kind**: static typedef of [<code>domEvents</code>](#module_domEvents)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| handler | <code>eventHandler</code> |  |
| abort | <code>AbortController</code> \| <code>null</code> |  |
| assignedHandler | <code>eventHandler</code> \| <code>null</code> | The exact function reference passed to the element's addEventListener, set once applied. Required to later detach this exact listener via removeEventListener. |

<a name="module_domEvents.EventProxy"></a>

### domEvents.EventProxy : <code>Event</code>
A wrapped Event which provides additional utilities.

**Kind**: static typedef of [<code>domEvents</code>](#module_domEvents)  
**Properties**

| Name | Type |
| --- | --- |
| immediatePropagationStopped | <code>boolean</code> | 

<a name="module_domEvents.listenerFunction"></a>

### domEvents.listenerFunction : <code>function</code>
This is the standard definition of a listenerFunction to be used

**Kind**: static typedef of [<code>domEvents</code>](#module_domEvents)  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>Event</code> \| <code>EventProxy</code> | The event object passed to the listener |
| target | <code>DomItem</code> | The element which triggered the event |
| [...args] | <code>\*</code> | Optional args as required by the listener |

<a name="module_domEvents.UseCapture"></a>

### domEvents.UseCapture : <code>boolean</code>
A Boolean indicating whether events of this type will be dispatched to the registered listerFunction before beingdispatched to any EventTarget beneath it in the Dom tree.

**Kind**: static typedef of [<code>domEvents</code>](#module_domEvents)  
<a name="module_domEvents.OptionsObject"></a>

### domEvents.OptionsObject : <code>Object</code>
OptionsObject defines the structure for the options to be passed to addEventListener

**Kind**: static typedef of [<code>domEvents</code>](#module_domEvents)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| capture | <code>boolean</code> | Indicate that events of this type will be dispatched to the registered listenerFunction before being dispatched to any EventTarget beneath it in the Dom tree. |
| once | <code>boolean</code> | Indicate that the listenerFunction should be invoked at most once after being added. If 'true', the listenerFunction would be automatically removed when invoked. |
| passive | <code>boolean</code> | Indicate that, if 'true', indicates that the listenerFunction will never call preventDefault(). If preventDefault() is called, the user agent will do nothing with it. |
| signal | <code>boolean</code> | The listener will be removed when the given AbortSignal object's abort() method is called. If not specified, no AbortSignal is associated with the listener. |

<a name="module_domEvents.EventListenerOptions"></a>

### domEvents.EventListenerOptions : <code>OptionsObject</code> \| <code>UseCapture</code>
EventListenerOptions is either a boolean as UseCapture or an Object as OptionsObject

**Kind**: static typedef of [<code>domEvents</code>](#module_domEvents)  
<a name="module_domEvents.EventListener"></a>

### domEvents.EventListener : <code>Object</code>
An EventListener Object to be appended to the element within the DomItem

**Kind**: static typedef of [<code>domEvents</code>](#module_domEvents)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| listenerFunc | <code>string</code> \| <code>listenerFunction</code> |  | A string function name matching an existing [listenerFunction](listenerFunction). |
| [listenerArgs] | <code>Object</code> | <code></code> | Additional args required for the listener function |
| [listenerOptions] | <code>EventListenerOptions</code> | <code>false</code> | Provides support for options parameter of addEventListener, or false for default |
| [listenerActive] | <code>boolean</code> | <code>false</code> | Indicate whether this listener has been applied to the element. |

<a name="module_domEvents.EventListeners"></a>

### domEvents.EventListeners : <code>Array.&lt;EventListener&gt;</code>
One or more listeners assigned to the same event.

**Kind**: static typedef of [<code>domEvents</code>](#module_domEvents)  
<a name="module_domEvents.EventName"></a>

### domEvents.EventName : <code>string</code>
The name of the trigger used to fire the event.

**Kind**: static typedef of [<code>domEvents</code>](#module_domEvents)  
<a name="module_domEvents.eventHandler"></a>

### domEvents.eventHandler : <code>function</code>
Based on available flags, either proceed to process the listener or skip.

**Kind**: static typedef of [<code>domEvents</code>](#module_domEvents)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>EventProxy</code> | The event object passed to the listener |

<a name="module_domEvents.MicrosoftHtmlObject"></a>

### domEvents.MicrosoftHtmlObject : <code>EventTarget</code>
Document attachEvent support for older browsers.

**Kind**: static typedef of [<code>domEvents</code>](#module_domEvents)  
**Properties**

| Name | Type |
| --- | --- |
| attachEvent | <code>function</code> | 

<a name="module_optionFlags"></a>

## optionFlags
Be able to use Flags (Options) in a well-formed way.

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [optionFlags](#module_optionFlags)
    * _static_
        * [.optionsToNumber(optionsTemplate, listenerOptions)](#module_optionFlags.optionsToNumber) ⇒ <code>int</code>
        * [.numberToOptions(optionsTemplate, binaryOptions)](#module_optionFlags.numberToOptions) ⇒ <code>EventListenerOptions</code>
        * [.getListenerOptions()](#module_optionFlags.getListenerOptions) ⇒ <code>OptionsTemplate</code>
    * _inner_
        * [~Options](#module_optionFlags..Options) : <code>Object.&lt;string, Option&gt;</code> \| <code>Option</code>
        * [~Flag](#module_optionFlags..Flag) : <code>int</code>
        * [~OptionsTemplate](#module_optionFlags..OptionsTemplate) : <code>Object.&lt;string, Flag&gt;</code>

<a name="module_optionFlags.optionsToNumber"></a>

### optionFlags.optionsToNumber(optionsTemplate, listenerOptions) ⇒ <code>int</code>
Take the given options and convert them (using binary) to an integer. Given listener options, each one is assigned abitwise position. The resulting binary number represents any possible combination of the available flags set.

**Kind**: static method of [<code>optionFlags</code>](#module_optionFlags)  

| Param | Type |
| --- | --- |
| optionsTemplate | <code>OptionsTemplate</code> | 
| listenerOptions | <code>Options</code> \| <code>Option</code> | 

<a name="module_optionFlags.numberToOptions"></a>

### optionFlags.numberToOptions(optionsTemplate, binaryOptions) ⇒ <code>EventListenerOptions</code>
Take an integer representation of the listener options and convert them to the listener options object.

**Kind**: static method of [<code>optionFlags</code>](#module_optionFlags)  

| Param | Type |
| --- | --- |
| optionsTemplate | <code>OptionsTemplate</code> | 
| binaryOptions | <code>int</code> | 

<a name="module_optionFlags.getListenerOptions"></a>

### optionFlags.getListenerOptions() ⇒ <code>OptionsTemplate</code>
Retrieve the OptionsTemplate for EventListenerOptions.

**Kind**: static method of [<code>optionFlags</code>](#module_optionFlags)  
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
<a name="appendChangesTo"></a>

## appendChangesTo(changeList) ⇒ <code>appendChanges</code>
Initialize the appendChanges method with the changeList, return the appendChanges method.

**Kind**: global function  

| Param | Type |
| --- | --- |
| changeList | <code>ChangeList</code> | 

<a name="isEmpty"></a>

## isEmpty(propertyValue) ⇒ <code>boolean</code>
Check if the value is an empty object / array, or if it is null or undefined.

**Kind**: global function  

| Param | Type |
| --- | --- |
| propertyValue | <code>\*</code> | 

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

