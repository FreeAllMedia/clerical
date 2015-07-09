/**
 * @requires
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _steeringWheel = require("steeringWheel");

var _steeringWheel2 = _interopRequireDefault(_steeringWheel);

var _wheel = require("wheel");

var _wheel2 = _interopRequireDefault(_wheel);

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

var Truck = (function () {
  /**
   * @example
   * ``` javascript
   * import Truck from "truck";
   *
   * const truck = new Truck();
   * ```
   * @constructor
   */

  function Truck() {
    _classCallCheck(this, Truck);

    this.accelerator = 0;
    this.steeringWheel = new _steeringWheel2["default"]();
    this.wheels = [new _wheel2["default"](), new _wheel2["default"](), new _wheel2["default"](), new _wheel2["default"]()];
  }

  _createClass(Truck, [{
    key: "turn",

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
    value: function turn(radians) {
      this.steeringWheel.angle = radians;
    }
  }, {
    key: "accelerate",

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
    value: function accelerate(amount) {
      this.accelerator = amount;
    }
  }]);

  return Truck;
})();

exports["default"] = Truck;
module.exports = exports["default"];