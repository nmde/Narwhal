export default class Node {
  constructor(data) {
    this.nodeName = data.nodeName;
    this.attributes = data.attrs;
    this.childNodes = [];
  }
  appendChild(child) {
    this.childNodes.push(child);
  }
}
