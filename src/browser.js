import get from './get';
import parse from './parse';
import convertDOM from './convert-dom';

class Browser {
  constructor(url) {
    if (typeof url === 'string') {
      this.open(url);
    }
    this.document = null;
    this.onOpen = () => {};
  }
  open(url) {
    return new Promise((resolve, reject) => {
      this.location = url;
      get(url).then((html) => {
        parse(html).then((dom) => {
          const converted = convertDOM(dom);
          this.document = converted;
          this.onOpen(converted);
          resolve(converted);
        }).catch((e) => {
          reject(e);
        });
      }).catch((e) => {
        reject(e);
      });
    });
  }
}

export default Browser;
