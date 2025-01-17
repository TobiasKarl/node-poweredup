"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoweredUP = void 0;
const nobleabstraction_1 = require("./nobleabstraction");
const duplotrainbase_1 = require("./hubs/duplotrainbase");
const hub_1 = require("./hubs/hub");
const mario_1 = require("./hubs/mario");
const movehub_1 = require("./hubs/movehub");
const remotecontrol_1 = require("./hubs/remotecontrol");
const technicmediumhub_1 = require("./hubs/technicmediumhub");
const wedo2smarthub_1 = require("./hubs/wedo2smarthub");
const events_1 = require("events");
const Debug = require("debug");
const debug = Debug("poweredup");
const noble = require("@abandonware/noble");
let ready = false;
let wantScan = false;
let discoveryEventAttached = false;
const startScanning = () => {
    noble.startScanning();
};
noble.on("stateChange", (state) => {
    ready = (state === "poweredOn");
    if (ready) {
        if (wantScan) {
            debug("Scanning started");
            startScanning();
        }
       // noble.on('scanStop', () => {
         //   setTimeout(() => {
           //     startScanning();
           // }, 1000);
        //});
    }
    else {
        noble.stopScanning();
    }
});
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
        wantScan = true;
        if (!discoveryEventAttached) {
            noble.on("discover", this._discoveryEventHandler);
            discoveryEventAttached = true;
        }
        if (ready) {
            debug("Scanning started");
            startScanning();
        }
        return true;
    }
    /**
     * Stop scanning for Powered UP Hub devices.
     * @method PoweredUP#stop
     */
    stop() {
        wantScan = false;
        if (discoveryEventAttached) {
            noble.removeListener("discover", this._discoveryEventHandler);
            discoveryEventAttached = false;
        }
        noble.stopScanning();
    }
removeListener() {
        if (discoveryEventAttached) {
            noble.removeListener("discover", this._discoveryEventHandler);
            discoveryEventAttached = false;
        }
    }
    stopScan() {
        wantScan = false;
        noble.stopScanning();
    }
    startScan() {
        wantScan = true;
        noble.startScanning();
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
    async _discoveryEventHandler(peripheral) {
        peripheral.removeAllListeners();
        const device = new nobleabstraction_1.NobleDevice(peripheral);
        let hub;
        if (wedo2smarthub_1.WeDo2SmartHub.IsWeDo2SmartHub(peripheral)) {
            hub = new wedo2smarthub_1.WeDo2SmartHub(device);
        }
        else if (movehub_1.MoveHub.IsMoveHub(peripheral)) {
            hub = new movehub_1.MoveHub(device);
        }
        else if (hub_1.Hub.IsHub(peripheral)) {
            hub = new hub_1.Hub(device);
        }
        else if (remotecontrol_1.RemoteControl.IsRemoteControl(peripheral)) {
            hub = new remotecontrol_1.RemoteControl(device);
        }
        else if (duplotrainbase_1.DuploTrainBase.IsDuploTrainBase(peripheral)) {
            hub = new duplotrainbase_1.DuploTrainBase(device);
        }
        else if (technicmediumhub_1.TechnicMediumHub.IsTechnicMediumHub(peripheral)) {
            hub = new technicmediumhub_1.TechnicMediumHub(device);
        }
        else if (mario_1.Mario.IsMario(peripheral)) {
            hub = new mario_1.Mario(device);
        }
        else {
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
                if (wantScan) {
                    startScanning();
                }
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
//# sourceMappingURL=poweredup-node.js.map