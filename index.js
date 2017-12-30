/* eslint strict: ["off"] */

'use strict';

const Narwhal = require('./dist/narwhal');

const browser = new Narwhal();

browser.open('https://www.google.com/').then((html) => {
  console.log(html);
});
