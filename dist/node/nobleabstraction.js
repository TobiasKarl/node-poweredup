"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NobleDevice = void 0;
const Debug = require("debug");
const events_1 = require("events");
const debug = Debug("bledevice");
class NobleDevice extends events_1.EventEmitter {
    constructor(device) {
        super();
        this._name = "";
        this._listeners = {};
        this._characteristics = {};
        this._queue = Promise.resolve();
        this._mailbox = [];
        this._connected = false;
        this._connecting = false;
        this._noblePeripheral = device;
        this._uuid = device.uuid;
        device.on("disconnect", () => {
            this._connecting = false;
            this._connected = false;
            this.emit("disconnect");
        });
        // NK: This hack allows LPF2.0 hubs to send a second advertisement packet consisting of the hub name before we try to read it
        setTimeout(() => {
            this._name = device.advertisement.localName;
            this.emit("discoverComplete");
        }, 10);
    }
    get uuid() {
        return this._uuid;
    }
    get name() {
        return this._name;
    }
    get connecting() {
        return this._connecting;
    }
    get connected() {
        return this._connected;
    }
    connect() {
        return new Promise((resolve, reject) => {
            this._connecting = true;
            this._noblePeripheral.connect((err) => {
                if (err) {
                    return reject(err);
                }
                this._connecting = false;
                this._connected = true;
                return resolve();
            });
        });
    }
    disconnect() {
        return new Promise((resolve) => {
            this._noblePeripheral.disconnect();
            return resolve();
        });
    }
    discoverCharacteristicsForService(uuid) {
        return new Promise(async (discoverResolve, discoverReject) => {
            uuid = this._sanitizeUUID(uuid);
            this._noblePeripheral.discoverServices([uuid], (err, services) => {
                if (err) {
                    return discoverReject(err);
                }
                debug("Service/characteristic discovery started");
                const servicePromises = [];
                services.forEach((service) => {
                    servicePromises.push(new Promise((resolve) => {
                        service.discoverCharacteristics([], (err, characteristics) => {
                            characteristics.forEach((characteristic) => {
                                this._characteristics[characteristic.uuid] = characteristic;
                            });
                            return resolve();
                        });
                    }));
                });
                Promise.all(servicePromises).then(() => {
                    debug("Service/characteristic discovery finished");
                    return discoverResolve();
                });
            });
        });
    }
    subscribeToCharacteristic(uuid, callback) {
        uuid = this._sanitizeUUID(uuid);
        this._characteristics[uuid].on("data", (data) => {
            return callback(data);
        });
        this._characteristics[uuid].subscribe((err) => {
            if (err) {
                throw new Error(err);
            }
        });
    }
    addToCharacteristicMailbox(uuid, data) {
        this._mailbox.push(data);
    }
    readFromCharacteristic(uuid, callback) {
        uuid = this._sanitizeUUID(uuid);
        this._characteristics[uuid].read((err, data) => {
            return callback(err, data);
        });
    }
    writeToCharacteristic(uuid, data) {
        return new Promise((resolve, reject) => {
            uuid = this._sanitizeUUID(uuid);
            this._characteristics[uuid].write(data, false, (error) => {
                if (error) {
                    return reject(error);
                }
                return resolve();
            });
        });
    }
    _sanitizeUUID(uuid) {
        return uuid.replace(/-/g, "");
    }
}
exports.NobleDevice = NobleDevice;
//# sourceMappingURL=nobleabstraction.js.map