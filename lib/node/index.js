'use strict';

const EventTarget = require('../event/target');
const nsIURI = require('../nsi/uri');
const NodeList = require('../node/list');
const nsIPrincipal = require('../nsi/principal');

class Node extends EventTarget {
  constructor(document) {
    super();
    this.ownerDocument = document || null;

    // @TODO
    this.baseURI = '';
    this.baseURIObject = new nsIURI();
    this.childNodes = new NodeList();
    this.firstChild = null;
    this.lastChild = null;
    this.nextSibling = null;
    this.nodeName = '';
    this.nodePrincipal = new nsIPrincipal();
    this.nodeType = null;
    this.nodeValue = '';
    this.parentNode = null;
    this.parentElement = null;
    this.previousSibling = null;
    this.rootNode = null;
    this.textContent = '';
  }
  // @TODO
  appendChild() {}
  cloneNode() {}
  compareDocumentPosition() {}
  contains() {}
  getRootNode() {}
  hasChildNodes() {}
  insertBefore() {}
  isDefaultNamespace() {}
  isEqualNode() {}
  isSameNode() {}
  lookupPrefix() {}
  lookupNamespaceURI() {}
  normalize() {}
  removeChild() {}
  replaceChild() {}
}

module.exports = Node;
