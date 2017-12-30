import Labels from './helpers/labels';

/**
 * @class Console
 * @classdesc Wrapper for the real console, with some replacements
 */
export default class Console {
  /**
   * Labels used by console.count
   * @name Console#labels
   * @type {string[]}
   * @private
   */
  private labels: Labels;
  /**
   * The current depth for console.depth
   * @name Console#depth
   * @type {number}
   * @default 0
   * @private
   */
  private depth: number;
  constructor() {
    this.labels = {};
    this.depth = 0;
  }
  /**
   * Wrapper for conosle.assert
   * @param {...any[]} args The arguments to be passed to the real console.assert
   */
  assert(...args: any[]) {
    console.assert.apply(null, args);
  }
  /**
   * Dummy clear function
   */
  clear() {
    console.warn('console.clear is not currently supported by Narwhal');
  }
  /**
   * Counts the number of times it has been called with the specified label
   * @param {string} label The label
   */
  count(label: string) {
    if (!this.labels[label]) {
      this.labels[label] = 0;
    }
    this.labels[label] += 1;
    console.log(`${label}: ${this.labels[label]}`);
  }
  /**
   * Wrapper for console.dir
   * @param {any} obj The object to display
   */
  dir(obj: any) {
    console.dir(obj);
  }
  /**
   * Replacement for console.dirxml
   * @param {any} obj The object to print
   */
  dirxml(obj: any) {
    console.log(JSON.stringify(obj));
  }
  /**
   * Wrapper for console.error
   * @param {any[]} args The arguments to be passed to console.error
   */
  error(...args: any[]) {
    console.error.apply(null, args);
  }
  /**
   * Implementation of console.group
   * @param {String} label The label for the group
   */
  group(label: string = '') {
    console.log(label);
    this.depth += 1;
  }
}
