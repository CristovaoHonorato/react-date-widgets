'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _widget = require('../_hoc/widget');

var _widget2 = _interopRequireDefault(_widget);

var _panel = require('../_hoc/panel');

var _panel2 = _interopRequireDefault(_panel);

var _expandCollapse = require('../_hoc/expandCollapse');

var _expandCollapse2 = _interopRequireDefault(_expandCollapse);

var _utils = require('../common/utils');

var _skin = require('./skin');

var _skin2 = _interopRequireDefault(_skin);

var _picker = require('./picker');

var _picker2 = _interopRequireDefault(_picker);

var _Input = require('../common/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var layoutStyle = {
    display: 'inline-block',
    boxSizing: 'border-box',
    width: '100%'
};

var TimeWidget = (0, _expandCollapse2.default)(_Input2.default, (0, _panel2.default)(_picker2.default, _Footer2.default));

exports.default = (0, _widget2.default)(TimeWidget, {
    clearText: 'clear',
    style: (0, _utils.extendStyle)(layoutStyle, _skin2.default),
    textFormat: 'HH:mm:ss',
    valueFormat: 'THH:mm:ssZ'
});
//# sourceMappingURL=index.js.map