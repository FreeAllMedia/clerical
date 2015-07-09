/**
 * @requires
 */
import SteeringWheel from "steeringWheel";
import Wheel from "wheel";

/**
 * # Truck.js
 *
 * Implementation of a truck in ECMAScript2015
 *
 * @example
 * ``` javascript
 * import Truck from "truck";
 *
 * const truck = new Truck();
 *
 * truck.turn(45);
 * truck.accelerate(100);
 * ```
 * @class Truck
 */
export default class Truck {
  /**
   * @example
   * ``` javascript
   * import Truck from "truck";
   *
   * const truck = new Truck();
   * ```
   * @constructor
   */
  constructor() {
    this.accelerator = 0;
    this.steeringWheel = new SteeringWheel();
    this.wheels = [
      new Wheel(),
      new Wheel(),
      new Wheel(),
      new Wheel()
    ];
  }

  /**
   * Turn the steering wheel by a designated amount of radians.
   *
   * @example
   * ``` javascript
   * import Truck from "truck";
   *
   * const truck = new Truck();
   *
   * truck.turn(0.3); // Turns the steering wheel 30% to the right.
   * truck.turn(-0.9); // Turns the steering wheel 90% to the left.
   * truck.turn(2); // Turns the steering wheel two whole times to the right.
   * ```
   * @method turn
   * @param  {Number} radians Amount to turn the steering wheel in radians.
   */
  turn(radians) {
    this.steeringWheel.angle = radians;
  }

  /**
   * Push the accelerator down a designated amount.
   *
   * @example
   * ``` javascript
   * import Truck from "truck";
   *
   * const truck = new Truck();
   *
   * truck.accelerate(0.2); // Push the accelerator down 20%
   * truck.accelerate(0.01); // Push the accelerator down 1%
   * truck.accelerate(1); // Push the accelerator down 100%
   * ```
   * @method accelerate
   * @param  {Number} percentage The amount to push down the accelerator from 0.0 to 1.0
   */
  accelerate(amount) {
    this.accelerator = amount;
  }
}
