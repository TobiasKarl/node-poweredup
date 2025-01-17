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
exports.Output = exports.ModeMap = exports.Mode = exports.ColorDistanceSensor = void 0;
const device_1 = require("./device");
const Consts = __importStar(require("../consts"));
/**
 * @class ColorDistanceSensor
 * @extends Device
 */
class ColorDistanceSensor extends device_1.Device {
    constructor(hub, portId) {
        super(hub, portId, exports.ModeMap, Consts.DeviceType.COLOR_DISTANCE_SENSOR);
    }
    receive(message) {
        const mode = this._mode;
        switch (mode) {
            case Mode.COLOR:
                if (message[this.isWeDo2SmartHub ? 2 : 4] <= 10) {
                    const color = message[this.isWeDo2SmartHub ? 2 : 4];
                    /**
                     * Emits when a color sensor is activated.
                     * @event ColorDistanceSensor#color
                     * @type {object}
                     * @param {Color} color
                     */
                    this.notify("color", { color });
                }
                break;
            case Mode.DISTANCE:
                if (this.isWeDo2SmartHub) {
                    break;
                }
                if (message[4] <= 10) {
                    let distance = Math.floor(message[4] * 25.4);
                    if (distance < 0) {
                        distance = 0;
                    }
                    /**
                     * Emits when a distance sensor is activated.
                     * @event ColorDistanceSensor#distance
                     * @type {object}
                     * @param {number} distance Distance, in millimeters.
                     */
                    this.notify("distance", { distance });
                }
                break;
            case Mode.COLOR_AND_DISTANCE:
                if (this.isWeDo2SmartHub) {
                    break;
                }
                let distance = message[5];
                const partial = message[7];
                if (partial > 0) {
                    distance += 1.0 / partial;
                }
                distance = Math.floor(distance * 25.4) - 20;
                /**
                 * A combined color and distance event, emits when the sensor is activated.
                 * @event ColorDistanceSensor#colorAndDistance
                 * @type {object}
                 * @param {Color} color
                 * @param {number} distance Distance, in millimeters.
                 */
                if (message[4] <= 10) {
                    const color = message[4];
                    this.notify("colorAndDistance", { color, distance });
                }
                break;
        }
    }
    /**
     * Switches the IR receiver into extended channel mode. After setting this, use channels 5-8 instead of 1-4 for this receiver.
     *
     * NOTE: Calling this with channel 5-8 with switch off extended channel mode for this receiver.
     * @method ColorDistanceSensor#setPFExtendedChannel
     * @param {number} channel Channel number, between 1-8
     * @returns {Promise} Resolved upon successful issuance of the command.
     */
    setPFExtendedChannel(channel) {
        let address = 0;
        if (channel >= 4) {
            channel -= 4;
            address = 1;
        }
        const message = Buffer.alloc(2);
        // Send "Extended toggle address command"
        message[0] = ((channel - 1) << 4) + (address << 3);
        message[1] = 6 << 4;
        return this.sendPFIRMessage(message);
    }
    /**
     * Set the power of a Power Functions motor via IR
     * @method ColorDistanceSensor#setPFPower
     * @param {number} channel Channel number, between 1-4
     * @param {string} output Outport port, "RED" (A) or "BLUE" (B)
     * @param {number} power -7 (full reverse) to 7 (full forward). 0 is stop. 8 is brake.
     * @returns {Promise} Resolved upon successful issuance of the command.
     */
    setPFPower(channel, output, power) {
        let address = 0;
        if (channel > 4) {
            channel -= 4;
            address = 1;
        }
        const message = Buffer.alloc(2);
        // Send "Single output mode"
        message[0] = ((channel - 1) << 4) + (address << 3) + (output === "RED" ? 4 : 5);
        message[1] = this._pfPowerToPWM(power) << 4;
        return this.sendPFIRMessage(message);
    }
    /**
     * Start Power Functions motors running via IR
     *
     * NOTE: This command is designed for bang-bang style operation. To keep the motors running, the sensor needs to be within range of the IR receiver constantly.
     * @method ColorDistanceSensor#startPFMotors
     * @param {Buffer} channel Channel number, between 1-4
     * @param {Buffer} powerA -7 (full reverse) to 7 (full forward). 0 is stop. 8 is brake.
     * @param {Buffer} powerB -7 (full reverse) to 7 (full forward). 0 is stop. 8 is brake.
     * @returns {Promise} Resolved upon successful issuance of the command.
     */
    startPFMotors(channel, powerBlue, powerRed) {
        let address = 0;
        if (channel > 4) {
            channel -= 4;
            address = 1;
        }
        const message = Buffer.alloc(2);
        // Send "Combo PWM mode"
        message[0] = (((channel - 1) + 4 + (address << 3)) << 4) + this._pfPowerToPWM(powerBlue);
        message[1] = this._pfPowerToPWM(powerRed) << 4;
        return this.sendPFIRMessage(message);
    }
    /**
     * Send a raw Power Functions IR command
     * @method ColorDistanceSensor#sendPFIRMessage
     * @param {Buffer} message 2 byte payload making up a Power Functions protocol command. NOTE: Only specify nibbles 1-3, nibble 4 should be zeroed.
     * @returns {Promise} Resolved upon successful issuance of the command.
     */
    sendPFIRMessage(message) {
        if (this.isWeDo2SmartHub) {
            throw new Error("Power Functions IR is not available on the WeDo 2.0 Smart Hub");
        }
        else {
            const payload = Buffer.alloc(2);
            payload[0] = (message[0] << 4) + (message[1] >> 4);
            payload[1] = message[0] >> 4;
            this.subscribe(Mode.PF_IR);
            return this.writeDirect(0x07, payload);
        }
    }
    /**
     * Set the color of the LED on the sensor via a color value.
     * @method ColorDistanceSensor#setColor
     * @param {Color} color
     * @returns {Promise} Resolved upon successful issuance of the command.
     */
    setColor(color) {
        return new Promise((resolve) => {
            if (color === false) {
                color = 0;
            }
            if (this.isWeDo2SmartHub) {
                throw new Error("Setting LED color is not available on the WeDo 2.0 Smart Hub");
            }
            else {
                this.subscribe(Mode.LED);
                this.writeDirect(0x05, Buffer.from([color]));
            }
            return resolve();
        });
    }
    _pfPowerToPWM(power) {
        return power & 15;
    }
}
exports.ColorDistanceSensor = ColorDistanceSensor;
var Mode;
(function (Mode) {
    Mode[Mode["COLOR"] = 0] = "COLOR";
    Mode[Mode["DISTANCE"] = 1] = "DISTANCE";
    Mode[Mode["LED"] = 5] = "LED";
    Mode[Mode["PF_IR"] = 7] = "PF_IR";
    Mode[Mode["COLOR_AND_DISTANCE"] = 8] = "COLOR_AND_DISTANCE";
})(Mode = exports.Mode || (exports.Mode = {}));
exports.ModeMap = {
    "color": Mode.COLOR,
    "distance": Mode.DISTANCE,
    "colorAndDistance": Mode.COLOR_AND_DISTANCE
};
var Output;
(function (Output) {
    Output["RED"] = "RED";
    Output["BLUE"] = "BLUE";
})(Output = exports.Output || (exports.Output = {}));
//# sourceMappingURL=colordistancesensor.js.map