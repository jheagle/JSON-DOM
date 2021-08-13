# JSON-DOM

State management with JSON

## Modules

<dl>
<dt><a href="#module_jsonDom">jsonDom</a></dt>
<dd><p>All of the JSON DOM system functions for creating JSON components.</p>
</dd>
<dt><a href="#module_jDom">jDom</a></dt>
<dd><p>All of the JSON DOM system functions for creating JSON components.</p>
</dd>
<dt><a href="#module_domFunctions">domFunctions</a></dt>
<dd><p>Core Dom management functions</p>
</dd>
<dt><a href="#module_jDom">jDom</a></dt>
<dd><p>Main module for JSON DOM.</p>
</dd>
<dt><a href="#module_domObjects">domObjects</a></dt>
<dd><p>Core objects for representing the DOM in JSON.</p>
</dd>
<dt><a href="#module_jDomMatrix">jDomMatrix</a></dt>
<dd><p>Add matrix ability using JSON DOM components</p>
</dd>
<dt><a href="#module_matrixFunctions">matrixFunctions</a></dt>
<dd><p>All of the functionalHelpers matrix functions for working with a grid of points.</p>
</dd>
<dt><a href="#module_jDomMatrix">jDomMatrix</a></dt>
<dd><p>Add matrix ability using JSON DOM components</p>
</dd>
<dt><a href="#module_matrixObjects">matrixObjects</a></dt>
<dd><p>Core Matrix objects for representing DOM grid in JSON.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#cube">cube([x], [y], [z], [matrixProps], size)</a> ⇒ <code><a href="#module_matrixObjects..Matrix">Matrix</a></code></dt>
<dd><p>Return a matrix where x, y, and z are equal</p>
</dd>
<dt><a href="#matrix">matrix(x, y, z, matrixProps)</a> ⇒ <code><a href="#module_matrixObjects..Matrix">Matrix</a></code></dt>
<dd><p>Create a 3d matrix of i with x by y by z size, add additional objects for each layer as well</p>
</dd>
<dt><a href="#point">point(x, y, [z])</a> ⇒ <code><a href="#module_matrixObjects..Point">Point</a></code></dt>
<dd><p>Store the point data for an x, y, z <a href="#module_matrixObjects..Matrix">Matrix</a>.</p>
</dd>
<dt><a href="#square">square([x], [y], [z], [matrixProps], size)</a> ⇒ <code><a href="#module_matrixObjects..Matrix">Matrix</a></code></dt>
<dd><p>Return a single layer matrix where x and y are equal</p>
</dd>
<dt><a href="#tile">tile()</a> ⇒ <code><a href="#module_matrixObjects..MatrixTile">MatrixTile</a></code></dt>
<dd><p>A default tile in the <a href="#module_matrixObjects..Matrix">Matrix</a></p>
</dd>
<dt><a href="#adjacentEdgePoints">adjacentEdgePoints(pnt, matrix)</a> ⇒ <code><a href="#module_matrixObjects..Point">Array.&lt;Point&gt;</a></code></dt>
<dd><p>Return all points which touch on edges (not diagonal)</p>
</dd>
<dt><a href="#adjacentPoints">adjacentPoints(pnt, matrix)</a> ⇒ <code><a href="#module_matrixObjects..Point">Array.&lt;Point&gt;</a></code></dt>
<dd><p>Return all valid points surrounding a provided point</p>
</dd>
<dt><a href="#areEqualPoints">areEqualPoints(p1, p2)</a> ⇒ <code>boolean</code></dt>
<dd><p>Given two points, compare the x, y, and z of each to see if they are the same</p>
</dd>
<dt><a href="#bindPointData">bindPointData(item, pnt)</a> ⇒ <code><a href="#module_matrixObjects..MatrixColumn">MatrixColumn</a></code> | <code><a href="#module_matrixObjects..MatrixRow">MatrixRow</a></code></dt>
<dd><p>Generate point data for each item in the matrix
WARNING: This is a recursive function.</p>
</dd>
<dt><a href="#checkInBetween">checkInBetween(...args)</a> ⇒ <code>boolean</code></dt>
<dd><p>Given two points, check the cells between using specified function.
When inclusive is set to true the provided start and end points will also be tested</p>
</dd>
<dt><a href="#checkValidPoint">checkValidPoint(pnt, matrix)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test if the provided point exists in the matrix.</p>
</dd>
<dt><a href="#getAllPoints">getAllPoints(matrix, [allPoints])</a> ⇒ <code><a href="#module_matrixObjects..Point">Array.&lt;Point&gt;</a></code></dt>
<dd><p>Return an array of all the points in the matrix</p>
</dd>
<dt><a href="#getAxisLengths">getAxisLengths(matrix)</a> ⇒ <code><a href="#module_matrixObjects..Point">Point</a></code></dt>
<dd><p>Return point-like object with all of the axis lengths.</p>
</dd>
<dt><a href="#getDomItemFromElement">getDomItemFromElement(elem, matrix)</a> ⇒ <code>false</code> | <code><a href="#module_domObjects..DomItem">DomItem</a></code></dt>
<dd><p>Retrieve the DomItem associated with the provided element in the matrix</p>
</dd>
<dt><a href="#getDomItemFromPoint">getDomItemFromPoint(pnt, matrix)</a> ⇒ <code>false</code> | <code><a href="#module_domObjects..DomItem">DomItem</a></code></dt>
<dd><p>Retrieve the DomItem associated with the provided point</p>
</dd>
<dt><a href="#getFirstAxisOfCoordinate">getFirstAxisOfCoordinate(pnt, coordinate)</a> ⇒ <code>false</code> | <code><a href="#module_matrixObjects..axis">axis</a></code></dt>
<dd><p>Having provided a coordinate number, find all corresponding axis, return the first match.</p>
</dd>
<dt><a href="#getHighestAbsoluteCoordinate">getHighestAbsoluteCoordinate(pnt)</a> ⇒ <code><a href="#module_matrixObjects..coordinate">coordinate</a></code></dt>
<dd><p>Return the first coordinate number with the highest absolute value.</p>
</dd>
<dt><a href="#getPointFromElement">getPointFromElement(elem)</a> ⇒ <code><a href="#module_matrixObjects..Point">Point</a></code></dt>
<dd><p>Retrieve the point associated with the provided element.</p>
</dd>
<dt><a href="#getPointsLine">getPointsLine(start, end, [line])</a> ⇒ <code><a href="#module_matrixObjects..Point">Array.&lt;Point&gt;</a></code></dt>
<dd><p>Having provided two points, return an array of transition points connecting &#39;start&#39; and &#39;end&#39;. Return array
includes &#39;start&#39; (line[0]) and &#39;end&#39; (line[line.length-1])</p>
</dd>
<dt><a href="#getPointsLines">getPointsLines(lines)</a> ⇒ <code>Array.&lt;Array.&lt;module:matrixObjects~Point&gt;&gt;</code></dt>
<dd><p>Takes an array of arrays containing two points each. Calls getPointsLine for each array of points. Returns an
array of all points captured for each line segment</p>
</dd>
<dt><a href="#lineEndPoint">lineEndPoint(start, length, dir)</a> ⇒ <code><a href="#module_matrixObjects..Point">Point</a></code></dt>
<dd><p>Given a start point, line length, and a direction, generate the end point of the line.</p>
</dd>
<dt><a href="#nextCell">nextCell(pnt, dir)</a> ⇒ <code><a href="#module_matrixObjects..Point">Point</a></code></dt>
<dd><p>Based on provided point and point direction generate next point.</p>
</dd>
<dt><a href="#pointAndCoordinateToDirection">pointAndCoordinateToDirection(pnt, highestCoordinate)</a> ⇒ <code><a href="#module_matrixObjects..Direction">Direction</a></code></dt>
<dd><p>Given a point and the value of the highest coordinate select the corresponding axis which will be the direction
(-1 or 1) to and set the other axis to 0.</p>
</dd>
<dt><a href="#pointDifference">pointDifference(start, end)</a> ⇒ <code><a href="#module_matrixObjects..Point">Point</a></code></dt>
<dd><p>Based on provided point and another point, get a point with the difference between each axis</p>
</dd>
<dt><a href="#pointToDirection">pointToDirection(pnt)</a> ⇒ <code><a href="#module_matrixObjects..Direction">Direction</a></code></dt>
<dd><p>Having a point, convert it to a direction where the axis with the highest coordinate value will be set to -1 or 1.</p>
</dd>
<dt><a href="#pointsToDirection">pointsToDirection(start, end)</a> ⇒ <code><a href="#module_matrixObjects..Direction">Direction</a></code></dt>
<dd><p>Retrieve a directional coordinate value based on two provided points
(directions consist of two zero coordinates and a single coordinate of 1 / -1)</p>
</dd>
<dt><a href="#randDirection">randDirection([useCoordinates])</a> ⇒ <code><a href="#module_matrixObjects..Direction">Direction</a></code></dt>
<dd><p>Get random direction point</p>
</dd>
<dt><a href="#randomStart">randomStart(length, dir, [lengthLimits])</a> ⇒ <code><a href="#module_matrixObjects..Point">Point</a></code></dt>
<dd><p>Generate a random starting point for a line with the provided length and direction.</p>
</dd>
</dl>

<a name="module_jsonDom"></a>

## jsonDom
All of the JSON DOM system functions for creating JSON components.

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [jsonDom](#module_jsonDom)
    * [~root](#module_jsonDom..root)
    * [~previousJsonDom](#module_jsonDom..previousJsonDom) : <code>module</code> \| <code>\*</code>
    * [~noConflict()](#module_jsonDom..noConflict) ⇒ [<code>jsonDom</code>](#module_jsonDom..jsonDom)
    * [~jsonDom](#module_jsonDom..jsonDom) : [<code>jsonDom</code>](#module_jsonDom) \| [<code>jDom</code>](#module_jDom) \| <code>module:matrix</code>

<a name="module_jsonDom..root"></a>

### jsonDom~root
Store a reference to this scope which will be Window if rendered via browser

**Kind**: inner constant of [<code>jsonDom</code>](#module_jsonDom)  
<a name="module_jsonDom..previousJsonDom"></a>

### jsonDom~previousJsonDom : <code>module</code> \| <code>\*</code>
Store reference to any pre-existing module of the same name

**Kind**: inner constant of [<code>jsonDom</code>](#module_jsonDom)  
<a name="module_jsonDom..noConflict"></a>

### jsonDom~noConflict() ⇒ [<code>jsonDom</code>](#module_jsonDom..jsonDom)
Return a reference to this library while preserving the original same-named library

**Kind**: inner method of [<code>jsonDom</code>](#module_jsonDom)  
<a name="module_jsonDom..jsonDom"></a>

### jsonDom~jsonDom : [<code>jsonDom</code>](#module_jsonDom) \| [<code>jDom</code>](#module_jDom) \| <code>module:matrix</code>
All methods exported from this module are encapsulated within jsonDom.

**Kind**: inner typedef of [<code>jsonDom</code>](#module_jsonDom)  
<a name="module_jDom"></a>

## jDom
All of the JSON DOM system functions for creating JSON components.

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [jDom](#module_jDom)
    * [~root](#module_jDom..root)
    * [~previousJDom](#module_jDom..previousJDom) : <code>module</code> \| <code>\*</code>
    * [~noConflict()](#module_jDom..noConflict) ⇒ [<code>jDom</code>](#module_jDom..jDom)
    * [~jDom](#module_jDom..jDom) : [<code>jDom</code>](#module_jDom) \| [<code>domFunctions</code>](#module_domFunctions) \| [<code>domObjects</code>](#module_domObjects)

<a name="module_jDom..root"></a>

### jDom~root
Store a reference to this scope which will be Window if rendered via browser

**Kind**: inner constant of [<code>jDom</code>](#module_jDom)  
<a name="module_jDom..previousJDom"></a>

### jDom~previousJDom : <code>module</code> \| <code>\*</code>
Store reference to any pre-existing module of the same name

**Kind**: inner constant of [<code>jDom</code>](#module_jDom)  
<a name="module_jDom..noConflict"></a>

### jDom~noConflict() ⇒ [<code>jDom</code>](#module_jDom..jDom)
Return a reference to this library while preserving the original same-named library

**Kind**: inner method of [<code>jDom</code>](#module_jDom)  
<a name="module_jDom..jDom"></a>

### jDom~jDom : [<code>jDom</code>](#module_jDom) \| [<code>domFunctions</code>](#module_domFunctions) \| [<code>domObjects</code>](#module_domObjects)
All methods exported from this module are encapsulated within jDom.

**Kind**: inner typedef of [<code>jDom</code>](#module_jDom)  
<a name="module_domFunctions"></a>

## domFunctions
Core Dom management functions

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [domFunctions](#module_domFunctions)
    * _static_
        * [.appendAndReturnChild(child, parent)](#module_domFunctions.appendAndReturnChild) ⇒ [<code>DomItem</code>](#module_domObjects..DomItem)
        * [.appendHtml(item, parent)](#module_domFunctions.appendHtml) ⇒ [<code>DomItem</code>](#module_domObjects..DomItem)
        * [.appendListeners(item, event, listener, args, options)](#module_domFunctions.appendListeners) ⇒ [<code>DomItem</code>](#module_domObjects..DomItem)
        * [.assignListener(trigger, elem, fn, options)](#module_domFunctions.assignListener) ⇒ <code>module:domObjects~listenerFunction</code> \| <code>function</code>
        * [.bindAllListeners(item)](#module_domFunctions.bindAllListeners) ⇒ [<code>DomItem</code>](#module_domObjects..DomItem)
        * [.bindElement(item)](#module_domFunctions.bindElement) ⇒ [<code>DomItem</code>](#module_domObjects..DomItem)
        * [.bindElementListeners(item)](#module_domFunctions.bindElementListeners) ⇒ [<code>DomItem</code>](#module_domObjects..DomItem)
        * [.bindListeners(item)](#module_domFunctions.bindListeners) ⇒ [<code>DomItem</code>](#module_domObjects..DomItem)
        * [.elementChanges(config)](#module_domFunctions.elementChanges) ⇒ [<code>DomItem</code>](#module_domObjects..DomItem)
        * [.elementCompareClassList(element, classes)](#module_domFunctions.elementCompareClassList) ⇒ <code>Object.&lt;string, number&gt;</code> \| <code>\*</code>
        * [.elementHasAttribute(element, key, attr)](#module_domFunctions.elementHasAttribute) ⇒ <code>boolean</code> \| <code>Object.&lt;string, number&gt;</code>
        * [.gatherChildItems(item, test)](#module_domFunctions.gatherChildItems) ⇒ [<code>Array.&lt;DomItem&gt;</code>](#module_domObjects..DomItem)
        * [.generateElement(config)](#module_domFunctions.generateElement) ⇒ [<code>DomItem</code>](#module_domObjects..DomItem)
        * [.getChildTest(attr, value)](#module_domFunctions.getChildTest) ⇒ [<code>testChildItem</code>](#module_domFunctions..testChildItem)
        * [.getChildrenByClass()](#module_domFunctions.getChildrenByClass) ⇒ [<code>Array.&lt;DomItem&gt;</code>](#module_domObjects..DomItem)
        * [.getChildrenByName()](#module_domFunctions.getChildrenByName) ⇒ [<code>Array.&lt;DomItem&gt;</code>](#module_domObjects..DomItem)
        * [.getChildrenFromAttribute(attr, value, item)](#module_domFunctions.getChildrenFromAttribute) ⇒ [<code>Array.&lt;DomItem&gt;</code>](#module_domObjects..DomItem)
        * [.getParentsByClass()](#module_domFunctions.getParentsByClass) ⇒ <code>Array</code>
        * [.getParentsByName()](#module_domFunctions.getParentsByName) ⇒ <code>Array</code>
        * [.getParentsByTagName()](#module_domFunctions.getParentsByTagName) ⇒ <code>Array</code>
        * [.getParentsFromAttribute(attr, value, item)](#module_domFunctions.getParentsFromAttribute) ⇒ <code>Array</code>
        * [.getTopParentItem(item)](#module_domFunctions.getTopParentItem) ⇒ <code>module:domObjects~DomItemRoot</code>
        * [.listenerOptions(options)](#module_domFunctions.listenerOptions) ⇒ <code>boolean</code>
        * [.registerListener(listener, [name], [parent])](#module_domFunctions.registerListener) ⇒ <code>Object.&lt;string, module:domObjects~listenerFunction&gt;</code>
        * [.registerListeners(listeners, [parent])](#module_domFunctions.registerListeners) ⇒ <code>module:domObjects~DomItemRoot</code> \| <code>Object</code>
        * [.removeChild(item, parent)](#module_domFunctions.removeChild) ⇒ [<code>Array.&lt;DomItem&gt;</code>](#module_domObjects..DomItem)
        * [.renderHtml(item, parent)](#module_domFunctions.renderHtml) ⇒ [<code>DomItem</code>](#module_domObjects..DomItem)
        * [.retrieveListener(listenerName, [parent])](#module_domFunctions.retrieveListener) ⇒ <code>module:domObjects~listenerFunction</code> \| <code>function</code> \| <code>Object</code>
        * [.retrieveParentItem(parent)](#module_domFunctions.retrieveParentItem) ⇒ [<code>DomItemBody</code>](#module_domObjects..DomItemBody) \| [<code>DomItem</code>](#module_domObjects..DomItem)
        * [.setAndReturnAttribute(config, name, value)](#module_domFunctions.setAndReturnAttribute) ⇒ <code>string</code>
        * [.setAttribute(config, name, value)](#module_domFunctions.setAttribute) ⇒ [<code>DomItem</code>](#module_domObjects..DomItem)
        * [.updateElement(config)](#module_domFunctions.updateElement) ⇒ [<code>DomItem</code>](#module_domObjects..DomItem)
        * [.updateElements(config)](#module_domFunctions.updateElements) ⇒ [<code>DomItem</code>](#module_domObjects..DomItem)
    * _inner_
        * [~testChildItem](#module_domFunctions..testChildItem) ⇒ [<code>Array.&lt;DomItem&gt;</code>](#module_domObjects..DomItem)

<a name="module_domFunctions.appendAndReturnChild"></a>

### domFunctions.appendAndReturnChild(child, parent) ⇒ [<code>DomItem</code>](#module_domObjects..DomItem)
Provide a DomItem to be appended to a parent item, return the DomItem.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| child | [<code>DomItem</code>](#module_domObjects..DomItem) | A DomItem to be appended |
| parent | [<code>DomItem</code>](#module_domObjects..DomItem) | A parent item to have a new child appended |

<a name="module_domFunctions.appendHtml"></a>

### domFunctions.appendHtml(item, parent) ⇒ [<code>DomItem</code>](#module_domObjects..DomItem)
Append a new DomItem which has the element generated.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_domObjects..DomItem) | A new DomItem to append |
| parent | [<code>DomItem</code>](#module_domObjects..DomItem) | The parent to have DomItems appended |

<a name="module_domFunctions.appendListeners"></a>

### domFunctions.appendListeners(item, event, listener, args, options) ⇒ [<code>DomItem</code>](#module_domObjects..DomItem)
When there may be extra data needed for the event listener function call, this function may be used as a helperto pass the additional data. Also, if it is desirable to add event listeners during run-time, this function can beused to achieve this.WARNING: This is a recursive function.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| item | [<code>DomItem</code>](#module_domObjects..DomItem) |  | The DomItem which will have its eventListeners updated. |
| event | <code>string</code> |  | The string name of the event trigger type to be added. |
| listener | <code>string</code> |  | The name of the function to be called once the event is triggered. |
| args | <code>Object</code> |  | Additional arguments to be used in the listener function. |
| options | [<code>EventListenerOptions</code>](#module_domObjects..EventListenerOptions) | <code>false</code> | The strategy used when the event is triggered. |

<a name="module_domFunctions.assignListener"></a>

### domFunctions.assignListener(trigger, elem, fn, options) ⇒ <code>module:domObjects~listenerFunction</code> \| <code>function</code>
Provide compatibility for assigning listeners.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| trigger | <code>HTMLElementEventMap</code> | The name of the event which will trigger the listenerFunction on the element. |
| elem | <code>HTMLElement</code> | An element to append the listener onto |
| fn | <code>module:domObjects~listenerFunction</code> \| <code>function</code> | The function which will be invoked when the event is triggered |
| options | [<code>EventListenerOptions</code>](#module_domObjects..EventListenerOptions) | Additional options to how the event will be fired |

<a name="module_domFunctions.bindAllListeners"></a>

### domFunctions.bindAllListeners(item) ⇒ [<code>DomItem</code>](#module_domObjects..DomItem)
Based on the eventListeners property of the provided item, bind the listeners to the associated element propertyfor each item in the domObjects.DomItem structure.WARNING: This is a recursive function.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_domObjects..DomItem) | The DomItem with an associated HTMLElement to have a listener assigned |

<a name="module_domFunctions.bindElement"></a>

### domFunctions.bindElement(item) ⇒ [<code>DomItem</code>](#module_domObjects..DomItem)
Generate HTML element data for a provided DomItem

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_domObjects..DomItem) | The DomItem needing element to be generated |

<a name="module_domFunctions.bindElementListeners"></a>

### domFunctions.bindElementListeners(item) ⇒ [<code>DomItem</code>](#module_domObjects..DomItem)
Receive a DomItem with eventListeners and apply the event listeners onto the Dom element.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_domObjects..DomItem) | The DomItem which has eventListeners to apply to its element |

<a name="module_domFunctions.bindListeners"></a>

### domFunctions.bindListeners(item) ⇒ [<code>DomItem</code>](#module_domObjects..DomItem)
Based on the eventListeners property of the provided item, bind thelisteners to the associated element property for the provided domObjects.DomItem.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_domObjects..DomItem) | The DomItem which may have eventListeners to apply to its element |

<a name="module_domFunctions.elementChanges"></a>

### domFunctions.elementChanges(config) ⇒ [<code>DomItem</code>](#module_domObjects..DomItem)
Given a domObjects.DomItem as config, this function will return the changes to be appliedto the stored element property.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| config | [<code>DomItem</code>](#module_domObjects..DomItem) | The DomItem having config changes to be applied to its element |

<a name="module_domFunctions.elementCompareClassList"></a>

### domFunctions.elementCompareClassList(element, classes) ⇒ <code>Object.&lt;string, number&gt;</code> \| <code>\*</code>
Check if a class exists on the element, return object with keys for each class and a -1, 0, 1 difference indicator.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> | Provide an element to check classes on. |
| classes | <code>string</code> | A string of classes (like the content of the 'class' attribute) to be compared |

<a name="module_domFunctions.elementHasAttribute"></a>

### domFunctions.elementHasAttribute(element, key, attr) ⇒ <code>boolean</code> \| <code>Object.&lt;string, number&gt;</code>
Check if the provided Element has the provided attributes.Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> | Receive the element to be assessed |
| key | <code>string</code> | The attribute name to search for |
| attr | <code>string</code> \| <code>Object</code> | The expected value of the attribute to compare against |

<a name="module_domFunctions.gatherChildItems"></a>

### domFunctions.gatherChildItems(item, test) ⇒ [<code>Array.&lt;DomItem&gt;</code>](#module_domObjects..DomItem)
A selector function for retrieving existing child domObjects.DomItems from the given parent item.This function will check all the children starting from and including item, and run the test function on eachchild encountered. The return array contains children returned from the test from all levels.WARNING: This is a recursive function.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_domObjects..DomItem) | The DomItem which may have child items matching the attribute criteria |
| test | [<code>testChildItem</code>](#module_domFunctions..testChildItem) | Assess each child, and return the ones which qualify |

<a name="module_domFunctions.generateElement"></a>

### domFunctions.generateElement(config) ⇒ [<code>DomItem</code>](#module_domObjects..DomItem)
Create an HTML element based on the provided attributes and return the element as an Object.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| config | [<code>DomItem</code>](#module_domObjects..DomItem) | The DomItem requiring matching HTML element property |

<a name="module_domFunctions.getChildTest"></a>

### domFunctions.getChildTest(attr, value) ⇒ [<code>testChildItem</code>](#module_domFunctions..testChildItem)
Retrieve the [testChildItem](#module_domFunctions..testChildItem) function by providing an attribute and value to check.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| attr | <code>string</code> | Provide the attribute name to be searched |
| value | <code>\*</code> | The attribute value to be compared |

<a name="module_domFunctions.getChildrenByClass"></a>

### domFunctions.getChildrenByClass() ⇒ [<code>Array.&lt;DomItem&gt;</code>](#module_domObjects..DomItem)
Helper for getting all domObjects.DomItems starting at parent and having specified className attribute

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  
<a name="module_domFunctions.getChildrenByName"></a>

### domFunctions.getChildrenByName() ⇒ [<code>Array.&lt;DomItem&gt;</code>](#module_domObjects..DomItem)
Helper for getting all domObjects.DomItems starting at parent and having specified name attribute

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  
<a name="module_domFunctions.getChildrenFromAttribute"></a>

### domFunctions.getChildrenFromAttribute(attr, value, item) ⇒ [<code>Array.&lt;DomItem&gt;</code>](#module_domObjects..DomItem)
A selector function for retrieving existing child domObjects.DomItems from the given parent item.This function will check all the children starting from item, and scan the attributesproperty for matches. The returned array contains children matching from all levels.WARNING: This calls a recursive function.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| attr | <code>string</code> | Provide the attribute name to be searched |
| value | <code>\*</code> | The attribute value to be compared |
| item | [<code>DomItem</code>](#module_domObjects..DomItem) | The DomItem which may have child items matching the attribute criteria |

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
Helper for getting all domObjects.DomItems starting at child and having specified tagName

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  
<a name="module_domFunctions.getParentsFromAttribute"></a>

### domFunctions.getParentsFromAttribute(attr, value, item) ⇒ <code>Array</code>
A selector function for retrieving existing child domObjects.DomItems from the given parent item.This function will check all the children starting from item, and scan the attributesproperty for matches. The return array contains children matching from all levels.WARNING: This is a recursive function.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| attr | <code>string</code> | Provide the attribute name to be searched |
| value | <code>\*</code> | The attribute value to be compared |
| item | [<code>DomItem</code>](#module_domObjects..DomItem) | The DomItem which may have parent items matching the attribute criteria |

<a name="module_domFunctions.getTopParentItem"></a>

### domFunctions.getTopParentItem(item) ⇒ <code>module:domObjects~DomItemRoot</code>
Get the upper parentItem for the provided child. (usually this is a documentItem reference)WARNING: This is a recursive function.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_domObjects..DomItem) | The DomItem which we want the highest parent item of |

<a name="module_domFunctions.listenerOptions"></a>

### domFunctions.listenerOptions(options) ⇒ <code>boolean</code>
Provide compatibility for using the options parameter of addEventListener

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| options | [<code>EventListenerOptions</code>](#module_domObjects..EventListenerOptions) | An object or boolean with the listener options |

<a name="module_domFunctions.registerListener"></a>

### domFunctions.registerListener(listener, [name], [parent]) ⇒ <code>Object.&lt;string, module:domObjects~listenerFunction&gt;</code>
Register a single listener function as part of the root domObjects.DomItem.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| listener | <code>module:domObjects~listenerFunction</code> \| <code>function</code> | Provide a function which will be called when a Dom event is triggered. |
| [name] | <code>string</code> | The name of the listener to be used. |
| [parent] | <code>module:domObjects~DomItemRoot</code> \| <code>Object</code> | The parent DomItem which is DomItemRoot which stores has eventListeners property. |

<a name="module_domFunctions.registerListeners"></a>

### domFunctions.registerListeners(listeners, [parent]) ⇒ <code>module:domObjects~DomItemRoot</code> \| <code>Object</code>
Register multiple listeners from an array of functions.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| listeners | <code>Array.&lt;(module:domObjects~listenerFunction\|function())&gt;</code> | An array of functions to be used as the registered event listeners. |
| [parent] | <code>module:domObjects~DomItemRoot</code> \| <code>Object</code> | The parent DomItem which is DomItemRoot which stores has eventListeners property. |

<a name="module_domFunctions.removeChild"></a>

### domFunctions.removeChild(item, parent) ⇒ [<code>Array.&lt;DomItem&gt;</code>](#module_domObjects..DomItem)
Reverse of appendHtml, remove a DomItem and have the associated element removed.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_domObjects..DomItem) | The DomItem with HTMLElement to be removed |
| parent | [<code>DomItem</code>](#module_domObjects..DomItem) | The parent of the items |

<a name="module_domFunctions.renderHtml"></a>

### domFunctions.renderHtml(item, parent) ⇒ [<code>DomItem</code>](#module_domObjects..DomItem)
This is a shortcut for building the specified HTML elements and appending them to the Domwith associated listeners.The final argument is specific for adding event listeners with options.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_domObjects..DomItem) | The DomItem that we want to render the element for |
| parent | <code>module:domObjects~DomItemRoot</code> | The Base Dom item which is the parent of all the items |

<a name="module_domFunctions.retrieveListener"></a>

### domFunctions.retrieveListener(listenerName, [parent]) ⇒ <code>module:domObjects~listenerFunction</code> \| <code>function</code> \| <code>Object</code>
Based on the provided function / listener name, retrieve the associated function from the root domObjects.DomItem

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| listenerName | <code>string</code> | The name of one of the registered listener functions. |
| [parent] | <code>module:domObjects~DomItemRoot</code> \| <code>Object</code> | The parent DomItem which is DomItemRoot which stores has eventListeners property. |

<a name="module_domFunctions.retrieveParentItem"></a>

### domFunctions.retrieveParentItem(parent) ⇒ [<code>DomItemBody</code>](#module_domObjects..DomItemBody) \| [<code>DomItem</code>](#module_domObjects..DomItem)
Simplify detecting the parent item which can be appended to, whether root, or just a parent at any part of the tree

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| parent | <code>module:domObjects~DomItemRoot</code> \| [<code>DomItem</code>](#module_domObjects..DomItem) | A parent DomItem which may or may not have a body |

<a name="module_domFunctions.setAndReturnAttribute"></a>

### domFunctions.setAndReturnAttribute(config, name, value) ⇒ <code>string</code>
Set an attribute on the element within a DomItem, then return the attribute.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| config | [<code>DomItem</code>](#module_domObjects..DomItem) | The DomItem having config changes to be applied to its element |
| name | <code>string</code> | The attribute name to be updated |
| value | <code>string</code> | The new value to be applied to the attribute |

<a name="module_domFunctions.setAttribute"></a>

### domFunctions.setAttribute(config, name, value) ⇒ [<code>DomItem</code>](#module_domObjects..DomItem)
Set an attribute on the element within a DomItem, then return the config data.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| config | [<code>DomItem</code>](#module_domObjects..DomItem) | The DomItem having config changes to be applied to its element |
| name | <code>string</code> | The attribute name to be updated |
| value | <code>string</code> | The new value to be applied to the attribute |

<a name="module_domFunctions.updateElement"></a>

### domFunctions.updateElement(config) ⇒ [<code>DomItem</code>](#module_domObjects..DomItem)
Update a single objects.DomItem element with the provided attributes / style / elementProperties

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| config | [<code>DomItem</code>](#module_domObjects..DomItem) | The DomItem having config changes to be applied to its element |

<a name="module_domFunctions.updateElements"></a>

### domFunctions.updateElements(config) ⇒ [<code>DomItem</code>](#module_domObjects..DomItem)
Generate HTML element data for each object in the matrixWARNING: This is a recursive function.

**Kind**: static method of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| config | [<code>DomItem</code>](#module_domObjects..DomItem) | The DomItem having child DomItems with config changes to be applied |

<a name="module_domFunctions..testChildItem"></a>

### domFunctions~testChildItem ⇒ [<code>Array.&lt;DomItem&gt;</code>](#module_domObjects..DomItem)
To be used with gatherChildItems which will start at item and recurse over all child items, this testwill then choose which child items will be returned as the result of the test.

**Kind**: inner typedef of [<code>domFunctions</code>](#module_domFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_domObjects..DomItem) \| <code>Object</code> | The DomItem is the child being tested |
| gatheredResults | [<code>Array.&lt;DomItem&gt;</code>](#module_domObjects..DomItem) | All of the child items gathered based on the test |

<a name="module_jDom"></a>

## jDom
Main module for JSON DOM.

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [jDom](#module_jDom)
    * [~root](#module_jDom..root)
    * [~previousJDom](#module_jDom..previousJDom) : <code>module</code> \| <code>\*</code>
    * [~noConflict()](#module_jDom..noConflict) ⇒ [<code>jDom</code>](#module_jDom..jDom)
    * [~jDom](#module_jDom..jDom) : [<code>jDom</code>](#module_jDom) \| [<code>domFunctions</code>](#module_domFunctions) \| [<code>domObjects</code>](#module_domObjects)

<a name="module_jDom..root"></a>

### jDom~root
Store a reference to this scope which will be Window if rendered via browser

**Kind**: inner constant of [<code>jDom</code>](#module_jDom)  
<a name="module_jDom..previousJDom"></a>

### jDom~previousJDom : <code>module</code> \| <code>\*</code>
Store reference to any pre-existing module of the same name

**Kind**: inner constant of [<code>jDom</code>](#module_jDom)  
<a name="module_jDom..noConflict"></a>

### jDom~noConflict() ⇒ [<code>jDom</code>](#module_jDom..jDom)
Return a reference to this library while preserving the original same-named library

**Kind**: inner method of [<code>jDom</code>](#module_jDom)  
<a name="module_jDom..jDom"></a>

### jDom~jDom : [<code>jDom</code>](#module_jDom) \| [<code>domFunctions</code>](#module_domFunctions) \| [<code>domObjects</code>](#module_domObjects)
All methods exported from this module are encapsulated within jDom.

**Kind**: inner typedef of [<code>jDom</code>](#module_jDom)  
<a name="module_domObjects"></a>

## domObjects
Core objects for representing the DOM in JSON.

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [domObjects](#module_domObjects)
    * _static_
        * [.documentItem](#module_domObjects.documentItem) : <code>module:domObjects~DomItemRoot</code>
        * [.createDomItem([item])](#module_domObjects.createDomItem) ⇒ [<code>DomItem</code>](#module_domObjects..DomItem)
        * [.documentDomItem(listeners, [rootItem])](#module_domObjects.documentDomItem) ⇒ <code>module:domObjects~DomItemRoot</code> \| [<code>DomItem</code>](#module_domObjects..DomItem)
        * [.initChildren()](#module_domObjects.initChildren) ⇒ <code>Array.&lt;(module:domObjects~DomItemHead\|module:domObjects~DomItemBody)&gt;</code>
        * [.initRoot(children, listeners)](#module_domObjects.initRoot) ⇒ <code>module:domObjects~DomItemRoot</code> \| [<code>DomItem</code>](#module_domObjects..DomItem)
        * [.listenerFunction](#module_domObjects.listenerFunction) : <code>function</code>
    * _inner_
        * [~UseCapture](#module_domObjects..UseCapture) : <code>boolean</code>
        * [~OptionsObject](#module_domObjects..OptionsObject) : <code>Object</code>
        * [~EventListenerOptions](#module_domObjects..EventListenerOptions) : [<code>OptionsObject</code>](#module_domObjects..OptionsObject) \| [<code>UseCapture</code>](#module_domObjects..UseCapture)
        * [~EventListener](#module_domObjects..EventListener) : <code>Object</code>
        * [~DomItem](#module_domObjects..DomItem) : <code>Object</code>
        * [~DomItemHead](#module_domObjects..DomItemHead) : [<code>DomItem</code>](#module_domObjects..DomItem)
        * [~DomItemBody](#module_domObjects..DomItemBody) : [<code>DomItem</code>](#module_domObjects..DomItem)

<a name="module_domObjects.documentItem"></a>

### domObjects.documentItem : <code>module:domObjects~DomItemRoot</code>
Create reference for storing document changes

**Kind**: static property of [<code>domObjects</code>](#module_domObjects)  
<a name="module_domObjects.createDomItem"></a>

### domObjects.createDomItem([item]) ⇒ [<code>DomItem</code>](#module_domObjects..DomItem)
This is the basic Object for representing the Dom in a virtual perspective. All incoming attributes will be mergedto the specified format.

**Kind**: static method of [<code>domObjects</code>](#module_domObjects)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [item] | <code>Object</code> | <code>{}</code> | DomItem-like object to be formatted as DomItem |

<a name="module_domObjects.documentDomItem"></a>

### domObjects.documentDomItem(listeners, [rootItem]) ⇒ <code>module:domObjects~DomItemRoot</code> \| [<code>DomItem</code>](#module_domObjects..DomItem)
Return a DomItem reference to the document. The rootItem argument is a system variable and not necessary toimplement.

**Kind**: static method of [<code>domObjects</code>](#module_domObjects)  

| Param | Type | Description |
| --- | --- | --- |
| listeners | <code>Object.&lt;string, module:domObjects~listenerFunction&gt;</code> | An object of all event listeners to be registered in the Dom |
| [rootItem] | <code>module:domObjects~DomItemRoot</code> \| [<code>DomItem</code>](#module_domObjects..DomItem) | This is a reference to DomItemRoot which will be defaulted with [initRoot](initRoot) |

<a name="module_domObjects.initChildren"></a>

### domObjects.initChildren() ⇒ <code>Array.&lt;(module:domObjects~DomItemHead\|module:domObjects~DomItemBody)&gt;</code>
Initiate the children of Root / DocumentItem. This is a helper for [module:domObjects~documentDomItem](module:domObjects~documentDomItem).

**Kind**: static method of [<code>domObjects</code>](#module_domObjects)  
<a name="module_domObjects.initRoot"></a>

### domObjects.initRoot(children, listeners) ⇒ <code>module:domObjects~DomItemRoot</code> \| [<code>DomItem</code>](#module_domObjects..DomItem)
Initiate the Root for DocumentItem. This is primary a helper for [documentDomItem](documentDomItem).

**Kind**: static method of [<code>domObjects</code>](#module_domObjects)  

| Param | Type | Description |
| --- | --- | --- |
| children | <code>Array.&lt;(module:domObjects~DomItemHead\|module:domObjects~DomItemBody)&gt;</code> | Provide an array of Head and Body (usually via [initChildren](initChildren)) |
| listeners | <code>Object.&lt;string, module:domObjects~listenerFunction&gt;</code> | An object of all event listeners to be registered in the Dom |

<a name="module_domObjects.listenerFunction"></a>

### domObjects.listenerFunction : <code>function</code>
This is the standard definition of a listenerFunction to be used

**Kind**: static typedef of [<code>domObjects</code>](#module_domObjects)  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>Event</code> | The event object passed to the listener |
| target | [<code>DomItem</code>](#module_domObjects..DomItem) | The element which triggered the event |
| [...args] | <code>\*</code> | Optional args as required by the listener |

<a name="module_domObjects..UseCapture"></a>

### domObjects~UseCapture : <code>boolean</code>
A Boolean indicating whether events of this type will be dispatched to the registered listerFunction before beingdispatched to any EventTarget beneath it in the Dom tree.

**Kind**: inner typedef of [<code>domObjects</code>](#module_domObjects)  
<a name="module_domObjects..OptionsObject"></a>

### domObjects~OptionsObject : <code>Object</code>
OptionsObject defines the structure for the options to be passed to addEventListener

**Kind**: inner typedef of [<code>domObjects</code>](#module_domObjects)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| capture | <code>boolean</code> | Indicate that events of this type will be dispatched to the registered listenerFunction before being dispatched to any EventTarget beneath it in the Dom tree. |
| once | <code>boolean</code> | Indicate that the listenerFunction should be invoked at most once after being added. If 'true', the listenerFunction would be automatically removed when invoked. |
| passive | <code>boolean</code> | Indicate that, if 'true', indicates that the listenerFunction will never call preventDefault(). If preventDefault() is called, the user agent will do nothing with it. |

<a name="module_domObjects..EventListenerOptions"></a>

### domObjects~EventListenerOptions : [<code>OptionsObject</code>](#module_domObjects..OptionsObject) \| [<code>UseCapture</code>](#module_domObjects..UseCapture)
EventListenerOptions is either a boolean as UseCapture or an Object as OptionsObject

**Kind**: inner typedef of [<code>domObjects</code>](#module_domObjects)  
<a name="module_domObjects..EventListener"></a>

### domObjects~EventListener : <code>Object</code>
An EventListener Object to be appended to the element within the DomItem

**Kind**: inner typedef of [<code>domObjects</code>](#module_domObjects)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| listenerFunc | <code>string</code> | A string function name matching an existing [module:domObjects~listenerFunction](module:domObjects~listenerFunction). |
| listenerArgs | <code>Object</code> | Additional args required for the listener function |
| listenerOptions | [<code>EventListenerOptions</code>](#module_domObjects..EventListenerOptions) | Provides support for options parameter of addEventListener, or false for default |

<a name="module_domObjects..DomItem"></a>

### domObjects~DomItem : <code>Object</code>
DomItem defines the structure for a single element in the Dom

**Kind**: inner typedef of [<code>domObjects</code>](#module_domObjects)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| tagName | <code>string</code> | This is any valid HTMLElement tagName |
| attributes | <code>Object.&lt;string, (string\|Object)&gt;</code> | All potential HTML element attributes can be defined here (including the defaulted style object) |
| element | <code>Object</code> \| <code>HTMLElement</code> | A reference to an existing HTML element will be stored here (default empty object) |
| eventListeners | <code>Object.&lt;Event, module:domObjects~EventListener&gt;</code> | An object holding all events to be registered for the associated element |
| parentItem | [<code>DomItem</code>](#module_domObjects..DomItem) | A reference to the parent of this object |
| children | [<code>Array.&lt;DomItem&gt;</code>](#module_domObjects..DomItem) | A reference to an array of child objects |

<a name="module_domObjects..DomItemHead"></a>

### domObjects~DomItemHead : [<code>DomItem</code>](#module_domObjects..DomItem)
DomItemHead defines the structure for a single element in the Dom

**Kind**: inner typedef of [<code>domObjects</code>](#module_domObjects)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [tagName] | <code>string</code> | <code>&quot;head&quot;</code> | This is set to the string head referring to the HTML element of the same name |
| attributes | <code>Object.&lt;string, (string\|Object)&gt;</code> |  | All potential HTML element attributes can be defined here |
| element | <code>HTMLHeadElement</code> |  | A reference to the HTML head element |
| children | [<code>Array.&lt;DomItem&gt;</code>](#module_domObjects..DomItem) |  | A reference to an array of child objects |

<a name="module_domObjects..DomItemBody"></a>

### domObjects~DomItemBody : [<code>DomItem</code>](#module_domObjects..DomItem)
DomItemBody defines the structure for a single element in the Dom

**Kind**: inner typedef of [<code>domObjects</code>](#module_domObjects)  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [tagName] | <code>string</code> | <code>&quot;body&quot;</code> | This is set to the string body referring to the HTML element of the same name |
| attributes | <code>Object.&lt;string, (string\|Object)&gt;</code> |  | All potential HTML element attributes can be defined here |
| element | <code>HTMLBodyElement</code> |  | A reference to the HTML body element |
| children | [<code>Array.&lt;DomItem&gt;</code>](#module_domObjects..DomItem) |  | A reference to an array of child objects |

<a name="module_jDomMatrix"></a>

## jDomMatrix
Add matrix ability using JSON DOM components

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [jDomMatrix](#module_jDomMatrix)
    * [~root](#module_jDomMatrix..root)
    * [~previousJDomMatrix](#module_jDomMatrix..previousJDomMatrix) : <code>module</code> \| <code>\*</code>
    * [~noConflict()](#module_jDomMatrix..noConflict) ⇒ [<code>jDomMatrix</code>](#module_jDomMatrix..jDomMatrix)
    * [~jDomMatrix](#module_jDomMatrix..jDomMatrix) : [<code>jDomMatrix</code>](#module_jDomMatrix) \| [<code>matrixFunctions</code>](#module_matrixFunctions) \| [<code>matrixObjects</code>](#module_matrixObjects)

<a name="module_jDomMatrix..root"></a>

### jDomMatrix~root
Store a reference to this scope which will be Window if rendered via browser

**Kind**: inner constant of [<code>jDomMatrix</code>](#module_jDomMatrix)  
<a name="module_jDomMatrix..previousJDomMatrix"></a>

### jDomMatrix~previousJDomMatrix : <code>module</code> \| <code>\*</code>
Store reference to any pre-existing module of the same name

**Kind**: inner constant of [<code>jDomMatrix</code>](#module_jDomMatrix)  
<a name="module_jDomMatrix..noConflict"></a>

### jDomMatrix~noConflict() ⇒ [<code>jDomMatrix</code>](#module_jDomMatrix..jDomMatrix)
Return a reference to this library while preserving the original same-named library

**Kind**: inner method of [<code>jDomMatrix</code>](#module_jDomMatrix)  
<a name="module_jDomMatrix..jDomMatrix"></a>

### jDomMatrix~jDomMatrix : [<code>jDomMatrix</code>](#module_jDomMatrix) \| [<code>matrixFunctions</code>](#module_matrixFunctions) \| [<code>matrixObjects</code>](#module_matrixObjects)
All methods exported from this module are encapsulated within jDomMatrix.

**Kind**: inner typedef of [<code>jDomMatrix</code>](#module_jDomMatrix)  
<a name="module_matrixFunctions"></a>

## matrixFunctions
All of the functionalHelpers matrix functions for working with a grid of points.

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [matrixFunctions](#module_matrixFunctions)
    * [~testPointsBetween(start, end, matrix, func, [inclusive])](#module_matrixFunctions..testPointsBetween) ⇒ <code>Object.&lt;string, Array.&lt;module:matrixObjects~Point&gt;&gt;</code>
    * [~testPointStatus](#module_matrixFunctions..testPointStatus) ⇒ <code>boolean</code>

<a name="module_matrixFunctions..testPointsBetween"></a>

### matrixFunctions~testPointsBetween(start, end, matrix, func, [inclusive]) ⇒ <code>Object.&lt;string, Array.&lt;module:matrixObjects~Point&gt;&gt;</code>
Given a start and end point, test the points between with the provided function. Return the points as part of trueand / or false properties based on the test.

**Kind**: inner method of [<code>matrixFunctions</code>](#module_matrixFunctions)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Point</code>](#module_matrixObjects..Point) |  | The beginning point to check. |
| end | [<code>Point</code>](#module_matrixObjects..Point) |  | The terminating point to check between. |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) |  | The grid of points all the points can exist on. |
| func | [<code>testPointStatus</code>](#module_matrixFunctions..testPointStatus) |  | The test function which will return true or false. |
| [inclusive] | <code>boolean</code> | <code>true</code> | Choose whether to include or exclude the start and end points in the results. |

<a name="module_matrixFunctions..testPointStatus"></a>

### matrixFunctions~testPointStatus ⇒ <code>boolean</code>
Function that produces a property of the new Object, taking three arguments

**Kind**: inner typedef of [<code>matrixFunctions</code>](#module_matrixFunctions)  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>MatrixColumn</code>](#module_matrixObjects..MatrixColumn) \| <code>Object</code> | A point which may have some status. |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) \| <code>Object</code> | A matrix of points to find the point within. |

<a name="module_jDomMatrix"></a>

## jDomMatrix
Add matrix ability using JSON DOM components

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [jDomMatrix](#module_jDomMatrix)
    * [~root](#module_jDomMatrix..root)
    * [~previousJDomMatrix](#module_jDomMatrix..previousJDomMatrix) : <code>module</code> \| <code>\*</code>
    * [~noConflict()](#module_jDomMatrix..noConflict) ⇒ [<code>jDomMatrix</code>](#module_jDomMatrix..jDomMatrix)
    * [~jDomMatrix](#module_jDomMatrix..jDomMatrix) : [<code>jDomMatrix</code>](#module_jDomMatrix) \| [<code>matrixFunctions</code>](#module_matrixFunctions) \| [<code>matrixObjects</code>](#module_matrixObjects)

<a name="module_jDomMatrix..root"></a>

### jDomMatrix~root
Store a reference to this scope which will be Window if rendered via browser

**Kind**: inner constant of [<code>jDomMatrix</code>](#module_jDomMatrix)  
<a name="module_jDomMatrix..previousJDomMatrix"></a>

### jDomMatrix~previousJDomMatrix : <code>module</code> \| <code>\*</code>
Store reference to any pre-existing module of the same name

**Kind**: inner constant of [<code>jDomMatrix</code>](#module_jDomMatrix)  
<a name="module_jDomMatrix..noConflict"></a>

### jDomMatrix~noConflict() ⇒ [<code>jDomMatrix</code>](#module_jDomMatrix..jDomMatrix)
Return a reference to this library while preserving the original same-named library

**Kind**: inner method of [<code>jDomMatrix</code>](#module_jDomMatrix)  
<a name="module_jDomMatrix..jDomMatrix"></a>

### jDomMatrix~jDomMatrix : [<code>jDomMatrix</code>](#module_jDomMatrix) \| [<code>matrixFunctions</code>](#module_matrixFunctions) \| [<code>matrixObjects</code>](#module_matrixObjects)
All methods exported from this module are encapsulated within jDomMatrix.

**Kind**: inner typedef of [<code>jDomMatrix</code>](#module_jDomMatrix)  
<a name="module_matrixObjects"></a>

## matrixObjects
Core Matrix objects for representing DOM grid in JSON.

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [matrixObjects](#module_matrixObjects)
    * [~MatrixColumn](#module_matrixObjects..MatrixColumn) : [<code>DomItem</code>](#module_domObjects..DomItem) \| [<code>MatrixTile</code>](#module_matrixObjects..MatrixTile)
    * [~MatrixRow](#module_matrixObjects..MatrixRow) : [<code>DomItem</code>](#module_domObjects..DomItem)
    * [~MatrixLayer](#module_matrixObjects..MatrixLayer) : [<code>DomItem</code>](#module_domObjects..DomItem)
    * [~Matrix](#module_matrixObjects..Matrix) : [<code>DomItem</code>](#module_domObjects..DomItem)
    * [~axis](#module_matrixObjects..axis) : <code>string</code>
    * [~coordinate](#module_matrixObjects..coordinate) : <code>number</code>
    * [~Point](#module_matrixObjects..Point) : <code>Object.&lt;module:matrixObjects~axis, module:matrixObjects~coordinate&gt;</code>
    * [~Direction](#module_matrixObjects..Direction) : [<code>Point</code>](#module_matrixObjects..Point)
    * [~MatrixTile](#module_matrixObjects..MatrixTile) : <code>Object.&lt;string, module:matrixObjects~Point&gt;</code>

<a name="module_matrixObjects..MatrixColumn"></a>

### matrixObjects~MatrixColumn : [<code>DomItem</code>](#module_domObjects..DomItem) \| [<code>MatrixTile</code>](#module_matrixObjects..MatrixTile)
MatrixColumn is a DomItem which represents the x axis and also stores [MatrixTile](#module_matrixObjects..MatrixTile)

**Kind**: inner typedef of [<code>matrixObjects</code>](#module_matrixObjects)  
<a name="module_matrixObjects..MatrixRow"></a>

### matrixObjects~MatrixRow : [<code>DomItem</code>](#module_domObjects..DomItem)
MatrixRow is the parent of a group of [MatrixTile](#module_matrixObjects..MatrixTile)

**Kind**: inner typedef of [<code>matrixObjects</code>](#module_matrixObjects)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| axis | [<code>axis</code>](#module_matrixObjects..axis) | The axis will be 'y' |
| children | [<code>Array.&lt;MatrixColumn&gt;</code>](#module_matrixObjects..MatrixColumn) | all of the MatrixTile items as part of this MatrixRow |

<a name="module_matrixObjects..MatrixLayer"></a>

### matrixObjects~MatrixLayer : [<code>DomItem</code>](#module_domObjects..DomItem)
MatrixLayer is the parent of a group of [MatrixTile](#module_matrixObjects..MatrixTile)

**Kind**: inner typedef of [<code>matrixObjects</code>](#module_matrixObjects)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| axis | [<code>axis</code>](#module_matrixObjects..axis) | The axis will be 'y' |
| children | [<code>Array.&lt;MatrixRow&gt;</code>](#module_matrixObjects..MatrixRow) | all of the MatrixRow items as part of this MatrixLayer |

<a name="module_matrixObjects..Matrix"></a>

### matrixObjects~Matrix : [<code>DomItem</code>](#module_domObjects..DomItem)
Matrix is a multi-level [DomItem](#module_domObjects..DomItem) which is used to visually represent amathematical grid / matrix.The matrix consists of four DomItem levels, at the top tier is the Matrix container with class matrix.The second tier represents the z axis (with property axis='z') and has the class layer.The third tier represents the y axis (with property axis='y') and has the class row.The fourth (final) tier represents the x axis (with property axis='x') and has the class column.The [MatrixTile](#module_matrixObjects..MatrixTile) is attached on the x axis tier.The number of children at each level is defined by the size of the matrix, the end result is a multidimensionalarray.

**Kind**: inner typedef of [<code>matrixObjects</code>](#module_matrixObjects)  
**Extends**: [<code>DomItem</code>](#module_domObjects..DomItem)  
<a name="module_matrixObjects..axis"></a>

### matrixObjects~axis : <code>string</code>
A string representing an axis: x, y, z

**Kind**: inner typedef of [<code>matrixObjects</code>](#module_matrixObjects)  
<a name="module_matrixObjects..coordinate"></a>

### matrixObjects~coordinate : <code>number</code>
A number representing a coordinate in a [Matrix](#module_matrixObjects..Matrix)

**Kind**: inner typedef of [<code>matrixObjects</code>](#module_matrixObjects)  
<a name="module_matrixObjects..Point"></a>

### matrixObjects~Point : <code>Object.&lt;module:matrixObjects~axis, module:matrixObjects~coordinate&gt;</code>
Point stores a location in a [Matrix](#module_matrixObjects..Matrix) defined by three key-value pairs([axis](#module_matrixObjects..axis)=>[coordinate](#module_matrixObjects..coordinate))

**Kind**: inner typedef of [<code>matrixObjects</code>](#module_matrixObjects)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| x | [<code>coordinate</code>](#module_matrixObjects..coordinate) | The X-coordinate of a Point |
| y | [<code>coordinate</code>](#module_matrixObjects..coordinate) | The Y-coordinate of a Point |
| z | [<code>coordinate</code>](#module_matrixObjects..coordinate) | The Z-coordinate of a Point |

<a name="module_matrixObjects..Direction"></a>

### matrixObjects~Direction : [<code>Point</code>](#module_matrixObjects..Point)
Point stores a location in a [Matrix](#module_matrixObjects..Matrix) defined by three key-value pairs

**Kind**: inner typedef of [<code>matrixObjects</code>](#module_matrixObjects)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| x | [<code>coordinate</code>](#module_matrixObjects..coordinate) | The X-coordinate must be either -1, 0, or 1 |
| y | [<code>coordinate</code>](#module_matrixObjects..coordinate) | The Y-coordinate must be either -1, 0, or 1 |
| z | [<code>coordinate</code>](#module_matrixObjects..coordinate) | The Z-coordinate must be either -1, 0, or 1 |

<a name="module_matrixObjects..MatrixTile"></a>

### matrixObjects~MatrixTile : <code>Object.&lt;string, module:matrixObjects~Point&gt;</code>
MatrixTile is an Object which stores a reference a [Point](Point) and can be populated with additionally associatedfields.

**Kind**: inner typedef of [<code>matrixObjects</code>](#module_matrixObjects)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| point | [<code>Point</code>](#module_matrixObjects..Point) | a reference to its location in a [Matrix](#module_matrixObjects..Matrix) |
| axis | [<code>axis</code>](#module_matrixObjects..axis) | The axis will be 'x' |

<a name="cube"></a>

## cube([x], [y], [z], [matrixProps], size) ⇒ [<code>Matrix</code>](#module_matrixObjects..Matrix)
Return a matrix where x, y, and z are equal

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [x] | [<code>Array.&lt;MatrixTile&gt;</code>](#module_matrixObjects..MatrixTile) | <code>[]</code> | All the data to be presented as part of the specified point, requires MatrixTile base |
| [y] | [<code>Array.&lt;MatrixRow&gt;</code>](#module_matrixObjects..MatrixRow) | <code>[]</code> | Additional data to append to the MatrixRow |
| [z] | [<code>Array.&lt;MatrixLayer&gt;</code>](#module_matrixObjects..MatrixLayer) | <code>[]</code> | Additional data to append to the MatrixLayer |
| [matrixProps] | [<code>Array.&lt;Matrix&gt;</code>](#module_matrixObjects..Matrix) | <code>[]</code> | Additional data to append to the Matrix |
| size | <code>number</code> |  | Used to define height, width, and depth as equal values |

<a name="matrix"></a>

## matrix(x, y, z, matrixProps) ⇒ [<code>Matrix</code>](#module_matrixObjects..Matrix)
Create a 3d matrix of i with x by y by z size, add additional objects for each layer as well

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Object</code> | Properties and a coordinate defining the width of the matrix. |
| y | <code>Object</code> | Properties and a coordinate defining the height of the matrix. |
| z | <code>Object</code> | Properties and a coordinate defining the depth of the matrix. |
| matrixProps | [<code>Array.&lt;Matrix&gt;</code>](#module_matrixObjects..Matrix) | Properties to be added to the matrix |

<a name="point"></a>

## point(x, y, [z]) ⇒ [<code>Point</code>](#module_matrixObjects..Point)
Store the point data for an x, y, z [Matrix](#module_matrixObjects..Matrix).

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | [<code>coordinate</code>](#module_matrixObjects..coordinate) |  | The numeric value for X-coordinate |
| y | [<code>coordinate</code>](#module_matrixObjects..coordinate) |  | The numeric value for Y-coordinate |
| [z] | [<code>coordinate</code>](#module_matrixObjects..coordinate) | <code>0</code> | The numeric value for Z-coordinate (default to 0 for 2D [Matrix](#module_matrixObjects..Matrix)) |

<a name="square"></a>

## square([x], [y], [z], [matrixProps], size) ⇒ [<code>Matrix</code>](#module_matrixObjects..Matrix)
Return a single layer matrix where x and y are equal

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [x] | [<code>Array.&lt;MatrixTile&gt;</code>](#module_matrixObjects..MatrixTile) | <code>[]</code> | All the data to be presented as part of the specified point, requires MatrixTile base |
| [y] | [<code>Array.&lt;MatrixRow&gt;</code>](#module_matrixObjects..MatrixRow) | <code>[]</code> | Additional data to append to the MatrixRow |
| [z] | [<code>Array.&lt;MatrixLayer&gt;</code>](#module_matrixObjects..MatrixLayer) | <code>[]</code> | Additional data to append to the MatrixLayer |
| [matrixProps] | [<code>Array.&lt;Matrix&gt;</code>](#module_matrixObjects..Matrix) | <code>[]</code> | Additional data to append to the Matrix |
| size | <code>number</code> |  | Used to define height and width as equal values (depth is set to 1) |

<a name="tile"></a>

## tile() ⇒ [<code>MatrixTile</code>](#module_matrixObjects..MatrixTile)
A default tile in the [Matrix](#module_matrixObjects..Matrix)

**Kind**: global function  
<a name="adjacentEdgePoints"></a>

## adjacentEdgePoints(pnt, matrix) ⇒ [<code>Array.&lt;Point&gt;</code>](#module_matrixObjects..Point)
Return all points which touch on edges (not diagonal)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) | The point we want to find adjacent points for. |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) | The matrix having the point. |

<a name="adjacentPoints"></a>

## adjacentPoints(pnt, matrix) ⇒ [<code>Array.&lt;Point&gt;</code>](#module_matrixObjects..Point)
Return all valid points surrounding a provided point

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) | The point we want to find adjacent points for. |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) | The matrix having the point. |

<a name="areEqualPoints"></a>

## areEqualPoints(p1, p2) ⇒ <code>boolean</code>
Given two points, compare the x, y, and z of each to see if they are the same

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| p1 | [<code>Point</code>](#module_matrixObjects..Point) | The first point to compare |
| p2 | [<code>Point</code>](#module_matrixObjects..Point) | The other point to be compared |

<a name="bindPointData"></a>

## bindPointData(item, pnt) ⇒ [<code>MatrixColumn</code>](#module_matrixObjects..MatrixColumn) \| [<code>MatrixRow</code>](#module_matrixObjects..MatrixRow)
Generate point data for each item in the matrixWARNING: This is a recursive function.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>MatrixColumn</code>](#module_matrixObjects..MatrixColumn) \| [<code>MatrixRow</code>](#module_matrixObjects..MatrixRow) | A special DomItem which is either a layer, row, or column in a matrix. |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) | A point to be added to a specific Matrix Column |

<a name="checkInBetween"></a>

## checkInBetween(...args) ⇒ <code>boolean</code>
Given two points, check the cells between using specified function.When inclusive is set to true the provided start and end points will also be tested

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>\*</code> | These args match the parameter list for [testPointsBetween](#module_matrixFunctions..testPointsBetween) |

<a name="checkValidPoint"></a>

## checkValidPoint(pnt, matrix) ⇒ <code>boolean</code>
Test if the provided point exists in the matrix.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) | Provide a point to validate. |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) | The matrix that contains valid points. |

<a name="getAllPoints"></a>

## getAllPoints(matrix, [allPoints]) ⇒ [<code>Array.&lt;Point&gt;</code>](#module_matrixObjects..Point)
Return an array of all the points in the matrix

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) \| [<code>MatrixColumn</code>](#module_matrixObjects..MatrixColumn) |  | The matrix to retrieve points from. |
| [allPoints] | [<code>Array.&lt;Point&gt;</code>](#module_matrixObjects..Point) | <code>[]</code> | The array of points to be returned |

<a name="getAxisLengths"></a>

## getAxisLengths(matrix) ⇒ [<code>Point</code>](#module_matrixObjects..Point)
Return point-like object with all of the axis lengths.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) | The matrix to get the dimensions of. |

<a name="getDomItemFromElement"></a>

## getDomItemFromElement(elem, matrix) ⇒ <code>false</code> \| [<code>DomItem</code>](#module_domObjects..DomItem)
Retrieve the DomItem associated with the provided element in the matrix

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Node</code> \| <code>HTMLElement</code> | Provide an element having an associated DomItem. |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) | The matrix potentially containing the DomItem with Point. |

<a name="getDomItemFromPoint"></a>

## getDomItemFromPoint(pnt, matrix) ⇒ <code>false</code> \| [<code>DomItem</code>](#module_domObjects..DomItem)
Retrieve the DomItem associated with the provided point

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) | A point corresponding to a DomItem. |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) | The matrix containing the point. |

<a name="getFirstAxisOfCoordinate"></a>

## getFirstAxisOfCoordinate(pnt, coordinate) ⇒ <code>false</code> \| [<code>axis</code>](#module_matrixObjects..axis)
Having provided a coordinate number, find all corresponding axis, return the first match.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) | The Point containing a matching coordinate. |
| coordinate | [<code>coordinate</code>](#module_matrixObjects..coordinate) | The coordinate to search for. |

<a name="getHighestAbsoluteCoordinate"></a>

## getHighestAbsoluteCoordinate(pnt) ⇒ [<code>coordinate</code>](#module_matrixObjects..coordinate)
Return the first coordinate number with the highest absolute value.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) | A Point to be assessed. |

<a name="getPointFromElement"></a>

## getPointFromElement(elem) ⇒ [<code>Point</code>](#module_matrixObjects..Point)
Retrieve the point associated with the provided element.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Node</code> \| <code>HTMLElement</code> | Provide an element associated with a point. |

<a name="getPointsLine"></a>

## getPointsLine(start, end, [line]) ⇒ [<code>Array.&lt;Point&gt;</code>](#module_matrixObjects..Point)
Having provided two points, return an array of transition points connecting 'start' and 'end'. Return arrayincludes 'start' (line[0]) and 'end' (line[line.length-1])

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Point</code>](#module_matrixObjects..Point) |  | The starting location of the line. |
| end | [<code>Point</code>](#module_matrixObjects..Point) |  | The final line destination. |
| [line] | [<code>Array.&lt;Point&gt;</code>](#module_matrixObjects..Point) | <code>[]</code> | The resulting line to connect start and end. |

<a name="getPointsLines"></a>

## getPointsLines(lines) ⇒ <code>Array.&lt;Array.&lt;module:matrixObjects~Point&gt;&gt;</code>
Takes an array of arrays containing two points each. Calls getPointsLine for each array of points. Returns anarray of all points captured for each line segment

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| lines | <code>Array.&lt;Array.&lt;module:matrixObjects~Point&gt;&gt;</code> | An array of lines only containing start and end. |

<a name="lineEndPoint"></a>

## lineEndPoint(start, length, dir) ⇒ [<code>Point</code>](#module_matrixObjects..Point)
Given a start point, line length, and a direction, generate the end point of the line.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| start | [<code>Point</code>](#module_matrixObjects..Point) | The selected starting point. |
| length | <code>number</code> | The total length of the line. |
| dir | [<code>Direction</code>](#module_matrixObjects..Direction) | The direction of the line. |

<a name="nextCell"></a>

## nextCell(pnt, dir) ⇒ [<code>Point</code>](#module_matrixObjects..Point)
Based on provided point and point direction generate next point.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) | Provide the current / initial point |
| dir | [<code>Direction</code>](#module_matrixObjects..Direction) | Provide the direction to be applied to find the next point |

<a name="pointAndCoordinateToDirection"></a>

## pointAndCoordinateToDirection(pnt, highestCoordinate) ⇒ [<code>Direction</code>](#module_matrixObjects..Direction)
Given a point and the value of the highest coordinate select the corresponding axis which will be the direction(-1 or 1) to and set the other axis to 0.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) | The which will be converted to a direction. |
| highestCoordinate | [<code>coordinate</code>](#module_matrixObjects..coordinate) | The highest coordinate provided by the point. |

<a name="pointDifference"></a>

## pointDifference(start, end) ⇒ [<code>Point</code>](#module_matrixObjects..Point)
Based on provided point and another point, get a point with the difference between each axis

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| start | [<code>Point</code>](#module_matrixObjects..Point) | The first point to compare |
| end | [<code>Point</code>](#module_matrixObjects..Point) | The other point to be compared |

<a name="pointToDirection"></a>

## pointToDirection(pnt) ⇒ [<code>Direction</code>](#module_matrixObjects..Direction)
Having a point, convert it to a direction where the axis with the highest coordinate value will be set to -1 or 1.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) | The point to be converted to a direction. |

<a name="pointsToDirection"></a>

## pointsToDirection(start, end) ⇒ [<code>Direction</code>](#module_matrixObjects..Direction)
Retrieve a directional coordinate value based on two provided points(directions consist of two zero coordinates and a single coordinate of 1 / -1)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| start | [<code>Point</code>](#module_matrixObjects..Point) | The first point to assess. |
| end | [<code>Point</code>](#module_matrixObjects..Point) | The other point to assess. |

<a name="randDirection"></a>

## randDirection([useCoordinates]) ⇒ [<code>Direction</code>](#module_matrixObjects..Direction)
Get random direction point

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [useCoordinates] | [<code>Array.&lt;Point&gt;</code>](#module_matrixObjects..Point) | <code>[]</code> | An array of possible directions. |

<a name="randomStart"></a>

## randomStart(length, dir, [lengthLimits]) ⇒ [<code>Point</code>](#module_matrixObjects..Point)
Generate a random starting point for a line with the provided length and direction.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| length | <code>number</code> |  | The intended length the resulting line. |
| dir | [<code>Direction</code>](#module_matrixObjects..Direction) |  | The direction the line will extend towards. |
| [lengthLimits] | [<code>Point</code>](#module_matrixObjects..Point) | <code>{x: 10, y: 10, z: 10}</code> | The maximum grid size. |

