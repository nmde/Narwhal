'use strict';

function plaintext(dom) {
  let text = '';
  for (let i = 0; i < dom.length; i += 1) {
    switch (dom[i].type) {
    case 'text':
      text += dom[i].data;
      break;
    case 'tag':
      text += plaintext(dom[i].children);
      break;
    default:
    }
  }
  return text;
}

module.exports = plaintext;
