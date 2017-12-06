import f from 'fetter-js';
import EventListener from './eventListener';

class Listener extends f.Function {
  private useCapture: boolean;
  private once: boolean;
  private passive: boolean;
  private wantsUntrusted: boolean;
  constructor(listener: EventListener, useCapture: boolean, once: boolean, passive: boolean, wantsUntrusted: boolean) {
    super(listener);
    this.useCapture = useCapture;
    this.once = once;
    this.passive = passive;
    this.wantsUntrusted = wantsUntrusted;
  }
}

export default class EventTarget {
  private listeners: {
    [type: string]: Listener[];
  } = {};
  constructor() {
    this.listeners = {};
  }
  addEventListener(
    type: string,
    listener: EventListener,
    options: {
      capture?: boolean;
      once?: boolean;
      passive?: boolean;
    } | boolean = false,
    wantsUntrusted: boolean = false,
  ) {
    let useCapture = false;
    let once = false;
    let passive = false;
    let untrusted = wantsUntrusted;
    if (typeof options === 'boolean') {
      useCapture = options;
    } else {
      useCapture = options.capture || false;
      once = options.once || false;
      passive = options.passive || false;
    }
    this.listeners[type].push(new Listener(listener, useCapture, once, passive, untrusted));
  }
}
