'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _skin = require('../date/skin');

var _skin2 = _interopRequireDefault(_skin);

var _skin3 = require('../time/skin');

var _skin4 = _interopRequireDefault(_skin3);

var _skin5 = require('../common/skin');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var result = _extends({}, _skin2.default, {
    panel: _extends({}, _skin2.default.panel, {
        picker: {
            date: _skin2.default.panel.picker,
            time: _skin4.default.panel.picker
        },
        footer: _extends({}, _skin5.footer, {
            okButton: _extends({}, _skin5.footer.okBtn, {
                position: 'absolute',
                bottom: '16%',
                right: '5%'
            }),
            selectTimeBtn: _extends({}, _skin5.footer.nowBtn, {
                paddingLeft: 0,
                position: 'relative',
                left: '22%'
            })
        })
    })
});

exports.default = result;
//# sourceMappingURL=skin.js.map