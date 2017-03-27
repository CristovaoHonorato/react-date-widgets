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

var _skin = require('./skin');

var _skin2 = _interopRequireDefault(_skin);

var _locale = require('./locale');

var _locale2 = _interopRequireDefault(_locale);

var _Input = require('../common/Input');

var _Input2 = _interopRequireDefault(_Input);

var _picker = require('./picker');

var _picker2 = _interopRequireDefault(_picker);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateWidget = (0, _expandCollapse2.default)(_Input2.default, (0, _panel2.default)(_picker2.default, _Footer2.default), true);

exports.default = (0, _widget2.default)(DateWidget, {
    clearText: 'clear',
    style: _skin2.default,
    textFormat: 'YYYY/MM/DD',
    valueFormat: 'TYYYY:MM:DDZ',
    locale: _locale2.default
});
//# sourceMappingURL=index.js.map