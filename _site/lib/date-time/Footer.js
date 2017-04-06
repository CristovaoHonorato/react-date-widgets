'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _Button = require('../common/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Footer = function Footer(_ref) {
    var mode = _ref.mode,
        value = _ref.value,
        defaultValue = _ref.defaultValue,
        translations = _ref.translations,
        style = _ref.style,
        onChange = _ref.onChange,
        onChangeMode = _ref.onChangeMode,
        onCollapsePanel = _ref.onCollapsePanel;

    var nowBtn = style.nowBtn,
        selectTimeBtn = style.selectTimeBtn,
        okButton = style.okButton,
        restStyle = _objectWithoutProperties(style, ['nowBtn', 'selectTimeBtn', 'okButton']);

    var e1 = _react2.default.createElement(
        _Button2.default,
        {
            style: nowBtn,
            onClick: function onClick() {
                onChange(now(value || defaultValue));
            }
        },
        translations.now
    );

    var e2 = _react2.default.createElement(
        _Button2.default,
        {
            style: selectTimeBtn,
            onClick: onChangeMode
        },
        mode === 'time' ? translations.dateSelect : translations.timeSelect
    );

    var e3 = _react2.default.createElement(
        _Button2.default,
        _extends({ key: 'ok' }, {
            style: okButton,
            onClick: onCollapsePanel
        }),
        translations.ok
    );

    return _react2.default.createElement(
        'div',
        { className: 'date-picker-footer', style: restStyle },
        e1,
        e2,
        e3
    );
};

function now(value) {
    return (0, _moment2.default)().locale(value.locale()).utcOffset(value.utcOffset());
}

Footer.propTypes = {
    mode: _react.PropTypes.oneOf(['time', 'date']).isRequired,
    value: _react.PropTypes.object,
    defaultValue: _react.PropTypes.object.isRequired,
    translations: _react.PropTypes.object.isRequired,
    onChange: _react.PropTypes.func.isRequired,
    onChangeMode: _react.PropTypes.func.isRequired,
    onCollapsePanel: _react.PropTypes.func.isRequired
};

exports.default = Footer;
//# sourceMappingURL=Footer.js.map