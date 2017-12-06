import DOMHighResTimeStamp from './domHighResTimeStamp';
import DOMString from './domString';
import Element from './element';
import Node from './node';

export default class Event {
  protected bubbles: boolean;
  cancelBubble: boolean;
  protected cancelable: boolean;
  protected composed: boolean;
  protected currentTarget: Element;
  deepPath: Node[];
  protected defaultPrevented: boolean;
  protected eventPhase: number;
  protected explicitOriginalTarget: Element;
  protected originalTarget: Element;
  returnValue: boolean;
  protected scoped: boolean;
  public srcElement: Element;
  protected target: Element;
  protected timeStamp: DOMHighResTimeStamp;
  protected type: DOMString;
  protected isTrusted: boolean;
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
  initEvent(type: DOMString, bubbles: boolean = false, cancelable: boolean = false) {
    this.type = type;
    this.bubbles = bubbles;
    this.cancelable = cancelable;
  }
  preventDefault() {
    // @TODO once elements are further developed
  }
  stopImmediatePropagation() {
    // @TODO
  }
  stopPropagation() {
    // @TODO
  }
}
