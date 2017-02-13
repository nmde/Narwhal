'use strict';

/**
 * Provides common functionality for map-based classes such as NamedNodeMap and NodeList
 */
class BasicMap {
  constructor() {
    this.length = 0;
    this.map = [];
  }
  /**
   * Returns the item at the specified index
   * @param  {Number} index The desired index
   * @return {any}          The corresponding object, or null if the index is out of bounds
   */
  item(index) {
    if (index > -1 && index < this.length) {
      return this.map[index];
    }
    return null;
  }
  /**
   * Adds an item to the internal map
   * @param  {any} item The item to add
   * @return {any}      The item that was added
   */
  push(item) {
    this.map.push(item);
    this.length += 1;
    return item;
  }
}

module.exports = BasicMap;
