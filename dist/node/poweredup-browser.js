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
exports.PoweredUP = void 0;
const webbleabstraction_1 = require("./webbleabstraction");
const duplotrainbase_1 = require("./hubs/duplotrainbase");
const hub_1 = require("./hubs/hub");
const mario_1 = require("./hubs/mario");
const movehub_1 = require("./hubs/movehub");
const remotecontrol_1 = require("./hubs/remotecontrol");
const technicmediumhub_1 = require("./hubs/technicmediumhub");
const wedo2smarthub_1 = require("./hubs/wedo2smarthub");
const Consts = __importStar(require("./consts"));
const events_1 = require("events");
const Debug = require("debug");
const debug = Debug("poweredup");
/**
 * @class PoweredUP
 * @extends EventEmitter
 */
class PoweredUP extends events_1.EventEmitter {
    constructor() {
        super();
        this._connectedHubs = {};
        this._discoveryEventHandler = this._discoveryEventHandler.bind(this);
    }
    /**
     * Begin scanning for Powered UP Hub devices.
     * @method PoweredUP#scan
     */
    async scan() {
        try {
            const device = await navigator.bluetooth.requestDevice({
                filters: [
                    {
                        services: [
                            Consts.BLEService.WEDO2_SMART_HUB
                        ]
                    },
                    {
                        services: [
                            Consts.BLEService.LPF2_HUB
                        ]
                    }
                ],
                optionalServices: [
                    Consts.BLEService.WEDO2_SMART_HUB_2,
                    "battery_service",
                    "device_information"
                ]
            });
            // @ts-ignore
            const server = await device.gatt.connect();
            this._discoveryEventHandler.call(this, server);
            return true;
        }
        catch (err) {
            return false;
        }
    }
    /**
     * Retrieve a list of Powered UP Hubs.
     * @method PoweredUP#getHubs
     * @returns {BaseHub[]}
     */
    getHubs() {
        return Object.values(this._connectedHubs);
    }
    /**
     * Retrieve a Powered UP Hub by UUID.
     * @method PoweredUP#getHubByUUID
     * @param {string} uuid
     * @returns {BaseHub | null}
     */
    getHubByUUID(uuid) {
        return this._connectedHubs[uuid];
    }
    /**
     * Retrieve a Powered UP Hub by primary MAC address.
     * @method PoweredUP#getHubByPrimaryMACAddress
     * @param {string} address
     * @returns {BaseHub}
     */
    getHubByPrimaryMACAddress(address) {
        return Object.values(this._connectedHubs).filter((hub) => hub.primaryMACAddress === address)[0];
    }
    /**
     * Retrieve a list of Powered UP Hub by name.
     * @method PoweredUP#getHubsByName
     * @param {string} name
     * @returns {BaseHub[]}
     */
    getHubsByName(name) {
        return Object.values(this._connectedHubs).filter((hub) => hub.name === name);
    }
    /**
     * Retrieve a list of Powered UP Hub by type.
     * @method PoweredUP#getHubsByType
     * @param {string} name
     * @returns {BaseHub[]}
     */
    getHubsByType(hubType) {
        return Object.values(this._connectedHubs).filter((hub) => hub.type === hubType);
    }
    _determineLPF2HubType(device) {
        return new Promise((resolve) => {
            let buf = Buffer.alloc(0);
            device.subscribeToCharacteristic(Consts.BLECharacteristic.LPF2_ALL, (data) => {
                buf = Buffer.concat([buf, data]);
                while (buf[0] <= buf.length) {
                    const len = buf[0];
                    const message = buf.slice(0, len);
                    buf = buf.slice(len);
                    if (message[2] === 0x01 && message[3] === 0x0b) {
                        switch (message[5]) {
                            case Consts.BLEManufacturerData.REMOTE_CONTROL_ID:
                                resolve(Consts.HubType.REMOTE_CONTROL);
                                break;
                            case Consts.BLEManufacturerData.MOVE_HUB_ID:
                                resolve(Consts.HubType.MOVE_HUB);
                                break;
                            case Consts.BLEManufacturerData.HUB_ID:
                                resolve(Consts.HubType.HUB);
                                break;
                            case Consts.BLEManufacturerData.DUPLO_TRAIN_BASE_ID:
                                resolve(Consts.HubType.DUPLO_TRAIN_BASE);
                                break;
                            case Consts.BLEManufacturerData.TECHNIC_MEDIUM_HUB:
                                resolve(Consts.HubType.TECHNIC_MEDIUM_HUB);
                                break;
                        }
                        debug("Hub type determined");
                    }
                    else {
                        debug("Stashed in mailbox (LPF2_ALL)", message);
                        device.addToCharacteristicMailbox(Consts.BLECharacteristic.LPF2_ALL, message);
                    }
                }
            });
            device.writeToCharacteristic(Consts.BLECharacteristic.LPF2_ALL, Buffer.from([0x05, 0x00, 0x01, 0x0b, 0x05]));
        });
    }
    async _discoveryEventHandler(server) {
        const device = new webbleabstraction_1.WebBLEDevice(server);
        let hub;
        let hubType = Consts.HubType.UNKNOWN;
        let isLPF2Hub = false;
        try {
            await device.discoverCharacteristicsForService(Consts.BLEService.WEDO2_SMART_HUB);
            hubType = Consts.HubType.WEDO2_SMART_HUB;
            // tslint:disable-next-line
        }
        catch (error) { }
        try {
            if (hubType !== Consts.HubType.WEDO2_SMART_HUB) {
                await device.discoverCharacteristicsForService(Consts.BLEService.LPF2_HUB);
                isLPF2Hub = true;
            }
            // tslint:disable-next-line
        }
        catch (error) { }
        if (isLPF2Hub) {
            hubType = await this._determineLPF2HubType(device);
        }
        switch (hubType) {
            case Consts.HubType.WEDO2_SMART_HUB:
                hub = new wedo2smarthub_1.WeDo2SmartHub(device);
                break;
            case Consts.HubType.MOVE_HUB:
                hub = new movehub_1.MoveHub(device);
                break;
            case Consts.HubType.HUB:
                hub = new hub_1.Hub(device);
                break;
            case Consts.HubType.REMOTE_CONTROL:
                hub = new remotecontrol_1.RemoteControl(device);
                break;
            case Consts.HubType.DUPLO_TRAIN_BASE:
                hub = new duplotrainbase_1.DuploTrainBase(device);
                break;
            case Consts.HubType.TECHNIC_MEDIUM_HUB:
                hub = new technicmediumhub_1.TechnicMediumHub(device);
                break;
            case Consts.HubType.MARIO:
                hub = new mario_1.Mario(device);
                break;
            default:
                return;
        }
        device.on("discoverComplete", () => {
            hub.on("connect", () => {
                debug(`Hub ${hub.uuid} connected`);
                this._connectedHubs[hub.uuid] = hub;
            });
            hub.on("disconnect", () => {
                debug(`Hub ${hub.uuid} disconnected`);
                delete this._connectedHubs[hub.uuid];
            });
            debug(`Hub ${hub.uuid} discovered`);
            /**
             * Emits when a Powered UP Hub device is found.
             * @event PoweredUP#discover
             * @param {WeDo2SmartHub | MoveHub | TechnicMediumHub | RemoteControl | DuploTrainBase} hub
             */
            this.emit("discover", hub);
        });
    }
}
exports.PoweredUP = PoweredUP;
//# sourceMappingURL=poweredup-browser.js.map