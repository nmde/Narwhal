'use strict';

const Narwhal = require('./lib');

const browser = new Narwhal.Browser();
console.log(browser.open('<div class="foo"></div>'));
