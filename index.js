/* eslint strict: ["off"] */

'use strict';

const Narwhal = require('./src/main');

const browser = new Narwhal.GraphicalBrowser();
browser.open('http://dmnevius.net').then((html) => {
  console.log(html);
}).catch((e) => {
  console.log(`An error occured: ${e}`);
});
