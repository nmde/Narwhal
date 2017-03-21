import parse5 from 'parse5';

export default function parse(html) {
  return new Promise((resolve) => {
    resolve(parse5.parse(html));
  });
}
