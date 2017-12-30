import parseUrl from 'parse-url';
import HTMLHyperlinkElementUtils from './htmlHyperlinkElementUtils';

export default class Location implements HTMLHyperlinkElementUtils {
  /**
   * Keeps track of the href for the getter and setters
   * @private
   */
  private _href: string;
  get href() {
    return this._href;
  }
  /**
   * Sets Location#href, and navigates to the new url
   * @param {string} url The new URL
   */
  set href(url: string) {
    this._href = url;
    this.assign(url);
  }
  public protocol: string;
  public host: string;
  public hostname: string;
  public port: string;
  public pathname: string;
  public search: string;
  public hash: string;
  public username: string;
  public password: string;
  protected origin: string;

  /**
   * @constructs
   * @param {string} initialUrl The initial URL
   */
  constructor(initialUrl: string) {
    this.parseUrl(initialUrl);
  }

  /**
   * Loads the specified URL in the window
   * @param {string} url The URL to load
   */
  assign(url: string) {
    this.parseUrl(url);
    // @TODO
  }
  /**
   * Reloads the resource at the current URL
   * Since Narwhal doesn't cache, its just a wrapper for Location#assign
   * @param {boolean} forcedReload If true, it will not display from the cache, which Narwhal does not have.
   */
  reload(forcedReload: boolean) {
    this.assign(this._href);
  }
  /**
   * Same as HTMLHyperlinkElementUtils#assign but does not store this in history
   * @param {string} url The URL to load
   */
  replace(url: string) {
    // @TODO: History
    this.assign(url);
  }
  /**
   * Parses the specified URL and updates all properities to match
   * @param {string} url The target URL
   */
  private parseUrl(url: string) {
    const parsed = parseUrl(url);
    this._href = parsed.href;
    this.protocol = parsed.protocol;
    this.hostname = parsed.resource;
    if (parsed.port) {
      this.host = `${parsed.resource}:${parsed.port}`;
      this.origin = `${parsed.protocol}://${parsed.resource}:${parsed.port}`;
    } else {
      this.host = parsed.resource;
      this.origin = `${parsed.protocol}://${parsed.resource}`;
    }
    this.port = parsed.port;
    this.pathname = parsed.pathname;
    this.search = parsed.search;
    this.hash = parsed.hash;
    if (parsed.user.length > 0) {
      this.username = parsed.user.split(':')[0];
      this.password = parsed.user.split(':')[1];
    }
  }
}
