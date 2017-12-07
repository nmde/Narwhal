/**
 * @class BarProp
 * @classdesc Constructs various bars in the pseudo-interface
 */
export default class BarProp {
  /**
   * Whether the bar is visible or not, which in Narwhal is always false
   * @name BarProp#visible
   * @type boolean
   * @default false
   * @public
   */
  public visible: boolean;
  constructor() {
    this.visible = false;
  }
}
