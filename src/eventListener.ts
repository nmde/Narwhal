import Event from './event';

export default interface EventListener {
  (event: Event): void;
}
