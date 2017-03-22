import blessed from 'blessed';
import Browser from './browser';

const BrowserTemp = Browser;

class GraphicalBrowser extends BrowserTemp {
  constructor(url) {
    super(url);
    this.onOpen = (dom) => {
      console.log('Opening graphical DOM');
    };
  }
}

export default GraphicalBrowser;
