import DOMHighResTimeStamp from './domHighResTimeStamp';
import DOMString from './domString';
import Element from './element';
import Node from './node';

export default class Event {
  readonly bubbles: boolean;
  cancelBubble: boolean;
  readonly cancelable: boolean;
  readonly composed: boolean;
  readonly currentTarget: Element;
  deepPath: Node[];
  readonly defaultPrevented: boolean;
  readonly eventPhase: number;
  readonly explicitOriginalTarget: Element;
  readonly originalTarget: Element;
  returnValue: boolean;
  readonly scoped: boolean;
  srcElement: Element;
  readonly target: Element;
  readonly timeStamp: DOMHighResTimeStamp;
  readonly type: DOMString;
  readonly isTrusted: boolean;
  constructor(
    typeArg: DOMString,
    eventInit: {
      bubbles?: boolean;
      cancelable?: boolean;
      composed?: boolean;
    } = {},
  ) {
    this.bubbles = eventInit.bubbles || false;
    this.cancelBubble = false;
    this.cancelable = eventInit.cancelable || false;
    this.composed = eventInit.composed || false;
    this.defaultPrevented = false;
    this.eventPhase = 0;
    this.isTrusted = true;
    this.timeStamp = new DOMHighResTimeStamp();
    this.type = typeArg;
  }
}
