import EventListener from './eventListener';
import EventOptions from './helpers/eventOptions';
import Event from './event';

/**
 * @class EventTarget
 * @classdesc Things that can be targeted by events
 */
export default class EventTarget {
  private listeners: {
    [event: string]: EventListener[];
  };
  constructor() {
    this.listeners = {};
  }
  /**
   * Add a listener to the specified event type
   * @param {string} type The event type
   * @param {EventListener} listener The listener function
   * @param {Object} options Options effecting the event
   * @param {boolean} useCapture If true, the listener will be called before children are notified
   */
  addEventLisener(
    type: string,
    listener: EventListener,
    options: {
      capture?: boolean;
      once?: boolean;
      passive?: boolean;
    } = {},
    useCapture: boolean = false,
  ) {
    // @TODO: Respect options
    this.listeners[type].push(listener);
  }
  removeEventListener(
    type: string,
    listener: EventListener,
    options: {
      capture?: boolean;
      passive?: boolean;
    } = {},
    useCapture: boolean = false,
  ) {
    // @TODO: Respect options
    for (let i = 0; i < this.listeners[type].length; i += 1) {
      if (this.listeners[type][i].toString() === listener.toString()) {
        this.listeners[type] = this.listeners[type].slice(0, i).concat(this.listeners[type].slice(i + 1));
        break;
      }
    }
  }
  /**
   * Dispatches an event
   * @param {Event} event The event to dispatch
   */
  dispatchEvent(event: Event) {
    this.listeners[event.type].forEach((listener) => {
      listener.apply(this, [event]);
    });
  }
}
