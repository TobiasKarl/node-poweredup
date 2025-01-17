"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarioColor = exports.MarioPantsType = exports.PortInputFormatSetupSubCommand = exports.ModeInformationType = exports.HWNetworkSubFamily = exports.HWNetworkFamily = exports.HWNetWorkCommandType = exports.ErrorCode = exports.IOTypeID = exports.AlertPayload = exports.AlertOperation = exports.AlertType = exports.ActionType = exports.HubPropertyPayload = exports.HubPropertyOperation = exports.HubPropertyReference = exports.MessageType = exports.BLECharacteristic = exports.BLEService = exports.BLEManufacturerData = exports.DuploTrainBaseSound = exports.BrakingStyle = exports.ButtonState = exports.ColorNames = exports.Color = exports.DeviceTypeNames = exports.DeviceType = exports.HubTypeNames = exports.HubType = void 0;
/**
 * @typedef HubType
 * @property {number} UNKNOWN 0
 * @property {number} WEDO2_SMART_HUB 1
 * @property {number} MOVE_HUB 2
 * @property {number} POWERED_UP_HUB 3
 * @property {number} POWERED_UP_REMOTE 4
 * @property {number} DUPLO_TRAIN_HUB 5
 * @property {number} CONTROL_PLUS_HUB 6
 * @property {number} MARIO 7
 */
var HubType;
(function (HubType) {
    HubType[HubType["UNKNOWN"] = 0] = "UNKNOWN";
    HubType[HubType["WEDO2_SMART_HUB"] = 1] = "WEDO2_SMART_HUB";
    HubType[HubType["MOVE_HUB"] = 2] = "MOVE_HUB";
    HubType[HubType["HUB"] = 3] = "HUB";
    HubType[HubType["REMOTE_CONTROL"] = 4] = "REMOTE_CONTROL";
    HubType[HubType["DUPLO_TRAIN_BASE"] = 5] = "DUPLO_TRAIN_BASE";
    HubType[HubType["TECHNIC_MEDIUM_HUB"] = 6] = "TECHNIC_MEDIUM_HUB";
    HubType[HubType["MARIO"] = 7] = "MARIO";
})(HubType = exports.HubType || (exports.HubType = {}));
// tslint:disable-next-line
exports.HubTypeNames = HubType;
/**
 * @typedef DeviceType
 * @property {number} UNKNOWN 0
 * @property {number} SIMPLE_MEDIUM_LINEAR_MOTOR 1
 * @property {number} TRAIN_MOTOR 2
 * @property {number} LED_LIGHTS 8
 * @property {number} VOLTAGE 20
 * @property {number} CURRENT 21
 * @property {number} PIEZO_TONE 22
 * @property {number} RGB_LIGHT 23
 * @property {number} WEDO2_TILT 34
 * @property {number} WEDO2_DISTANCE 35
 * @property {number} COLOR_DISTANCE_SENSOR 37
 * @property {number} MEDIUM_LINEAR_MOTOR 38
 * @property {number} MOVE_HUB_MEDIUM_LINEAR_MOTOR 39
 * @property {number} BOOST_TILT 40
 * @property {number} DUPLO_TRAIN_BASE_MOTOR 41
 * @property {number} DUPLO_TRAIN_BASE_SPEAKER 42
 * @property {number} DUPLO_TRAIN_BASE_COLOR 43
 * @property {number} DUPLO_TRAIN_BASE_SPEEDOMETER 44
 * @property {number} CONTROL_PLUS_LARGE_MOTOR 46
 * @property {number} CONTROL_PLUS_XLARGE_MOTOR 47
 * @property {number} POWERED_UP_REMOTE_BUTTON 55
 * @property {number} RSSI 56
 * @property {number} CONTROL_PLUS_ACCELEROMETER 58
 * @property {number} CONTROL_PLUS_TILT 59
 */
var DeviceType;
(function (DeviceType) {
    DeviceType[DeviceType["UNKNOWN"] = 0] = "UNKNOWN";
    DeviceType[DeviceType["SIMPLE_MEDIUM_LINEAR_MOTOR"] = 1] = "SIMPLE_MEDIUM_LINEAR_MOTOR";
    DeviceType[DeviceType["TRAIN_MOTOR"] = 2] = "TRAIN_MOTOR";
    DeviceType[DeviceType["LIGHT"] = 8] = "LIGHT";
    DeviceType[DeviceType["VOLTAGE_SENSOR"] = 20] = "VOLTAGE_SENSOR";
    DeviceType[DeviceType["CURRENT_SENSOR"] = 21] = "CURRENT_SENSOR";
    DeviceType[DeviceType["PIEZO_BUZZER"] = 22] = "PIEZO_BUZZER";
    DeviceType[DeviceType["HUB_LED"] = 23] = "HUB_LED";
    DeviceType[DeviceType["TILT_SENSOR"] = 34] = "TILT_SENSOR";
    DeviceType[DeviceType["MOTION_SENSOR"] = 35] = "MOTION_SENSOR";
    DeviceType[DeviceType["COLOR_DISTANCE_SENSOR"] = 37] = "COLOR_DISTANCE_SENSOR";
    DeviceType[DeviceType["MEDIUM_LINEAR_MOTOR"] = 38] = "MEDIUM_LINEAR_MOTOR";
    DeviceType[DeviceType["MOVE_HUB_MEDIUM_LINEAR_MOTOR"] = 39] = "MOVE_HUB_MEDIUM_LINEAR_MOTOR";
    DeviceType[DeviceType["MOVE_HUB_TILT_SENSOR"] = 40] = "MOVE_HUB_TILT_SENSOR";
    DeviceType[DeviceType["DUPLO_TRAIN_BASE_MOTOR"] = 41] = "DUPLO_TRAIN_BASE_MOTOR";
    DeviceType[DeviceType["DUPLO_TRAIN_BASE_SPEAKER"] = 42] = "DUPLO_TRAIN_BASE_SPEAKER";
    DeviceType[DeviceType["DUPLO_TRAIN_BASE_COLOR_SENSOR"] = 43] = "DUPLO_TRAIN_BASE_COLOR_SENSOR";
    DeviceType[DeviceType["DUPLO_TRAIN_BASE_SPEEDOMETER"] = 44] = "DUPLO_TRAIN_BASE_SPEEDOMETER";
    DeviceType[DeviceType["TECHNIC_LARGE_LINEAR_MOTOR"] = 46] = "TECHNIC_LARGE_LINEAR_MOTOR";
    DeviceType[DeviceType["TECHNIC_XLARGE_LINEAR_MOTOR"] = 47] = "TECHNIC_XLARGE_LINEAR_MOTOR";
    DeviceType[DeviceType["TECHNIC_MEDIUM_ANGULAR_MOTOR"] = 48] = "TECHNIC_MEDIUM_ANGULAR_MOTOR";
    DeviceType[DeviceType["TECHNIC_LARGE_ANGULAR_MOTOR"] = 49] = "TECHNIC_LARGE_ANGULAR_MOTOR";
    DeviceType[DeviceType["TECHNIC_MEDIUM_HUB_GEST_SENSOR"] = 54] = "TECHNIC_MEDIUM_HUB_GEST_SENSOR";
    DeviceType[DeviceType["REMOTE_CONTROL_BUTTON"] = 55] = "REMOTE_CONTROL_BUTTON";
    DeviceType[DeviceType["REMOTE_CONTROL_RSSI"] = 56] = "REMOTE_CONTROL_RSSI";
    DeviceType[DeviceType["TECHNIC_MEDIUM_HUB_ACCELEROMETER"] = 57] = "TECHNIC_MEDIUM_HUB_ACCELEROMETER";
    DeviceType[DeviceType["TECHNIC_MEDIUM_HUB_GYRO_SENSOR"] = 58] = "TECHNIC_MEDIUM_HUB_GYRO_SENSOR";
    DeviceType[DeviceType["TECHNIC_MEDIUM_HUB_TILT_SENSOR"] = 59] = "TECHNIC_MEDIUM_HUB_TILT_SENSOR";
    DeviceType[DeviceType["TECHNIC_MEDIUM_HUB_TEMPERATURE_SENSOR"] = 60] = "TECHNIC_MEDIUM_HUB_TEMPERATURE_SENSOR";
    DeviceType[DeviceType["TECHNIC_COLOR_SENSOR"] = 61] = "TECHNIC_COLOR_SENSOR";
    DeviceType[DeviceType["TECHNIC_DISTANCE_SENSOR"] = 62] = "TECHNIC_DISTANCE_SENSOR";
    DeviceType[DeviceType["TECHNIC_FORCE_SENSOR"] = 63] = "TECHNIC_FORCE_SENSOR";
    DeviceType[DeviceType["MARIO_ACCELEROMETER"] = 71] = "MARIO_ACCELEROMETER";
    DeviceType[DeviceType["MARIO_BARCODE_SENSOR"] = 73] = "MARIO_BARCODE_SENSOR";
    DeviceType[DeviceType["MARIO_PANTS_SENSOR"] = 74] = "MARIO_PANTS_SENSOR";
    DeviceType[DeviceType["TECHNIC_MEDIUM_ANGULAR_MOTOR_GREY"] = 75] = "TECHNIC_MEDIUM_ANGULAR_MOTOR_GREY";
    DeviceType[DeviceType["TECHNIC_LARGE_ANGULAR_MOTOR_GREY"] = 76] = "TECHNIC_LARGE_ANGULAR_MOTOR_GREY";
})(DeviceType = exports.DeviceType || (exports.DeviceType = {}));
// tslint:disable-next-line
exports.DeviceTypeNames = DeviceType;
/**
 * @typedef Color
 * @property {number} BLACK 0
 * @property {number} PINK 1
 * @property {number} PURPLE 2
 * @property {number} BLUE 3
 * @property {number} LIGHT_BLUE 4
 * @property {number} CYAN 5
 * @property {number} GREEN 6
 * @property {number} YELLOW 7
 * @property {number} ORANGE 8
 * @property {number} RED 9
 * @property {number} WHITE 10
 * @property {number} NONE 255
 */
var Color;
(function (Color) {
    Color[Color["BLACK"] = 0] = "BLACK";
    Color[Color["PINK"] = 1] = "PINK";
    Color[Color["PURPLE"] = 2] = "PURPLE";
    Color[Color["BLUE"] = 3] = "BLUE";
    Color[Color["LIGHT_BLUE"] = 4] = "LIGHT_BLUE";
    Color[Color["CYAN"] = 5] = "CYAN";
    Color[Color["GREEN"] = 6] = "GREEN";
    Color[Color["YELLOW"] = 7] = "YELLOW";
    Color[Color["ORANGE"] = 8] = "ORANGE";
    Color[Color["RED"] = 9] = "RED";
    Color[Color["WHITE"] = 10] = "WHITE";
    Color[Color["NONE"] = 255] = "NONE";
})(Color = exports.Color || (exports.Color = {}));
// tslint:disable-next-line
exports.ColorNames = Color;
/**
 * @typedef ButtonState
 * @property {number} PRESSED 0
 * @property {number} RELEASED 1
 * @property {number} UP 2
 * @property {number} DOWN 3
 * @property {number} STOP 4
 */
var ButtonState;
(function (ButtonState) {
    ButtonState[ButtonState["PRESSED"] = 2] = "PRESSED";
    ButtonState[ButtonState["RELEASED"] = 0] = "RELEASED";
    ButtonState[ButtonState["UP"] = 1] = "UP";
    ButtonState[ButtonState["DOWN"] = 255] = "DOWN";
    ButtonState[ButtonState["STOP"] = 127] = "STOP";
})(ButtonState = exports.ButtonState || (exports.ButtonState = {}));
/**
 * @typedef BrakingStyle
 * @property {number} HOLD 127
 * @property {number} BRAKE 128
 */
var BrakingStyle;
(function (BrakingStyle) {
    BrakingStyle[BrakingStyle["FLOAT"] = 0] = "FLOAT";
    BrakingStyle[BrakingStyle["HOLD"] = 126] = "HOLD";
    BrakingStyle[BrakingStyle["BRAKE"] = 127] = "BRAKE";
})(BrakingStyle = exports.BrakingStyle || (exports.BrakingStyle = {}));
/**
 * @typedef DuploTrainBaseSound
 * @property {number} BRAKE 3
 * @property {number} STATION_DEPARTURE 5
 * @property {number} WATER_REFILL 7
 * @property {number} HORN 9
 * @property {number} STEAM 10
 */
var DuploTrainBaseSound;
(function (DuploTrainBaseSound) {
    DuploTrainBaseSound[DuploTrainBaseSound["BRAKE"] = 3] = "BRAKE";
    DuploTrainBaseSound[DuploTrainBaseSound["STATION_DEPARTURE"] = 5] = "STATION_DEPARTURE";
    DuploTrainBaseSound[DuploTrainBaseSound["WATER_REFILL"] = 7] = "WATER_REFILL";
    DuploTrainBaseSound[DuploTrainBaseSound["HORN"] = 9] = "HORN";
    DuploTrainBaseSound[DuploTrainBaseSound["STEAM"] = 10] = "STEAM";
})(DuploTrainBaseSound = exports.DuploTrainBaseSound || (exports.DuploTrainBaseSound = {}));
var BLEManufacturerData;
(function (BLEManufacturerData) {
    BLEManufacturerData[BLEManufacturerData["DUPLO_TRAIN_BASE_ID"] = 32] = "DUPLO_TRAIN_BASE_ID";
    BLEManufacturerData[BLEManufacturerData["MOVE_HUB_ID"] = 64] = "MOVE_HUB_ID";
    BLEManufacturerData[BLEManufacturerData["HUB_ID"] = 65] = "HUB_ID";
    BLEManufacturerData[BLEManufacturerData["REMOTE_CONTROL_ID"] = 66] = "REMOTE_CONTROL_ID";
    BLEManufacturerData[BLEManufacturerData["MARIO_ID"] = 67] = "MARIO_ID";
    BLEManufacturerData[BLEManufacturerData["TECHNIC_MEDIUM_HUB"] = 128] = "TECHNIC_MEDIUM_HUB";
})(BLEManufacturerData = exports.BLEManufacturerData || (exports.BLEManufacturerData = {}));
var BLEService;
(function (BLEService) {
    BLEService["WEDO2_SMART_HUB"] = "00001523-1212-efde-1523-785feabcd123";
    BLEService["WEDO2_SMART_HUB_2"] = "00004f0e-1212-efde-1523-785feabcd123";
    BLEService["WEDO2_SMART_HUB_3"] = "2a19";
    BLEService["WEDO2_SMART_HUB_4"] = "180f";
    BLEService["WEDO2_SMART_HUB_5"] = "180a";
    BLEService["LPF2_HUB"] = "00001623-1212-efde-1623-785feabcd123";
})(BLEService = exports.BLEService || (exports.BLEService = {}));
var BLECharacteristic;
(function (BLECharacteristic) {
    BLECharacteristic["WEDO2_BATTERY"] = "2a19";
    BLECharacteristic["WEDO2_FIRMWARE_REVISION"] = "2a26";
    BLECharacteristic["WEDO2_BUTTON"] = "00001526-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_PORT_TYPE"] = "00001527-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_LOW_VOLTAGE_ALERT"] = "00001528-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_HIGH_CURRENT_ALERT"] = "00001529-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_LOW_SIGNAL_ALERT"] = "0000152a-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_DISCONNECT"] = "0000152b-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_SENSOR_VALUE"] = "00001560-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_VALUE_FORMAT"] = "00001561-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_PORT_TYPE_WRITE"] = "00001563-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_MOTOR_VALUE_WRITE"] = "00001565-1212-efde-1523-785feabcd123";
    BLECharacteristic["WEDO2_NAME_ID"] = "00001524-1212-efde-1523-785feabcd123";
    BLECharacteristic["LPF2_ALL"] = "00001624-1212-efde-1623-785feabcd123";
})(BLECharacteristic = exports.BLECharacteristic || (exports.BLECharacteristic = {}));
/**
 * @typedef MessageType
 * @property {number} HUB_PROPERTIES 0x01
 * @property {number} HUB_ACTIONS 0x02
 * @property {number} HUB_ALERTS 0x03
 * @property {number} HUB_ATTACHED_IO 0x04
 * @property {number} GENERIC_ERROR_MESSAGES 0x05
 * @property {number} HW_NETWORK_COMMANDS 0x08
 * @property {number} FW_UPDATE_GO_INTO_BOOT_MODE 0x10
 * @property {number} FW_UPDATE_LOCK_MEMORY 0x11
 * @property {number} FW_UPDATE_LOCK_STATUS_REQUEST 0x12
 * @property {number} FW_LOCK_STATUS 0x13
 * @property {number} PORT_INFORMATION_REQUEST 0x21
 * @property {number} PORT_MODE_INFORMATION_REQUEST 0x22
 * @property {number} PORT_INPUT_FORMAT_SETUP_SINGLE 0x41
 * @property {number} PORT_INPUT_FORMAT_SETUP_COMBINEDMODE 0x42
 * @property {number} PORT_INFORMATION 0x43
 * @property {number} PORT_MODE_INFORMATION 0x44
 * @property {number} PORT_VALUE_SINGLE 0x45
 * @property {number} PORT_VALUE_COMBINEDMODE 0x46
 * @property {number} PORT_INPUT_FORMAT_SINGLE 0x47
 * @property {number} PORT_INPUT_FORMAT_COMBINEDMODE 0x48
 * @property {number} VIRTUAL_PORT_SETUP 0x61
 * @property {number} PORT_OUTPUT_COMMAND 0x81
 * @property {number} PORT_OUTPUT_COMMAND_FEEDBACK 0x82
 * @description https://lego.github.io/lego-ble-wireless-protocol-docs/index.html#message-types
 */
var MessageType;
(function (MessageType) {
    MessageType[MessageType["HUB_PROPERTIES"] = 1] = "HUB_PROPERTIES";
    MessageType[MessageType["HUB_ACTIONS"] = 2] = "HUB_ACTIONS";
    MessageType[MessageType["HUB_ALERTS"] = 3] = "HUB_ALERTS";
    MessageType[MessageType["HUB_ATTACHED_IO"] = 4] = "HUB_ATTACHED_IO";
    MessageType[MessageType["GENERIC_ERROR_MESSAGES"] = 5] = "GENERIC_ERROR_MESSAGES";
    MessageType[MessageType["HW_NETWORK_COMMANDS"] = 8] = "HW_NETWORK_COMMANDS";
    MessageType[MessageType["FW_UPDATE_GO_INTO_BOOT_MODE"] = 16] = "FW_UPDATE_GO_INTO_BOOT_MODE";
    MessageType[MessageType["FW_UPDATE_LOCK_MEMORY"] = 17] = "FW_UPDATE_LOCK_MEMORY";
    MessageType[MessageType["FW_UPDATE_LOCK_STATUS_REQUEST"] = 18] = "FW_UPDATE_LOCK_STATUS_REQUEST";
    MessageType[MessageType["FW_LOCK_STATUS"] = 19] = "FW_LOCK_STATUS";
    MessageType[MessageType["PORT_INFORMATION_REQUEST"] = 33] = "PORT_INFORMATION_REQUEST";
    MessageType[MessageType["PORT_MODE_INFORMATION_REQUEST"] = 34] = "PORT_MODE_INFORMATION_REQUEST";
    MessageType[MessageType["PORT_INPUT_FORMAT_SETUP_SINGLE"] = 65] = "PORT_INPUT_FORMAT_SETUP_SINGLE";
    MessageType[MessageType["PORT_INPUT_FORMAT_SETUP_COMBINEDMODE"] = 66] = "PORT_INPUT_FORMAT_SETUP_COMBINEDMODE";
    MessageType[MessageType["PORT_INFORMATION"] = 67] = "PORT_INFORMATION";
    MessageType[MessageType["PORT_MODE_INFORMATION"] = 68] = "PORT_MODE_INFORMATION";
    MessageType[MessageType["PORT_VALUE_SINGLE"] = 69] = "PORT_VALUE_SINGLE";
    MessageType[MessageType["PORT_VALUE_COMBINEDMODE"] = 70] = "PORT_VALUE_COMBINEDMODE";
    MessageType[MessageType["PORT_INPUT_FORMAT_SINGLE"] = 71] = "PORT_INPUT_FORMAT_SINGLE";
    MessageType[MessageType["PORT_INPUT_FORMAT_COMBINEDMODE"] = 72] = "PORT_INPUT_FORMAT_COMBINEDMODE";
    MessageType[MessageType["VIRTUAL_PORT_SETUP"] = 97] = "VIRTUAL_PORT_SETUP";
    MessageType[MessageType["PORT_OUTPUT_COMMAND"] = 129] = "PORT_OUTPUT_COMMAND";
    MessageType[MessageType["PORT_OUTPUT_COMMAND_FEEDBACK"] = 130] = "PORT_OUTPUT_COMMAND_FEEDBACK";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
/**
 * @typedef HubPropertyReference
 * @param {number} ADVERTISING_NAME 0x01
 * @param {number} BUTTON 0x02
 * @param {number} FW_VERSION 0x03
 * @param {number} HW_VERSION 0x04
 * @param {number} RSSI 0x05
 * @param {number} BATTERY_VOLTAGE 0x06
 * @param {number} BATTERY_TYPE 0x07
 * @param {number} MANUFACTURER_NAME 0x08
 * @param {number} RADIO_FIRMWARE_VERSION 0x09
 * @param {number} LEGO_WIRELESS_PROTOCOL_VERSION 0x0A
 * @param {number} SYSTEM_TYPE_ID 0x0B
 * @param {number} HW_NETWORK_ID 0x0C
 * @param {number} PRIMARY_MAC_ADDRESS 0x0D
 * @param {number} SECONDARY_MAC_ADDRESS 0x0E
 * @param {number} HARDWARE_NETWORK_FAMILY 0x0F
 * @description https://lego.github.io/lego-ble-wireless-protocol-docs/index.html#hub-property-reference
 */
var HubPropertyReference;
(function (HubPropertyReference) {
    HubPropertyReference[HubPropertyReference["ADVERTISING_NAME"] = 1] = "ADVERTISING_NAME";
    HubPropertyReference[HubPropertyReference["BUTTON"] = 2] = "BUTTON";
    HubPropertyReference[HubPropertyReference["FW_VERSION"] = 3] = "FW_VERSION";
    HubPropertyReference[HubPropertyReference["HW_VERSION"] = 4] = "HW_VERSION";
    HubPropertyReference[HubPropertyReference["RSSI"] = 5] = "RSSI";
    HubPropertyReference[HubPropertyReference["BATTERY_VOLTAGE"] = 6] = "BATTERY_VOLTAGE";
    HubPropertyReference[HubPropertyReference["BATTERY_TYPE"] = 7] = "BATTERY_TYPE";
    HubPropertyReference[HubPropertyReference["MANUFACTURER_NAME"] = 8] = "MANUFACTURER_NAME";
    HubPropertyReference[HubPropertyReference["RADIO_FIRMWARE_VERSION"] = 9] = "RADIO_FIRMWARE_VERSION";
    HubPropertyReference[HubPropertyReference["LEGO_WIRELESS_PROTOCOL_VERSION"] = 10] = "LEGO_WIRELESS_PROTOCOL_VERSION";
    HubPropertyReference[HubPropertyReference["SYSTEM_TYPE_ID"] = 11] = "SYSTEM_TYPE_ID";
    HubPropertyReference[HubPropertyReference["HW_NETWORK_ID"] = 12] = "HW_NETWORK_ID";
    HubPropertyReference[HubPropertyReference["PRIMARY_MAC_ADDRESS"] = 13] = "PRIMARY_MAC_ADDRESS";
    HubPropertyReference[HubPropertyReference["SECONDARY_MAC_ADDRESS"] = 14] = "SECONDARY_MAC_ADDRESS";
    HubPropertyReference[HubPropertyReference["HARDWARE_NETWORK_FAMILY"] = 15] = "HARDWARE_NETWORK_FAMILY";
})(HubPropertyReference = exports.HubPropertyReference || (exports.HubPropertyReference = {}));
/**
 * @typedef HubPropertyOperation
 * @param {number} SET_DOWNSTREAM 0x01
 * @param {number} ENABLE_UPDATES_DOWNSTREAM 0x02
 * @param {number} DISABLE_UPDATES_DOWNSTREAM 0x03
 * @param {number} RESET_DOWNSTREAM 0x04
 * @param {number} REQUEST_UPDATE_DOWNSTREAM 0x05
 * @param {number} UPDATE_UPSTREAM 0x06
 * @description https://lego.github.io/lego-ble-wireless-protocol-docs/index.html#hub-property-reference
 */
var HubPropertyOperation;
(function (HubPropertyOperation) {
    HubPropertyOperation[HubPropertyOperation["SET_DOWNSTREAM"] = 1] = "SET_DOWNSTREAM";
    HubPropertyOperation[HubPropertyOperation["ENABLE_UPDATES_DOWNSTREAM"] = 2] = "ENABLE_UPDATES_DOWNSTREAM";
    HubPropertyOperation[HubPropertyOperation["DISABLE_UPDATES_DOWNSTREAM"] = 3] = "DISABLE_UPDATES_DOWNSTREAM";
    HubPropertyOperation[HubPropertyOperation["RESET_DOWNSTREAM"] = 4] = "RESET_DOWNSTREAM";
    HubPropertyOperation[HubPropertyOperation["REQUEST_UPDATE_DOWNSTREAM"] = 5] = "REQUEST_UPDATE_DOWNSTREAM";
    HubPropertyOperation[HubPropertyOperation["UPDATE_UPSTREAM"] = 6] = "UPDATE_UPSTREAM";
})(HubPropertyOperation = exports.HubPropertyOperation || (exports.HubPropertyOperation = {}));
/**
 * @typedef HubPropertyPayload
 * @param {number} ADVERTISING_NAME 0x01
 * @param {number} BUTTON_STATE 0x02
 * @param {number} FW_VERSION 0x03
 * @param {number} HW_VERSION 0x04
 * @param {number} RSSI 0x05
 * @param {number} BATTERY_VOLTAGE 0x06
 * @param {number} BATTERY_TYPE 0x07
 * @param {number} MANUFACTURER_NAME 0x08
 * @param {number} RADIO_FIRMWARE_VERSION 0x09
 * @param {number} LWP_PROTOCOL_VERSION 0x0A
 * @param {number} SYSTEM_TYPE_ID 0x0B
 * @param {number} HW_NETWORK_ID 0x0C
 * @param {number} PRIMARY_MAC_ADDRESS 0x0D
 * @param {number} SECONDARY_MAC_ADDRESS 0x0E
 * @param {number} HW_NETWORK_FAMILY 0x0F
 * @description https://lego.github.io/lego-ble-wireless-protocol-docs/index.html#hub-property-reference
 */
var HubPropertyPayload;
(function (HubPropertyPayload) {
    HubPropertyPayload[HubPropertyPayload["ADVERTISING_NAME"] = 1] = "ADVERTISING_NAME";
    HubPropertyPayload[HubPropertyPayload["BUTTON_STATE"] = 2] = "BUTTON_STATE";
    HubPropertyPayload[HubPropertyPayload["FW_VERSION"] = 3] = "FW_VERSION";
    HubPropertyPayload[HubPropertyPayload["HW_VERSION"] = 4] = "HW_VERSION";
    HubPropertyPayload[HubPropertyPayload["RSSI"] = 5] = "RSSI";
    HubPropertyPayload[HubPropertyPayload["BATTERY_VOLTAGE"] = 6] = "BATTERY_VOLTAGE";
    HubPropertyPayload[HubPropertyPayload["BATTERY_TYPE"] = 7] = "BATTERY_TYPE";
    HubPropertyPayload[HubPropertyPayload["MANUFACTURER_NAME"] = 8] = "MANUFACTURER_NAME";
    HubPropertyPayload[HubPropertyPayload["RADIO_FIRMWARE_VERSION"] = 9] = "RADIO_FIRMWARE_VERSION";
    HubPropertyPayload[HubPropertyPayload["LWP_PROTOCOL_VERSION"] = 10] = "LWP_PROTOCOL_VERSION";
    HubPropertyPayload[HubPropertyPayload["SYSTEM_TYPE_ID"] = 11] = "SYSTEM_TYPE_ID";
    HubPropertyPayload[HubPropertyPayload["HW_NETWORK_ID"] = 12] = "HW_NETWORK_ID";
    HubPropertyPayload[HubPropertyPayload["PRIMARY_MAC_ADDRESS"] = 13] = "PRIMARY_MAC_ADDRESS";
    HubPropertyPayload[HubPropertyPayload["SECONDARY_MAC_ADDRESS"] = 14] = "SECONDARY_MAC_ADDRESS";
    HubPropertyPayload[HubPropertyPayload["HW_NETWORK_FAMILY"] = 15] = "HW_NETWORK_FAMILY";
})(HubPropertyPayload = exports.HubPropertyPayload || (exports.HubPropertyPayload = {}));
/**
 * @typedef ActionType
 * @param {number} SWITCH_OFF_HUB 0x01
 * @param {number} DISCONNECT 0x02
 * @param {number} VCC_PORT_CONTROL_ON 0x03
 * @param {number} VCC_PORT_CONTROL_OFF 0x04
 * @param {number} ACTIVATE_BUSY_INDICATION 0x05
 * @param {number} RESET_BUSY_INDICATION 0x06
 * @param {number} SHUTDOWN 0x2F
 * @param {number} HUB_WILL_SWITCH_OFF 0x30
 * @param {number} HUB_WILL_DISCONNECT 0x31
 * @param {number} HUB_WILL_GO_INTO_BOOT_MODE 0x32
 * @description https://lego.github.io/lego-ble-wireless-protocol-docs/index.html#action-types
 */
var ActionType;
(function (ActionType) {
    ActionType[ActionType["SWITCH_OFF_HUB"] = 1] = "SWITCH_OFF_HUB";
    ActionType[ActionType["DISCONNECT"] = 2] = "DISCONNECT";
    ActionType[ActionType["VCC_PORT_CONTROL_ON"] = 3] = "VCC_PORT_CONTROL_ON";
    ActionType[ActionType["VCC_PORT_CONTROL_OFF"] = 4] = "VCC_PORT_CONTROL_OFF";
    ActionType[ActionType["ACTIVATE_BUSY_INDICATION"] = 5] = "ACTIVATE_BUSY_INDICATION";
    ActionType[ActionType["RESET_BUSY_INDICATION"] = 6] = "RESET_BUSY_INDICATION";
    ActionType[ActionType["SHUTDOWN"] = 47] = "SHUTDOWN";
    ActionType[ActionType["HUB_WILL_SWITCH_OFF"] = 48] = "HUB_WILL_SWITCH_OFF";
    ActionType[ActionType["HUB_WILL_DISCONNECT"] = 49] = "HUB_WILL_DISCONNECT";
    ActionType[ActionType["HUB_WILL_GO_INTO_BOOT_MODE"] = 50] = "HUB_WILL_GO_INTO_BOOT_MODE";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
/**
 * @typedef AlertType
 * @param {number} LOW_VOLTAGE 0x01
 * @param {number} HIGH_CURRENT 0x02
 * @param {number} LOW_SIGNAL_STRENGTH 0x03
 * @param {number} OVER_POWER_CONDITION 0x04
 * @description https://lego.github.io/lego-ble-wireless-protocol-docs/index.html#alert-type
 */
var AlertType;
(function (AlertType) {
    AlertType[AlertType["LOW_VOLTAGE"] = 1] = "LOW_VOLTAGE";
    AlertType[AlertType["HIGH_CURRENT"] = 2] = "HIGH_CURRENT";
    AlertType[AlertType["LOW_SIGNAL_STRENGTH"] = 3] = "LOW_SIGNAL_STRENGTH";
    AlertType[AlertType["OVER_POWER_CONDITION"] = 4] = "OVER_POWER_CONDITION";
})(AlertType = exports.AlertType || (exports.AlertType = {}));
/**
 * @typedef AlertOperation
 * @param {number} ENABLE_UPDATE 0x01
 * @param {number} DISABLE_UPDATE 0x02
 * @param {number} REQUEST_UPDATE 0x03
 * @param {number} UPDATE 0x04
 * @description https://lego.github.io/lego-ble-wireless-protocol-docs/index.html#alert-operation
 */
var AlertOperation;
(function (AlertOperation) {
    AlertOperation[AlertOperation["LOW_VOLTAGE"] = 1] = "LOW_VOLTAGE";
    AlertOperation[AlertOperation["HIGH_CURRENT"] = 2] = "HIGH_CURRENT";
    AlertOperation[AlertOperation["LOW_SIGNAL_STRENGTH"] = 3] = "LOW_SIGNAL_STRENGTH";
    AlertOperation[AlertOperation["OVER_POWER_CONDITION"] = 4] = "OVER_POWER_CONDITION";
})(AlertOperation = exports.AlertOperation || (exports.AlertOperation = {}));
/**
 * @typedef AlertPayload
 * @param {number} STATUS_OK 0x00
 * @param {number} ALERT 0xFF
 * @description https://lego.github.io/lego-ble-wireless-protocol-docs/index.html#alert-payload
 */
var AlertPayload;
(function (AlertPayload) {
    AlertPayload[AlertPayload["STATUS_OK"] = 0] = "STATUS_OK";
    AlertPayload[AlertPayload["ALERT"] = 255] = "ALERT";
})(AlertPayload = exports.AlertPayload || (exports.AlertPayload = {}));
/**
 * @typedef Event
 * @param {number} DETACHED_IO 0x00
 * @param {number} ATTACHED_IO 0x01
 * @param {number} ATTACHED_VIRTUAL_IO 0x02
 * @description https://lego.github.io/lego-ble-wireless-protocol-docs/index.html#event
 */
(function (AlertPayload) {
    AlertPayload[AlertPayload["DETACHED_IO"] = 0] = "DETACHED_IO";
    AlertPayload[AlertPayload["ATTACHED_IO"] = 1] = "ATTACHED_IO";
    AlertPayload[AlertPayload["ATTACHED_VIRTUAL_IO"] = 2] = "ATTACHED_VIRTUAL_IO";
})(AlertPayload = exports.AlertPayload || (exports.AlertPayload = {}));
/**
 * @typedef IOTypeID
 * @param {number} MOTOR 0x0001
 * @param {number} SYSTEM_TRAIN_MOTOR 0x0002
 * @param {number} BUTTON 0x0005
 * @param {number} LED_LIGHT 0x0008
 * @param {number} VOLTAGE 0x0014
 * @param {number} CURRENT 0x0015
 * @param {number} PIEZO_TONE_SOUND 0x0016
 * @param {number} RGB_LIGHT 0x0017
 * @param {number} EXTERNAL_TILT_SENSOR 0x0022
 * @param {number} MOTION_SENSOR 0x0023
 * @param {number} VISION_SENSOR 0x0025
 * @param {number} EXTERNAL_MOTOR 0x0026
 * @param {number} INTERNAL_MOTOR 0x0027
 * @param {number} INTERNAL_TILT 0x0028
 * @description https://lego.github.io/lego-ble-wireless-protocol-docs/index.html#io-type-id
 */
var IOTypeID;
(function (IOTypeID) {
    IOTypeID[IOTypeID["MOTOR"] = 1] = "MOTOR";
    IOTypeID[IOTypeID["SYSTEM_TRAIN_MOTOR"] = 2] = "SYSTEM_TRAIN_MOTOR";
    IOTypeID[IOTypeID["BUTTON"] = 5] = "BUTTON";
    IOTypeID[IOTypeID["LED_LIGHT"] = 8] = "LED_LIGHT";
    IOTypeID[IOTypeID["VOLTAGE"] = 20] = "VOLTAGE";
    IOTypeID[IOTypeID["CURRENT"] = 21] = "CURRENT";
    IOTypeID[IOTypeID["PIEZO_TONE_SOUND"] = 22] = "PIEZO_TONE_SOUND";
    IOTypeID[IOTypeID["RGB_LIGHT"] = 23] = "RGB_LIGHT";
    IOTypeID[IOTypeID["EXTERNAL_TILT_SENSOR"] = 34] = "EXTERNAL_TILT_SENSOR";
    IOTypeID[IOTypeID["MOTION_SENSOR"] = 35] = "MOTION_SENSOR";
    IOTypeID[IOTypeID["VISION_SENSOR"] = 37] = "VISION_SENSOR";
    IOTypeID[IOTypeID["EXTERNAL_MOTOR"] = 38] = "EXTERNAL_MOTOR";
    IOTypeID[IOTypeID["INTERNAL_MOTOR"] = 39] = "INTERNAL_MOTOR";
    IOTypeID[IOTypeID["INTERNAL_TILT"] = 40] = "INTERNAL_TILT";
})(IOTypeID = exports.IOTypeID || (exports.IOTypeID = {}));
/**
 * @typedef ErrorCode
 * @param {number} ACK 0x01
 * @param {number} MACK 0x02
 * @param {number} BUFFER_OVERFLOW 0x03
 * @param {number} TIMEOUT 0x04
 * @param {number} COMMAND_NOT_RECOGNIZED 0x05
 * @param {number} INVALID_USE 0x06
 * @param {number} OVERCURRENT 0x07
 * @param {number} INTERNAL_ERROR 0x08
 * @description https://lego.github.io/lego-ble-wireless-protocol-docs/index.html#error-codes
 */
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["ACK"] = 1] = "ACK";
    ErrorCode[ErrorCode["MACK"] = 2] = "MACK";
    ErrorCode[ErrorCode["BUFFER_OVERFLOW"] = 3] = "BUFFER_OVERFLOW";
    ErrorCode[ErrorCode["TIMEOUT"] = 4] = "TIMEOUT";
    ErrorCode[ErrorCode["COMMAND_NOT_RECOGNIZED"] = 5] = "COMMAND_NOT_RECOGNIZED";
    ErrorCode[ErrorCode["INVALID_USE"] = 6] = "INVALID_USE";
    ErrorCode[ErrorCode["OVERCURRENT"] = 7] = "OVERCURRENT";
    ErrorCode[ErrorCode["INTERNAL_ERROR"] = 8] = "INTERNAL_ERROR";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
/**
 * @typedef HWNetWorkCommandType
 * @param {number} CONNECTION_REQUEST 0x02
 * @param {number} FAMILY_REQUEST 0x03
 * @param {number} FAMILY_SET 0x04
 * @param {number} JOIN_DENIED 0x05
 * @param {number} GET_FAMILY 0x06
 * @param {number} FAMILY 0x07
 * @param {number} GET_SUBFAMILY 0x08
 * @param {number} SUBFAMILY 0x09
 * @param {number} SUBFAMILY_SET 0x0A
 * @param {number} GET_EXTENDED_FAMILY 0x0B
 * @param {number} EXTENDED_FAMILY 0x0C
 * @param {number} EXTENDED_FAMILY_SET 0x0D
 * @param {number} RESET_LONG_PRESS_TIMING 0x0E
 * @description https://lego.github.io/lego-ble-wireless-protocol-docs/index.html#h-w-network-command-type
 */
var HWNetWorkCommandType;
(function (HWNetWorkCommandType) {
    HWNetWorkCommandType[HWNetWorkCommandType["CONNECTION_REQUEST"] = 2] = "CONNECTION_REQUEST";
    HWNetWorkCommandType[HWNetWorkCommandType["FAMILY_REQUEST"] = 3] = "FAMILY_REQUEST";
    HWNetWorkCommandType[HWNetWorkCommandType["FAMILY_SET"] = 4] = "FAMILY_SET";
    HWNetWorkCommandType[HWNetWorkCommandType["JOIN_DENIED"] = 5] = "JOIN_DENIED";
    HWNetWorkCommandType[HWNetWorkCommandType["GET_FAMILY"] = 6] = "GET_FAMILY";
    HWNetWorkCommandType[HWNetWorkCommandType["FAMILY"] = 7] = "FAMILY";
    HWNetWorkCommandType[HWNetWorkCommandType["GET_SUBFAMILY"] = 8] = "GET_SUBFAMILY";
    HWNetWorkCommandType[HWNetWorkCommandType["SUBFAMILY"] = 9] = "SUBFAMILY";
    HWNetWorkCommandType[HWNetWorkCommandType["SUBFAMILY_SET"] = 10] = "SUBFAMILY_SET";
    HWNetWorkCommandType[HWNetWorkCommandType["GET_EXTENDED_FAMILY"] = 11] = "GET_EXTENDED_FAMILY";
    HWNetWorkCommandType[HWNetWorkCommandType["EXTENDED_FAMILY"] = 12] = "EXTENDED_FAMILY";
    HWNetWorkCommandType[HWNetWorkCommandType["EXTENDED_FAMILY_SET"] = 13] = "EXTENDED_FAMILY_SET";
    HWNetWorkCommandType[HWNetWorkCommandType["RESET_LONG_PRESS_TIMING"] = 14] = "RESET_LONG_PRESS_TIMING";
})(HWNetWorkCommandType = exports.HWNetWorkCommandType || (exports.HWNetWorkCommandType = {}));
/**
 * @typedef HWNetworkFamily
 * @param {number} GREEN 0x01
 * @param {number} YELLOW 0x02
 * @param {number} RED 0x03
 * @param {number} BLUE 0x04
 * @param {number} PURPLE 0x05
 * @param {number} LIGHT_BLUE 0x06
 * @param {number} TEAL 0x07
 * @param {number} PINK 0x08
 * @param {number} WHITE 0x00
 * @description https://lego.github.io/lego-ble-wireless-protocol-docs/index.html#h-w-network-family
 */
var HWNetworkFamily;
(function (HWNetworkFamily) {
    HWNetworkFamily[HWNetworkFamily["GREEN"] = 1] = "GREEN";
    HWNetworkFamily[HWNetworkFamily["YELLOW"] = 2] = "YELLOW";
    HWNetworkFamily[HWNetworkFamily["RED"] = 3] = "RED";
    HWNetworkFamily[HWNetworkFamily["BLUE"] = 4] = "BLUE";
    HWNetworkFamily[HWNetworkFamily["PURPLE"] = 5] = "PURPLE";
    HWNetworkFamily[HWNetworkFamily["LIGHT_BLUE"] = 6] = "LIGHT_BLUE";
    HWNetworkFamily[HWNetworkFamily["TEAL"] = 7] = "TEAL";
    HWNetworkFamily[HWNetworkFamily["PINK"] = 8] = "PINK";
    HWNetworkFamily[HWNetworkFamily["WHITE"] = 0] = "WHITE";
})(HWNetworkFamily = exports.HWNetworkFamily || (exports.HWNetworkFamily = {}));
/**
 * @typedef HWNetworkSubFamily
 * @param {number} ONE_FLASH 0x01
 * @param {number} TWO_FLASHES 0x02
 * @param {number} THREE_FLASHES 0x03
 * @param {number} FOUR_FLASHES 0x04
 * @param {number} FIVE_FLASHES 0x05
 * @param {number} SIX_FLASHES 0x06
 * @param {number} SEVEN_FLASHES 0x07
 * @description https://lego.github.io/lego-ble-wireless-protocol-docs/index.html#h-w-network-sub-family
 */
var HWNetworkSubFamily;
(function (HWNetworkSubFamily) {
    HWNetworkSubFamily[HWNetworkSubFamily["ONE_FLASH"] = 1] = "ONE_FLASH";
    HWNetworkSubFamily[HWNetworkSubFamily["TWO_FLASHES"] = 2] = "TWO_FLASHES";
    HWNetworkSubFamily[HWNetworkSubFamily["THREE_FLASHES"] = 3] = "THREE_FLASHES";
    HWNetworkSubFamily[HWNetworkSubFamily["FOUR_FLASHES"] = 4] = "FOUR_FLASHES";
    HWNetworkSubFamily[HWNetworkSubFamily["FIVE_FLASHES"] = 5] = "FIVE_FLASHES";
    HWNetworkSubFamily[HWNetworkSubFamily["SIX_FLASHES"] = 6] = "SIX_FLASHES";
    HWNetworkSubFamily[HWNetworkSubFamily["SEVEN_FLASHES"] = 7] = "SEVEN_FLASHES";
})(HWNetworkSubFamily = exports.HWNetworkSubFamily || (exports.HWNetworkSubFamily = {}));
/**
 * @typedef ModeInformationType
 * @param {number} NAME 0x00
 * @param {number} RAW 0x01
 * @param {number} PCT 0x02
 * @param {number} SI 0x03
 * @param {number} SYMBOL 0x04
 * @param {number} MAPPING 0x05
 * @param {number} USED_INTERNALLY 0x06
 * @param {number} MOTOR_BIAS 0x07
 * @param {number} CAPABILITY_BITS 0x08
 * @param {number} VALUE_FORMAT 0x80
 * @description https://lego.github.io/lego-ble-wireless-protocol-docs/index.html#mode-information-types
 */
var ModeInformationType;
(function (ModeInformationType) {
    ModeInformationType[ModeInformationType["NAME"] = 0] = "NAME";
    ModeInformationType[ModeInformationType["RAW"] = 1] = "RAW";
    ModeInformationType[ModeInformationType["PCT"] = 2] = "PCT";
    ModeInformationType[ModeInformationType["SI"] = 3] = "SI";
    ModeInformationType[ModeInformationType["SYMBOL"] = 4] = "SYMBOL";
    ModeInformationType[ModeInformationType["MAPPING"] = 5] = "MAPPING";
    ModeInformationType[ModeInformationType["USED_INTERNALLY"] = 6] = "USED_INTERNALLY";
    ModeInformationType[ModeInformationType["MOTOR_BIAS"] = 7] = "MOTOR_BIAS";
    ModeInformationType[ModeInformationType["CAPABILITY_BITS"] = 8] = "CAPABILITY_BITS";
    ModeInformationType[ModeInformationType["VALUE_FORMAT"] = 128] = "VALUE_FORMAT";
})(ModeInformationType = exports.ModeInformationType || (exports.ModeInformationType = {}));
/**
 * @typedef PortInputFormatSetupSubCommand
 * @param {number} SET_MODEANDDATASET_COMBINATIONS 0x01
 * @param {number} LOCK_LPF2_DEVICE_FOR_SETUP 0x02
 * @param {number} UNLOCKANDSTARTWITHMULTIUPDATEENABLED 0x03
 * @param {number} UNLOCKANDSTARTWITHMULTIUPDATEDISABLED 0x04
 * @param {number} NOT_USED 0x05
 * @param {number} RESET_SENSOR 0x06
 * @description https://lego.github.io/lego-ble-wireless-protocol-docs/index.html#port-input-format-setup-sub-commands
 */
var PortInputFormatSetupSubCommand;
(function (PortInputFormatSetupSubCommand) {
    PortInputFormatSetupSubCommand[PortInputFormatSetupSubCommand["SET_MODEANDDATASET_COMBINATIONS"] = 1] = "SET_MODEANDDATASET_COMBINATIONS";
    PortInputFormatSetupSubCommand[PortInputFormatSetupSubCommand["LOCK_LPF2_DEVICE_FOR_SETUP"] = 2] = "LOCK_LPF2_DEVICE_FOR_SETUP";
    PortInputFormatSetupSubCommand[PortInputFormatSetupSubCommand["UNLOCKANDSTARTWITHMULTIUPDATEENABLED"] = 3] = "UNLOCKANDSTARTWITHMULTIUPDATEENABLED";
    PortInputFormatSetupSubCommand[PortInputFormatSetupSubCommand["UNLOCKANDSTARTWITHMULTIUPDATEDISABLED"] = 4] = "UNLOCKANDSTARTWITHMULTIUPDATEDISABLED";
    PortInputFormatSetupSubCommand[PortInputFormatSetupSubCommand["NOT_USED"] = 5] = "NOT_USED";
    PortInputFormatSetupSubCommand[PortInputFormatSetupSubCommand["RESET_SENSOR"] = 6] = "RESET_SENSOR";
})(PortInputFormatSetupSubCommand = exports.PortInputFormatSetupSubCommand || (exports.PortInputFormatSetupSubCommand = {}));
/**
 * @typedef MarioPantsType
 * @param {number} NONE 0x00
 * @param {number} PROPELLER 0x06
 * @param {number} CAT 0x11
 * @param {number} FIRE 0x12
 * @param {number} NORMAL 0x21
 * @param {number} BUILDER 0x22
 */
var MarioPantsType;
(function (MarioPantsType) {
    MarioPantsType[MarioPantsType["NONE"] = 0] = "NONE";
    MarioPantsType[MarioPantsType["PROPELLER"] = 6] = "PROPELLER";
    MarioPantsType[MarioPantsType["CAT"] = 17] = "CAT";
    MarioPantsType[MarioPantsType["FIRE"] = 18] = "FIRE";
    MarioPantsType[MarioPantsType["NORMAL"] = 33] = "NORMAL";
    MarioPantsType[MarioPantsType["BUILDER"] = 34] = "BUILDER";
})(MarioPantsType = exports.MarioPantsType || (exports.MarioPantsType = {}));
/**
 * @typedef MarioColor
 * @param {number} WHITE 0x1300
 * @param {number} RED 0x1500
 * @param {number} BLUE 0x1700
 * @param {number} YELLOW 0x1800
 * @param {number} BLACK 0x1a00
 * @param {number} GREEN 0x2500
 * @param {number} BROWN 0x6a00
 * @param {number} CYAN 0x4201
 */
var MarioColor;
(function (MarioColor) {
    MarioColor[MarioColor["WHITE"] = 4864] = "WHITE";
    MarioColor[MarioColor["RED"] = 5376] = "RED";
    MarioColor[MarioColor["BLUE"] = 5888] = "BLUE";
    MarioColor[MarioColor["YELLOW"] = 6144] = "YELLOW";
    MarioColor[MarioColor["BLACK"] = 6656] = "BLACK";
    MarioColor[MarioColor["GREEN"] = 9472] = "GREEN";
    MarioColor[MarioColor["BROWN"] = 27136] = "BROWN";
    MarioColor[MarioColor["CYAN"] = 16897] = "CYAN";
})(MarioColor = exports.MarioColor || (exports.MarioColor = {}));
//# sourceMappingURL=consts.js.map