/* eslint new-cap: ["off"] */

'use strict';

const blessed = require('blessed');

class Window {
  constructor(dom) {
    this.screen = new blessed.screen({
      smartCSR: true,
    });
    this.setTitle('Narwhal');
    this.loadDom(dom);
  }
  addText(content) {
    const text = blessed.text({
      content,
    });
    this.screen.append(text);
  }
  loadDom(dom) {
    for (let i = 0; i < dom.length; i += 1) {
      switch (dom[i].type) {
      case 'text':
        this.addText(dom[i].data);
        break;
      case 'tag':
        this.loadDom(dom[i].children);
        break;
      default:
      }
    }
  }
  setTitle(title) {
    this.screen.title = title;
  }
  render() {
    this.screen.render();
  }
}

module.exports = Window;
