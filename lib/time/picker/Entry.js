'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hover = require('../../_hoc/hover');

var _hover2 = _interopRequireDefault(_hover);

var _utils = require('../../common/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var layoutStyle = {
    listStyle: 'none',
    boxSizing: 'content-box',
    textAlign: 'center',
    cursor: 'pointer',
    width: '100%',
    userSelect: 'none'
};

var style = function style(_ref) {
    var disabled = _ref.disabled,
        isHovered = _ref.isHovered,
        selected = _ref.selected,
        style = _ref.style;

    var _extendStyle = (0, _utils.extendStyle)(layoutStyle, style),
        selectedStyle = _extendStyle[':selected'],
        disabledStyle = _extendStyle[':disabled'],
        restStyle = _objectWithoutProperties(_extendStyle, [':selected', ':disabled']);

    var _ref2 = disabled ? disabledStyle : style,
        hoveredStyle = _ref2[':hover'];

    return _extends({}, restStyle, selected ? selectedStyle : {}, disabled ? disabledStyle : {}, isHovered ? hoveredStyle : {});
};

var Entry = function Entry(_ref3) {
    var disabled = _ref3.disabled,
        value = _ref3.value,
        onChange = _ref3.onChange,
        rest = _objectWithoutProperties(_ref3, ['disabled', 'value', 'onChange']);

    return _react2.default.createElement(
        'li',
        {
            className: 'panel-entry',
            disabled: disabled,
            style: style(_extends({ disabled: disabled }, rest)),
            onClick: disabled ? null : function () {
                return onChange(value);
            }
        },
        value
    );
};

exports.default = (0, _hover2.default)(Entry);
//# sourceMappingURL=Entry.js.map