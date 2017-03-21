import get from './get';

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
        resolve(html);
      }).catch((e) => {
        reject(e);
      });
    });
  }
}
