# JSON-DOM

State management with JSON

json-dom represents a document as a **Virtual DOM**: a tree of plain `DomItem` objects (the **DomItem tree**) that
mirrors the real HTML DOM. You build and update the DomItem tree; json-dom syncs the corresponding real elements
for you. `domGeneral` below covers building and syncing the DomItem tree itself, and `domEvents` covers attaching
listeners to items in it.
## Modules

<dl>
<dt><a href="#module_jsonDom">jsonDom</a></dt>
<dd><p>All of the JSON DOM system functions for building and syncing a Virtual DOM (DomItem tree) to the real HTML DOM.</p>
</dd>
<dt><a href="#module_domEvents">domEvents</a></dt>
<dd><p>Setting up and handling events for items in a Virtual DOM (DomItem tree)</p>
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
All of the JSON DOM system functions for building and syncing a Virtual DOM (DomItem tree) to the real HTML DOM.

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  
<a name="module_domEvents"></a>

## domEvents
Setting up and handling events for items in a Virtual DOM (DomItem tree)

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [domEvents](#module_domEvents)
    * [.createEventResponder(eventHandler, [abort])](#module_domEvents.createEventResponder) ⇒ <code>EventResponder</code>
    * [.createEventProxy(event)](#module_domEvents.createEventProxy) ⇒ <code>EventProxy</code>
    * [.createEventListener([listenerProperties])](#module_domEvents.createEventListener) ⇒ <code>EventListener</code>
    * [.unassignListener(trigger, elem, fn, options)](#module_domEvents.unassignListener) ⇒ <code>listenerFunction</code> \| <code>function</code>
    * [.revokeActiveListeners(eventName, item)](#module_domEvents.revokeActiveListeners) ⇒ <code>module:domGeneral~DomItem</code>
    * [.retrieveListener(listenerName, [parent])](#module_domEvents.retrieveListener) ⇒ <code>listenerFunction</code> \| <code>function</code> \| <code>Object</code>
    * [.removeEventListener(eventName, listenerFunction, [customArgs], [options], item)](#module_domEvents.removeEventListener) ⇒ <code>module:domGeneral~DomItem</code>
    * [.registerListeners(listeners, [parent])](#module_domEvents.registerListeners) ⇒ <code>DomItemRoot</code> \| <code>Object</code>
    * [.registerListener(listener, [name], [parent])](#module_domEvents.registerListener) ⇒ <code>Object.&lt;string, listenerFunction&gt;</code>
    * [.makeEventHandler(listener, item, [...args])](#module_domEvents.makeEventHandler) ⇒ <code>eventHandler</code>
    * [.listenerOptions(options)](#module_domEvents.listenerOptions) ⇒ <code>boolean</code>
    * [.fullRemoveEventListener(eventName, listener, [name], [customArgs], [options], item)](#module_domEvents.fullRemoveEventListener) ⇒ <code>DomItem</code>
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
| listenerProperties.listenerFunc | <code>string</code> \| <code>listenerFunction</code> |  | The function or name (string) of the listener action - see [EventListener](EventListener)'s listenerFunc property for when to use which. |
| [listenerProperties.listenerArgs] | <code>Object</code> \| <code>null</code> | <code></code> | Additional parameters to apply to the function |
| [listenerProperties.listenerOptions] | <code>EventListenerOptions</code> | <code>false</code> | The listener options to apply to the element |
| [listenerProperties.listenerActive] | <code>boolean</code> | <code>false</code> | Flag for listener applied to element |

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
Based on the provided function / listener name, retrieve the associated function from the root domEvents.DomItem.If a raw function is passed instead of a registered name, it is returned as-is - see [EventListener](EventListener)'slistenerFunc property for the tradeoffs of that discretionary path.

**Kind**: static method of [<code>domEvents</code>](#module_domEvents)  

| Param | Type | Description |
| --- | --- | --- |
| listenerName | <code>string</code> \| <code>listenerFunction</code> | The name of one of the registered listener functions, or an already-resolved listener function. |
| [parent] | <code>DomItemRoot</code> \| <code>Object</code> | The parent DomItem which is DomItemRoot which stores eventListeners property. |

<a name="module_domEvents.removeEventListener"></a>

### domEvents.removeEventListener(eventName, listenerFunction, [customArgs], [options], item) ⇒ <code>module:domGeneral~DomItem</code>
Find and remove an event listener from a DomItem: detaches it from the element first (via[deactivateListener](deactivateListener)) if it was active, then splices its descriptor out of eventListeners. A no-op if nomatching listener is found.item is the last parameter (instead of customArgs/options having literal defaults) so this can be curried andpiped directly - see [fullAddEventListener](fullAddEventListener) for an example of the pattern.

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

<a name="module_domEvents.fullRemoveEventListener"></a>

### domEvents.fullRemoveEventListener(eventName, listener, [name], [customArgs], [options], item) ⇒ <code>DomItem</code>
Find and remove a listener that was registered by name (e.g. via [fullAddEventListener](fullAddEventListener)) - the counterpartto fullAddEventListener. Resolves name the same way fullAddEventListener defaults it, so a caller only needs theoriginal listener function (not the internal name string it was registered under) to remove it:1. Resolve name (defaults to listener.name, same as [fullAddEventListener](fullAddEventListener)).2. [removeEventListener](removeEventListener) - find the descriptor by that name, detach it from the element if active, and   splice it out of item.eventListeners.Does not remove the function from the root DomItem's eventActions registry, since that name may still be sharedby other DomItems - see [registerListener](registerListener).

**Kind**: static method of [<code>domEvents</code>](#module_domEvents)  
**Returns**: <code>DomItem</code> - The same DomItem, with the matching listener removed if one was found.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| eventName | <code>EventName</code> |  | The name of the trigger event (e.g. 'click'). |
| listener | <code>listenerFunction</code> \| <code>function</code> |  | The same function originally passed to fullAddEventListener. |
| [name] | <code>string</code> | <code>&quot;listener.name&quot;</code> | The name the listener was registered under in eventActions. |
| [customArgs] | <code>Object</code> \| <code>null</code> | <code></code> | The custom args the listener was registered with. |
| [options] | <code>EventListenerOptions</code> | <code>false</code> | The options the listener was registered with. |
| item | <code>DomItem</code> |  | The DomItem to remove the listener from. |

<a name="module_domEvents.fullAddEventListener"></a>

### domEvents.fullAddEventListener(eventName, listener, [name], [customArgs], [options], item) ⇒ <code>DomItem</code>
Register the listener function, attach it as a descriptor on the item, then bind it onto thereal element - the full setup sequence for a single event listener, in order:1. [registerListener](registerListener) - store the real function in the root DomItem's eventActions, keyed by name.2. [addEventListener](addEventListener) - push an EventListener descriptor referencing that name onto item.eventListeners.3. [bindListeners](bindListeners) - activate and apply any unbound descriptors, attaching them to item.element.item is the last parameter (instead of name/customArgs/options having literal defaults) so addEventListener canbe curried directly into the pipe below without an argument-reordering wrapper.

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
Search a DOM item's eventListeners for a specific event listener, matched by listener function, custom args, andoptions. Returns its index and the matching descriptor as a tuple.item is the last parameter (instead of customArgs/options having literal defaults) so this can be curried andpiped directly - see [fullAddEventListener](fullAddEventListener) for an example of the pattern.

**Kind**: static method of [<code>domEvents</code>](#module_domEvents)  
**Returns**: <code>Array.&lt;(number\|EventListener\|undefined)&gt;</code> - A 2-element [index, matchingListener] tuple. If no match isfound, index is -1 and matchingListener is undefined.  

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
Create an EventListener descriptor and push it onto a DomItem's eventListeners for the given event name.Does not attach anything to the real element - see [bindListeners](bindListeners) or [fullAddEventListener](fullAddEventListener) for that.item is the last parameter (instead of customArgs/options having literal defaults) so this can be curried andpiped directly - see [fullAddEventListener](fullAddEventListener) for an example.Prefer calling this through [fullAddEventListener](fullAddEventListener) with a registered name (see [registerListener](registerListener)).Passing a raw function directly here works, but logs a console warning - see [EventListener](EventListener)'slistenerFunc property for what that discretionary path gives up.

**Kind**: static method of [<code>domEvents</code>](#module_domEvents)  
**Returns**: <code>module:domGeneral~DomItem</code> - The same DomItem, with the new EventListener descriptor appended.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| eventName | <code>EventName</code> |  | The name of the trigger event (e.g. 'click'). |
| listenerFunction | <code>string</code> \| <code>module:domEvents~listenerFunction</code> |  | Preferably a name registered via [registerListener](registerListener); a raw listener function is also accepted, at the caller's discretion. |
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
| listenerFunc | <code>string</code> \| <code>listenerFunction</code> |  | Prefer a string name registered via [registerListener](registerListener) (or [fullAddEventListener](fullAddEventListener), which does this for you) and resolved from the root DomItem's eventActions at activation time. This is the only form compatible with the rest of the module: it can be shared by name across multiple DomItems, and survives [domItemToJson](domItemToJson) (which serializes the DomItem to JSON - a raw function cannot be represented there, and JSON.stringify silently drops it with no warning). A raw [listenerFunction](listenerFunction) may be attached directly instead (e.g. via [addEventListener](addEventListener)), entirely at the caller's discretion for one-off listeners that don't need those features. addEventListener logs a console warning when this path is used, as a reminder of the tradeoff. |
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

