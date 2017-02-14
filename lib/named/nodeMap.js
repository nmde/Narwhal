'use strict';

const BasicMap = require('../util/basicMap');

class NamedNodeMap extends BasicMap {
  constructor() {
    super();
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
   * Replaces or adds an Attr
   * @param  {Attr} attr The new Attr object
   * @return {Attr}      The replaced Attr, if any, or otherwise null
   */
  setNamedItem(attr)  {
    if (this.getNamedItem(attr.name) === null) {
      this.length += 1;
      this.map.push(attr);
      return null;
    } else {
      for (let i = 0; i < this.length; i += 1) {
        if (this.map[i].name === attr.name) {
          const replaced = this.map[i];
          this.map[i] = attr;
          return replaced;
        }
      }
    }
  }
  /**
   * Removes the desired Attr
   * @param  {String} name The name of the Attr to remove
   * @return {Attr}        The removed Attr
   */
  removeNamedItem(name) {
    for (let i = 0; i < this.length; i += 1) {
      if (this.map[i].name === name) {
        const removed = this.map[i];
        this.map.splice(i, 1);
        this.length -= 1;
        return removed;
      }
    }
    return null;
  }
  // @TODO
  getNamedItemNS() {}
  setNamedItemNS() {}
  removeNamedItemNS() {}
}

module.exports = NamedNodeMap;
