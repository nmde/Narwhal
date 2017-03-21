/* eslint strict: ["off"] */

'use strict';

const Narwhal = require('./dist/narwhal');

const browser = new Narwhal.Browser();
browser.open('http://dmnevius.net').then((html) => {
  console.log(html);
}).catch((e) => {
  console.log(`An error occured: ${e}`);
});
