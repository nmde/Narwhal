import EventTarget from './eventTarget';
import WindowOrWorkerGlobalScope from './windowOrWorkerGlobalScope';
import WindowEventHandlers from './windowEventHandlers';

export default class Window extends EventTarget implements WindowOrWorkerGlobalScope, WindowEventHandlers {}
