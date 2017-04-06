'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _widget = require('../_hoc/widget');

var _widget2 = _interopRequireDefault(_widget);

var _expandCollapse = require('../_hoc/expandCollapse');

var _expandCollapse2 = _interopRequireDefault(_expandCollapse);

var _skin = require('./skin');

var _skin2 = _interopRequireDefault(_skin);

var _translations = require('../date/translations');

var _translations2 = _interopRequireDefault(_translations);

var _Input = require('../common/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Panel = require('./Panel');

var _Panel2 = _interopRequireDefault(_Panel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _widget2.default)((0, _expandCollapse2.default)(_Input2.default, _Panel2.default), {
    clearText: 'clear',
    style: _skin2.default,
    valueFormat: 'TYYYY-MM-DD HH:mm:ssZ',
    textFormat: 'YYYY-MM-DD HH:mm:ss',
    pickerHeight: 210,
    translations: _translations2.default
});
//# sourceMappingURL=index.js.map