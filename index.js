/**
 * ============= NARWHAL =============
 *    A web browser for the terminal
 * ===================================
 */

'use strict';

const Narwhal = require('./lib');

const browser = new Narwhal.Browser();
browser.navigate(process.argv[2]).then(() => {}).catch((error) => {
  console.log(error);
});
