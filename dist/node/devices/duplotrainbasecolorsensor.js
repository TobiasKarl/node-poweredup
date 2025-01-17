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
exports.ModeMap = exports.Mode = exports.DuploTrainBaseColorSensor = void 0;
const device_1 = require("./device");
const Consts = __importStar(require("../consts"));
/**
 * @class DuploTrainBaseColorSensor
 * @extends Device
 */
class DuploTrainBaseColorSensor extends device_1.Device {
    constructor(hub, portId) {
        super(hub, portId, exports.ModeMap, Consts.DeviceType.DUPLO_TRAIN_BASE_COLOR_SENSOR);
    }
    receive(message) {
        const mode = this._mode;
        switch (mode) {
            case Mode.COLOR:
                if (message[4] <= 10) {
                    const color = message[4];
                    /**
                     * Emits when a color sensor is activated.
                     * @event DuploTrainBaseColorSensor#color
                     * @type {object}
                     * @param {Color} color
                     */
                    this.notify("color", { color });
                }
                break;
            case Mode.REFLECTIVITY:
                const reflect = message[4];
                /**
                 * Emits when the light reflectivity changes.
                 * @event DuploTrainBaseColorSensor#reflect
                 * @type {object}
                 * @param {number} reflect Percentage, from 0 to 100.
                 */
                this.notify("reflect", { reflect });
                break;
            case Mode.RGB:
                const red = Math.floor(message.readUInt16LE(4) / 4);
                const green = Math.floor(message.readUInt16LE(6) / 4);
                const blue = Math.floor(message.readUInt16LE(8) / 4);
                /**
                 * Emits when the light reflectivity changes.
                 * @event DuploTrainBaseColorSensor#rgb
                 * @type {object}
                 * @param {number} red
                 * @param {number} green
                 * @param {number} blue
                 */
                this.notify("rgb", { red, green, blue });
                break;
        }
    }
}
exports.DuploTrainBaseColorSensor = DuploTrainBaseColorSensor;
var Mode;
(function (Mode) {
    Mode[Mode["COLOR"] = 0] = "COLOR";
    Mode[Mode["REFLECTIVITY"] = 2] = "REFLECTIVITY";
    Mode[Mode["RGB"] = 3] = "RGB";
})(Mode = exports.Mode || (exports.Mode = {}));
exports.ModeMap = {
    "color": Mode.COLOR,
    "reflect": Mode.REFLECTIVITY,
    "rgb": Mode.RGB
};
//# sourceMappingURL=duplotrainbasecolorsensor.js.map