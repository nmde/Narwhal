'use strict';

const Node = require('./node');

class Element extends Node {
  constructor(nodeName, document) {
    super(document);
    this.nodeName = nodeName;
  }
  // @TODO
  setAttribute() {}
}

module.exports = Element;
