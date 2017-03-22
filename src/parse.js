import parse5 from 'parse5';

function parse(html) {
  return new Promise((resolve) => {
    resolve(parse5.parse(html));
  });
}

export default parse;
