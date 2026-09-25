import 'core-js/stable';
import type { DomItem } from '../../domItem/types';
import type { EventName, ListenerDescriptor, ListenerFunction, ListenerOptions } from '../types';
declare const findEventListener: (eventName: EventName, listenerFunction: string | ListenerFunction, customArgs: object | null | undefined, options: ListenerOptions | null | undefined, item: DomItem) => [number, ListenerDescriptor | undefined];
export default findEventListener;
