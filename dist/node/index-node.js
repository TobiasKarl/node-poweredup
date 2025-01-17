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
exports.isWebBluetooth = exports.BasicMotor = exports.AbsoluteMotor = exports.TachoMotor = exports.CurrentSensor = exports.VoltageSensor = exports.TrainMotor = exports.TiltSensor = exports.TechnicXLargeLinearMotor = exports.TechnicLargeLinearMotor = exports.TechnicLargeAngularMotor = exports.TechnicMediumAngularMotor = exports.TechnicMediumHubTiltSensor = exports.TechnicMediumHubGyroSensor = exports.TechnicMediumHubAccelerometerSensor = exports.TechnicForceSensor = exports.TechnicDistanceSensor = exports.TechnicColorSensor = exports.SimpleMediumLinearMotor = exports.RemoteControlButton = exports.PiezoBuzzer = exports.MoveHubTiltSensor = exports.MoveHubMediumLinearMotor = exports.MoveHub = exports.MotionSensor = exports.MediumLinearMotor = exports.Mario = exports.Light = exports.HubLED = exports.DuploTrainBaseSpeedometer = exports.DuploTrainBaseSpeaker = exports.DuploTrainBaseMotor = exports.DuploTrainBaseColorSensor = exports.Device = exports.ColorDistanceSensor = exports.Consts = exports.DuploTrainBase = exports.RemoteControl = exports.Hub = exports.TechnicMediumHub = exports.WeDo2SmartHub = exports.BaseHub = exports.PoweredUP = void 0;
const Consts = __importStar(require("./consts"));
exports.Consts = Consts;
const poweredup_node_1 = require("./poweredup-node");
Object.defineProperty(exports, "PoweredUP", { enumerable: true, get: function () { return poweredup_node_1.PoweredUP; } });
const basehub_1 = require("./hubs/basehub");
Object.defineProperty(exports, "BaseHub", { enumerable: true, get: function () { return basehub_1.BaseHub; } });
const duplotrainbase_1 = require("./hubs/duplotrainbase");
Object.defineProperty(exports, "DuploTrainBase", { enumerable: true, get: function () { return duplotrainbase_1.DuploTrainBase; } });
const hub_1 = require("./hubs/hub");
Object.defineProperty(exports, "Hub", { enumerable: true, get: function () { return hub_1.Hub; } });
const mario_1 = require("./hubs/mario");
Object.defineProperty(exports, "Mario", { enumerable: true, get: function () { return mario_1.Mario; } });
const movehub_1 = require("./hubs/movehub");
Object.defineProperty(exports, "MoveHub", { enumerable: true, get: function () { return movehub_1.MoveHub; } });
const remotecontrol_1 = require("./hubs/remotecontrol");
Object.defineProperty(exports, "RemoteControl", { enumerable: true, get: function () { return remotecontrol_1.RemoteControl; } });
const technicmediumhub_1 = require("./hubs/technicmediumhub");
Object.defineProperty(exports, "TechnicMediumHub", { enumerable: true, get: function () { return technicmediumhub_1.TechnicMediumHub; } });
const wedo2smarthub_1 = require("./hubs/wedo2smarthub");
Object.defineProperty(exports, "WeDo2SmartHub", { enumerable: true, get: function () { return wedo2smarthub_1.WeDo2SmartHub; } });
const colordistancesensor_1 = require("./devices/colordistancesensor");
Object.defineProperty(exports, "ColorDistanceSensor", { enumerable: true, get: function () { return colordistancesensor_1.ColorDistanceSensor; } });
const currentsensor_1 = require("./devices/currentsensor");
Object.defineProperty(exports, "CurrentSensor", { enumerable: true, get: function () { return currentsensor_1.CurrentSensor; } });
const device_1 = require("./devices/device");
Object.defineProperty(exports, "Device", { enumerable: true, get: function () { return device_1.Device; } });
const duplotrainbasecolorsensor_1 = require("./devices/duplotrainbasecolorsensor");
Object.defineProperty(exports, "DuploTrainBaseColorSensor", { enumerable: true, get: function () { return duplotrainbasecolorsensor_1.DuploTrainBaseColorSensor; } });
const duplotrainbasemotor_1 = require("./devices/duplotrainbasemotor");
Object.defineProperty(exports, "DuploTrainBaseMotor", { enumerable: true, get: function () { return duplotrainbasemotor_1.DuploTrainBaseMotor; } });
const duplotrainbasespeaker_1 = require("./devices/duplotrainbasespeaker");
Object.defineProperty(exports, "DuploTrainBaseSpeaker", { enumerable: true, get: function () { return duplotrainbasespeaker_1.DuploTrainBaseSpeaker; } });
const duplotrainbasespeedometer_1 = require("./devices/duplotrainbasespeedometer");
Object.defineProperty(exports, "DuploTrainBaseSpeedometer", { enumerable: true, get: function () { return duplotrainbasespeedometer_1.DuploTrainBaseSpeedometer; } });
const hubled_1 = require("./devices/hubled");
Object.defineProperty(exports, "HubLED", { enumerable: true, get: function () { return hubled_1.HubLED; } });
const light_1 = require("./devices/light");
Object.defineProperty(exports, "Light", { enumerable: true, get: function () { return light_1.Light; } });
const mediumlinearmotor_1 = require("./devices/mediumlinearmotor");
Object.defineProperty(exports, "MediumLinearMotor", { enumerable: true, get: function () { return mediumlinearmotor_1.MediumLinearMotor; } });
const motionsensor_1 = require("./devices/motionsensor");
Object.defineProperty(exports, "MotionSensor", { enumerable: true, get: function () { return motionsensor_1.MotionSensor; } });
const movehubmediumlinearmotor_1 = require("./devices/movehubmediumlinearmotor");
Object.defineProperty(exports, "MoveHubMediumLinearMotor", { enumerable: true, get: function () { return movehubmediumlinearmotor_1.MoveHubMediumLinearMotor; } });
const movehubtiltsensor_1 = require("./devices/movehubtiltsensor");
Object.defineProperty(exports, "MoveHubTiltSensor", { enumerable: true, get: function () { return movehubtiltsensor_1.MoveHubTiltSensor; } });
const piezobuzzer_1 = require("./devices/piezobuzzer");
Object.defineProperty(exports, "PiezoBuzzer", { enumerable: true, get: function () { return piezobuzzer_1.PiezoBuzzer; } });
const remotecontrolbutton_1 = require("./devices/remotecontrolbutton");
Object.defineProperty(exports, "RemoteControlButton", { enumerable: true, get: function () { return remotecontrolbutton_1.RemoteControlButton; } });
const simplemediumlinearmotor_1 = require("./devices/simplemediumlinearmotor");
Object.defineProperty(exports, "SimpleMediumLinearMotor", { enumerable: true, get: function () { return simplemediumlinearmotor_1.SimpleMediumLinearMotor; } });
const techniccolorsensor_1 = require("./devices/techniccolorsensor");
Object.defineProperty(exports, "TechnicColorSensor", { enumerable: true, get: function () { return techniccolorsensor_1.TechnicColorSensor; } });
const technicdistancesensor_1 = require("./devices/technicdistancesensor");
Object.defineProperty(exports, "TechnicDistanceSensor", { enumerable: true, get: function () { return technicdistancesensor_1.TechnicDistanceSensor; } });
const technicforcesensor_1 = require("./devices/technicforcesensor");
Object.defineProperty(exports, "TechnicForceSensor", { enumerable: true, get: function () { return technicforcesensor_1.TechnicForceSensor; } });
const techniclargeangularmotor_1 = require("./devices/techniclargeangularmotor");
Object.defineProperty(exports, "TechnicLargeAngularMotor", { enumerable: true, get: function () { return techniclargeangularmotor_1.TechnicLargeAngularMotor; } });
const techniclargelinearmotor_1 = require("./devices/techniclargelinearmotor");
Object.defineProperty(exports, "TechnicLargeLinearMotor", { enumerable: true, get: function () { return techniclargelinearmotor_1.TechnicLargeLinearMotor; } });
const technicmediumangularmotor_1 = require("./devices/technicmediumangularmotor");
Object.defineProperty(exports, "TechnicMediumAngularMotor", { enumerable: true, get: function () { return technicmediumangularmotor_1.TechnicMediumAngularMotor; } });
const technicmediumhubaccelerometersensor_1 = require("./devices/technicmediumhubaccelerometersensor");
Object.defineProperty(exports, "TechnicMediumHubAccelerometerSensor", { enumerable: true, get: function () { return technicmediumhubaccelerometersensor_1.TechnicMediumHubAccelerometerSensor; } });
const technicmediumhubgyrosensor_1 = require("./devices/technicmediumhubgyrosensor");
Object.defineProperty(exports, "TechnicMediumHubGyroSensor", { enumerable: true, get: function () { return technicmediumhubgyrosensor_1.TechnicMediumHubGyroSensor; } });
const technicmediumhubtiltsensor_1 = require("./devices/technicmediumhubtiltsensor");
Object.defineProperty(exports, "TechnicMediumHubTiltSensor", { enumerable: true, get: function () { return technicmediumhubtiltsensor_1.TechnicMediumHubTiltSensor; } });
const technicxlargelinearmotor_1 = require("./devices/technicxlargelinearmotor");
Object.defineProperty(exports, "TechnicXLargeLinearMotor", { enumerable: true, get: function () { return technicxlargelinearmotor_1.TechnicXLargeLinearMotor; } });
const tiltsensor_1 = require("./devices/tiltsensor");
Object.defineProperty(exports, "TiltSensor", { enumerable: true, get: function () { return tiltsensor_1.TiltSensor; } });
const trainmotor_1 = require("./devices/trainmotor");
Object.defineProperty(exports, "TrainMotor", { enumerable: true, get: function () { return trainmotor_1.TrainMotor; } });
const voltagesensor_1 = require("./devices/voltagesensor");
Object.defineProperty(exports, "VoltageSensor", { enumerable: true, get: function () { return voltagesensor_1.VoltageSensor; } });
const tachomotor_1 = require("./devices/tachomotor");
Object.defineProperty(exports, "TachoMotor", { enumerable: true, get: function () { return tachomotor_1.TachoMotor; } });
const absolutemotor_1 = require("./devices/absolutemotor");
Object.defineProperty(exports, "AbsoluteMotor", { enumerable: true, get: function () { return absolutemotor_1.AbsoluteMotor; } });
const basicmotor_1 = require("./devices/basicmotor");
Object.defineProperty(exports, "BasicMotor", { enumerable: true, get: function () { return basicmotor_1.BasicMotor; } });
const utils_1 = require("./utils");
Object.defineProperty(exports, "isWebBluetooth", { enumerable: true, get: function () { return utils_1.isWebBluetooth; } });
exports.default = poweredup_node_1.PoweredUP;
//# sourceMappingURL=index-node.js.map