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
const Consts = __importStar(require("./consts"));
const poweredup_browser_1 = require("./poweredup-browser");
const basehub_1 = require("./hubs/basehub");
const duplotrainbase_1 = require("./hubs/duplotrainbase");
const hub_1 = require("./hubs/hub");
const mario_1 = require("./hubs/mario");
const movehub_1 = require("./hubs/movehub");
const remotecontrol_1 = require("./hubs/remotecontrol");
const technicmediumhub_1 = require("./hubs/technicmediumhub");
const wedo2smarthub_1 = require("./hubs/wedo2smarthub");
const colordistancesensor_1 = require("./devices/colordistancesensor");
const currentsensor_1 = require("./devices/currentsensor");
const device_1 = require("./devices/device");
const duplotrainbasecolorsensor_1 = require("./devices/duplotrainbasecolorsensor");
const duplotrainbasemotor_1 = require("./devices/duplotrainbasemotor");
const duplotrainbasespeaker_1 = require("./devices/duplotrainbasespeaker");
const duplotrainbasespeedometer_1 = require("./devices/duplotrainbasespeedometer");
const hubled_1 = require("./devices/hubled");
const light_1 = require("./devices/light");
const mediumlinearmotor_1 = require("./devices/mediumlinearmotor");
const motionsensor_1 = require("./devices/motionsensor");
const movehubmediumlinearmotor_1 = require("./devices/movehubmediumlinearmotor");
const movehubtiltsensor_1 = require("./devices/movehubtiltsensor");
const piezobuzzer_1 = require("./devices/piezobuzzer");
const remotecontrolbutton_1 = require("./devices/remotecontrolbutton");
const simplemediumlinearmotor_1 = require("./devices/simplemediumlinearmotor");
const techniccolorsensor_1 = require("./devices/techniccolorsensor");
const technicdistancesensor_1 = require("./devices/technicdistancesensor");
const technicforcesensor_1 = require("./devices/technicforcesensor");
const techniclargeangularmotor_1 = require("./devices/techniclargeangularmotor");
const techniclargelinearmotor_1 = require("./devices/techniclargelinearmotor");
const technicmediumangularmotor_1 = require("./devices/technicmediumangularmotor");
const technicmediumhubaccelerometersensor_1 = require("./devices/technicmediumhubaccelerometersensor");
const technicmediumhubgyrosensor_1 = require("./devices/technicmediumhubgyrosensor");
const technicmediumhubtiltsensor_1 = require("./devices/technicmediumhubtiltsensor");
const technicxlargelinearmotor_1 = require("./devices/technicxlargelinearmotor");
const tiltsensor_1 = require("./devices/tiltsensor");
const trainmotor_1 = require("./devices/trainmotor");
const voltagesensor_1 = require("./devices/voltagesensor");
const tachomotor_1 = require("./devices/tachomotor");
const absolutemotor_1 = require("./devices/absolutemotor");
const basicmotor_1 = require("./devices/basicmotor");
const utils_1 = require("./utils");
// @ts-ignore
window.PoweredUP = {
    PoweredUP: poweredup_browser_1.PoweredUP,
    BaseHub: basehub_1.BaseHub,
    WeDo2SmartHub: wedo2smarthub_1.WeDo2SmartHub,
    TechnicMediumHub: technicmediumhub_1.TechnicMediumHub,
    Hub: hub_1.Hub,
    RemoteControl: remotecontrol_1.RemoteControl,
    DuploTrainBase: duplotrainbase_1.DuploTrainBase,
    Consts,
    ColorDistanceSensor: colordistancesensor_1.ColorDistanceSensor,
    Device: device_1.Device,
    DuploTrainBaseColorSensor: duplotrainbasecolorsensor_1.DuploTrainBaseColorSensor,
    DuploTrainBaseMotor: duplotrainbasemotor_1.DuploTrainBaseMotor,
    DuploTrainBaseSpeaker: duplotrainbasespeaker_1.DuploTrainBaseSpeaker,
    DuploTrainBaseSpeedometer: duplotrainbasespeedometer_1.DuploTrainBaseSpeedometer,
    HubLED: hubled_1.HubLED,
    Light: light_1.Light,
    Mario: mario_1.Mario,
    MediumLinearMotor: mediumlinearmotor_1.MediumLinearMotor,
    MotionSensor: motionsensor_1.MotionSensor,
    MoveHub: movehub_1.MoveHub,
    MoveHubMediumLinearMotor: movehubmediumlinearmotor_1.MoveHubMediumLinearMotor,
    MoveHubTiltSensor: movehubtiltsensor_1.MoveHubTiltSensor,
    PiezoBuzzer: piezobuzzer_1.PiezoBuzzer,
    RemoteControlButton: remotecontrolbutton_1.RemoteControlButton,
    SimpleMediumLinearMotor: simplemediumlinearmotor_1.SimpleMediumLinearMotor,
    TechnicColorSensor: techniccolorsensor_1.TechnicColorSensor,
    TechnicDistanceSensor: technicdistancesensor_1.TechnicDistanceSensor,
    TechnicForceSensor: technicforcesensor_1.TechnicForceSensor,
    TechnicMediumHubAccelerometerSensor: technicmediumhubaccelerometersensor_1.TechnicMediumHubAccelerometerSensor,
    TechnicMediumHubGyroSensor: technicmediumhubgyrosensor_1.TechnicMediumHubGyroSensor,
    TechnicMediumHubTiltSensor: technicmediumhubtiltsensor_1.TechnicMediumHubTiltSensor,
    TechnicMediumAngularMotor: technicmediumangularmotor_1.TechnicMediumAngularMotor,
    TechnicLargeAngularMotor: techniclargeangularmotor_1.TechnicLargeAngularMotor,
    TechnicLargeLinearMotor: techniclargelinearmotor_1.TechnicLargeLinearMotor,
    TechnicXLargeLinearMotor: technicxlargelinearmotor_1.TechnicXLargeLinearMotor,
    TiltSensor: tiltsensor_1.TiltSensor,
    TrainMotor: trainmotor_1.TrainMotor,
    VoltageSensor: voltagesensor_1.VoltageSensor,
    CurrentSensor: currentsensor_1.CurrentSensor,
    TachoMotor: tachomotor_1.TachoMotor,
    AbsoluteMotor: absolutemotor_1.AbsoluteMotor,
    BasicMotor: basicmotor_1.BasicMotor,
    isWebBluetooth: utils_1.isWebBluetooth
};
//# sourceMappingURL=index-browser.js.map