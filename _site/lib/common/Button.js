'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hover = require('../_hoc/hover');

var _hover2 = _interopRequireDefault(_hover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Button = function Button(_ref) {
    var className = _ref.className,
        children = _ref.children,
        isDisabled = _ref.isDisabled,
        isHovered = _ref.isHovered,
        onClick = _ref.onClick,
        _ref$style = _ref.style;
    _ref$style = _ref$style === undefined ? {} : _ref$style;

    var _ref$style$Hover = _ref$style[':hover'],
        hover = _ref$style$Hover === undefined ? {} : _ref$style$Hover,
        _ref$style$disabled = _ref$style.disabled,
        disabled = _ref$style$disabled === undefined ? {} : _ref$style$disabled,
        rest = _objectWithoutProperties(_ref$style, [':hover', 'disabled']),
        title = _ref.title;

    return _react2.default.createElement(
        'a',
        {
            className: className,
            title: title,
            style: _extends({}, rest, isDisabled ? disabled : {}, isHovered && !isDisabled ? hover : {}),
            onClick: onClick
        },
        children
    );
};

exports.default = (0, _hover2.default)(Button);
//# sourceMappingURL=Button.js.map