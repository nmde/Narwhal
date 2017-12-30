/**
 * @class HTMLHyperlinkElementUtils
 * @classdesc Hyperlink utilities
 */
export default abstract class HTMLHyperlinkElementUtils {
  /**
   * Contains the URL
   * @name HTMLHyperlinkElementUtils#href
   * @type {string}
   * @public
   */
  public href: string;
  /**
   * The protocol scheme of the URL
   * @name HTMLHyperlinkElementUtils#protocol
   * @type {string}
   * @public
   */
  public protocol: string;
  /**
   * The host of the URL
   * @name HTMLHyperlinkElementUtils#host
   * @type {string}
   * @public
   */
  public host: string;
  /**
   * The hostname of the URL
   * @name HTMLHyperlinkElementUtils#hostname
   * @type {string}
   * @public
   */
  public hostname: string;
  /**
   * The port of the URL
   * @name HTMLHyperlinkElementUtils#port
   * @type {string}
   * @public
   */
  public port: string;
  /**
   * The path of the URL
   * @name HTMLHyperlinkElementUtils#pathname
   * @type {string}
   * @public
   */
  public pathname: string;
  /**
   * The querystring of the URL
   * @name HTMLHyperlinkElementUtils#search
   * @type {string}
   * @public
   */
  public search: string;
  /**
   * The anchor of the URL
   * @name HTMLHyperlinkElementUtils#hash
   * @type {string}
   * @public
   */
  public hash: string;
  /**
   * The username in the URL
   * @name HTMLHyperlinkElementUtils#username
   * @type {string}
   * @public
   */
  public username: string;
  /**
   * The password in the URL
   * @name HTMLHyperlinkElementUtils#password
   * @type {string}
   * @public
   */
  public password: string;
  /**
   * The origin
   * @name HTMLHyperlinkElementUtils#origin
   * @type {string}
   * @readonly
   */
  protected origin: string;
  /**
   * Return the href of the URL
   * @return {string} The URL
   */
  toString(): string {
    return this.href;
  }
}
