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
exports.PortMap = exports.TechnicMediumHub = void 0;
const lpf2hub_1 = require("./lpf2hub");
const Consts = __importStar(require("../consts"));
const Debug = require("debug");
const debug = Debug("technicmediumhub");
/**
 * The TechnicMediumHub is emitted if the discovered device is a Technic Medium Hub.
 * @class TechnicMediumHub
 * @extends LPF2Hub
 * @extends BaseHub
 */
class TechnicMediumHub extends lpf2hub_1.LPF2Hub {
    static IsTechnicMediumHub(peripheral) {
        return (peripheral.advertisement &&
            peripheral.advertisement.serviceUuids &&
            peripheral.advertisement.serviceUuids.indexOf(Consts.BLEService.LPF2_HUB.replace(/-/g, "")) >= 0 &&
            peripheral.advertisement.manufacturerData &&
            peripheral.advertisement.manufacturerData.length > 3 &&
            peripheral.advertisement.manufacturerData[3] === Consts.BLEManufacturerData.TECHNIC_MEDIUM_HUB);
    }
    constructor(device) {
        super(device, exports.PortMap, Consts.HubType.TECHNIC_MEDIUM_HUB);
        debug("Discovered Control+ Hub");
    }
    async connect() {
        debug("Connecting to Control+ Hub");
        await super.connect();
        debug("Connect completed");
    }
}
exports.TechnicMediumHub = TechnicMediumHub;
exports.PortMap = {
    "A": 0,
    "B": 1,
    "C": 2,
    "D": 3,
    "HUB_LED": 50,
    "CURRENT_SENSOR": 59,
    "VOLTAGE_SENSOR": 60,
    "ACCELEROMETER": 97,
    "GYRO_SENSOR": 98,
    "TILT_SENSOR": 99
};
//# sourceMappingURL=technicmediumhub.js.map