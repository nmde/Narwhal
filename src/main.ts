import Console from './console';
import EventTarget from './eventTarget';
import Location from './location';
import Window from './window';
import RunnableFunction from './helpers/runnableFunction';

/**
 * @class Narwhal
 * @classdesc A Narwhal browser
 */
export default class Narwhal {
  /**
   * The window associated with this instance
   * @name Narwhal#window
   * @type Window
   * @public
   */
  public window: Window;

  /**
   * @constructs
   */
  constructor() {
    this.window = new Window(new Location());
  }
  
  /**
   * Runs the provided function with Narwhal's window
   * @param {RunnableFunction} fn The function to run
   */
  run(fn: RunnableFunction) {
    fn(this.window);
  }

  /**
   * A statically accessible reference to Console
   * @name Narwhal.Console
   * @type Console
   * @static
   */
  static Console = Console;
  /**
   * A staticly accessible reference to EventTarget
   * @name Narwhal.EventTarget
   * @type EventTarget
   * @static
   */
  static EventTarget = EventTarget;
  /**
   * A staticly accessible reference to Window
   * @name Narwhal.Window
   * @type Window
   * @static
   */
  static Window = Window;
}
