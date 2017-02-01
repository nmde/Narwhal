'use strict';

class Attr {
  constructor(ownerElement, name, value) {
    this.name = name;
    this.ownerElement = ownerElement;
    this.value = value || null;
    // @TODO
    this.namespaceURI = '';
    this.localName = '';
    this.prefix = '';
    this.specified = true;
  }
}

module.exports = Attr;
