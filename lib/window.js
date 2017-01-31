'use strict';

const WindowOrWorkerGlobalScope = require('./windoworworkerglobalscope');
const OfflineResourceList = require('./offlineresourcelist');
const Console = require('./console');
const XULControllers = require('./xulcontrollers');
const Crypto = require('./crypto');
const nsIArray = require('./nsiarray');
const Document = require('./document');
const History = require('./history');
const Location = require('./location');
const LocationBar = require('./locationbar');
const Storage = require('./storage');
const MenuBar = require('./menubar');
const MessageManager = require('./messagemanager');
const Navigator = require('./navigator');
const PerformanceTiming = require('./performancetiming');
const PerformanceNavigation = require('./performancenavigation');
const PersonalBar = require('./personalbar');
const Screen = require('./screen');
const Scrollbars = require('./scrollbars');
const Sidebar = require('./sidebar');
const SpeechSynthesis = require('./speechsynthesis');
const StatusBar = require('./statusbar');
const Toolbar = require('./toolbar');
const EventTarget = require('./eventtarget');
const DOMParser = require('./domparser');
const GeckoActiveXOBject = require('./geckoactivexobject');
const Image = require('./image');
const Option = require('./option');
const QueryInterface = require('./queryinterface');
const XMLSerializer = require('./xmlserializer');
const Worker = require('./worker');
const XPCNativeWrapper = require('./xpcnativewrapper');
const XPCSafeJSObjectWrapper = require('./xpcsafejsobjectwrapper');

class Window {
  constructor() {
    this.self = this;
    this.window = this;
    // @TODO
    this.applicationCache = new OfflineResourceList();
    this.closed = false;
    this.Components = {};
    this.console = new Console();
    this.controllers = new XULControllers();
    this.crypto = new Crypto();
    this.devicePixelRatio = null;
    this.dialogArguments = new nsIArray();
    this.document = new Document();
    this.frameElement = null;
    this.frames = [this];
    this.fullScreen = false;
    this.history = new History();
    this.innerHeight = '';
    this.innerWidth = '';
    this.length = this.frames.length;
    this.location = new Location();
    this.locationbar = new LocationBar();
    this.localStorage = new Storage();
    this.menubar = new MenuBar();
    this.messageManager = new MessageManager();
    this.mozAnimationStartTime = 0;
    this.mozInnerScreenX = 0;
    this.mozInnerScreenY = 0;
    this.mozPaintCount = 0;
    this.name = '';
    this.navigator = new Navigator();
    this.opener = null;
    this.outerHeight = 0;
    this.outerWidth = 0;
    this.pageXOffset = this.scrollX;
    this.pageYOffset = this.scrollY;
    this.sessionStorage = new Storage();
    this.parent = null;
    this.performance = {
      mark() {},
      now() {},
      timing: new PerformanceTiming(),
      navigation: new PerformanceNavigation(),
      memory: null
    };
    this.personalbar = new PersonalBar();
    this.returnValue = null;
    this.screen = new Screen();
    this.screenX = '';
    this.screenY = '';
    this.scrollbars = new Scrollbars();
    this.scrollMaxX = 0;
    this.scrollMaxY = 0;
    this.scrollX = 0;
    this.scrollY = 0;
    this.sidebar = new Sidebar();
    this.speechSynthesis = new SpeechSynthesis();
    this.status = '';
    this.statusbar = new StatusBar();
    this.toolbar = new Toolbar();
    this.top = null;
    const w = new WindowOrWorkerGlobalScope();
    this.caches = w.caches;
    this.indexedDB = w.indexedDB;
    this.isSecureContext = w.isSecureContext;
    this.origin = w.origin;
    const e = new EventTarget();
    this.addEventListener = e.addEventListener();
    this.atob = w.atob;
    this.btoa = w.btoa;
    this.clearInterval = w.clearInterval;
    this.clearTimeout = w.clearTimeout;
    this.createImageBitmap = w.createImageBitmap;
    this.fetch = w.fetch;
    this.removeEventListener = e.removeEventListener;
    this.setTimeout = w.setTimeout;
    this.DOMParser = DOMParser;
    this.GeckoActiveXOBject = GeckoActiveXOBject;
    this.Image = Image;
    this.Option = Option;
    this.QueryInterface = QueryInterface;
    this.XMLSerializer = XMLSerializer;
    this.Worker = Worker;
    this.XPCNativeWrapper = XPCNativeWrapper;
    this.XPCSafeJSObjectWrapper = XPCSafeJSObjectWrapper;
  }
  // @TODO
  alert() {}
  blur() {}
  cancelIdleCallback() {}
  clearImmediate() {}
  close() {}
  confirm() {}
  dispatchEvent() {}
  dump() {}
  find() {}
  focus() {}
  getAttention() {}
  getComputedStyle() {}
  getDefaultComputedStyle() {}
  getSelection() {}
  matchMedia() {}
  minimize() {}
  moveBy() {}
  moveTo() {}
  mozRequestAnimationFrame() {}
  open() {}
  openDialog() {}
  postMessage() {}
  print() {}
  prompt() {}
  requestIdleCallback() {}
  resizeBy() {}
  resizeTo() {}
  restore() {}
  scroll() {}
  scrollBy() {}
  scrollByLines() {}
  scrollByPages() {}
  scrollTo() {}
  setCursor() {}
  setImmediate() {}
  setResizeable() {}
  showModalDialog() {}
  sizeToContent() {}
  stop() {}
  updateCommands() {}
  // @TODO: Event Handlers
}

module.exports = Window;
