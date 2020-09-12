# JSON-DOM

State management with JSON

## Modules

<dl>
<dt><a href="#module_jsonDom">jsonDom</a></dt>
<dd><p>All of the JSON DOM system functions for creating JSON components.</p>
</dd>
<dt><a href="#module_collections">collections</a></dt>
<dd><p>All of the JSON DOM system functions for creating JSON components.</p>
</dd>
<dt><a href="#module_jDom">jDom</a></dt>
<dd><p>All of the JSON DOM system functions for creating JSON components.</p>
</dd>
<dt><a href="#module_jDomMatrix">jDomMatrix</a></dt>
<dd><p>Add matrix ability using JSON DOM components</p>
</dd>
<dt><a href="#module_pseudoDom/objects">pseudoDom/objects</a> : <code>Object</code></dt>
<dd><p>All methods exported from this module are encapsulated within pseudoDom.</p>
</dd>
</dl>

## Classes

<dl>
<dt><a href="#PseudoEventListener">PseudoEventListener</a></dt>
<dd></dd>
<dt><a href="#PseudoNodeAttached">PseudoNodeAttached</a> ⇐ <code><a href="#PseudoEventTarget">PseudoEventTarget</a></code></dt>
<dd><p>Simulate the behaviour of the Node Class when there is no DOM available.</p>
</dd>
</dl>

## Members

<dl>
<dt><a href="#documentItem">documentItem</a> : <code><a href="#module_dom/objects.DomItemRoot">DomItemRoot</a></code></dt>
<dd><p>Create reference for storing document changes</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#elementCompareClassList">elementCompareClassList</a> ⇒ <code>Object.&lt;string, number&gt;</code> | <code>*</code></dt>
<dd><p>Check if a class exists on the element, return object with keys for each class and a -1, 0, 1 difference indicator.</p>
</dd>
<dt><a href="#root">root</a></dt>
<dd><p>Store a reference to this scope which will be Window if rendered via browser</p>
</dd>
<dt><a href="#previousPseudoDom">previousPseudoDom</a> : <code>module</code> | <code>*</code></dt>
<dd><p>Store reference to any pre-existing module of the same name</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#elementHasAttribute">elementHasAttribute(element, key, attr)</a> ⇒ <code>boolean</code> | <code>Object.&lt;string, number&gt;</code></dt>
<dd><p>Check if the provided Element has the provided attributes.
Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.</p>
</dd>
<dt><a href="#elementChanges">elementChanges(config)</a> ⇒ <code><a href="#module_dom/objects.DomItem">DomItem</a></code></dt>
<dd><p>Given a jDomObjects.DomItem as config, this function will return the changes to be applied
to the stored element property.</p>
</dd>
<dt><a href="#setAttribute">setAttribute(config, name, value)</a> ⇒ <code><a href="#module_dom/objects.DomItem">DomItem</a></code></dt>
<dd><p>Set an attribute on the element within a DomItem, then return the config data.</p>
</dd>
<dt><a href="#setAndReturnAttribute">setAndReturnAttribute(config, name, value)</a> ⇒ <code>string</code></dt>
<dd><p>Set an attribute on the element within a DomItem, then return the attribute.</p>
</dd>
<dt><a href="#updateElement">updateElement(config)</a> ⇒ <code><a href="#module_dom/objects.DomItem">DomItem</a></code></dt>
<dd><p>Update a single objects.DomItem element with the provided attributes / style / elementProperties</p>
</dd>
<dt><a href="#updateElements">updateElements(config)</a> ⇒ <code><a href="#module_dom/objects.DomItem">DomItem</a></code></dt>
<dd><p>Generate HTML element data for each object in the matrix
WARNING: This is a recursive function.</p>
</dd>
<dt><a href="#generateElement">generateElement(config)</a> ⇒ <code><a href="#module_dom/objects.DomItem">DomItem</a></code></dt>
<dd><p>Create an HTML element based on the provided attributes and return the element as an Object.</p>
</dd>
<dt><a href="#bindElement">bindElement(item)</a> ⇒ <code><a href="#module_dom/objects.DomItem">DomItem</a></code></dt>
<dd><p>Generate HTML element data for a provided DomItem</p>
</dd>
<dt><a href="#retrieveParentItem">retrieveParentItem(parent)</a> ⇒ <code>module:dom/objects.DomItemBody</code> | <code><a href="#module_dom/objects.DomItem">DomItem</a></code></dt>
<dd><p>Simplify detecting the parent item which can be appended to, whether root, or just a parent at any part of the tree</p>
</dd>
<dt><a href="#addUniqueToArray">addUniqueToArray(item, array)</a> ⇒ <code>Array</code> | <code>Buffer</code> | <code>*</code> | <code>Array.&lt;T&gt;</code> | <code>string</code></dt>
<dd><p>Having an array and a potential new array element, check if the element is in the array, if not append to array.</p>
</dd>
<dt><a href="#appendAndReturnChild">appendAndReturnChild(child, parent)</a> ⇒ <code><a href="#module_dom/objects.DomItem">DomItem</a></code></dt>
<dd><p>Provide a DomItem to be appended to a parent item, return the DomItem.</p>
</dd>
<dt><a href="#appendHTML">appendHTML(item, parent)</a> ⇒ <code><a href="#module_dom/objects.DomItem">DomItem</a></code></dt>
<dd><p>Append a new DomItem which has the element generated.</p>
</dd>
<dt><a href="#removeChild">removeChild(item, parent)</a> ⇒ <code>Array.&lt;(HTMLElement|PseudoHTMLElement)&gt;</code></dt>
<dd><p>Reverse of appendHTML, remove a DomItem and have the associated element removed.</p>
</dd>
<dt><a href="#registerListener">registerListener(listener, [name], [parent])</a> ⇒ <code>Object.&lt;string, module:dom/objects~listenerFunction&gt;</code></dt>
<dd><p>Register a single listener function as part of the root jDomObjects.DomItem.</p>
</dd>
<dt><a href="#registerListeners">registerListeners(listeners, [parent])</a> ⇒ <code><a href="#module_dom/objects.DomItemRoot">DomItemRoot</a></code> | <code>Object</code></dt>
<dd><p>Register multiple listeners from an array of functions.</p>
</dd>
<dt><a href="#retrieveListener">retrieveListener(listenerName, [parent])</a> ⇒ <code>module:dom/objects~listenerFunction</code> | <code>function</code> | <code>Object</code></dt>
<dd><p>Based on the provided function / listener name, retrieve the associated function from the root jDomObjects.DomItem</p>
</dd>
<dt><a href="#listenerOptions">listenerOptions(options)</a> ⇒ <code>boolean</code></dt>
<dd><p>Provide compatibility for using the options parameter of addEventListener</p>
</dd>
<dt><a href="#assignListener">assignListener(trigger, elem, fn, options)</a> ⇒ <code>module:dom/objects~listenerFunction</code> | <code>function</code></dt>
<dd><p>Provide compatibility for assigning listeners.</p>
</dd>
<dt><a href="#appendListeners">appendListeners(item, event, listener, args, options)</a> ⇒ <code><a href="#module_dom/objects.DomItem">DomItem</a></code></dt>
<dd><p>When there may be extra data needed for the event listener function call, this function may be used as a helper
to pass the additional data. Also, if it is desirable to add event listeners during run-time, this function can be
used to achieve this.
WARNING: This is a recursive function.</p>
</dd>
<dt><a href="#bindElementListeners">bindElementListeners(item)</a> ⇒ <code><a href="#module_dom/objects.DomItem">DomItem</a></code></dt>
<dd><p>Receive a DomItem with eventListeners and apply the event listeners onto the Dom element.</p>
</dd>
<dt><a href="#bindListeners">bindListeners(item)</a> ⇒ <code><a href="#module_dom/objects.DomItem">DomItem</a></code></dt>
<dd><p>Based on the eventListeners property of the provided item, bind the
listeners to the associated element property for the provided jDomObjects.DomItem.</p>
</dd>
<dt><a href="#bindAllListeners">bindAllListeners(item)</a> ⇒ <code><a href="#module_dom/objects.DomItem">DomItem</a></code></dt>
<dd><p>Based on the eventListeners property of the provided item, bind the listeners to the associated element property
for each item in the jDomObjects.DomItem structure.
WARNING: This is a recursive function.</p>
</dd>
<dt><a href="#gatherChildItems">gatherChildItems(item, test)</a> ⇒ <code><a href="#module_dom/objects.DomItem">Array.&lt;DomItem&gt;</a></code></dt>
<dd><p>A selector function for retrieving existing child jDomObjects.DomItems from the given parent item.
This function will check all the children starting from and including item, and run the test function on each
child encountered. The return array contains children returned from the test from all levels.
WARNING: This is a recursive function.</p>
</dd>
<dt><a href="#getChildTest">getChildTest(attr, value)</a> ⇒ <code><a href="#module_dom/core..testChildItem">testChildItem</a></code></dt>
<dd><p>Retrieve the <a href="#module_dom/core..testChildItem">testChildItem</a> function by providing an attribute and value to check.</p>
</dd>
<dt><a href="#getChildrenFromAttribute">getChildrenFromAttribute(attr, value, item)</a> ⇒ <code><a href="#module_dom/objects.DomItem">Array.&lt;DomItem&gt;</a></code></dt>
<dd><p>A selector function for retrieving existing child jDomObjects.DomItems from the given parent item.
This function will check all the children starting from item, and scan the attributes
property for matches. The returned array contains children matching from all levels.
WARNING: This calls a recursive function.</p>
</dd>
<dt><a href="#getChildrenByClass">getChildrenByClass()</a> ⇒ <code><a href="#module_dom/objects.DomItem">Array.&lt;DomItem&gt;</a></code></dt>
<dd><p>Helper for getting all jDomObjects.DomItems starting at parent and having specified className attribute</p>
</dd>
<dt><a href="#getChildrenByName">getChildrenByName()</a> ⇒ <code><a href="#module_dom/objects.DomItem">Array.&lt;DomItem&gt;</a></code></dt>
<dd><p>Helper for getting all jDomObjects.DomItems starting at parent and having specified name attribute</p>
</dd>
<dt><a href="#getParentsFromAttribute">getParentsFromAttribute(attr, value, item)</a> ⇒ <code>Array</code></dt>
<dd><p>A selector function for retrieving existing child jDomObjects.DomItems from the given parent item.
This function will check all the children starting from item, and scan the attributes
property for matches. The return array contains children matching from all levels.
WARNING: This is a recursive function.</p>
</dd>
<dt><a href="#getParentsByClass">getParentsByClass()</a> ⇒ <code>Array</code></dt>
<dd><p>Helper for getting all jDomObjects.DomItems starting at child and having specified className attribute</p>
</dd>
<dt><a href="#getParentsByName">getParentsByName()</a> ⇒ <code>Array</code></dt>
<dd><p>Helper for getting all jDomObjects.DomItems starting at child and having specified name attribute</p>
</dd>
<dt><a href="#getParentsByTagName">getParentsByTagName()</a> ⇒ <code>Array</code></dt>
<dd><p>Helper for getting all jDomObjects.DomItems starting at child and having specified tagName</p>
</dd>
<dt><a href="#getTopParentItem">getTopParentItem(item)</a> ⇒ <code><a href="#module_dom/objects.DomItemRoot">DomItemRoot</a></code></dt>
<dd><p>Get the upper parentItem for the provided child. (usually this is a jDomObjects.documentItem reference)
WARNING: This is a recursive function.</p>
</dd>
<dt><a href="#renderHTML">renderHTML(item, parent)</a> ⇒ <code><a href="#module_dom/objects.DomItem">DomItem</a></code></dt>
<dd><p>This is a shortcut for building the specified HTML elements and appending them to the Dom
with associated listeners.
The final argument is specific for adding event listeners with options.</p>
</dd>
<dt><a href="#createDomItem">createDomItem(...attributes)</a> ⇒ <code><a href="#module_dom/objects.DomItem">DomItem</a></code></dt>
<dd><p>This is the basic Object for representing the Dom in a virtual perspective. All incoming attributes will be merged
to the specified format.</p>
</dd>
<dt><a href="#initChildren">initChildren()</a> ⇒ <code>Array.&lt;(module:dom/objects~DomItemHead|module:dom/objects~DomItemBody)&gt;</code></dt>
<dd><p>Initiate the children of Root / DocumentItem. This is a helper for <a href="#documentDomItem">documentDomItem</a>.</p>
</dd>
<dt><a href="#initRoot">initRoot(children, listeners)</a> ⇒ <code><a href="#module_dom/objects.DomItemRoot">DomItemRoot</a></code> | <code><a href="#module_dom/objects.DomItem">DomItem</a></code></dt>
<dd><p>Initiate the Root for DocumentItem. This is primary a helper for <a href="#documentDomItem">documentDomItem</a>.</p>
</dd>
<dt><a href="#documentDomItem">documentDomItem(listeners, [rootItem])</a> ⇒ <code><a href="#module_dom/objects.DomItemRoot">DomItemRoot</a></code> | <code><a href="#module_dom/objects.DomItem">DomItem</a></code></dt>
<dd><p>Return a DomItem reference to the document. The rootItem argument is a system variable and not necessary to
implement.</p>
</dd>
<dt><a href="#bindPointData">bindPointData(item, pnt)</a> ⇒ <code><a href="#module_matrix/objects.MatrixColumn">MatrixColumn</a></code> | <code><a href="#module_matrix/objects.MatrixRow">MatrixRow</a></code></dt>
<dd><p>Generate point data for each item in the matrix
WARNING: This is a recursive function.</p>
</dd>
<dt><a href="#nextCell">nextCell(pnt, dir)</a> ⇒ <code><a href="#module_matrix/objects.Point">Point</a></code></dt>
<dd><p>Based on provided point and point direction generate next point.</p>
</dd>
<dt><a href="#pointDifference">pointDifference(start, end)</a> ⇒ <code><a href="#module_matrix/objects.Point">Point</a></code></dt>
<dd><p>Based on provided point and another point, get a point with the difference between each axis</p>
</dd>
<dt><a href="#areEqualPoints">areEqualPoints(p1, p2)</a> ⇒ <code>boolean</code></dt>
<dd><p>Given two points, compare the x, y, and z of each to see if they are the same</p>
</dd>
<dt><a href="#getHighestAbsoluteCoordinate">getHighestAbsoluteCoordinate(pnt)</a> ⇒ <code><a href="#module_matrix/objects.coordinate">coordinate</a></code></dt>
<dd><p>Return the first coordinate number with the highest absolute value.</p>
</dd>
<dt><a href="#getFirstAxisOfCoordinate">getFirstAxisOfCoordinate(pnt, coordinate)</a> ⇒ <code>false</code> | <code><a href="#module_matrix/objects.axis">axis</a></code></dt>
<dd><p>Having provided a coordinate number, find all corresponding axis, return the first match.</p>
</dd>
<dt><a href="#pointAndCoordinateToDirection">pointAndCoordinateToDirection(pnt, highestCoordinate)</a> ⇒ <code><a href="#module_matrix/objects.Direction">Direction</a></code></dt>
<dd><p>Given a point and the value of the highest coordinate select the corresponding axis which will be the direction
(-1 or 1) to and set the other axis to 0.</p>
</dd>
<dt><a href="#pointToDirection">pointToDirection(pnt)</a> ⇒ <code><a href="#module_matrix/objects.Direction">Direction</a></code></dt>
<dd><p>Having a point, convert it to a direction where the axis with the highest coordinate value will be set to -1 or 1.</p>
</dd>
<dt><a href="#pointsToDirection">pointsToDirection(start, end)</a> ⇒ <code><a href="#module_matrix/objects.Direction">Direction</a></code></dt>
<dd><p>Retrieve a directional coordinate value based on two provided points
(directions consist of two zero coordinates and a single coordinate of 1 / -1)</p>
</dd>
<dt><a href="#randomStart">randomStart(length, dir, [lengthLimits])</a> ⇒ <code><a href="#module_matrix/objects.Point">Point</a></code></dt>
<dd><p>Generate a random starting point for a line with the provided length and direction.</p>
</dd>
<dt><a href="#lineEndPoint">lineEndPoint(start, length, dir)</a> ⇒ <code><a href="#module_matrix/objects.Point">Point</a></code></dt>
<dd><p>Given a start point, line length, and a direction, generate the end point of the line.</p>
</dd>
<dt><a href="#getPointsLine">getPointsLine(start, end, [line])</a> ⇒ <code><a href="#module_matrix/objects.Point">Array.&lt;Point&gt;</a></code></dt>
<dd><p>Having provided two points, return an array of transition points connecting &#39;start&#39; and &#39;end&#39;. Return array
includes &#39;start&#39; (line[0]) and &#39;end&#39; (line[line.length-1])</p>
</dd>
<dt><a href="#getPointsLines">getPointsLines(lines)</a> ⇒ <code>Array.&lt;Array.&lt;module:matrix/objects.Point&gt;&gt;</code></dt>
<dd><p>Takes an array of arrays containing two points each. Calls getPointsLine for each array of points. Returns an
array of all points captured for each line segment</p>
</dd>
<dt><a href="#checkInBetween">checkInBetween(...args)</a> ⇒ <code>boolean</code></dt>
<dd><p>Given two points, check the cells between using specified function.
When inclusive is set to true the provided start and end points will also be tested</p>
</dd>
<dt><a href="#getAxisLengths">getAxisLengths(matrix)</a> ⇒ <code><a href="#module_matrix/objects.Point">Point</a></code></dt>
<dd><p>Return point-like object with all of the axis lengths.</p>
</dd>
<dt><a href="#randDirection">randDirection([useCoordinates])</a> ⇒ <code><a href="#module_matrix/objects.Direction">Direction</a></code></dt>
<dd><p>Get random direction point</p>
</dd>
<dt><a href="#checkValidPoint">checkValidPoint(pnt, matrix)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test if the provided point exists in the matrix.</p>
</dd>
<dt><a href="#getDomItemFromPoint">getDomItemFromPoint(pnt, matrix)</a> ⇒ <code>false</code> | <code><a href="#module_dom/objects.DomItem">DomItem</a></code></dt>
<dd><p>Retrieve the DomItem associated with the provided point</p>
</dd>
<dt><a href="#getAllPoints">getAllPoints(matrix, [allPoints])</a> ⇒ <code><a href="#module_matrix/objects.Point">Array.&lt;Point&gt;</a></code></dt>
<dd><p>Return an array of all the points in the matrix</p>
</dd>
<dt><a href="#adjacentPoints">adjacentPoints(pnt, matrix)</a> ⇒ <code><a href="#module_matrix/objects.Point">Array.&lt;Point&gt;</a></code></dt>
<dd><p>Return all valid points surrounding a provided point</p>
</dd>
<dt><a href="#adjacentEdgePoints">adjacentEdgePoints(pnt, matrix)</a> ⇒ <code><a href="#module_matrix/objects.Point">Array.&lt;Point&gt;</a></code></dt>
<dd><p>Return all points which touch on edges (not diagonal)</p>
</dd>
<dt><a href="#getPointFromElement">getPointFromElement(elem)</a> ⇒ <code><a href="#module_matrix/objects.Point">Point</a></code></dt>
<dd><p>Retrieve the point associated with the provided element.</p>
</dd>
<dt><a href="#getDomItemFromElement">getDomItemFromElement(elem, matrix)</a> ⇒ <code><a href="#module_dom/objects.DomItem">DomItem</a></code></dt>
<dd><p>Retrieve the DomItem associated with the provided element in the matrix</p>
</dd>
<dt><a href="#point">point(x, y, [z])</a> ⇒ <code><a href="#module_matrix/objects.Point">Point</a></code></dt>
<dd><p>Store the point data for an x, y, z <a href="#module_matrix/objects.Matrix">Matrix</a>.</p>
</dd>
<dt><a href="#tile">tile()</a> ⇒ <code><a href="#module_matrix/objects.MatrixTile">MatrixTile</a></code></dt>
<dd><p>A default tile in the <a href="#module_matrix/objects.Matrix">Matrix</a></p>
</dd>
<dt><a href="#matrix">matrix(x, y, z, matrixProps)</a> ⇒ <code><a href="#module_matrix/objects.Matrix">Matrix</a></code></dt>
<dd><p>Create a 3d matrix of i with x by y by z size, add additional objects for each layer as well</p>
</dd>
<dt><a href="#square">square([x], [y], [z], [matrixProps], size)</a> ⇒ <code><a href="#module_matrix/objects.Matrix">Matrix</a></code></dt>
<dd><p>Return a single layer matrix where x and y are equal</p>
</dd>
<dt><a href="#cube">cube([x], [y], [z], [matrixProps], size)</a> ⇒ <code><a href="#module_matrix/objects.Matrix">Matrix</a></code></dt>
<dd><p>Return a matrix where x, y, and z are equal</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#listenerFunction">listenerFunction</a> : <code>function</code></dt>
<dd><p>This is the standard definition of a listenerFunction to be used</p>
</dd>
<dt><a href="#EventListener">EventListener</a> : <code>Object</code></dt>
<dd><p>An EventListener Object to be appended to the element within the DomItem</p>
</dd>
<dt><a href="#DomItemHead">DomItemHead</a> : <code><a href="#module_dom/objects.DomItem">DomItem</a></code></dt>
<dd><p>DomItemHead defines the structure for a single element in the Dom</p>
</dd>
<dt><a href="#DomItemBody">DomItemBody</a> : <code><a href="#module_dom/objects.DomItem">DomItem</a></code></dt>
<dd><p>DomItemBody defines the structure for a single element in the Dom</p>
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
    * [~jsonDom](#module_jsonDom..jsonDom) : [<code>jsonDom</code>](#module_jsonDom) \| [<code>collections</code>](#module_collections) \| [<code>jDom</code>](#module_jDom) \| <code>module:pseudoDom</code> \| <code>module:matrix</code>

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

### jsonDom~jsonDom : [<code>jsonDom</code>](#module_jsonDom) \| [<code>collections</code>](#module_collections) \| [<code>jDom</code>](#module_jDom) \| <code>module:pseudoDom</code> \| <code>module:matrix</code>
All methods exported from this module are encapsulated within jsonDom.

**Kind**: inner typedef of [<code>jsonDom</code>](#module_jsonDom)  
<a name="module_collections"></a>

## collections
All of the JSON DOM system functions for creating JSON components.

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [collections](#module_collections)
    * [~root](#module_collections..root)
    * [~previousCollections](#module_collections..previousCollections) : <code>module</code> \| <code>\*</code>
    * [~noConflict()](#module_collections..noConflict) ⇒ [<code>collections</code>](#module_collections..collections)
    * [~collections](#module_collections..collections) : [<code>collections</code>](#module_collections) \| [<code>collections</code>](#module_collections) \| [<code>jDom</code>](#module_jDom) \| <code>module:pseudoDom</code> \| <code>module:matrix</code>

<a name="module_collections..root"></a>

### collections~root
Store a reference to this scope which will be Window if rendered via browser

**Kind**: inner constant of [<code>collections</code>](#module_collections)  
<a name="module_collections..previousCollections"></a>

### collections~previousCollections : <code>module</code> \| <code>\*</code>
Store reference to any pre-existing module of the same name

**Kind**: inner constant of [<code>collections</code>](#module_collections)  
<a name="module_collections..noConflict"></a>

### collections~noConflict() ⇒ [<code>collections</code>](#module_collections..collections)
Return a reference to this library while preserving the original same-named library

**Kind**: inner method of [<code>collections</code>](#module_collections)  
<a name="module_collections..collections"></a>

### collections~collections : [<code>collections</code>](#module_collections) \| [<code>collections</code>](#module_collections) \| [<code>jDom</code>](#module_jDom) \| <code>module:pseudoDom</code> \| <code>module:matrix</code>
All methods exported from this module are encapsulated within collections.

**Kind**: inner typedef of [<code>collections</code>](#module_collections)  
<a name="module_jDom"></a>

## jDom
All of the JSON DOM system functions for creating JSON components.

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [jDom](#module_jDom)
    * [~root](#module_jDom..root)
    * [~previousJDom](#module_jDom..previousJDom) : <code>module</code> \| <code>\*</code>
    * [~noConflict()](#module_jDom..noConflict) ⇒ [<code>jDom</code>](#module_jDom..jDom)
    * [~jDom](#module_jDom..jDom) : [<code>jDom</code>](#module_jDom) \| <code>module:jDomCore</code> \| <code>module:jDomObjects</code>

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

### jDom~jDom : [<code>jDom</code>](#module_jDom) \| <code>module:jDomCore</code> \| <code>module:jDomObjects</code>
All methods exported from this module are encapsulated within jDom.

**Kind**: inner typedef of [<code>jDom</code>](#module_jDom)  
<a name="module_jDomMatrix"></a>

## jDomMatrix
Add matrix ability using JSON DOM components

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [jDomMatrix](#module_jDomMatrix)
    * [~root](#module_jDomMatrix..root)
    * [~previousJDomMatrix](#module_jDomMatrix..previousJDomMatrix) : <code>module</code> \| <code>\*</code>
    * [~noConflict()](#module_jDomMatrix..noConflict) ⇒ [<code>jDomMatrix</code>](#module_jDomMatrix..jDomMatrix)
    * [~jDomMatrix](#module_jDomMatrix..jDomMatrix) : [<code>jDomMatrix</code>](#module_jDomMatrix) \| <code>module:jDomMatrixCore</code> \| <code>module:jDomMatrixObjects</code>

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

### jDomMatrix~jDomMatrix : [<code>jDomMatrix</code>](#module_jDomMatrix) \| <code>module:jDomMatrixCore</code> \| <code>module:jDomMatrixObjects</code>
All methods exported from this module are encapsulated within jDomMatrix.

**Kind**: inner typedef of [<code>jDomMatrix</code>](#module_jDomMatrix)  
<a name="module_pseudoDom/objects"></a>

## pseudoDom/objects : <code>Object</code>
All methods exported from this module are encapsulated within pseudoDom.

**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [pseudoDom/objects](#module_pseudoDom/objects) : <code>Object</code>
    * [~noConflict()](#module_pseudoDom/objects..noConflict) ⇒ <code>pseudoDom</code>
    * [~generate(context)](#module_pseudoDom/objects..generate) ⇒ <code>Window</code> \| [<code>PseudoEventTarget</code>](#PseudoEventTarget)

<a name="module_pseudoDom/objects..noConflict"></a>

### pseudoDom/objects~noConflict() ⇒ <code>pseudoDom</code>
Return a reference to this library while preserving the original same-named library

**Kind**: inner method of [<code>pseudoDom/objects</code>](#module_pseudoDom/objects)  
<a name="module_pseudoDom/objects..generate"></a>

### pseudoDom/objects~generate(context) ⇒ <code>Window</code> \| [<code>PseudoEventTarget</code>](#PseudoEventTarget)
Construct the Pseudo Dom to provide access to Dom objects which are otherwise not available outside of the browser
context.

**Kind**: inner method of [<code>pseudoDom/objects</code>](#module_pseudoDom/objects)  

| Param | Type |
| --- | --- |
| context | <code>Object</code> | 

<a name="PseudoEventListener"></a>

## PseudoEventListener
**Kind**: global class  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  
**Properties**

| Name | Type |
| --- | --- |
| eventTypes | <code>string</code> | 
| eventOptions | <code>Object</code> | 
| isDefault | <code>boolean</code> | 


* [PseudoEventListener](#PseudoEventListener)
    * [new exports.PseudoEventListener()](#new_PseudoEventListener_new)
    * [.handleEvent(event)](#PseudoEventListener+handleEvent) ⇒ <code>undefined</code>
    * [.doCapturePhase(event)](#PseudoEventListener+doCapturePhase) ⇒ <code>boolean</code>
    * [.doTargetPhase(event)](#PseudoEventListener+doTargetPhase) ⇒ <code>boolean</code>
    * [.doBubblePhase(event)](#PseudoEventListener+doBubblePhase) ⇒ <code>boolean</code> \| <code>\*</code>
    * [.skipPhase(event)](#PseudoEventListener+skipPhase) ⇒ <code>boolean</code>
    * [.skipDefault(event)](#PseudoEventListener+skipDefault) ⇒ <code>boolean</code> \| <code>\*</code>
    * [.stopPropagation(event)](#PseudoEventListener+stopPropagation) ⇒ <code>boolean</code>
    * [.nonPassiveHalt(event)](#PseudoEventListener+nonPassiveHalt) ⇒ <code>boolean</code> \| <code>\*</code>
    * [.rejectEvent(event)](#PseudoEventListener+rejectEvent) ⇒ <code>\*</code> \| <code>boolean</code>

<a name="new_PseudoEventListener_new"></a>

### new exports.PseudoEventListener()
Handle events as they are stored and implemented.

<a name="PseudoEventListener+handleEvent"></a>

### pseudoEventListener.handleEvent(event) ⇒ <code>undefined</code>
**Kind**: instance method of [<code>PseudoEventListener</code>](#PseudoEventListener)  

| Param | Type |
| --- | --- |
| event | [<code>PseudoEvent</code>](#PseudoEvent) | 

<a name="PseudoEventListener+doCapturePhase"></a>

### pseudoEventListener.doCapturePhase(event) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>PseudoEventListener</code>](#PseudoEventListener)  

| Param | Type |
| --- | --- |
| event | [<code>PseudoEvent</code>](#PseudoEvent) | 

<a name="PseudoEventListener+doTargetPhase"></a>

### pseudoEventListener.doTargetPhase(event) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>PseudoEventListener</code>](#PseudoEventListener)  

| Param | Type |
| --- | --- |
| event | [<code>PseudoEvent</code>](#PseudoEvent) | 

<a name="PseudoEventListener+doBubblePhase"></a>

### pseudoEventListener.doBubblePhase(event) ⇒ <code>boolean</code> \| <code>\*</code>
**Kind**: instance method of [<code>PseudoEventListener</code>](#PseudoEventListener)  

| Param | Type |
| --- | --- |
| event | [<code>PseudoEvent</code>](#PseudoEvent) | 

<a name="PseudoEventListener+skipPhase"></a>

### pseudoEventListener.skipPhase(event) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>PseudoEventListener</code>](#PseudoEventListener)  

| Param | Type |
| --- | --- |
| event | [<code>PseudoEvent</code>](#PseudoEvent) | 

<a name="PseudoEventListener+skipDefault"></a>

### pseudoEventListener.skipDefault(event) ⇒ <code>boolean</code> \| <code>\*</code>
**Kind**: instance method of [<code>PseudoEventListener</code>](#PseudoEventListener)  

| Param | Type |
| --- | --- |
| event | [<code>PseudoEvent</code>](#PseudoEvent) | 

<a name="PseudoEventListener+stopPropagation"></a>

### pseudoEventListener.stopPropagation(event) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>PseudoEventListener</code>](#PseudoEventListener)  

| Param | Type |
| --- | --- |
| event | [<code>PseudoEvent</code>](#PseudoEvent) | 

<a name="PseudoEventListener+nonPassiveHalt"></a>

### pseudoEventListener.nonPassiveHalt(event) ⇒ <code>boolean</code> \| <code>\*</code>
**Kind**: instance method of [<code>PseudoEventListener</code>](#PseudoEventListener)  

| Param | Type |
| --- | --- |
| event | [<code>PseudoEvent</code>](#PseudoEvent) | 

<a name="PseudoEventListener+rejectEvent"></a>

### pseudoEventListener.rejectEvent(event) ⇒ <code>\*</code> \| <code>boolean</code>
**Kind**: instance method of [<code>PseudoEventListener</code>](#PseudoEventListener)  

| Param | Type |
| --- | --- |
| event | [<code>PseudoEvent</code>](#PseudoEvent) | 

<a name="PseudoNodeAttached"></a>

## PseudoNodeAttached ⇐ [<code>PseudoEventTarget</code>](#PseudoEventTarget)
Simulate the behaviour of the Node Class when there is no DOM available.

**Kind**: global class  
**Extends**: [<code>PseudoEventTarget</code>](#PseudoEventTarget)  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  
**Properties**

| Name | Type |
| --- | --- |
| name | <code>string</code> | 
| appendChild | <code>function</code> | 
| removeChild | <code>function</code> | 


* [PseudoNodeAttached](#PseudoNodeAttached) ⇐ [<code>PseudoEventTarget</code>](#PseudoEventTarget)
    * [.PseudoEventTarget](#PseudoEventTarget)
    * [.PseudoEventTarget](#PseudoEventTarget)
    * [.appendChild(childNode)](#PseudoNodeAttached+appendChild) ⇒ [<code>PseudoNode</code>](#PseudoNode)
    * [.removeChild(childElement)](#PseudoNodeAttached+removeChild) ⇒ [<code>PseudoNode</code>](#PseudoNode)
    * [.runEvents(event)](#PseudoEventTarget+runEvents) ⇒ <code>boolean</code>
    * [.setDefaultEvent(type, callback)](#PseudoEventTarget+setDefaultEvent)
    * [.runDefaultEvent(event)](#PseudoEventTarget+runDefaultEvent) ⇒ <code>boolean</code>
    * [.startEvents(eventType)](#PseudoEventTarget+startEvents) ⇒ <code>boolean</code>
    * [.addEventListener(type, callback, [useCapture])](#PseudoEventTarget+addEventListener)
    * [.removeEventListener(type, callback)](#PseudoEventTarget+removeEventListener)
    * [.dispatchEvent(event, target)](#PseudoEventTarget+dispatchEvent) ⇒ <code>boolean</code>

<a name="PseudoEventTarget"></a>

### pseudoNodeAttached.PseudoEventTarget
Simulate the behaviour of the EventTarget Class when there is no DOM available.

**Kind**: instance class of [<code>PseudoNodeAttached</code>](#PseudoNodeAttached)  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  
**Properties**

| Name | Type |
| --- | --- |
| listeners | <code>Object.&lt;string, Array.&lt;PseudoEventListener&gt;&gt;</code> | 
| addEventListener | <code>function</code> | 
| removeEventListener | <code>function</code> | 
| dispatchEvent | <code>function</code> | 

<a name="PseudoEventTarget"></a>

### pseudoNodeAttached.PseudoEventTarget
Simulate the behaviour of the EventTarget Class when there is no DOM available.

**Kind**: instance class of [<code>PseudoNodeAttached</code>](#PseudoNodeAttached)  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  
**Properties**

| Name | Type |
| --- | --- |
| listeners | <code>Object.&lt;string, Array.&lt;PseudoEventListener&gt;&gt;</code> | 
| addEventListener | <code>function</code> | 
| removeEventListener | <code>function</code> | 
| dispatchEvent | <code>function</code> | 

<a name="PseudoNodeAttached+appendChild"></a>

### pseudoNodeAttached.appendChild(childNode) ⇒ [<code>PseudoNode</code>](#PseudoNode)
**Kind**: instance method of [<code>PseudoNodeAttached</code>](#PseudoNodeAttached)  

| Param | Type |
| --- | --- |
| childNode | [<code>PseudoNode</code>](#PseudoNode) | 

<a name="PseudoNodeAttached+removeChild"></a>

### pseudoNodeAttached.removeChild(childElement) ⇒ [<code>PseudoNode</code>](#PseudoNode)
**Kind**: instance method of [<code>PseudoNodeAttached</code>](#PseudoNodeAttached)  

| Param | Type |
| --- | --- |
| childElement | [<code>PseudoNode</code>](#PseudoNode) | 

<a name="PseudoEventTarget+runEvents"></a>

### pseudoNodeAttached.runEvents(event) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>PseudoNodeAttached</code>](#PseudoNodeAttached)  
**Overrides**: [<code>runEvents</code>](#PseudoEventTarget+runEvents)  

| Param | Type |
| --- | --- |
| event | [<code>PseudoEvent</code>](#PseudoEvent) | 

<a name="PseudoEventTarget+setDefaultEvent"></a>

### pseudoNodeAttached.setDefaultEvent(type, callback)
**Kind**: instance method of [<code>PseudoNodeAttached</code>](#PseudoNodeAttached)  
**Overrides**: [<code>setDefaultEvent</code>](#PseudoEventTarget+setDefaultEvent)  

| Param | Type |
| --- | --- |
| type | <code>string</code> | 
| callback | <code>function</code> | 

<a name="PseudoEventTarget+runDefaultEvent"></a>

### pseudoNodeAttached.runDefaultEvent(event) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>PseudoNodeAttached</code>](#PseudoNodeAttached)  
**Overrides**: [<code>runDefaultEvent</code>](#PseudoEventTarget+runDefaultEvent)  

| Param | Type |
| --- | --- |
| event | [<code>PseudoEvent</code>](#PseudoEvent) | 

<a name="PseudoEventTarget+startEvents"></a>

### pseudoNodeAttached.startEvents(eventType) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>PseudoNodeAttached</code>](#PseudoNodeAttached)  
**Overrides**: [<code>startEvents</code>](#PseudoEventTarget+startEvents)  

| Param | Type |
| --- | --- |
| eventType | [<code>PseudoEvent</code>](#PseudoEvent) | 

<a name="PseudoEventTarget+addEventListener"></a>

### pseudoNodeAttached.addEventListener(type, callback, [useCapture])
**Kind**: instance method of [<code>PseudoNodeAttached</code>](#PseudoNodeAttached)  
**Overrides**: [<code>addEventListener</code>](#PseudoEventTarget+addEventListener)  

| Param | Type | Default |
| --- | --- | --- |
| type | <code>string</code> |  | 
| callback | <code>function</code> \| <code>Object</code> |  | 
| [useCapture] | <code>boolean</code> \| <code>Object</code> | <code>false</code> | 

<a name="PseudoEventTarget+removeEventListener"></a>

### pseudoNodeAttached.removeEventListener(type, callback)
**Kind**: instance method of [<code>PseudoNodeAttached</code>](#PseudoNodeAttached)  
**Overrides**: [<code>removeEventListener</code>](#PseudoEventTarget+removeEventListener)  

| Param | Type |
| --- | --- |
| type | <code>string</code> | 
| callback | <code>function</code> | 

<a name="PseudoEventTarget+dispatchEvent"></a>

### pseudoNodeAttached.dispatchEvent(event, target) ⇒ <code>boolean</code>
**Kind**: instance method of [<code>PseudoNodeAttached</code>](#PseudoNodeAttached)  
**Overrides**: [<code>dispatchEvent</code>](#PseudoEventTarget+dispatchEvent)  

| Param | Type |
| --- | --- |
| event | <code>Event</code> \| [<code>PseudoEvent</code>](#PseudoEvent) | 
| target | <code>EventTarget</code> \| [<code>PseudoEventTarget</code>](#PseudoEventTarget) | 

<a name="documentItem"></a>

## documentItem : [<code>DomItemRoot</code>](#module_dom/objects.DomItemRoot)
Create reference for storing document changes

**Kind**: global variable  
<a name="elementCompareClassList"></a>

## elementCompareClassList ⇒ <code>Object.&lt;string, number&gt;</code> \| <code>\*</code>
Check if a class exists on the element, return object with keys for each class and a -1, 0, 1 difference indicator.

**Kind**: global constant  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> \| <code>module:pseudoDom/objects.PseudoHTMLElement</code> | Provide an element to check classes on. |
| classes | <code>string</code> | A string of classes (like the content of the 'class' attribute) to be compared |

<a name="root"></a>

## root
Store a reference to this scope which will be Window if rendered via browser

**Kind**: global constant  
<a name="previousPseudoDom"></a>

## previousPseudoDom : <code>module</code> \| <code>\*</code>
Store reference to any pre-existing module of the same name

**Kind**: global constant  
<a name="elementHasAttribute"></a>

## elementHasAttribute(element, key, attr) ⇒ <code>boolean</code> \| <code>Object.&lt;string, number&gt;</code>
Check if the provided Element has the provided attributes.
Returns a boolean, or an array of 1 / 0 / -1 based on the comparison status.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| element | <code>HTMLElement</code> \| <code>module:pseudoDom/objects.PseudoHTMLElement</code> | Receive the element to be assessed |
| key | <code>string</code> | The attribute name to search for |
| attr | <code>string</code> \| <code>Object</code> | The expected value of the attribute to compare against |

<a name="elementChanges"></a>

## elementChanges(config) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
Given a jDomObjects.DomItem as config, this function will return the changes to be applied
to the stored element property.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| config | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem having config changes to be applied to its element |

<a name="setAttribute"></a>

## setAttribute(config, name, value) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
Set an attribute on the element within a DomItem, then return the config data.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| config | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem having config changes to be applied to its element |
| name | <code>string</code> | The attribute name to be updated |
| value | <code>string</code> | The new value to be applied to the attribute |

<a name="setAndReturnAttribute"></a>

## setAndReturnAttribute(config, name, value) ⇒ <code>string</code>
Set an attribute on the element within a DomItem, then return the attribute.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| config | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem having config changes to be applied to its element |
| name | <code>string</code> | The attribute name to be updated |
| value | <code>string</code> | The new value to be applied to the attribute |

<a name="updateElement"></a>

## updateElement(config) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
Update a single objects.DomItem element with the provided attributes / style / elementProperties

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| config | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem having config changes to be applied to its element |

<a name="updateElements"></a>

## updateElements(config) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
Generate HTML element data for each object in the matrix
WARNING: This is a recursive function.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| config | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem having child DomItems with config changes to be applied |

<a name="generateElement"></a>

## generateElement(config) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
Create an HTML element based on the provided attributes and return the element as an Object.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| config | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem requiring matching HTML element property |

<a name="bindElement"></a>

## bindElement(item) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
Generate HTML element data for a provided DomItem

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem needing element to be generated |

<a name="retrieveParentItem"></a>

## retrieveParentItem(parent) ⇒ <code>module:dom/objects.DomItemBody</code> \| [<code>DomItem</code>](#module_dom/objects.DomItem)
Simplify detecting the parent item which can be appended to, whether root, or just a parent at any part of the tree

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| parent | [<code>DomItemRoot</code>](#module_dom/objects.DomItemRoot) \| [<code>DomItem</code>](#module_dom/objects.DomItem) | A parent DomItem which may or may not have a body |

<a name="addUniqueToArray"></a>

## addUniqueToArray(item, array) ⇒ <code>Array</code> \| <code>Buffer</code> \| <code>\*</code> \| <code>Array.&lt;T&gt;</code> \| <code>string</code>
Having an array and a potential new array element, check if the element is in the array, if not append to array.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_dom/objects.DomItem) \| <code>\*</code> | An potential array element, possibly a DomItem |
| array | <code>Array</code> | An array where an element may be appended. |

<a name="appendAndReturnChild"></a>

## appendAndReturnChild(child, parent) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
Provide a DomItem to be appended to a parent item, return the DomItem.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| child | [<code>DomItem</code>](#module_dom/objects.DomItem) | A DomItem to be appended |
| parent | [<code>DomItem</code>](#module_dom/objects.DomItem) | A parent item to have a new child appended |

<a name="appendHTML"></a>

## appendHTML(item, parent) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
Append a new DomItem which has the element generated.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_dom/objects.DomItem) | A new DomItem to append |
| parent | [<code>DomItem</code>](#module_dom/objects.DomItem) | The parent to have DomItems appended |

<a name="removeChild"></a>

## removeChild(item, parent) ⇒ <code>Array.&lt;(HTMLElement\|PseudoHTMLElement)&gt;</code>
Reverse of appendHTML, remove a DomItem and have the associated element removed.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem with HTMLElement to be removed |
| parent | [<code>DomItem</code>](#module_dom/objects.DomItem) | The parent of the items |

<a name="registerListener"></a>

## registerListener(listener, [name], [parent]) ⇒ <code>Object.&lt;string, module:dom/objects~listenerFunction&gt;</code>
Register a single listener function as part of the root jDomObjects.DomItem.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| listener | <code>module:dom/objects~listenerFunction</code> \| <code>function</code> | Provide a function which will be called when a Dom event is triggered. |
| [name] | <code>string</code> | The name of the listener to be used. |
| [parent] | [<code>DomItemRoot</code>](#module_dom/objects.DomItemRoot) \| <code>Object</code> | The parent DomItem which is DomItemRoot which stores has eventListeners property. |

<a name="registerListeners"></a>

## registerListeners(listeners, [parent]) ⇒ [<code>DomItemRoot</code>](#module_dom/objects.DomItemRoot) \| <code>Object</code>
Register multiple listeners from an array of functions.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| listeners | <code>Array.&lt;(module:dom/objects~listenerFunction\|function())&gt;</code> | An array of functions to be used as the registered event listeners. |
| [parent] | [<code>DomItemRoot</code>](#module_dom/objects.DomItemRoot) \| <code>Object</code> | The parent DomItem which is DomItemRoot which stores has eventListeners property. |

<a name="retrieveListener"></a>

## retrieveListener(listenerName, [parent]) ⇒ <code>module:dom/objects~listenerFunction</code> \| <code>function</code> \| <code>Object</code>
Based on the provided function / listener name, retrieve the associated function from the root jDomObjects.DomItem

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| listenerName | <code>string</code> | The name of one of the registered listener functions. |
| [parent] | [<code>DomItemRoot</code>](#module_dom/objects.DomItemRoot) \| <code>Object</code> | The parent DomItem which is DomItemRoot which stores has eventListeners property. |

<a name="listenerOptions"></a>

## listenerOptions(options) ⇒ <code>boolean</code>
Provide compatibility for using the options parameter of addEventListener

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| options | [<code>EventListenerOptions</code>](#module_dom/objects.EventListenerOptions) | An object or boolean with the listener options |

<a name="assignListener"></a>

## assignListener(trigger, elem, fn, options) ⇒ <code>module:dom/objects~listenerFunction</code> \| <code>function</code>
Provide compatibility for assigning listeners.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| trigger | <code>string</code> | The name of the event which will trigger the listenerFunction on the element. |
| elem | <code>HTMLElement</code> \| <code>module:pseudoDom/objects~PseudoHTMLElement</code> | An element to append the listener onto |
| fn | <code>module:dom/objects~listenerFunction</code> \| <code>function</code> | The function which will be invoked when the event is triggered |
| options | [<code>EventListenerOptions</code>](#module_dom/objects.EventListenerOptions) | Additional options to how the event will be fired |

<a name="appendListeners"></a>

## appendListeners(item, event, listener, args, options) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
When there may be extra data needed for the event listener function call, this function may be used as a helper
to pass the additional data. Also, if it is desirable to add event listeners during run-time, this function can be
used to achieve this.
WARNING: This is a recursive function.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem which will have its eventListeners updated. |
| event | <code>string</code> | The string name of the event trigger type to be added. |
| listener | <code>string</code> | The name of the function to be called once the event is triggered. |
| args | <code>Object</code> | Additional arguments to be used in the listener function. |
| options | [<code>EventListenerOptions</code>](#module_dom/objects.EventListenerOptions) | The strategy used when the event is triggered. |

<a name="bindElementListeners"></a>

## bindElementListeners(item) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
Receive a DomItem with eventListeners and apply the event listeners onto the Dom element.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem which has eventListeners to apply to its element |

<a name="bindListeners"></a>

## bindListeners(item) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
Based on the eventListeners property of the provided item, bind the
listeners to the associated element property for the provided jDomObjects.DomItem.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem which may have eventListeners to apply to its element |

<a name="bindAllListeners"></a>

## bindAllListeners(item) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
Based on the eventListeners property of the provided item, bind the listeners to the associated element property
for each item in the jDomObjects.DomItem structure.
WARNING: This is a recursive function.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem with an associated HTMLElement to have a listener assigned |

<a name="gatherChildItems"></a>

## gatherChildItems(item, test) ⇒ [<code>Array.&lt;DomItem&gt;</code>](#module_dom/objects.DomItem)
A selector function for retrieving existing child jDomObjects.DomItems from the given parent item.
This function will check all the children starting from and including item, and run the test function on each
child encountered. The return array contains children returned from the test from all levels.
WARNING: This is a recursive function.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem which may have child items matching the attribute criteria |
| test | [<code>testChildItem</code>](#module_dom/core..testChildItem) | Assess each child, and return the ones which qualify |

<a name="getChildTest"></a>

## getChildTest(attr, value) ⇒ [<code>testChildItem</code>](#module_dom/core..testChildItem)
Retrieve the [testChildItem](#module_dom/core..testChildItem) function by providing an attribute and value to check.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| attr | <code>string</code> | Provide the attribute name to be searched |
| value | <code>\*</code> | The attribute value to be compared |

<a name="getChildrenFromAttribute"></a>

## getChildrenFromAttribute(attr, value, item) ⇒ [<code>Array.&lt;DomItem&gt;</code>](#module_dom/objects.DomItem)
A selector function for retrieving existing child jDomObjects.DomItems from the given parent item.
This function will check all the children starting from item, and scan the attributes
property for matches. The returned array contains children matching from all levels.
WARNING: This calls a recursive function.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| attr | <code>string</code> | Provide the attribute name to be searched |
| value | <code>\*</code> | The attribute value to be compared |
| item | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem which may have child items matching the attribute criteria |

<a name="getChildrenByClass"></a>

## getChildrenByClass() ⇒ [<code>Array.&lt;DomItem&gt;</code>](#module_dom/objects.DomItem)
Helper for getting all jDomObjects.DomItems starting at parent and having specified className attribute

**Kind**: global function  
<a name="getChildrenByName"></a>

## getChildrenByName() ⇒ [<code>Array.&lt;DomItem&gt;</code>](#module_dom/objects.DomItem)
Helper for getting all jDomObjects.DomItems starting at parent and having specified name attribute

**Kind**: global function  
<a name="getParentsFromAttribute"></a>

## getParentsFromAttribute(attr, value, item) ⇒ <code>Array</code>
A selector function for retrieving existing child jDomObjects.DomItems from the given parent item.
This function will check all the children starting from item, and scan the attributes
property for matches. The return array contains children matching from all levels.
WARNING: This is a recursive function.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| attr | <code>string</code> | Provide the attribute name to be searched |
| value | <code>\*</code> | The attribute value to be compared |
| item | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem which may have parent items matching the attribute criteria |

<a name="getParentsByClass"></a>

## getParentsByClass() ⇒ <code>Array</code>
Helper for getting all jDomObjects.DomItems starting at child and having specified className attribute

**Kind**: global function  
<a name="getParentsByName"></a>

## getParentsByName() ⇒ <code>Array</code>
Helper for getting all jDomObjects.DomItems starting at child and having specified name attribute

**Kind**: global function  
<a name="getParentsByTagName"></a>

## getParentsByTagName() ⇒ <code>Array</code>
Helper for getting all jDomObjects.DomItems starting at child and having specified tagName

**Kind**: global function  
<a name="getTopParentItem"></a>

## getTopParentItem(item) ⇒ [<code>DomItemRoot</code>](#module_dom/objects.DomItemRoot)
Get the upper parentItem for the provided child. (usually this is a jDomObjects.documentItem reference)
WARNING: This is a recursive function.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem which we want the highest parent item of |

<a name="renderHTML"></a>

## renderHTML(item, parent) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
This is a shortcut for building the specified HTML elements and appending them to the Dom
with associated listeners.
The final argument is specific for adding event listeners with options.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>DomItem</code>](#module_dom/objects.DomItem) | The DomItem that we want to render the element for |
| parent | [<code>DomItemRoot</code>](#module_dom/objects.DomItemRoot) | The Base Dom item which is the parent of all the items |

<a name="createDomItem"></a>

## createDomItem(...attributes) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
This is the basic Object for representing the Dom in a virtual perspective. All incoming attributes will be merged
to the specified format.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| ...attributes | <code>Object</code> | DomItem-like object(s) to be merged as a DomItem |

<a name="initChildren"></a>

## initChildren() ⇒ <code>Array.&lt;(module:dom/objects~DomItemHead\|module:dom/objects~DomItemBody)&gt;</code>
Initiate the children of Root / DocumentItem. This is a helper for [documentDomItem](#documentDomItem).

**Kind**: global function  
<a name="initRoot"></a>

## initRoot(children, listeners) ⇒ [<code>DomItemRoot</code>](#module_dom/objects.DomItemRoot) \| [<code>DomItem</code>](#module_dom/objects.DomItem)
Initiate the Root for DocumentItem. This is primary a helper for [documentDomItem](#documentDomItem).

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| children | <code>Array.&lt;(module:dom/objects~DomItemHead\|module:dom/objects~DomItemBody)&gt;</code> | Provide an array of Head and Body (usually via [initChildren](#initChildren)) |
| listeners | <code>Object.&lt;string, module:dom/objects~listenerFunction&gt;</code> | An object of all event listeners to be registered in the Dom |

<a name="documentDomItem"></a>

## documentDomItem(listeners, [rootItem]) ⇒ [<code>DomItemRoot</code>](#module_dom/objects.DomItemRoot) \| [<code>DomItem</code>](#module_dom/objects.DomItem)
Return a DomItem reference to the document. The rootItem argument is a system variable and not necessary to
implement.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| listeners | <code>Object.&lt;string, module:dom/objects~listenerFunction&gt;</code> | An object of all event listeners to be registered in the Dom |
| [rootItem] | [<code>DomItemRoot</code>](#module_dom/objects.DomItemRoot) \| [<code>DomItem</code>](#module_dom/objects.DomItem) | This is a reference to DomItemRoot which will be defaulted with [initRoot](#initRoot) |

<a name="bindPointData"></a>

## bindPointData(item, pnt) ⇒ [<code>MatrixColumn</code>](#module_matrix/objects.MatrixColumn) \| [<code>MatrixRow</code>](#module_matrix/objects.MatrixRow)
Generate point data for each item in the matrix
WARNING: This is a recursive function.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| item | [<code>MatrixColumn</code>](#module_matrix/objects.MatrixColumn) \| [<code>MatrixRow</code>](#module_matrix/objects.MatrixRow) | A special DomItem which is either a layer, row, or column in a matrix. |
| pnt | [<code>Point</code>](#module_matrix/objects.Point) | A point to be added to a specific Matrix Column |

<a name="nextCell"></a>

## nextCell(pnt, dir) ⇒ [<code>Point</code>](#module_matrix/objects.Point)
Based on provided point and point direction generate next point.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrix/objects.Point) | Provide the current / initial point |
| dir | [<code>Direction</code>](#module_matrix/objects.Direction) | Provide the direction to be applied to find the next point |

<a name="pointDifference"></a>

## pointDifference(start, end) ⇒ [<code>Point</code>](#module_matrix/objects.Point)
Based on provided point and another point, get a point with the difference between each axis

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| start | [<code>Point</code>](#module_matrix/objects.Point) | The first point to compare |
| end | [<code>Point</code>](#module_matrix/objects.Point) | The other point to be compared |

<a name="areEqualPoints"></a>

## areEqualPoints(p1, p2) ⇒ <code>boolean</code>
Given two points, compare the x, y, and z of each to see if they are the same

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| p1 | [<code>Point</code>](#module_matrix/objects.Point) | The first point to compare |
| p2 | [<code>Point</code>](#module_matrix/objects.Point) | The other point to be compared |

<a name="getHighestAbsoluteCoordinate"></a>

## getHighestAbsoluteCoordinate(pnt) ⇒ [<code>coordinate</code>](#module_matrix/objects.coordinate)
Return the first coordinate number with the highest absolute value.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrix/objects.Point) | A Point to be assessed. |

<a name="getFirstAxisOfCoordinate"></a>

## getFirstAxisOfCoordinate(pnt, coordinate) ⇒ <code>false</code> \| [<code>axis</code>](#module_matrix/objects.axis)
Having provided a coordinate number, find all corresponding axis, return the first match.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrix/objects.Point) | The Point containing a matching coordinate. |
| coordinate | [<code>coordinate</code>](#module_matrix/objects.coordinate) | The coordinate to search for. |

<a name="pointAndCoordinateToDirection"></a>

## pointAndCoordinateToDirection(pnt, highestCoordinate) ⇒ [<code>Direction</code>](#module_matrix/objects.Direction)
Given a point and the value of the highest coordinate select the corresponding axis which will be the direction
(-1 or 1) to and set the other axis to 0.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrix/objects.Point) | The which will be converted to a direction. |
| highestCoordinate | [<code>coordinate</code>](#module_matrix/objects.coordinate) | The highest coordinate provided by the point. |

<a name="pointToDirection"></a>

## pointToDirection(pnt) ⇒ [<code>Direction</code>](#module_matrix/objects.Direction)
Having a point, convert it to a direction where the axis with the highest coordinate value will be set to -1 or 1.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrix/objects.Point) | The point to be converted to a direction. |

<a name="pointsToDirection"></a>

## pointsToDirection(start, end) ⇒ [<code>Direction</code>](#module_matrix/objects.Direction)
Retrieve a directional coordinate value based on two provided points
(directions consist of two zero coordinates and a single coordinate of 1 / -1)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| start | [<code>Point</code>](#module_matrix/objects.Point) | The first point to assess. |
| end | [<code>Point</code>](#module_matrix/objects.Point) | The other point to assess. |

<a name="randomStart"></a>

## randomStart(length, dir, [lengthLimits]) ⇒ [<code>Point</code>](#module_matrix/objects.Point)
Generate a random starting point for a line with the provided length and direction.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| length | <code>number</code> |  | The intended length the resulting line. |
| dir | [<code>Direction</code>](#module_matrix/objects.Direction) |  | The direction the line will extend towards. |
| [lengthLimits] | [<code>Point</code>](#module_matrix/objects.Point) | <code>{x: 10, y: 10, z: 10}</code> | The maximum grid size. |

<a name="lineEndPoint"></a>

## lineEndPoint(start, length, dir) ⇒ [<code>Point</code>](#module_matrix/objects.Point)
Given a start point, line length, and a direction, generate the end point of the line.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| start | [<code>Point</code>](#module_matrix/objects.Point) | The selected starting point. |
| length | <code>number</code> | The total length of the line. |
| dir | [<code>Direction</code>](#module_matrix/objects.Direction) | The direction of the line. |

<a name="getPointsLine"></a>

## getPointsLine(start, end, [line]) ⇒ [<code>Array.&lt;Point&gt;</code>](#module_matrix/objects.Point)
Having provided two points, return an array of transition points connecting 'start' and 'end'. Return array
includes 'start' (line[0]) and 'end' (line[line.length-1])

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Point</code>](#module_matrix/objects.Point) |  | The starting location of the line. |
| end | [<code>Point</code>](#module_matrix/objects.Point) |  | The final line destination. |
| [line] | [<code>Array.&lt;Point&gt;</code>](#module_matrix/objects.Point) | <code>[]</code> | The resulting line to connect start and end. |

<a name="getPointsLines"></a>

## getPointsLines(lines) ⇒ <code>Array.&lt;Array.&lt;module:matrix/objects.Point&gt;&gt;</code>
Takes an array of arrays containing two points each. Calls getPointsLine for each array of points. Returns an
array of all points captured for each line segment

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| lines | <code>Array.&lt;Array.&lt;module:matrix/objects.Point&gt;&gt;</code> | An array of lines only containing start and end. |

<a name="checkInBetween"></a>

## checkInBetween(...args) ⇒ <code>boolean</code>
Given two points, check the cells between using specified function.
When inclusive is set to true the provided start and end points will also be tested

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>\*</code> | These args match the parameter list for [testPointsBetween](#module_matrix/core..testPointsBetween) |

<a name="getAxisLengths"></a>

## getAxisLengths(matrix) ⇒ [<code>Point</code>](#module_matrix/objects.Point)
Return point-like object with all of the axis lengths.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| matrix | [<code>Matrix</code>](#module_matrix/objects.Matrix) | The matrix to get the dimensions of. |

<a name="randDirection"></a>

## randDirection([useCoordinates]) ⇒ [<code>Direction</code>](#module_matrix/objects.Direction)
Get random direction point

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [useCoordinates] | [<code>Array.&lt;Point&gt;</code>](#module_matrix/objects.Point) | <code>[]</code> | An array of possible directions. |

<a name="checkValidPoint"></a>

## checkValidPoint(pnt, matrix) ⇒ <code>boolean</code>
Test if the provided point exists in the matrix.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrix/objects.Point) | Provide a point to validate. |
| matrix | [<code>Matrix</code>](#module_matrix/objects.Matrix) | The matrix that contains valid points. |

<a name="getDomItemFromPoint"></a>

## getDomItemFromPoint(pnt, matrix) ⇒ <code>false</code> \| [<code>DomItem</code>](#module_dom/objects.DomItem)
Retrieve the DomItem associated with the provided point

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrix/objects.Point) | A point corresponding to a DomItem. |
| matrix | [<code>Matrix</code>](#module_matrix/objects.Matrix) | The matrix containing the point. |

<a name="getAllPoints"></a>

## getAllPoints(matrix, [allPoints]) ⇒ [<code>Array.&lt;Point&gt;</code>](#module_matrix/objects.Point)
Return an array of all the points in the matrix

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| matrix | [<code>Matrix</code>](#module_matrix/objects.Matrix) \| [<code>MatrixColumn</code>](#module_matrix/objects.MatrixColumn) |  | The matrix to retrieve points from. |
| [allPoints] | [<code>Array.&lt;Point&gt;</code>](#module_matrix/objects.Point) | <code>[]</code> | The array of points to be returned |

<a name="adjacentPoints"></a>

## adjacentPoints(pnt, matrix) ⇒ [<code>Array.&lt;Point&gt;</code>](#module_matrix/objects.Point)
Return all valid points surrounding a provided point

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrix/objects.Point) | The point we want to find adjacent points for. |
| matrix | [<code>Matrix</code>](#module_matrix/objects.Matrix) | The matrix having the point. |

<a name="adjacentEdgePoints"></a>

## adjacentEdgePoints(pnt, matrix) ⇒ [<code>Array.&lt;Point&gt;</code>](#module_matrix/objects.Point)
Return all points which touch on edges (not diagonal)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrix/objects.Point) | The point we want to find adjacent points for. |
| matrix | [<code>Matrix</code>](#module_matrix/objects.Matrix) | The matrix having the point. |

<a name="getPointFromElement"></a>

## getPointFromElement(elem) ⇒ [<code>Point</code>](#module_matrix/objects.Point)
Retrieve the point associated with the provided element.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Node</code> \| <code>HTMLElement</code> \| <code>module:pseudoDom/objects.PseudoHTMLElement</code> | Provide an element associated with a point. |

<a name="getDomItemFromElement"></a>

## getDomItemFromElement(elem, matrix) ⇒ [<code>DomItem</code>](#module_dom/objects.DomItem)
Retrieve the DomItem associated with the provided element in the matrix

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Node</code> \| <code>HTMLElement</code> \| <code>module:pseudoDom/objects.PseudoHTMLElement</code> | Provide an element having an associated DomItem. |
| matrix | [<code>Matrix</code>](#module_matrix/objects.Matrix) | The matrix potentially containing the DomItem with Point. |

<a name="point"></a>

## point(x, y, [z]) ⇒ [<code>Point</code>](#module_matrix/objects.Point)
Store the point data for an x, y, z [Matrix](#module_matrix/objects.Matrix).

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | [<code>coordinate</code>](#module_matrix/objects.coordinate) |  | The numeric value for X-coordinate |
| y | [<code>coordinate</code>](#module_matrix/objects.coordinate) |  | The numeric value for Y-coordinate |
| [z] | [<code>coordinate</code>](#module_matrix/objects.coordinate) | <code>0</code> | The numeric value for Z-coordinate (default to 0 for 2D [Matrix](#module_matrix/objects.Matrix)) |

<a name="tile"></a>

## tile() ⇒ [<code>MatrixTile</code>](#module_matrix/objects.MatrixTile)
A default tile in the [Matrix](#module_matrix/objects.Matrix)

**Kind**: global function  
<a name="matrix"></a>

## matrix(x, y, z, matrixProps) ⇒ [<code>Matrix</code>](#module_matrix/objects.Matrix)
Create a 3d matrix of i with x by y by z size, add additional objects for each layer as well

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Object</code> | Properties and a coordinate defining the width of the matrix. |
| y | <code>Object</code> | Properties and a coordinate defining the height of the matrix. |
| z | <code>Object</code> | Properties and a coordinate defining the depth of the matrix. |
| matrixProps | [<code>Array.&lt;Matrix&gt;</code>](#module_matrix/objects.Matrix) | Properties to be added to the matrix |

<a name="square"></a>

## square([x], [y], [z], [matrixProps], size) ⇒ [<code>Matrix</code>](#module_matrix/objects.Matrix)
Return a single layer matrix where x and y are equal

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [x] | [<code>Array.&lt;MatrixTile&gt;</code>](#module_matrix/objects.MatrixTile) | <code>[]</code> | All the data to be presented as part of the specified point, requires MatrixTile base |
| [y] | [<code>Array.&lt;MatrixRow&gt;</code>](#module_matrix/objects.MatrixRow) | <code>[]</code> | Additional data to append to the MatrixRow |
| [z] | [<code>Array.&lt;MatrixLayer&gt;</code>](#module_matrix/objects.MatrixLayer) | <code>[]</code> | Additional data to append to the MatrixLayer |
| [matrixProps] | [<code>Array.&lt;Matrix&gt;</code>](#module_matrix/objects.Matrix) | <code>[]</code> | Additional data to append to the Matrix |
| size | <code>number</code> |  | Used to define height and width as equal values (depth is set to 1) |

<a name="cube"></a>

## cube([x], [y], [z], [matrixProps], size) ⇒ [<code>Matrix</code>](#module_matrix/objects.Matrix)
Return a matrix where x, y, and z are equal

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [x] | [<code>Array.&lt;MatrixTile&gt;</code>](#module_matrix/objects.MatrixTile) | <code>[]</code> | All the data to be presented as part of the specified point, requires MatrixTile base |
| [y] | [<code>Array.&lt;MatrixRow&gt;</code>](#module_matrix/objects.MatrixRow) | <code>[]</code> | Additional data to append to the MatrixRow |
| [z] | [<code>Array.&lt;MatrixLayer&gt;</code>](#module_matrix/objects.MatrixLayer) | <code>[]</code> | Additional data to append to the MatrixLayer |
| [matrixProps] | [<code>Array.&lt;Matrix&gt;</code>](#module_matrix/objects.Matrix) | <code>[]</code> | Additional data to append to the Matrix |
| size | <code>number</code> |  | Used to define height, width, and depth as equal values |

<a name="listenerFunction"></a>

## listenerFunction : <code>function</code>
This is the standard definition of a listenerFunction to be used

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>Event</code> \| <code>module:pseudoDom/objects.PseudoEvent</code> | The event object passed to the listener |
| target | [<code>DomItem</code>](#module_dom/objects.DomItem) | The element which triggered the event |
| [...args] | <code>\*</code> | Optional args as required by the listener |

<a name="EventListener"></a>

## EventListener : <code>Object</code>
An EventListener Object to be appended to the element within the DomItem

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| listenerFunc | <code>string</code> | A string function name matching an existing [module:dom/objects~listenerFunction](module:dom/objects~listenerFunction). |
| listenerArgs | <code>Object</code> | Additional args required for the listener function |
| listenerOptions | [<code>EventListenerOptions</code>](#module_dom/objects.EventListenerOptions) | Provides support for options parameter of addEventListener, or false for default |

<a name="DomItemHead"></a>

## DomItemHead : [<code>DomItem</code>](#module_dom/objects.DomItem)
DomItemHead defines the structure for a single element in the Dom

**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [tagName] | <code>string</code> | <code>&quot;head&quot;</code> | This is set to the string head referring to the HTML element of the same name |
| attributes | <code>Object.&lt;string, (string\|Object)&gt;</code> |  | All potential HTML element attributes can be defined here |
| element | <code>HTMLHeadElement</code> \| <code>module:pseudoDom/objects.PseudoHTMLElement</code> |  | A reference to the HTML head element |
| children | [<code>Array.&lt;DomItem&gt;</code>](#module_dom/objects.DomItem) |  | A reference to an array of child objects |

<a name="DomItemBody"></a>

## DomItemBody : [<code>DomItem</code>](#module_dom/objects.DomItem)
DomItemBody defines the structure for a single element in the Dom

**Kind**: global typedef  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [tagName] | <code>string</code> | <code>&quot;body&quot;</code> | This is set to the string body referring to the HTML element of the same name |
| attributes | <code>Object.&lt;string, (string\|Object)&gt;</code> |  | All potential HTML element attributes can be defined here |
| element | <code>HTMLBodyElement</code> \| <code>module:pseudoDom/objects.PseudoHTMLElement</code> |  | A reference to the HTML body element |
| children | [<code>Array.&lt;DomItem&gt;</code>](#module_dom/objects.DomItem) |  | A reference to an array of child objects |

