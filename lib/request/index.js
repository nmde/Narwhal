'use strict';

const https = require('https');
const http = require('http');
const url = require('url');

module.exports = {
  get(href) {
    return new Promise((resolve, reject) => {
      const process = (response) => {
        let data = '';
        // @TODO: Detect encoding
        response.setEncoding('utf-8');
        response.on('data', (d) => {
          data += d;
        });
        response.on('end', () => {
          const res = response;
          res.body = data;
          resolve(res);
        });
      };
      const error = (err) => {
        reject(err);
      };
      const protocol = url.parse(href).protocol;
      switch (protocol) {
      case 'http:':
        http.get(href, process).on('error', error);
        break;
      case 'https:':
        https.get(href, process).on('error', error);
        break;
      default:
        reject(new Error(`Unknown protocol: ${protocol}`));
      }
    });
  },
};
