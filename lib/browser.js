'use strict';

const request = require('request');
const dom = require('./dom');
const Window = require('./window');

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
        dom(html).then((d) => {
          const w = new Window(d);
          w.render();
          resolve(d);
        });
      }).catch((e) => {
        reject(e);
      });
    });
  }
}

module.exports = Browser;
