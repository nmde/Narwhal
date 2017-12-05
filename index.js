/* eslint strict: ["off"] */

'use strict';

const Narwhal = require('./dist/narwhal').default;

const browser = new Narwhal();

browser.run((window, document) => {
  console.log(window);
  console.log(document);
});
