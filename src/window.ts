import BarProp from './barProp';
import Console from './console';
import Crypto from './crypto';
import Document from './document';
import DOMString from './domString';
import Element from './element';
import EventTarget from './eventTarget';
import History from './history';
import Location from './location';
import Navigator from './navigator';
import Performance from './performance';
import Screen from './screen';
import SpeechSynthesis from './speechSynthesis';
import StaticRange from './staticRange';
import Storage from './storage';
import VisualViewport from './visualViewport';
import WindowOrWorkerGlobalScope from './windowOrWorkerGlobalScope';
import WindowEventHandlers from './windowEventHandlers';

/**
 * @class Window
 * @classdesc The pseudo-window containing the Narhwal instance
 * @extends EventTarget
 * @implements WindowOrWorkerGlobalScope
 * @implements WindowEventHandlers
 */
export default class Window extends EventTarget implements WindowOrWorkerGlobalScope, WindowEventHandlers {
  /**
   * Whether this window is closed or not
   * @name Window#closed
   * @type boolean
   * @default false
   * @protected
   */
  protected closed: boolean;
  /**
   * The window's console
   * @name Window#console
   * @type Console
   * @readonly
   */
  readonly console: Console;
  /**
   * The window's cryptography object
   * @name Window#crypto
   * @type Crypto
   * @readonly
   */
  readonly crypto: Crypto;
  /**
   * The ratio of physical pixels to CSS pixels - Which for Narwhal is always 0
   * @name Window#devicePixelRatio
   * @type number
   * @default 0
   * @readonly
   */
  readonly devicePixelRatio: number;
  /**
   * The window's current document
   * @name Window#document
   * @type Document
   * @protected
   */
  protected document: Document;
  /**
   * The frame the window is inside, if any
   * @name Window#frameElement
   * @type Element
   * @default null
   * @protected
   */
  protected frameElement: Element;
  /**
   * A list of frames in this window
   * @name Window#frames
   * @type Window[]
   * @default []
   * @protected
   */
  protected frames: Window[];
  /**
   * Whether the window is full screen or not - Always false in Narwhal
   * @name Window#fullScreen
   * @type boolean
   * @default false
   * @public
   */
  public fullScreen: boolean;
  /**
   * A reference to Narwhal's history
   * @name Window#history
   * @type History
   * @readonly
   */
  readonly history: History;
  /**
   * The height of the window - In Narwhal, always 0
   * @name Window#innerHeight
   * @type number
   * @default 0
   * @readonly
   */
  readonly innerHeight: number;
  /**
   * The width of the window - In Narwhal,, always 0
   * @name Window#innerWidth
   * @type number
   * @default 0
   * @readonly
   */
  readonly innerWidth: number;
  /**
   * Whether the window can use secure contexts or not
   * @name Window#isSecureContext
   * @type boolean
   * @default false
   * @readonly
   */
  readonly isSecureContext: boolean;

  /**
   * The number of frames in the window
   * @name Window#length
   * @type number
   * @readonly
   */
  get length(): number {
    return this.frames.length;
  }
  /**
   * The current location of the window, used by Window#location
   * @name Window#currentLocation
   * @type Location
   * @private
   */
  private currentLocation: Location;
  /**
   * Gets the current location of the window
   * @name Window#location
   * @type Location
   */
  get location(): Location {
    return this.currentLocation;
  }
  set location(newLocation: DOMString) {
    // @TODO: Convert DOMString to Location
  }
  /**
   * Narwhal's location bar
   * @name Window#locationbar
   * @type BarProp
   * @readonly
   */
  readonly locationbar: BarProp;
  /**
   * Narwhal's local storage
   * @name Window#localStorage
   * @type Storage
   * @readonly
   */
  readonly localStorage: Storage;
  /**
   * Narwhal's menu bar
   * @name Window#menubar
   * @type BarProp
   * @readonly
   */
  readonly menubar: BarProp;
  /**
   * Time since the window was created (when the animation cycle began)
   * @name Window#mozAnimationStartTime
   * @type number
   * @readonly
   */
  readonly mozAnimationStartTime: number;
  /**
   * The X coordinate of the top left pixel, which in Narwhal is 0
   * @name Window#mozInnerScreenX
   * @type number
   * @readonly
   */
  readonly mozInnerScreenX: number;
  /**
   * The Y coordinate of the top left pixel, which in Narwhal is 0
   * @name Window#mozInnerScreenY
   * @type number
   * @readonly
   */
  readonly mozInnerScreenY: number;
  /**
   * The number of times the current window has been rendered (In this situation, the number of times Narwhal has evaluted the page)
   * @name Window#mozPaintCount
   * @type number
   * @default 0
   * @protected
   */
  protected mozPaintCount: number;
  /**
   * The name of the window?
   * @name Window#name
   * @type string
   * @public
   */
  public name: string;
  /**
   * Narwhal's navigator
   * @name Window#navigator
   * @type Navigator
   * @readonly
   */
  readonly navigator: Navigator;
  /**
   * The window that opened this window
   * @name Window#opener
   * @type Window
   * @default null
   * @protected
   */
  protected opener: Window;
  /**
   * The height outside of the window, in Narwhal always 0
   * @name Window#outerHeight
   * @type number
   * @default 0
   * @readonly
   */
  readonly outerHeight: number;
  /**
   * The width outside of the window, in Narwhal always 0
   * @name Window#outerWidth
   * @type number
   * @default 0
   * @readonly
   */
  readonly outerWidth: number;
  /**
   * Alias for Window#scrollX
   * @name Window#pageXOffset
   * @type number
   * @see Window#scrollX
   * @readonly
   */
  get pageXOffset(): number {
    return this.scrollX;
  }
  /**
   * Alias for Window#scrollY
   * @name Window#pageYOffset
   * @type number
   * @see Window#scrollY
   * @readonly
   */
  get pageYOffset(): number {
    return this.scrollY;
  }
  /**
   * Narwhal's session storage
   * @name Window#sessionStorage
   * @type Storage
   * @readonly
   */
  readonly sessionStorage: Storage;
  /**
   * A StaticRange constructor
   * @name Window#StaticRange
   * @type StaticRange
   * @readonly
  */
  readonly StaticRange: StaticRange;
  /**
   * The window containing this window
   * @name Window#parent
   * @type Window
   * @default null
   * @readonly
   */
  readonly parent: Window;
  /**
   * Information about the performance
   * @name Window#performance
   * @type Performance
   * @readonly
   */
  readonly performance: Performance;
  /**
   * Narwhal's personal bar?
   * @name Window#personalBar
   * @type BarProp
   * @readonly
   */
  readonly personalBar: BarProp;
  /**
   * The screen, which in Narhwal does not exist
   * @name Window#screen
   * @type Screen
   * @readonly
   */
  readonly screen: Screen;
  /**
   * The distance from the left side of the screen, which in Narwhal is always 0
   * @name Window#screenX
   * @type number
   * @default 0
   * @readonly
   */
  readonly screenX: number;
  /**
   * The distance from the top of the screen, which in Narwhal is always 0
   * @name Window#screenY
   * @type number
   * @default 0
   * @readonly
   */
  readonly screenY: number;
  /**
   * Narwhal scrollbars
   * @name Window#scrollbars
   * @type BarProp
   * @readonly
   */
  readonly scrollbars: BarProp;
  /**
   * The maximum the window can be scrolled horizontally, which in Narhwal is always 0
   * @name Window#scrollMaxX
   * @type number
   * @default 0
   * @readonly
   */
  readonly scrollMaxX: number;
  /**
   * The maximum the window can be scrolled vertically, which in Narwhal is always 0
   * @name Window#scrollMaxY
   * @type number
   * @default 0
   * @readonly
   */
  readonly scrollMaxY: number;
  /**
   * The amount currently scrolled, which in Narwhal is always 0
   * @name Window#scrollX
   * @type number
   * @default 0
   * @readonly
   */
  readonly scrollX: number;
  /**
   * The amount currently scrolled, which in Narwhal is always 0
   * @name Window#scrollY
   * @type number
   * @default 0
   * @readonly
   */
  readonly scrollY: number;
  /**
   * The window itself
   * @name Window#self
   * @type Window
   * @readonly
   */
  readonly self: Window;
  /**
   * Narwhal's sidebar
   * @name Window#sidebar
   * @type BarProp
   * @readonly
   */
  readonly sidebar: BarProp;
  /**
   * Narwhal's speech synthesis
   * @name Window#speechSynthesis
   * @type SpeechSynthesis
   * @readonly
   */
  readonly speechSynthesis: SpeechSynthesis;
  /**
   * The status of Narwhal
   * @name Window#status
   * @type string
   * @public
   */
  public status: string;
  /**
   * Narwhal's status bar
   * @name Window#statusbar
   * @type BarProp
   * @readonly
   */
  readonly statusbar: BarProp;
  /**
   * Narwhal's toolbar
   * @name Window#toolbar
   * @type BarProp
   * @readonly
   */
  readonly toolbar: BarProp;
  /**
   * The topmost window
   * @name Window#top
   * @type Window
   * @default null
   * @readonly
   */
  readonly top: Window;
  /**
   * The visual viewport, which for Narwhal does not actually exist
   * @name Window#visualViewport
   * @type VisualViewport
   * @readonly
   */
  readonly visualViewport: VisualViewport;
  /**
   * The window itself
   * @name Window#window
   * @type Window
   * @readonly
   */
  readonly window: Window;

  /**
   * @constructs
   */
  constructor(location: Location) {
    super();
    this.closed = false;
    this.console = new Console();
    this.crypto = new Crypto();
    this.devicePixelRatio = 0;
    this.document = new Document();
    this.frameElement = null;
    this.frames = [];
    this.fullScreen = false;
    this.history = new History();
    this.innerHeight = 0;
    this.innerWidth = 0;
    this.isSecureContext = false;
    this.currentLocation = location;
    this.locationbar = new BarProp();
    this.localStorage = new Storage();
    this.menubar = new BarProp();
    this.mozAnimationStartTime = Date.now();
    this.mozInnerScreenX = 0;
    this.mozInnerScreenY = 0;
    this.mozPaintCount = 0;
    this.name = '';
    this.navigator = new Navigator();
    this.opener = null;
    this.outerHeight = 0;
    this.outerWidth = 0;
    this.sessionStorage = new Storage();
    this.StaticRange = StaticRange;
    this.parent = null;
    this.performance = new Performance();
    this.personalBar = new BarProp();
    this.screen = new Screen();
    this.screenX = 0;
    this.screenY = 0;
    this.scrollbars = new BarProp();
    this.scrollMaxX = 0;
    this.scrollMaxY = 0;
    this.scrollX = 0;
    this.scrollY = 0;
    this.self = this;
    this.sidebar = new BarProp();
    this.speechSynthesis = new SpeechSynthesis();
    this.status = '';
    this.statusbar = new BarProp();
    this.toolbar = new BarProp();
    this.top = null;
    this.visualViewport = new VisualViewport();
    this.window = this;
  }
}
