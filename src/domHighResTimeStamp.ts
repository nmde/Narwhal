import { Number as fNumber } from 'fetter-js'

export default class DOMHighResTimeStamp extends fNumber {
  constructor(timeOrigin: number) {
    super(Date.now() - timeOrigin);
  }
}
