'use strict';

const htmlparser = require('htmlparser2');

module.exports = html => new Promise((resolve, reject) => {
  const handler = new htmlparser.DomHandler((error, dom) => {
    if (error) {
      reject(error);
    } else {
      resolve(dom);
    }
  });
  const parser = new htmlparser.Parser(handler);
  parser.write(html);
  parser.done();
});
