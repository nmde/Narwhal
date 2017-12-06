import Document from './document';
import DOMHighResTimeStamp from './domHighResTimeStamp';
import DOMString from './domString';
import Element from './element';
import Event from './event';
import EventTarget from './eventTarget';
import Node from './node';
import Window from './window';

export default class Narwhal {
  run(fn) {
    fn(new Window(), new Document());
  }
  static Document = Document;
  static DOMHighResTimeStamp = DOMHighResTimeStamp;
  static DOMString = DOMString;
  static Element = Element;
  static Event = Event;
  static EventTarget = EventTarget;
  static Node = Node;
  static Window = Window;
}
