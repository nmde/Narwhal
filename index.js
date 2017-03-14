'use strict';

const Narwhal = require('./lib');

const window = new Narwhal.Window();
window.document.title = 'Foo';
window.render();

setTimeout(() => {
  window.document.title = 'Bar';
}, 5000);

setInterval(() => {
  window.screen.createBox();
}, 1000);
