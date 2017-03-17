'use strict';

const parser = require('../html/parser');
const Window = require('../window');

module.exports = class Browser {
  constructor() {
    this.window = new Window();
  }
  /**
   * Open the specified file
   * @TODO Right now, this takes raw HTML, but this behavior will be changed really soon
   */
  open(html) {
    return parser(html, this.document, this.window);
  }
};
