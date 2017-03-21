import get from './get';
import parse from './parse';

export default class Browser {
  constructor(url) {
    if (typeof url === 'string') {
      this.open(url);
    }
  }
  open(url) {
    return new Promise((resolve, reject) => {
      get(url).then((html) => {
        this.location = url;
        parse(html).then((dom) => {
          console.log(dom);
        }).catch((e) => {
          reject(e);
        });
      }).catch((e) => {
        reject(e);
      });
    });
  }
}
