import request from 'request';
import Console from './console';
import EventTarget from './eventTarget';
import Location from './location';
import Window from './window';

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
   * Opens the specified URL as a Narwhal window
   * @param {string} url The URL to open
   * @return {Promise<string>} A promise that will resolve the HTML of the requested page
   */
  async open(url: string): Promise<Window> {
    return new Promise<Window>((resolve, reject) => {
      request(
        url,
        (err, res, body) => {
          if (err) {
            reject(err);
          } else {
            this.window = new Window(body, new Location(url));
            resolve(this.window);
          }
        },
      );
    });
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
