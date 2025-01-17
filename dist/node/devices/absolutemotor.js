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
exports.ModeMap = exports.Mode = exports.AbsoluteMotor = void 0;
const tachomotor_1 = require("./tachomotor");
const Consts = __importStar(require("../consts"));
const utils_1 = require("../utils");
/**
 * @class AbsoluteMotor
 * @extends TachoMotor
 */
class AbsoluteMotor extends tachomotor_1.TachoMotor {
    constructor(hub, portId, modeMap = {}, type = Consts.DeviceType.UNKNOWN) {
        super(hub, portId, Object.assign({}, modeMap, exports.ModeMap), type);
    }
    receive(message) {
        const mode = this._mode;
        switch (mode) {
            case Mode.ABSOLUTE:
                const angle = utils_1.normalizeAngle(message.readInt16LE(this.isWeDo2SmartHub ? 2 : 4));
                /**
                 * Emits when a the motors absolute position is changed.
                 * @event AbsoluteMotor#absolute
                 * @type {object}
                 * @param {number} absolute
                 */
                this.notify("absolute", { angle });
                break;
            default:
                super.receive(message);
                break;
        }
    }
    /**
     * Rotate a motor by a given angle.
     * @method AbsoluteMotor#gotoAngle
     * @param {number} angle Absolute position the motor should go to (degrees from 0).
     * @param {number} [speed=100] For forward, a value between 1 - 100 should be set. For reverse, a value between -1 to -100.
     * @returns {Promise} Resolved upon successful completion of command (ie. once the motor is finished).
     */
    gotoAngle(angle, speed = 100) {
        if (!this.isVirtualPort && angle instanceof Array) {
            throw new Error("Only virtual ports can accept multiple positions");
        }
        if (this.isWeDo2SmartHub) {
            throw new Error("Absolute positioning is not available on the WeDo 2.0 Smart Hub");
        }
        this.cancelEventTimer();
        return new Promise((resolve) => {
            if (speed === undefined || speed === null) {
                speed = 100;
            }
            let message;
            if (angle instanceof Array) {
                message = Buffer.from([0x81, this.portId, 0x11, 0x0e, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, utils_1.mapSpeed(speed), this._maxPower, this._brakeStyle, this.useProfile()]);
                message.writeInt32LE(utils_1.normalizeAngle(angle[0]), 4);
                message.writeInt32LE(utils_1.normalizeAngle(angle[1]), 8);
            }
            else {
                message = Buffer.from([0x81, this.portId, 0x11, 0x0d, 0x00, 0x00, 0x00, 0x00, utils_1.mapSpeed(speed), this._maxPower, this._brakeStyle, this.useProfile()]);
                message.writeInt32LE(utils_1.normalizeAngle(angle), 4);
            }
            this.send(message);
            this._finishedCallbacks.push(() => {
                return resolve();
            });
        });
    }
    /**
     * Rotate motor to real zero position.
     *
     * Real zero is marked on Technic angular motors (SPIKE Prime). It is also available on Technic linear motors (Control+) but is unmarked.
     * @method AbsoluteMotor#gotoRealZero
     * @param {number} [speed=100] Speed between 1 - 100. Note that this will always take the shortest path to zero.
     * @returns {Promise} Resolved upon successful completion of command (ie. once the motor is finished).
     */
    gotoRealZero(speed = 100) {
        return new Promise((resolve) => {
            const oldMode = this.mode;
            let calibrated = false;
            this.on("absolute", async ({ angle }) => {
                if (!calibrated) {
                    calibrated = true;
                    if (angle < 0) {
                        angle = Math.abs(angle);
                    }
                    else {
                        speed = -speed;
                    }
                    await this.rotateByDegrees(angle, speed);
                    if (oldMode) {
                        this.subscribe(oldMode);
                    }
                    return resolve();
                }
            });
            this.requestUpdate();
        });
    }
    /**
     * Reset zero to current position
     * @method AbsoluteMotor#resetZero
     * @returns {Promise} Resolved upon successful completion of command (ie. once the motor is finished).
     */
    resetZero() {
        return new Promise((resolve) => {
            const data = Buffer.from([0x81, this.portId, 0x11, 0x51, 0x02, 0x00, 0x00, 0x00, 0x00]);
            this.send(data);
            return resolve();
        });
    }
}
exports.AbsoluteMotor = AbsoluteMotor;
var Mode;
(function (Mode) {
    Mode[Mode["ROTATION"] = 2] = "ROTATION";
    Mode[Mode["ABSOLUTE"] = 3] = "ABSOLUTE";
})(Mode = exports.Mode || (exports.Mode = {}));
exports.ModeMap = {
    "rotate": Mode.ROTATION,
    "absolute": Mode.ABSOLUTE
};
//# sourceMappingURL=absolutemotor.js.map