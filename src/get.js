import http from 'http';
import https from 'https';
import url from 'url';

function handleResult(res) {
  return new Promise((resolve, reject) => {
    const status = res.statusCode;
    if (status < 200 || status >= 400) {
      reject(new Error(`Error ${status}`));
    } else {
      res.setEncoding('utf-8');
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        resolve(data);
      });
    }
  });
}

function get(path) {
  return new Promise((resolve, reject) => {
    const parsedUrl = url.parse(path);
    switch (parsedUrl.protocol) {
    case 'https:':
      https.get(path, (res) => {
        handleResult(res).then((finalResult) => {
          resolve(finalResult);
        }).catch((e) => {
          reject(e);
        });
      });
      break;
    case 'http:':
      http.get(path, (res) => {
        handleResult(res).then((finalResult) => {
          resolve(finalResult);
        }).catch((e) => {
          reject(e);
        });
      });
      break;
    default:
      reject(new Error(`Unknown protocol: ${parsedUrl.protocol}`));
    }
  });
}

export default get;
