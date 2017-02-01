'use strict';

const Node = require('../node');
const HTMLSlotElement = require('../html/slotElement');
const NamedNodeMap = require('../named/nodeMap');
const DOMTokenList = require('../dom/tokenList');
const NonDocumentTypeChildNode = require('../nonDocumentType/childNode');
const UndoManager = require('../undo/manager');
const ChildNode = require('../child/node');
const Attr = require('../attr');

class Element extends Node {
  constructor(nodeName, document) {
    super(document);
    this.attributes = new NamedNodeMap();
    this.nodeName = nodeName;
    // @TODO
    this.assignedSlot = new HTMLSlotElement();
    this.classList = new DOMTokenList();
    this.className = '';
    this.clientHeight = 0;
    this.clientLeft = 0;
    this.clientTop = 0;
    this.clientWidth = 0;
    this.id = '';
    this.innerHTML = '';
    this.localName = '';
    this.namespaceURI = null;
    const n = new NonDocumentTypeChildNode();
    this.nextElementSibling = n.nextElementSibling;
    this.outerHTML = '';
    this.prefix = '';
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
  /**
   * Add or change attributes
   * @param {String} name  The name of the attribute
   * @param {String} value The new value of the attribute
   */
  setAttribute(name, value) {
    this.attributes.setNamedItem(new Attr(this, name, value));
  }
  /**
   * Get the current value of an attribute
   * @param  {String} name The name of the attribute
   * @return {String}      The value of the attribute, or null if no such attribute exists
   */
  getAttribute(name) {
    return this.attributes.getNamedItem(name).value;
  }
  /**
   * Determine if the element has the specified attribute
   * @param {String} name The name of the attribute
   */
  hasAttribute(name) {
    return this.attributes.getNamedItem(name) === null;
  }
  // @TODO
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
  getAttributeNames() {}
  getAttributeNS() {}
  getBoundingClientRect() {}
  getClientRects() {}
  getDestinationInserstionPoints() {}
  getElementsByClassName() {}
  getElementsByTagName() {}
  getElementsByTagNameNS() {}
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
