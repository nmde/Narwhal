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
   * @return {Attr}         The corresponding object, or null if the index is out of bounds
   */
  item(index) {
    if (index > -1 && index < this.length) {
      return this.map[index];
    }
    return null;
  }
}

module.exports = BasicMap;
