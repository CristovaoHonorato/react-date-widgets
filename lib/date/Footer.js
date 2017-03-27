'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _Button = require('../common/Button');

var _Button2 = _interopRequireDefault(_Button);

var _utils = require('../common/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Footer = function Footer(_ref) {
    var defaultValue = _ref.defaultValue,
        _ref$value = _ref.value,
        value = _ref$value === undefined ? defaultValue : _ref$value,
        locale = _ref.locale,
        style = _ref.style,
        onChange = _ref.onChange;

    var _omit = (0, _utils.omit)(style, 'okBtn'),
        nowBtn = _omit.nowBtn,
        restStyle = _objectWithoutProperties(_omit, ['nowBtn']);

    return _react2.default.createElement(
        'div',
        { className: 'date-widget-footer', style: restStyle },
        _react2.default.createElement(
            _Button2.default,
            {
                isDisabled: isToday(value),
                style: nowBtn,
                onClick: isToday(value) ? function () {} : function () {
                    onChange(today(value));
                }
            },
            locale.today
        )
    );
};

function today(value) {
    return (0, _moment2.default)().locale(value.locale()).utcOffset(value.utcOffset());
}

function isToday(value) {
    return (0, _moment2.default)().isSame(value, 'd');
}

Footer.propTypes = {
    value: _react.PropTypes.object,
    defaultValue: _react.PropTypes.object.isRequired,
    locale: _react.PropTypes.object.isRequired,
    onChange: _react.PropTypes.func.isRequired
};

exports.default = Footer;
//# sourceMappingURL=Footer.js.map