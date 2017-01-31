<<<<<<< HEAD
=======
/**
 * ============= NARWHAL =============
 *    A web browser for the terminal
 * ===================================
 */

>>>>>>> 2ec463d87175c1f51f6d1ef293f5362fcb3ce443
'use strict';

const Narwhal = require('./lib');

<<<<<<< HEAD
const window = new Narwhal.Window('Narwhal');
=======
const browser = new Narwhal.Browser();
browser.navigate(process.argv[2]).then(() => {}).catch((error) => {
  console.log(error);
});
>>>>>>> 2ec463d87175c1f51f6d1ef293f5362fcb3ce443
