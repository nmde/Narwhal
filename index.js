/* eslint strict: ["off"] */

'use strict';

const Narwhal = require('./dist/narwhal');

// Google something
const browser = new Narwhal.Browser('http://google.com');
browser.click('#lst-ib');
browser.type('Narwhal');
browser.keydown('enter');
console.log(browser.location.href);

// Run code in a browser
const window = new Narwhal.Window();
window.exec(function () {
  const element = this.document.createElement('div');
  element.setAttribute('foo', 'bar');
  console.log(element);
});
