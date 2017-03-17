'use strict';

const parse5 = require('parse5');
const Element = require('../element');

function convert(original, document, window) {
  const node = new Element(original.nodeName, document, window);
  for (let i = 0; i < original.attrs.leength; i += 1) {
    node.setAttribute(original.attrs[i].name, original.attrs[i].value);
  }
  for (let a = 0; a < original.childNodes.length; a += 1) {
    node.appendChild(convert(original.childNodes[a], document, window));
  }
  return node;
}

module.exports = function parser(html, document, window) {
  const parsed = parse5.parse(html);
  const nodes = parsed.childNodes;
  const tree = [];
  for (let i = 0; i < nodes.length; i += 1) {
    tree.push(convert(nodes[i], document, window));
  }
  return tree;
};
