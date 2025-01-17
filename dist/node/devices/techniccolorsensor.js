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
exports.ModeMap = exports.Mode = exports.TechnicColorSensor = void 0;
const device_1 = require("./device");
const Consts = __importStar(require("../consts"));
/**
 * @class TechnicColorSensor
 * @extends Device
 */
class TechnicColorSensor extends device_1.Device {
    constructor(hub, portId) {
        super(hub, portId, exports.ModeMap, Consts.DeviceType.TECHNIC_COLOR_SENSOR);
    }
    receive(message) {
        const mode = this._mode;
        switch (mode) {
            case Mode.COLOR:
                if (message[4] <= 10) {
                    const color = message[4];
                    /**
                     * Emits when a color sensor is activated.
                     * @event TechnicColorSensor#color
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
                 * @event TechnicColorSensor#reflect
                 * @type {object}
                 * @param {number} reflect Percentage, from 0 to 100.
                 */
                this.notify("reflect", { reflect });
                break;
            case Mode.AMBIENT_LIGHT:
                const ambient = message[4];
                /**
                 * Emits when the ambient light changes.
                 * @event TechnicColorSensor#ambient
                 * @type {object}
                 * @param {number} ambient Percentage, from 0 to 100.
                 */
                this.notify("ambient", { ambient });
                break;
        }
    }
    /**
     * Set the brightness (or turn on/off) of the lights around the sensor.
     * @method TechnicColorSensor#setBrightness
     * @param {number} firstSegment First light segment. 0-100 brightness.
     * @param {number} secondSegment Second light segment. 0-100 brightness.
     * @param {number} thirdSegment Third light segment. 0-100 brightness.
     * @returns {Promise} Resolved upon successful issuance of the command.
     */
    setBrightness(firstSegment, secondSegment, thirdSegment) {
        this.writeDirect(0x03, Buffer.from([firstSegment, secondSegment, thirdSegment]));
    }
}
exports.TechnicColorSensor = TechnicColorSensor;
var Mode;
(function (Mode) {
    Mode[Mode["COLOR"] = 0] = "COLOR";
    Mode[Mode["REFLECTIVITY"] = 1] = "REFLECTIVITY";
    Mode[Mode["AMBIENT_LIGHT"] = 2] = "AMBIENT_LIGHT";
})(Mode = exports.Mode || (exports.Mode = {}));
exports.ModeMap = {
    "color": Mode.COLOR,
    "reflect": Mode.REFLECTIVITY,
    "ambient": Mode.AMBIENT_LIGHT
};
//# sourceMappingURL=techniccolorsensor.js.map