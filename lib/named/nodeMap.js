'use strict';

class NamedNodeMap {
  constructor() {
    this.length = 0;
    this.map = [];
  }
  /**
   * Gets the Attr with the corresponding name
   * @param  {String} name The name of the Attr object
   * @return {Attr}   The corresponding object
   */
  getNamedItem(name) {
    for (let i = 0; i < this.length; i += 1) {
      if (this.map[i].name === name) {
        return this.map[i];
      }
    }
    return null;
  }
  /**
   * Returns the Attr at the specified index
   * @param  {Number} index The desired index
   * @return {Attr}         The corresponding Attr object, or null if the index is out of bounds
   */
  item(index) {
    if (index > -1 && index < this.length) {
      return this.map[index];
    }
    return null;
  }
  /**
   * Replaces or adds an Attr
   * @param {Attr} attr The new Attr object
   */
  setNamedItem(attr)  {
    if (this.getNamedItem(attr.name) === null) {
      this.length += 1;
      this.map.push(attr);
    } else {
      for (let i = 0; i < this.length; i += 1) {
        if (this.map[i].name === attr.name) {
          this.map[i] = attr;
        }
      }
    }
  }
  // @TODO
  removeNamedItem() {}
  getNamedItemNS() {}
  setNamedItemNS() {}
  removeNamedItemNS() {}
}

module.exports = NamedNodeMap;
