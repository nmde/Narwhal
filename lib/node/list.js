'use strict';

const BasicMap = require('../util/basicMap');

class NodeList extends BasicMap {
  constructor() {
    super();
  }
  /**
   * Gets the contained Nodes
   * @return {iterator} An iterator that iterates through the nodes
   */
  entries() {
    return this.map[Symbol.iterator]();
  }
  /**
   * Executes the callback on all the members of this NodeList
   * @param {Function} callback The function to execute
   * @param {any}      argument (Optional) Value to use a "this" when executing the callback function
   */
  forEach(callback, argument) {
    for (let i = 0; i < this.map.length; i += 1) {
      callback(this.map[i], i, this.map, argument);
    }
  }
  /**
   * @retur{iterator} An iterator that iterates through the keys of this NodeList
   */
  keys() {
    const keys = [];
    for (let i = 0; i < this.map.length; i += 1) {
      keys.push(i);
    }
    return keys[Symbol.iterator]();
  }
  /**
   *
   */
  values() {
    const values = [];
    for (let i = 0; i < this.map.length; i += 1) {
      values.push(this.map[i]);
    }
    return values[Symbol.iterator]();
  }
}

module.exports = NodeList;
