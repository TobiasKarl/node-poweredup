"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicMotor = void 0;
const device_1 = require("./device");
const Consts = __importStar(require("../consts"));
const utils_1 = require("../utils");
/**
 * @class BasicMotor
 * @extends Device
 */
class BasicMotor extends device_1.Device {
    constructor(hub, portId, modeMap, type = Consts.DeviceType.UNKNOWN) {
        super(hub, portId, modeMap, type);
    }
    /**
     * Set the motor power.
     * @method BasicMotor#setPower
     * @param {number} power For forward, a value between 1 - 100 should be set. For reverse, a value between -1 to -100. Stop is 0.
     * @returns {Promise} Resolved upon successful issuance of the command.
     */
    setPower(power, interrupt = true) {
        if (interrupt) {
            this.cancelEventTimer();
        }
        return this.writeDirect(0x00, Buffer.from([utils_1.mapSpeed(power)]));
    }
    /**
     * Ramp the motor power.
     * @method BasicMotor#rampPower
     * @param {number} fromPower For forward, a value between 1 - 100 should be set. For reverse, a value between -1 to -100. Stop is 0.
     * @param {number} toPower For forward, a value between 1 - 100 should be set. For reverse, a value between -1 to -100. Stop is 0.
     * @param {number} time How long the ramp should last (in milliseconds).
     * @returns {Promise} Resolved upon successful completion of command.
     */
    rampPower(fromPower, toPower, time) {
        this.cancelEventTimer();
        return new Promise((resolve) => {
            utils_1.calculateRamp(this, fromPower, toPower, time)
                .on("changePower", (power) => {
                this.setPower(power, false);
            })
                .on("finished", resolve);
        });
    }
    /**
     * Stop the motor.
     * @method BasicMotor#stop
     * @returns {Promise} Resolved upon successful issuance of the command.
     */
    stop() {
        this.cancelEventTimer();
        return this.setPower(0);
    }
    /**
     * Brake the motor.
     * @method BasicMotor#brake
     * @returns {Promise} Resolved upon successful issuance of the command.
     */
    brake() {
        this.cancelEventTimer();
        return this.setPower(Consts.BrakingStyle.BRAKE);
    }
}
exports.BasicMotor = BasicMotor;
//# sourceMappingURL=basicmotor.js.map