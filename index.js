'use strict';

const Narwhal = require('./lib');

const window = new Narwhal.Window();
const div = window.document.createElement('div');
div.setAttribute('class', 'foo');
window.document.title = 'Foo';
window.render();

setTimeout(() => {
  window.document.title = 'Bar';
}, 5000);
