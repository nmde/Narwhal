'use strict';

const EventTarget = require('../event/target');
const blessed = require('blessed');

class Screen {
  constructor(window) {
    this.colorDepth = 24;
    this.pixelDepth = 24;

    // @narwhal
    this.window = window;

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


    // TEMPORARY FOR TESTING
    this.bg = 0;
    this.w = 1;
    this.h = 1;

    // blessed
    // @TODO - I'm not sure if this is the right place for this
    //
    /**
     * The screen for rendering
     * @type {blessed.screen}
     * @narwhal
     */
    this.screen = blessed.screen({
      smartCSR: true
    });
  }
  /**
   * Adds a box to the screen
   * @param  {Element}     element The Element whose properties should be used to create the box
   * @return {blessed.box}         The Blessed box
  */
  createBox(element) {
    var bgs = ['red','yellow','green','blue'];
    const box = blessed.box({
      bg: bgs[this.bg],
      width: this.w,
      height: this.h
    });
    this.w += 1;
    this.h += 1;
    this.bg += 1;
    if (this.bg > bgs.length) {
      this.bg = 0;
    }
    this.screen.append(box);
    this.screen.render();
    return box;
  }
  // @TODO
  onorientationchange() {}
  lockOrientation() {}
  unlockOrientation() {}
}

module.exports = Screen;
