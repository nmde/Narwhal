/* eslint strict: ["off"] */

'use strict';

const Narwhal = require('./dist/narwhal').default;

const browser = new Narwhal();

browser.run((window, document) => {
  const greeting = document.createElement('h1');
  greeting.innerText = 'Hello, World!';
  console.log(greeting);
});
