'use strict';

const Node = require('./node');
const DOMImplementation = require('./domimplementation');
const StyleSheetList = require('./stylesheetlist');
const DocumentTimeline = require('./documenttimeline');
const ParentNode = require('./parentnode');
const DOMString = require('./domstring');
const HTMLCollection = require('./htmlcollection');
const Location = require('./location');
const GlobalEventHandlers = require('./globaleventhandlers');

class Document extends Node {
  constructor(window) {
    super();
    this.defaultView = window;

    // @TODO
    this.characterSet = '';
    this.compatMode = '';
    this.contentType = '';
    this.doctype = '';
    this.documentElement = null;
    this.documentURI = '';
    this.hidden = false;
    this.implementation = new DOMImplementation();
    this.lastStyleSheetSet = null;
    this.mozSyntheticDocument = false;
    this.mozFullScreenElement = null;
    this.mozFullScreenEnabled = false;
    this.pointerLockElement = null;
    this.preferredStyleSheetSet = '';
    this.scrollingElement = null;
    this.selectedStyleSheetSet = null;
    this.styleSheets = new StyleSheetList();
    this.styleSheetSets = [];
    this.timeline = new DocumentTimeline();
    this.undoManager = null;
    this.visibilityState = 'visible';
    const p = new ParentNode();
    this.children = p.children;
    this.firstElementChild = p.firstElementChild;
    this.lastElementChild = p.lastElementChild;
    this.childElementCount = p.childElementCount;
    this.activeElement = null;
    this.body = null;
    this.cookie = '';
    this.designMode = 'off';
    this.dir = new DOMString('rtl');
    this.domain = '';
    this.embeds = [];
    this.forms = new HTMLCollection();
    this.head = null;
    this.images = [];
    this.lastModified = '';
    this.links = new HTMLCollection();
    this.location = new Location();
    this.plugins = new HTMLCollection();
    this.readyState = 'complete';
    this.referrer = '';
    this.scripts = new HTMLCollection();
    this.title = '';
    this.URL = '';
    const g = new GlobalEventHandlers();
    this.onabort = g.onabort;
    this.onanimationcancel = g.onanimationcancel;
    this.onanimationend = g.onanimationend;
    this.onanimationiteration = g.onanimationiteration;
    this.onanimationstart = g.onanimationstart;
    this.onblur = g.onblur;
    this.onerror = g.onerror;
    this.onfocus = g.onfocus;
    this.oncancel = g.oncancel;
    this.oncanplay = g.oncanplay;
    this.oncanplaythrough = g.oncanplaythrough;
    this.onchange = g.onchange;
    this.onclick = g.onclick;
    this.onclose = g.onclose;
    this.oncontextmenu = g.oncontextmenu;
    this.oncuechange = g.oncuechange;
    this.ondblclick = g.ondblclick;
    this.ondrag = g.ondrag;
    this.ondragend = g.ondragend;
    this.ondragenter = g.ondragenter;
    this.ondragexit = g.ondragexit;
    this.ondragleave = g.ondragleave;
    this.ondragover = g.ondragover;
    this.ondragstart = g.ondragstart;
    this.ondrop = g.ondrop;
    this.ondurationchange = g.ondurationchange;
    this.onemptied = g.onemptied;
    this.onended = g.onended;
    this.ongotpointercapture = g.ongotpointercapture;
    this.oninput = g.oninput;
    this.oninvalid = g.oninvalid;
    this.onkeydown = g.onkeydown;
    this.onkeypress = g.onkeypress;
    this.onkeyup = g.onkeyup;
    this.onload = g.onload;
    this.onloadeddata = g.onloadeddata;
    this.onloadedmetadata = g.onloadedmetadata;
    this.onloadend = g.onloadend;
    this.onloadstart = g.onloadstart;
    this.onlostpointercapture = g.onloadpointercapture;
    this.onmousedown = g.onmousedown;
    this.onmouseenter = g.onmouseenter;
    this.onmouseleave = g.onmouseleave;
    this.onmousemove = g.onmousemove;
    this.onmouseout = g.onmouseout;
    this.onmouseover = g.onmouseover;
    this.onmouseup = g.onmouseup;
    this.onmousewheel = g.onmousewheel;
    this.onpause = g.onpause;
    this.onplay = g.onplay;
    this.onplaying = g.onplaying;
    this.onpointerdown = g.onpointerdown;
    this.onpointermove = g.onpointermove;
    this.onpointerup = g.onpointerup;
    this.onpointercancel = g.onpointercancel;
    this.onpointerover = g.onpointerover;
    this.onpointerout = g.onpointerout;
    this.onpointerenter = g.onpointerenter;
    this.onpointerleave = g.onpointerleave;
    this.onpointerlockchange = g.onpointerlockchange;
    this.onpointerlockerror = g.onpointerlockerror;
    this.onprogress = g.onprogress;
    this.onratechange = g.onratechange;
    this.onreset = g.onreset;
    this.onscroll = g.onscroll;
    this.onseeked = g.onseeked;
    this.onseeking = g.onseeking;
    this.onselect = g.onselect;
    this.onselectionstart = g.onselectionstart;
    this.onselectionchange = g.onselectionchange;
    this.onshow = g.onshow;
    this.onsort = g.onsort;
    this.onstalled = g.onstalled;
    this.onsubmit = g.onsubmit;
    this.onsuspend = g.onsuspend;
    this.ontimeupdate = g.ontimeupdate;
    this.onvolumechange = g.onvolumechange;
    this.ontouchcancel = g.ontouchcancel;
    this.ontouchend = g.ontouchend;
    this.ontouchmove = g.ontouchmove;
    this.ontouchstart = g.ontouchstart;
    this.ontransitionend = g.ontransitionend;
    this.onwaiting = g.onwaiting;
  }
  // @TODO
  onafterscriptexecute() {}
  onbeforescriptexecute() {}
  oncopy() {}
  oncut() {}
  onfullscreenchange() {}
  onfullscreenerror() {}
  onpaste() {}
  onpointerlockchange() {}
  onpointerlockerror() {}
  onreadystatechange() {}
  onselectionchange() {}
  onwheel() {}
  adoptNode() {}
  caretPositionFromPoint() {}
  caretRangeFromPoint() {}
  createAttribute() {}
  createAttributeNS() {}
  createCDATASection() {}
  createComment() {}
  createDocumentFragment() {}
  createElement() {}
  createElementNS() {}
  createEvent() {}
  createNodeIterator() {}
  createProcessingInstruction() {}
  createRange() {}
  createTextNode() {}
  createTouch() {}
  createTouchList() {}
  createTreeWalker() {}
  elementFromPoint() {}
  elementsFromPoint() {}
  enableStyleSheetsForSet() {}
  exitPointerLock() {}
  getAnimations() {}
  getElementsByClassName() {}
  getElementsByTagName() {}
  getElementsByTagNameNS() {}
  importNode() {}
  registerElement() {}
  releaseCapture() {}
  mozSetImageElement() {}
  getElementById() {}
  querySelector() {}
  querySelectorAll() {}
  createExpression() {}
  createNSResolver() {}
  evaluate() {}
  close() {}
  execCommand() {}
  getElementsByName() {}
  getSelection() {}
  hasFocus() {}
  open() {}
  queryCommandEnabled() {}
  queryCommandIndeterm() {}
  queryCommandState() {}
  queryCommandSupported() {}
  queryCommandValue() {}
  write() {}
  writeln() {}
}

module.exports = Document;
