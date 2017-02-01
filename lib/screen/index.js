'use strict';

const EventTarget = require('../event/target');

class Screen {
  constructor() {
    this.colorDepth = 24;
    this.pixelDepth = 24;
    // @TODO
    this.availTop = 0;
    this.availLeft = 0;
    this.availHeight = 0;
    this.availWidth = 0;
    this.height = 0;
    this.left = 0;
    this.orientation = '';
    this.top = 0;
    this.width = 0;
    this.mozEnabled = true;
    this.mozBrightness = 1.0;
    const e = new EventTarget();
    this.addEventListener = e.addEventListener;
    this.removeEventListener = e.removeEventListener;
    this.dispatchEvent = e.dispatchEvent;
  }
  // @TODO
  onorientationchange() {}
  lockOrientation() {}
  unlockOrientation() {}
}

module.exports = Screen;
