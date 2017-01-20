'use strict';

const request = require('request');
const dom = require('./dom');

class Browser {
  constructor() {
    this.location = null;
    this.history = [];
  }
  get(to) {
    return new Promise((resolve, reject) => {
      this.location = to;
      request(to, (error, response, body) => {
        if (error) {
          reject(error);
        } else if (response.statusCode >= 400 || response.statusCode < 200) {
          reject(new Error(`Status: ${response.statusCode}`));
        } else {
          resolve(body);
        }
      });
    });
  }
  navigate(to) {
    return new Promise((resolve, reject) => {
      this.history.push(to);
      this.get(to).then((html) => {
        resolve(dom(html));
      }).catch((e) => {
        reject(e);
      });
    });
  }
}

module.exports = Browser;
