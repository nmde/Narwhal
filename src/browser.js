import get from './get';
import parse from './parse';

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
          this.document = dom;
          this.onOpen(dom);
          resolve(dom);
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
