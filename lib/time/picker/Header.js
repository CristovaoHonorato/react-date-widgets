'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../../common/Button');

var _Button2 = _interopRequireDefault(_Button);

var _utils = require('../../common/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var headerBtnLayoutStyle = {
    display: 'inline-block',
    lineHeight: '34px',
    padding: '0 8px'
};

var headerLayoutStyle = {
    padding: '0 10px',
    height: '34px',
    lineHeight: '30px',
    textAlign: 'center',
    userSelect: 'none',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid'
};

var Header = function Header(_ref) {
    var locale = _ref.locale,
        defaultValue = _ref.defaultValue,
        _ref$value = _ref.value,
        value = _ref$value === undefined ? defaultValue : _ref$value,
        _ref$style = _ref.style,
        headerBtn = _ref$style.headerBtn,
        styleRest = _objectWithoutProperties(_ref$style, ['headerBtn']);

    return _react2.default.createElement(
        'div',
        { style: (0, _utils.extendStyle)(headerLayoutStyle, styleRest) },
        _react2.default.createElement(
            _Button2.default,
            {
                className: 'day-select',
                style: (0, _utils.extendStyle)(headerBtnLayoutStyle, headerBtn),
                title: locale.daySelect
            },
            (value || defaultValue).format(locale.dayFormat)
        ),
        _react2.default.createElement(
            _Button2.default,
            {
                className: 'month-select',
                style: (0, _utils.extendStyle)(headerBtnLayoutStyle, headerBtn),
                title: locale.monthSelect
            },
            (value || defaultValue).format(locale.monthFormat)
        ),
        _react2.default.createElement(
            _Button2.default,
            {
                className: 'year-select',
                style: (0, _utils.extendStyle)(headerBtnLayoutStyle, headerBtn),
                title: locale.yearSelect
            },
            (value || defaultValue).format(locale.yearFormat)
        )
    );
};

exports.default = Header;
//# sourceMappingURL=Header.js.map