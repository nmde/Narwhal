import Window from './window';
import Document from './document';

export default class Narwhal {
  run(fn) {
    fn(new Window(), new Document());
  }
}
