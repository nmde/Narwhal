'use strict';

const DOMString = require('../dom/string');

class Attr {
  constructor(ownerElement, name, value) {
    this.name = name;
    this.ownerElement = ownerElement;
    this.value = value || null;
    // @TODO
    this.namespaceURI = new DOMString();
    this.localName = new DOMString();
    this.prefix = new DOMString();
    this.specified = true;
  }
}

module.exports = Attr;
