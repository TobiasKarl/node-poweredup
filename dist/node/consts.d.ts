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
export declare enum HubType {
    UNKNOWN = 0,
    WEDO2_SMART_HUB = 1,
    MOVE_HUB = 2,
    HUB = 3,
    REMOTE_CONTROL = 4,
    DUPLO_TRAIN_BASE = 5,
    TECHNIC_MEDIUM_HUB = 6,
    MARIO = 7
}
export declare const HubTypeNames: typeof HubType;
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
export declare enum DeviceType {
    UNKNOWN = 0,
    SIMPLE_MEDIUM_LINEAR_MOTOR = 1,
    TRAIN_MOTOR = 2,
    LIGHT = 8,
    VOLTAGE_SENSOR = 20,
    CURRENT_SENSOR = 21,
    PIEZO_BUZZER = 22,
    HUB_LED = 23,
    TILT_SENSOR = 34,
    MOTION_SENSOR = 35,
    COLOR_DISTANCE_SENSOR = 37,
    MEDIUM_LINEAR_MOTOR = 38,
    MOVE_HUB_MEDIUM_LINEAR_MOTOR = 39,
    MOVE_HUB_TILT_SENSOR = 40,
    DUPLO_TRAIN_BASE_MOTOR = 41,
    DUPLO_TRAIN_BASE_SPEAKER = 42,
    DUPLO_TRAIN_BASE_COLOR_SENSOR = 43,
    DUPLO_TRAIN_BASE_SPEEDOMETER = 44,
    TECHNIC_LARGE_LINEAR_MOTOR = 46,
    TECHNIC_XLARGE_LINEAR_MOTOR = 47,
    TECHNIC_MEDIUM_ANGULAR_MOTOR = 48,
    TECHNIC_LARGE_ANGULAR_MOTOR = 49,
    TECHNIC_MEDIUM_HUB_GEST_SENSOR = 54,
    REMOTE_CONTROL_BUTTON = 55,
    REMOTE_CONTROL_RSSI = 56,
    TECHNIC_MEDIUM_HUB_ACCELEROMETER = 57,
    TECHNIC_MEDIUM_HUB_GYRO_SENSOR = 58,
    TECHNIC_MEDIUM_HUB_TILT_SENSOR = 59,
    TECHNIC_MEDIUM_HUB_TEMPERATURE_SENSOR = 60,
    TECHNIC_COLOR_SENSOR = 61,
    TECHNIC_DISTANCE_SENSOR = 62,
    TECHNIC_FORCE_SENSOR = 63,
    MARIO_ACCELEROMETER = 71,
    MARIO_BARCODE_SENSOR = 73,
    MARIO_PANTS_SENSOR = 74,
    TECHNIC_MEDIUM_ANGULAR_MOTOR_GREY = 75,
    TECHNIC_LARGE_ANGULAR_MOTOR_GREY = 76
}
export declare const DeviceTypeNames: typeof DeviceType;
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
export declare enum Color {
    BLACK = 0,
    PINK = 1,
    PURPLE = 2,
    BLUE = 3,
    LIGHT_BLUE = 4,
    CYAN = 5,
    GREEN = 6,
    YELLOW = 7,
    ORANGE = 8,
    RED = 9,
    WHITE = 10,
    NONE = 255
}
export declare const ColorNames: typeof Color;
/**
 * @typedef ButtonState
 * @property {number} PRESSED 0
 * @property {number} RELEASED 1
 * @property {number} UP 2
 * @property {number} DOWN 3
 * @property {number} STOP 4
 */
export declare enum ButtonState {
    PRESSED = 2,
    RELEASED = 0,
    UP = 1,
    DOWN = 255,
    STOP = 127
}
/**
 * @typedef BrakingStyle
 * @property {number} HOLD 127
 * @property {number} BRAKE 128
 */
export declare enum BrakingStyle {
    FLOAT = 0,
    HOLD = 126,
    BRAKE = 127
}
/**
 * @typedef DuploTrainBaseSound
 * @property {number} BRAKE 3
 * @property {number} STATION_DEPARTURE 5
 * @property {number} WATER_REFILL 7
 * @property {number} HORN 9
 * @property {number} STEAM 10
 */
export declare enum DuploTrainBaseSound {
    BRAKE = 3,
    STATION_DEPARTURE = 5,
    WATER_REFILL = 7,
    HORN = 9,
    STEAM = 10
}
export declare enum BLEManufacturerData {
    DUPLO_TRAIN_BASE_ID = 32,
    MOVE_HUB_ID = 64,
    HUB_ID = 65,
    REMOTE_CONTROL_ID = 66,
    MARIO_ID = 67,
    TECHNIC_MEDIUM_HUB = 128
}
export declare enum BLEService {
    WEDO2_SMART_HUB = "00001523-1212-efde-1523-785feabcd123",
    WEDO2_SMART_HUB_2 = "00004f0e-1212-efde-1523-785feabcd123",
    WEDO2_SMART_HUB_3 = "2a19",
    WEDO2_SMART_HUB_4 = "180f",
    WEDO2_SMART_HUB_5 = "180a",
    LPF2_HUB = "00001623-1212-efde-1623-785feabcd123"
}
export declare enum BLECharacteristic {
    WEDO2_BATTERY = "2a19",
    WEDO2_FIRMWARE_REVISION = "2a26",
    WEDO2_BUTTON = "00001526-1212-efde-1523-785feabcd123",
    WEDO2_PORT_TYPE = "00001527-1212-efde-1523-785feabcd123",
    WEDO2_LOW_VOLTAGE_ALERT = "00001528-1212-efde-1523-785feabcd123",
    WEDO2_HIGH_CURRENT_ALERT = "00001529-1212-efde-1523-785feabcd123",
    WEDO2_LOW_SIGNAL_ALERT = "0000152a-1212-efde-1523-785feabcd123",
    WEDO2_DISCONNECT = "0000152b-1212-efde-1523-785feabcd123",
    WEDO2_SENSOR_VALUE = "00001560-1212-efde-1523-785feabcd123",
    WEDO2_VALUE_FORMAT = "00001561-1212-efde-1523-785feabcd123",
    WEDO2_PORT_TYPE_WRITE = "00001563-1212-efde-1523-785feabcd123",
    WEDO2_MOTOR_VALUE_WRITE = "00001565-1212-efde-1523-785feabcd123",
    WEDO2_NAME_ID = "00001524-1212-efde-1523-785feabcd123",
    LPF2_ALL = "00001624-1212-efde-1623-785feabcd123"
}
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
export declare enum MessageType {
    HUB_PROPERTIES = 1,
    HUB_ACTIONS = 2,
    HUB_ALERTS = 3,
    HUB_ATTACHED_IO = 4,
    GENERIC_ERROR_MESSAGES = 5,
    HW_NETWORK_COMMANDS = 8,
    FW_UPDATE_GO_INTO_BOOT_MODE = 16,
    FW_UPDATE_LOCK_MEMORY = 17,
    FW_UPDATE_LOCK_STATUS_REQUEST = 18,
    FW_LOCK_STATUS = 19,
    PORT_INFORMATION_REQUEST = 33,
    PORT_MODE_INFORMATION_REQUEST = 34,
    PORT_INPUT_FORMAT_SETUP_SINGLE = 65,
    PORT_INPUT_FORMAT_SETUP_COMBINEDMODE = 66,
    PORT_INFORMATION = 67,
    PORT_MODE_INFORMATION = 68,
    PORT_VALUE_SINGLE = 69,
    PORT_VALUE_COMBINEDMODE = 70,
    PORT_INPUT_FORMAT_SINGLE = 71,
    PORT_INPUT_FORMAT_COMBINEDMODE = 72,
    VIRTUAL_PORT_SETUP = 97,
    PORT_OUTPUT_COMMAND = 129,
    PORT_OUTPUT_COMMAND_FEEDBACK = 130
}
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
export declare enum HubPropertyReference {
    ADVERTISING_NAME = 1,
    BUTTON = 2,
    FW_VERSION = 3,
    HW_VERSION = 4,
    RSSI = 5,
    BATTERY_VOLTAGE = 6,
    BATTERY_TYPE = 7,
    MANUFACTURER_NAME = 8,
    RADIO_FIRMWARE_VERSION = 9,
    LEGO_WIRELESS_PROTOCOL_VERSION = 10,
    SYSTEM_TYPE_ID = 11,
    HW_NETWORK_ID = 12,
    PRIMARY_MAC_ADDRESS = 13,
    SECONDARY_MAC_ADDRESS = 14,
    HARDWARE_NETWORK_FAMILY = 15
}
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
export declare enum HubPropertyOperation {
    SET_DOWNSTREAM = 1,
    ENABLE_UPDATES_DOWNSTREAM = 2,
    DISABLE_UPDATES_DOWNSTREAM = 3,
    RESET_DOWNSTREAM = 4,
    REQUEST_UPDATE_DOWNSTREAM = 5,
    UPDATE_UPSTREAM = 6
}
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
export declare enum HubPropertyPayload {
    ADVERTISING_NAME = 1,
    BUTTON_STATE = 2,
    FW_VERSION = 3,
    HW_VERSION = 4,
    RSSI = 5,
    BATTERY_VOLTAGE = 6,
    BATTERY_TYPE = 7,
    MANUFACTURER_NAME = 8,
    RADIO_FIRMWARE_VERSION = 9,
    LWP_PROTOCOL_VERSION = 10,
    SYSTEM_TYPE_ID = 11,
    HW_NETWORK_ID = 12,
    PRIMARY_MAC_ADDRESS = 13,
    SECONDARY_MAC_ADDRESS = 14,
    HW_NETWORK_FAMILY = 15
}
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
export declare enum ActionType {
    SWITCH_OFF_HUB = 1,
    DISCONNECT = 2,
    VCC_PORT_CONTROL_ON = 3,
    VCC_PORT_CONTROL_OFF = 4,
    ACTIVATE_BUSY_INDICATION = 5,
    RESET_BUSY_INDICATION = 6,
    SHUTDOWN = 47,
    HUB_WILL_SWITCH_OFF = 48,
    HUB_WILL_DISCONNECT = 49,
    HUB_WILL_GO_INTO_BOOT_MODE = 50
}
/**
 * @typedef AlertType
 * @param {number} LOW_VOLTAGE 0x01
 * @param {number} HIGH_CURRENT 0x02
 * @param {number} LOW_SIGNAL_STRENGTH 0x03
 * @param {number} OVER_POWER_CONDITION 0x04
 * @description https://lego.github.io/lego-ble-wireless-protocol-docs/index.html#alert-type
 */
export declare enum AlertType {
    LOW_VOLTAGE = 1,
    HIGH_CURRENT = 2,
    LOW_SIGNAL_STRENGTH = 3,
    OVER_POWER_CONDITION = 4
}
/**
 * @typedef AlertOperation
 * @param {number} ENABLE_UPDATE 0x01
 * @param {number} DISABLE_UPDATE 0x02
 * @param {number} REQUEST_UPDATE 0x03
 * @param {number} UPDATE 0x04
 * @description https://lego.github.io/lego-ble-wireless-protocol-docs/index.html#alert-operation
 */
export declare enum AlertOperation {
    LOW_VOLTAGE = 1,
    HIGH_CURRENT = 2,
    LOW_SIGNAL_STRENGTH = 3,
    OVER_POWER_CONDITION = 4
}
/**
 * @typedef AlertPayload
 * @param {number} STATUS_OK 0x00
 * @param {number} ALERT 0xFF
 * @description https://lego.github.io/lego-ble-wireless-protocol-docs/index.html#alert-payload
 */
export declare enum AlertPayload {
    STATUS_OK = 0,
    ALERT = 255
}
/**
 * @typedef Event
 * @param {number} DETACHED_IO 0x00
 * @param {number} ATTACHED_IO 0x01
 * @param {number} ATTACHED_VIRTUAL_IO 0x02
 * @description https://lego.github.io/lego-ble-wireless-protocol-docs/index.html#event
 */
export declare enum AlertPayload {
    DETACHED_IO = 0,
    ATTACHED_IO = 1,
    ATTACHED_VIRTUAL_IO = 2
}
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
export declare enum IOTypeID {
    MOTOR = 1,
    SYSTEM_TRAIN_MOTOR = 2,
    BUTTON = 5,
    LED_LIGHT = 8,
    VOLTAGE = 20,
    CURRENT = 21,
    PIEZO_TONE_SOUND = 22,
    RGB_LIGHT = 23,
    EXTERNAL_TILT_SENSOR = 34,
    MOTION_SENSOR = 35,
    VISION_SENSOR = 37,
    EXTERNAL_MOTOR = 38,
    INTERNAL_MOTOR = 39,
    INTERNAL_TILT = 40
}
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
export declare enum ErrorCode {
    ACK = 1,
    MACK = 2,
    BUFFER_OVERFLOW = 3,
    TIMEOUT = 4,
    COMMAND_NOT_RECOGNIZED = 5,
    INVALID_USE = 6,
    OVERCURRENT = 7,
    INTERNAL_ERROR = 8
}
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
export declare enum HWNetWorkCommandType {
    CONNECTION_REQUEST = 2,
    FAMILY_REQUEST = 3,
    FAMILY_SET = 4,
    JOIN_DENIED = 5,
    GET_FAMILY = 6,
    FAMILY = 7,
    GET_SUBFAMILY = 8,
    SUBFAMILY = 9,
    SUBFAMILY_SET = 10,
    GET_EXTENDED_FAMILY = 11,
    EXTENDED_FAMILY = 12,
    EXTENDED_FAMILY_SET = 13,
    RESET_LONG_PRESS_TIMING = 14
}
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
export declare enum HWNetworkFamily {
    GREEN = 1,
    YELLOW = 2,
    RED = 3,
    BLUE = 4,
    PURPLE = 5,
    LIGHT_BLUE = 6,
    TEAL = 7,
    PINK = 8,
    WHITE = 0
}
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
export declare enum HWNetworkSubFamily {
    ONE_FLASH = 1,
    TWO_FLASHES = 2,
    THREE_FLASHES = 3,
    FOUR_FLASHES = 4,
    FIVE_FLASHES = 5,
    SIX_FLASHES = 6,
    SEVEN_FLASHES = 7
}
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
export declare enum ModeInformationType {
    NAME = 0,
    RAW = 1,
    PCT = 2,
    SI = 3,
    SYMBOL = 4,
    MAPPING = 5,
    USED_INTERNALLY = 6,
    MOTOR_BIAS = 7,
    CAPABILITY_BITS = 8,
    VALUE_FORMAT = 128
}
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
export declare enum PortInputFormatSetupSubCommand {
    SET_MODEANDDATASET_COMBINATIONS = 1,
    LOCK_LPF2_DEVICE_FOR_SETUP = 2,
    UNLOCKANDSTARTWITHMULTIUPDATEENABLED = 3,
    UNLOCKANDSTARTWITHMULTIUPDATEDISABLED = 4,
    NOT_USED = 5,
    RESET_SENSOR = 6
}
/**
 * @typedef MarioPantsType
 * @param {number} NONE 0x00
 * @param {number} PROPELLER 0x06
 * @param {number} CAT 0x11
 * @param {number} FIRE 0x12
 * @param {number} NORMAL 0x21
 * @param {number} BUILDER 0x22
 */
export declare enum MarioPantsType {
    NONE = 0,
    PROPELLER = 6,
    CAT = 17,
    FIRE = 18,
    NORMAL = 33,
    BUILDER = 34
}
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
export declare enum MarioColor {
    WHITE = 4864,
    RED = 5376,
    BLUE = 5888,
    YELLOW = 6144,
    BLACK = 6656,
    GREEN = 9472,
    BROWN = 27136,
    CYAN = 16897
}
