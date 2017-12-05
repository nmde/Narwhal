module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__get__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__convert_dom__ = __webpack_require__(3);




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
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__get__["a" /* default */])(url).then((html) => {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__parse__["a" /* default */])(html).then((dom) => {
          const converted = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__convert_dom__["a" /* default */])(dom);
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

/* harmony default export */ __webpack_exports__["a"] = Browser;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_blessed__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_blessed___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_blessed__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__browser__ = __webpack_require__(0);



const BrowserTemp = __WEBPACK_IMPORTED_MODULE_1__browser__["a" /* default */];

class GraphicalBrowser extends BrowserTemp {
  constructor(url) {
    super(url);
    this.onOpen = (dom) => {
      console.log('Opening graphical DOM');
    };
  }
}

/* harmony default export */ __webpack_exports__["a"] = GraphicalBrowser;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Window {}

/* harmony default export */ __webpack_exports__["a"] = Window;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["a"] = convertDOM;


// This will have a purpose later
function convertDOM(dom) {
  const node = new __WEBPACK_IMPORTED_MODULE_0__node__["a" /* default */](dom);
  if (dom.childNodes) {
    for (let i = 0; i < dom.childNodes.length; i += 1) {
      node.appendChild(convertDOM(dom.childNodes[i]));
    }
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_https__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_https___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_https__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_url__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_url__);




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
    const parsedUrl = __WEBPACK_IMPORTED_MODULE_2_url___default.a.parse(path);
    switch (parsedUrl.protocol) {
    case 'https:':
      __WEBPACK_IMPORTED_MODULE_1_https___default.a.get(path, (res) => {
        handleResult(res).then((finalResult) => {
          resolve(finalResult);
        }).catch((e) => {
          reject(e);
        });
      });
      break;
    case 'http:':
      __WEBPACK_IMPORTED_MODULE_0_http___default.a.get(path, (res) => {
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

/* harmony default export */ __webpack_exports__["a"] = get;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Node {
  constructor(data) {
    this.nodeName = data.nodeName;
    this.attributes = data.attrs;
    this.childNodes = [];
  }
  appendChild(child) {
    this.childNodes.push(child);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Node;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_parse5__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_parse5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_parse5__);


function parse(html) {
  return new Promise((resolve) => {
    resolve(__WEBPACK_IMPORTED_MODULE_0_parse5___default.a.parse(html));
  });
}

/* harmony default export */ __webpack_exports__["a"] = parse;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("blessed");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("parse5");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__browser__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graphicalBrowser__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__window__ = __webpack_require__(2);




/* harmony default export */ __webpack_exports__["default"] = {
  Browser: __WEBPACK_IMPORTED_MODULE_0__browser__["a" /* default */],
  GraphicalBrowser: __WEBPACK_IMPORTED_MODULE_1__graphicalBrowser__["a" /* default */],
  Window: __WEBPACK_IMPORTED_MODULE_2__window__["a" /* default */],
};


/***/ })
/******/ ]);