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
exports.BaseHub = void 0;
const events_1 = require("events");
const colordistancesensor_1 = require("../devices/colordistancesensor");
const currentsensor_1 = require("../devices/currentsensor");
const device_1 = require("../devices/device");
const duplotrainbasecolorsensor_1 = require("../devices/duplotrainbasecolorsensor");
const duplotrainbasemotor_1 = require("../devices/duplotrainbasemotor");
const duplotrainbasespeaker_1 = require("../devices/duplotrainbasespeaker");
const duplotrainbasespeedometer_1 = require("../devices/duplotrainbasespeedometer");
const hubled_1 = require("../devices/hubled");
const light_1 = require("../devices/light");
const marioaccelerometer_1 = require("../devices/marioaccelerometer");
const mariobarcodesensor_1 = require("../devices/mariobarcodesensor");
const mariopantssensor_1 = require("../devices/mariopantssensor");
const mediumlinearmotor_1 = require("../devices/mediumlinearmotor");
const motionsensor_1 = require("../devices/motionsensor");
const movehubmediumlinearmotor_1 = require("../devices/movehubmediumlinearmotor");
const movehubtiltsensor_1 = require("../devices/movehubtiltsensor");
const piezobuzzer_1 = require("../devices/piezobuzzer");
const remotecontrolbutton_1 = require("../devices/remotecontrolbutton");
const simplemediumlinearmotor_1 = require("../devices/simplemediumlinearmotor");
const techniccolorsensor_1 = require("../devices/techniccolorsensor");
const technicdistancesensor_1 = require("../devices/technicdistancesensor");
const technicforcesensor_1 = require("../devices/technicforcesensor");
const techniclargeangularmotor_1 = require("../devices/techniclargeangularmotor");
const techniclargelinearmotor_1 = require("../devices/techniclargelinearmotor");
const technicmediumangularmotor_1 = require("../devices/technicmediumangularmotor");
const technicmediumhubaccelerometersensor_1 = require("../devices/technicmediumhubaccelerometersensor");
const technicmediumhubgyrosensor_1 = require("../devices/technicmediumhubgyrosensor");
const technicmediumhubtiltsensor_1 = require("../devices/technicmediumhubtiltsensor");
const technicxlargelinearmotor_1 = require("../devices/technicxlargelinearmotor");
const tiltsensor_1 = require("../devices/tiltsensor");
const trainmotor_1 = require("../devices/trainmotor");
const voltagesensor_1 = require("../devices/voltagesensor");
const Consts = __importStar(require("../consts"));
const Debug = require("debug");
const debug = Debug("basehub");
/**
 * @class BaseHub
 * @extends EventEmitter
 */
class BaseHub extends events_1.EventEmitter {
    constructor(bleDevice, portMap = {}, type = Consts.HubType.UNKNOWN) {
        super();
        this._attachedDevices = {};
        this._name = "";
        this._firmwareVersion = "0.0.00.0000";
        this._hardwareVersion = "0.0.00.0000";
        this._primaryMACAddress = "00:00:00:00:00:00";
        this._batteryLevel = 100;
        this._rssi = -60;
        this._portMap = {};
        this._virtualPorts = [];
        this._attachCallbacks = [];
        this.setMaxListeners(23); // Technic Medium Hub has 9 built in devices + 4 external ports. Node.js throws a warning after 10 attached event listeners.
        this._type = type;
        this._bleDevice = bleDevice;
        this._portMap = Object.assign({}, portMap);
        bleDevice.on("disconnect", () => {
            /**
             * Emits when the hub is disconnected.
             * @event Hub#disconnect
             */
            this.emit("disconnect");
        });
    }
    /**
     * @readonly
     * @property {string} name Name of the hub
     */
    get name() {
        return this._bleDevice.name;
    }
  get connecting() {
        return this._bleDevice.connecting;
    }
    get connected() {
        return this._bleDevice.connected;
    }
    get connectable() {
        return this._bleDevice._noblePeripheral.connectable;
    }
    get state() {
        return this._bleDevice._noblePeripheral.state;
    }
    set connectable(bol) {
        this._bleDevice._noblePeripheral.connectable = bol;
    }
    /**
     * @readonly
     * @property {string} type Hub type
     */
    get type() {
        return this._type;
    }
    /**
     * @readonly
     * @property {string[]} ports Array of port names
     */
    get ports() {
        return Object.keys(this._portMap);
    }
    /**
     * @readonly
     * @property {string} firmwareVersion Firmware version of the hub
     */
    get firmwareVersion() {
        return this._firmwareVersion;
    }
    /**
     * @readonly
     * @property {string} hardwareVersion Hardware version of the hub
     */
    get hardwareVersion() {
        return this._hardwareVersion;
    }
    /**
     * @readonly
     * @property {string} primaryMACAddress Primary MAC address of the hub
     */
    get primaryMACAddress() {
        return this._primaryMACAddress;
    }
    /**
     * @readonly
     * @property {string} uuid UUID of the hub
     */
    get uuid() {
        return this._bleDevice.uuid;
    }
    /**
     * @readonly
     * @property {number} batteryLevel Battery level of the hub (Percentage between 0-100)
     */
    get batteryLevel() {
        return this._batteryLevel;
    }
    /**
     * @readonly
     * @property {number} rssi Signal strength of the hub
     */
    get rssi() {
        return this._rssi;
    }
    /**
     * Connect to the Hub.
     * @method Hub#connect
     * @returns {Promise} Resolved upon successful connect.
     */
    connect() {
        if (this._bleDevice.connecting) {
            throw new Error("Already connecting");
        }
        else if (this._bleDevice.connected) {
            throw new Error("Already connected");
        }else if (!this._bleDevice._noblePeripheral.connectable) {
            throw new Error("Not connectable");
        }
        return this._bleDevice.connect();
    }
    /**
     * Disconnect the Hub.
     * @method Hub#disconnect
     * @returns {Promise} Resolved upon successful disconnect.
     */
    disconnect() {
        return this._bleDevice.disconnect();
    }
    /**
     * Retrieves the device attached to a given port.
     * @method Hub#getDeviceAtPort
     * @param {string} portName The name of the port to retrieve the device from.
     * @returns {Device | undefined} The device attached to the port.
     */
    getDeviceAtPort(portName) {
        const portId = this._portMap[portName];
        if (portId !== undefined) {
            return this._attachedDevices[portId];
        }
        else {
            return undefined;
        }
    }
    /**
     * Retrieves the device attached to a given port, waiting until one is attached if there isn't one.
     *
     * Note: If a device is never attached, the returned promise may never resolve.
     * @method Hub#waitForDeviceAtPort
     * @param {string} portName The name of the port to retrieve the device from.
     * @returns {Promise} Resolved once a device is attached, or resolved immediately if a device is already attached.
     */
    waitForDeviceAtPort(portName) {
        return new Promise((resolve) => {
            const existingDevice = this.getDeviceAtPort(portName);
            if (existingDevice) {
                return resolve(existingDevice);
            }
            this._attachCallbacks.push((device) => {
                if (device.portName === portName) {
                    resolve(device);
                    return true;
                }
                else {
                    return false;
                }
            });
        });
    }
    /**
     * Retrieves all attached devices.
     * @method Hub#getDevices
     * @returns {Device[]} Array of all attached devices.
     */
    getDevices() {
        return Object.values(this._attachedDevices);
    }
    /**
     * Retrieves an array of devices of the specified type.
     * @method Hub#getDevicesByType
     * @param {number} deviceType The device type to lookup.
     * @returns {Device[]} Array of all devices of the specified type.
     */
    getDevicesByType(deviceType) {
        return this.getDevices().filter((device) => device.type === deviceType);
    }
    /**
     * Retrieves the first device attached of the specified type, waiting until one is attached if there isn't one.
     *
     * Note: If a device is never attached, the returned promise may never resolve.
     * @method Hub#waitForDeviceByType
     * @param {number} deviceType The device type to lookup.
     * @returns {Promise} Resolved once a device is attached, or resolved immediately if a device is already attached.
     */
    waitForDeviceByType(deviceType) {
        return new Promise((resolve) => {
            const existingDevices = this.getDevicesByType(deviceType);
            if (existingDevices.length >= 1) {
                return resolve(existingDevices[0]);
            }
            this._attachCallbacks.push((device) => {
                if (device.type === deviceType) {
                    resolve(device);
                    return true;
                }
                else {
                    return false;
                }
            });
        });
    }
    getPortNameForPortId(portId) {
        for (const port of Object.keys(this._portMap)) {
            if (this._portMap[port] === portId) {
                return port;
            }
        }
        return;
    }
    isPortVirtual(portId) {
        return (this._virtualPorts.indexOf(portId) > -1);
    }
    /**
     * Sleep a given amount of time.
     *
     * Note: This is a helper method to make it easier to add delays into a chain of commands.
     * @method Hub#sleep
     * @param {number} delay How long to sleep (in milliseconds).
     * @returns {Promise} Resolved after the delay is finished.
     */
    sleep(delay) {
        return new Promise((resolve) => {
            global.setTimeout(resolve, delay);
        });
    }
    /**
     * Wait until a given list of concurrently running commands are complete.
     *
     * Note: This is a helper method to make it easier to wait for concurrent commands to complete.
     * @method Hub#wait
     * @param {Array<Promise<any>>} commands Array of executing commands.
     * @returns {Promise} Resolved after the commands are finished.
     */
    wait(commands) {
        return Promise.all(commands);
    }
    send(message, uuid) {
        return Promise.resolve();
    }
    subscribe(portId, deviceType, mode) {
        // NK Do nothing here
    }
    unsubscribe(portId, deviceType, mode) {
        // NK Do nothing here
    }
    manuallyAttachDevice(deviceType, portId) {
        if (!this._attachedDevices[portId]) {
            debug(`No device attached to portId ${portId}, creating and attaching device type ${deviceType}`);
            const device = this._createDevice(deviceType, portId);
            this._attachDevice(device);
            return device;
        }
        else {
            if (this._attachedDevices[portId].type === deviceType) {
                debug(`Device of ${deviceType} already attached to portId ${portId}, returning existing device`);
                return this._attachedDevices[portId];
            }
            else {
                throw new Error(`Already a different type of device attached to portId ${portId}. Only use this method when you are certain what's attached.`);
            }
        }
    }
    _attachDevice(device) {
        if (this._attachedDevices[device.portId] && this._attachedDevices[device.portId].type === device.type) {
            return;
        }
        this._attachedDevices[device.portId] = device;
        /**
         * Emits when a device is attached to the Hub.
         * @event Hub#attach
         * @param {Device} device
         */
        this.emit("attach", device);
        debug(`Attached device type ${device.type} (${Consts.DeviceTypeNames[device.type]}) on port ${device.portName} (${device.portId})`);
        let i = this._attachCallbacks.length;
        while (i--) {
            const callback = this._attachCallbacks[i];
            if (callback(device)) {
                this._attachCallbacks.splice(i, 1);
            }
        }
    }
    _detachDevice(device) {
        delete this._attachedDevices[device.portId];
        /**
         * Emits when a device is detached from the Hub.
         * @event Hub#detach
         * @param {Device} device
         */
        this.emit("detach", device);
        debug(`Detached device type ${device.type} (${Consts.DeviceTypeNames[device.type]}) on port ${device.portName} (${device.portId})`);
    }
    _createDevice(deviceType, portId) {
        let constructor;
        // NK TODO: This needs to go in a better place
        const deviceConstructors = {
            [Consts.DeviceType.LIGHT]: light_1.Light,
            [Consts.DeviceType.TRAIN_MOTOR]: trainmotor_1.TrainMotor,
            [Consts.DeviceType.SIMPLE_MEDIUM_LINEAR_MOTOR]: simplemediumlinearmotor_1.SimpleMediumLinearMotor,
            [Consts.DeviceType.MOVE_HUB_MEDIUM_LINEAR_MOTOR]: movehubmediumlinearmotor_1.MoveHubMediumLinearMotor,
            [Consts.DeviceType.MOTION_SENSOR]: motionsensor_1.MotionSensor,
            [Consts.DeviceType.TILT_SENSOR]: tiltsensor_1.TiltSensor,
            [Consts.DeviceType.MOVE_HUB_TILT_SENSOR]: movehubtiltsensor_1.MoveHubTiltSensor,
            [Consts.DeviceType.PIEZO_BUZZER]: piezobuzzer_1.PiezoBuzzer,
            [Consts.DeviceType.TECHNIC_COLOR_SENSOR]: techniccolorsensor_1.TechnicColorSensor,
            [Consts.DeviceType.TECHNIC_DISTANCE_SENSOR]: technicdistancesensor_1.TechnicDistanceSensor,
            [Consts.DeviceType.TECHNIC_FORCE_SENSOR]: technicforcesensor_1.TechnicForceSensor,
            [Consts.DeviceType.TECHNIC_MEDIUM_HUB_TILT_SENSOR]: technicmediumhubtiltsensor_1.TechnicMediumHubTiltSensor,
            [Consts.DeviceType.TECHNIC_MEDIUM_HUB_GYRO_SENSOR]: technicmediumhubgyrosensor_1.TechnicMediumHubGyroSensor,
            [Consts.DeviceType.TECHNIC_MEDIUM_HUB_ACCELEROMETER]: technicmediumhubaccelerometersensor_1.TechnicMediumHubAccelerometerSensor,
            [Consts.DeviceType.MEDIUM_LINEAR_MOTOR]: mediumlinearmotor_1.MediumLinearMotor,
            [Consts.DeviceType.TECHNIC_MEDIUM_ANGULAR_MOTOR]: technicmediumangularmotor_1.TechnicMediumAngularMotor,
            [Consts.DeviceType.TECHNIC_LARGE_ANGULAR_MOTOR]: techniclargeangularmotor_1.TechnicLargeAngularMotor,
            [Consts.DeviceType.TECHNIC_LARGE_LINEAR_MOTOR]: techniclargelinearmotor_1.TechnicLargeLinearMotor,
            [Consts.DeviceType.TECHNIC_XLARGE_LINEAR_MOTOR]: technicxlargelinearmotor_1.TechnicXLargeLinearMotor,
            [Consts.DeviceType.COLOR_DISTANCE_SENSOR]: colordistancesensor_1.ColorDistanceSensor,
            [Consts.DeviceType.VOLTAGE_SENSOR]: voltagesensor_1.VoltageSensor,
            [Consts.DeviceType.CURRENT_SENSOR]: currentsensor_1.CurrentSensor,
            [Consts.DeviceType.REMOTE_CONTROL_BUTTON]: remotecontrolbutton_1.RemoteControlButton,
            [Consts.DeviceType.HUB_LED]: hubled_1.HubLED,
            [Consts.DeviceType.DUPLO_TRAIN_BASE_COLOR_SENSOR]: duplotrainbasecolorsensor_1.DuploTrainBaseColorSensor,
            [Consts.DeviceType.DUPLO_TRAIN_BASE_MOTOR]: duplotrainbasemotor_1.DuploTrainBaseMotor,
            [Consts.DeviceType.DUPLO_TRAIN_BASE_SPEAKER]: duplotrainbasespeaker_1.DuploTrainBaseSpeaker,
            [Consts.DeviceType.DUPLO_TRAIN_BASE_SPEEDOMETER]: duplotrainbasespeedometer_1.DuploTrainBaseSpeedometer,
            [Consts.DeviceType.MARIO_ACCELEROMETER]: marioaccelerometer_1.MarioAccelerometer,
            [Consts.DeviceType.MARIO_BARCODE_SENSOR]: mariobarcodesensor_1.MarioBarcodeSensor,
            [Consts.DeviceType.MARIO_PANTS_SENSOR]: mariopantssensor_1.MarioPantsSensor,
            [Consts.DeviceType.TECHNIC_MEDIUM_ANGULAR_MOTOR_GREY]: technicmediumangularmotor_1.TechnicMediumAngularMotor,
            [Consts.DeviceType.TECHNIC_LARGE_ANGULAR_MOTOR_GREY]: techniclargeangularmotor_1.TechnicLargeAngularMotor,
        };
        constructor = deviceConstructors[deviceType];
        if (constructor) {
            return new constructor(this, portId, undefined, deviceType);
        }
        else {
            return new device_1.Device(this, portId, undefined, deviceType);
        }
    }
    _getDeviceByPortId(portId) {
        return this._attachedDevices[portId];
    }
}
exports.BaseHub = BaseHub;
//# sourceMappingURL=basehub.js.map