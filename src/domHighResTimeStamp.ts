import { Number as fNumber } from 'fetter-js'

export default class DOMHighResTimeStamp extends fNumber {
  constructor(timeOrigin: number = 0) {
    super(Date.now() - timeOrigin);
  }
}
