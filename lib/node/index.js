'use strict';

const EventTarget = require('../event/target');
const nsIURI = require('../nsi/uri');
const NodeList = require('../node/list');
const nsIPrincipal = require('../nsi/principal');

class Node extends EventTarget {
  constructor(document, window) {
    super();
    this.ownerDocument = document || null;
    this.childNodes = new NodeList();

    /**
     * The Blessed box corresponding to this node
     * @type {blessed.box}
     */
    this.box = window.screen.createBox(this);

    // @TODO
    this.baseURI = '';
    this.baseURIObject = new nsIURI();
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
  /**
   * Append a child to this node
   * @param  {Node} child The child to append
   * @return {Node}       The appended child
   */
  appendChild(child) {
    this.childNodes.push(child);
    return child;
  }
  // @TODO
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
