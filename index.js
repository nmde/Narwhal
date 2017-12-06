/* eslint strict: ["off"] */

'use strict';

const Narwhal = require('./dist/narwhal');

const browser = new Narwhal();

browser.run(() => {});

console.log(browser.timeOrigin);
setTimeout(() => {
  console.log(new Narwhal.DOMHighResTimeStamp(browser.timeOrigin).value);
}, 100);
