'use strict';

const Node = require('../node');
const HTMLSlotElement = require('../html/slotElement');
const NamedNodeMap = require('../named/nodeMap');
const DOMTokenList = require('../dom/tokenList');
const DOMString = require('../dom/string');
const NonDocumentTypeChildNode = require('../nonDocumentType/childNode');
const UndoManager = require('../undo/manager');
const ChildNode = require('../child/node');

class Element extends Node {
  constructor(nodeName, document) {
    super(document);
    this.nodeName = nodeName;
    // @TODO
    this.assignedSlot = new HTMLSlotElement();
    this.attributes = new NamedNodeMap();
    this.classList = new DOMTokenList();
    this.className = new DOMString();
    this.clientHeight = 0;
    this.clientLeft = 0;
    this.clientTop = 0;
    this.clientWidth = 0;
    this.id = new DOMString();
    this.innerHTML = new DOMString();
    this.localName = new DOMString();
    this.namespaceURI = null;
    const n = new NonDocumentTypeChildNode();
    this.nextElementSibling = n.nextElementSibling;
    this.outerHTML = new DOMString();
    this.prefix = new DOMString();
    this.previousElementSibling = n.previousElementSibling;
    this.scrollHeight = 0;
    this.scrollLeft = 0;
    this.scrollLeftMax = 0;
    this.scrollTop = 0;
    this.scrollTopMax = 0;
    this.scrollWidth = 0;
    this.shadowRoot = null;
    this.slot = null;
    this.tabStop = false;
    this.underMananger = new UndoManager();
    this.undoScope = false;
    const c = new ChildNode();
    this.remove = c.remove;
  }
  // @TODO
  setAttribute() {}
  ongotpointercapture() {}
  onlostpointercapture() {}
  onwheel() {}
  attachShadow() {}
  animate() {}
  closest() {}
  createShadowRoot() {}
  find() {}
  findAll() {}
  getAnimations() {}
  getAttribute() {}
  getAttributeNames() {}
  getAttributeNS() {}
  getBoundingClientRect() {}
  getClientRects() {}
  getDestinationInserstionPoints() {}
  getElementsByClassName() {}
  getElementsByTagName() {}
  getElementsByTagNameNS() {}
  hasAttribute() {}
  hasAttributeNS() {}
  hasAttributes() {}
  insertAdjacentElement() {}
  insertAdjacentHTML() {}
  insertAdjacentText() {}
  matches() {}
  querySelector() {}
  querySelectorAll() {}
  releasePointerCapture() {}
  removeAttribute() {}
  removeAttributeNS() {}
  requestFullscreen() {}
  requestPointerLock() {}
  scrollIntoView() {}
  setAttributeNS() {}
  setCapture() {}
  setPointerCapture() {}
}

module.exports = Element;
