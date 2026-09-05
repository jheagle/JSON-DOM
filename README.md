# JSON-DOM

State management with JSON
## Modules

<dl>
<dt><a href="#module_jsonDom">jsonDom</a></dt>
<dd><p>All of the JSON DOM system functions for creating JSON components.</p>
</dd>
<dt><a href="#module_domGeneral">domGeneral</a></dt>
<dd><p>Core Dom management functions</p>
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
<dt><a href="#makeElementType">makeElementType(nodeName, data)</a> ⇒ <code>Text</code> | <code>Comment</code> | <code>HTMLElement</code></dt>
<dd><p>Create a new DOM Node based on name and data.</p>
</dd>
<dt><a href="#checkStyles">checkStyles(element, attr)</a> ⇒ <code>int</code> | <code>Object.&lt;string, number&gt;</code></dt>
<dd><p>For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute</p>
</dd>
<dt><a href="#checkClasses">checkClasses(element, attr)</a> ⇒ <code>int</code> | <code>Object.&lt;string, number&gt;</code></dt>
<dd><p>For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute</p>
</dd>
<dt><a href="#checkAttribute">checkAttribute(domItem)</a> ⇒ <code><a href="#testAttributeChange">testAttributeChange</a></code></dt>
<dd><p>Given some config, provide a function to testing attribute and key existence in that config.</p>
</dd>
<dt><a href="#camelCaseAttributes">camelCaseAttributes(domItem)</a> ⇒ <code>Object.&lt;string, *&gt;</code></dt>
<dd><p>Updates all the keys to be camelCase</p>
</dd>
<dt><a href="#checkStyles">checkStyles(domItem, attr)</a> ⇒ <code>int</code> | <code>Object.&lt;string, number&gt;</code></dt>
<dd><p>For attributes which are objects or multi-part strings -1 = remove attribute, 0 = no change, 1 = add attribute</p>
</dd>
<dt><a href="#checkClasses">checkClasses(domItem, attr)</a> ⇒ <code>int</code> | <code>Object.&lt;string, number&gt;</code></dt>
<dd><p>For attributes which are objects or multipart strings -1 = remove attribute, 0 = no change, 1 = add attribute</p>
</dd>
<dt><a href="#checkAttribute">checkAttribute(element)</a> ⇒ <code><a href="#testAttributeChange">testAttributeChange</a></code></dt>
<dd><p>Given some config, provide a function to testing attribute and key existence in that config.</p>
</dd>
<dt><a href="#kabobCaseAttributes">kabobCaseAttributes(attributesToSet)</a> ⇒ <code>Object.&lt;string, *&gt;</code></dt>
<dd><p>Updates all the keys to be kabob-case</p>
</dd>
<dt><a href="#createEventProxy">createEventProxy(event)</a> ⇒ <code>EventProxy</code></dt>
<dd><p>Return a modified version of the event.</p>
</dd>
<dt><a href="#commonEvents">commonEvents()</a> ⇒ <code>Object</code></dt>
<dd><p>Create the default listeners for common events.</p>
</dd>
<dt><a href="#getListenerOptions">getListenerOptions()</a> ⇒ <code>OptionsTemplate</code></dt>
<dd><p>Retrieve the OptionsTemplate for EventListenerOptions.</p>
</dd>
<dt><a href="#makeEventHandler">makeEventHandler(listener, item, [...args])</a> ⇒ <code>eventHandler</code></dt>
<dd><p>Prepare a listener to be used before assigning to an element.</p>
</dd>
<dt><a href="#applyActiveListeners">applyActiveListeners(item, eventName)</a> ⇒ <code>DomItem</code></dt>
<dd><p>Apply each active event listener for event type to the DOM Item&#39;s element.</p>
</dd>
<dt><a href="#activateListener">activateListener(item, eventName, eventListener)</a> ⇒ <code>DomItem</code></dt>
<dd><p>Activate listener by pushing it to activeListeners.</p>
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
<dt><a href="#testAttributeChange">testAttributeChange</a> ⇒ <code>int</code></dt>
<dd></dd>
<dt><a href="#testAttributeChange">testAttributeChange</a> ⇒ <code>int</code></dt>
<dd></dd>
<dt><a href="#MicrosoftHtmlObject">MicrosoftHtmlObject</a> : <code>EventTarget</code></dt>
<dd><p>Document attachEvent support for older browsers.</p>
</dd>
</dl>

<a name="module_jsonDom"></a>

## jsonDom
All of the JSON DOM system functions for creating JSON components.

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  
<a name="module_domGeneral"></a>

## domGeneral
Core Dom management functions

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  
<a name="module_domEvents"></a>

## domEvents
Setting up and handling events

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  
<a name="module_optionFlags"></a>

## optionFlags
Be able to use Flags (Options) in a well-formed way.

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [optionFlags](#module_optionFlags)
    * _static_
        * [.optionsToNumber(optionsTemplate, listenerOptions)](#module_optionFlags.optionsToNumber) ⇒ <code>int</code>
        * [.numberToOptions(optionsTemplate, binaryOptions)](#module_optionFlags.numberToOptions) ⇒ <code>EventListenerOptions</code>
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

<a name="makeElementType"></a>

## makeElementType(nodeName, data) ⇒ <code>Text</code> \| <code>Comment</code> \| <code>HTMLElement</code>
Create a new DOM Node based on name and data.

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| nodeName | <code>string</code> |  | 
| data | <code>string</code> \| <code>null</code> | <code>null</code> | 

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

<a name="createEventProxy"></a>

## createEventProxy(event) ⇒ <code>EventProxy</code>
Return a modified version of the event.

**Kind**: global function  

| Param | Type |
| --- | --- |
| event | <code>Event</code> | 

<a name="commonEvents"></a>

## commonEvents() ⇒ <code>Object</code>
Create the default listeners for common events.

**Kind**: global function  
<a name="getListenerOptions"></a>

## getListenerOptions() ⇒ <code>OptionsTemplate</code>
Retrieve the OptionsTemplate for EventListenerOptions.

**Kind**: global function  
<a name="makeEventHandler"></a>

## makeEventHandler(listener, item, [...args]) ⇒ <code>eventHandler</code>
Prepare a listener to be used before assigning to an element.

**Kind**: global function  

| Param | Type |
| --- | --- |
| listener | <code>listenerFunction</code> | 
| item | <code>DomItem</code> | 
| [...args] | <code>\*</code> | 

<a name="applyActiveListeners"></a>

## applyActiveListeners(item, eventName) ⇒ <code>DomItem</code>
Apply each active event listener for event type to the DOM Item's element.

**Kind**: global function  

| Param | Type |
| --- | --- |
| item | <code>DomItem</code> | 
| eventName | <code>EventName</code> | 

<a name="activateListener"></a>

## activateListener(item, eventName, eventListener) ⇒ <code>DomItem</code>
Activate listener by pushing it to activeListeners.

**Kind**: global function  

| Param | Type |
| --- | --- |
| item | <code>DomItem</code> | 
| eventName | <code>EventName</code> | 
| eventListener | <code>EventListener</code> | 

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

<a name="MicrosoftHtmlObject"></a>

## MicrosoftHtmlObject : <code>EventTarget</code>
Document attachEvent support for older browsers.

**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| attachEvent | <code>function</code> | 

