'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../../../common/Button');

var _Button2 = _interopRequireDefault(_Button);

var _utils = require('../../../common/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var layoutStyle = {
    header: {
        padding: '0 10px',
        height: '34px',
        lineHeight: '30px',
        textAlign: 'center',
        userSelect: 'none',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid'
    },
    selectBtn: {
        display: 'inline-block',
        padding: '0 8px',
        lineHeight: '34px'
    },
    headerBtn: {
        position: 'absolute',
        top: '0',
        cursor: 'pointer',
        padding: '0 5px',
        display: 'inline-block',
        fontSize: '16px',
        lineHeight: '34px'
    }
};

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            var style = this.props.style;

            var restStyle = (0, _utils.omit)(style, 'links', 'commonBtn', 'prevMonthBtn', 'nextMonthBtn', 'nextYearBtn', 'prevYearBtn');
            return _react2.default.createElement(
                'div',
                { className: 'date-picker-header',
                    style: (0, _utils.extendStyle)(layoutStyle.header, restStyle) },
                _react2.default.createElement(
                    'div',
                    { style: { position: 'relative' } },
                    this.renderPrevYearBtn(),
                    this.renderPrevMonthBtn(),
                    this.renderMonthYearElement(),
                    this.renderNextMonthBtn(),
                    this.renderNextYearBtn()
                )
            );
        }
    }, {
        key: 'renderPrevYearBtn',
        value: function renderPrevYearBtn() {
            var _props = this.props,
                translations = _props.translations,
                prevYearBtn = _props.style.prevYearBtn,
                onShadowValueChange = _props.onShadowValueChange,
                shadowValue = _props.shadowValue;


            return _react2.default.createElement(
                _Button2.default,
                {
                    style: (0, _utils.extendStyle)(_extends({}, layoutStyle.headerBtn, { left: 0 }), prevYearBtn),
                    className: 'prev-year-btn',
                    title: translations.previousYear,
                    onClick: function onClick() {
                        var nextValue = shadowValue.clone().add(-1, 'years');
                        onShadowValueChange(nextValue);
                    }
                },
                '\xAB'
            );
        }
    }, {
        key: 'renderNextYearBtn',
        value: function renderNextYearBtn() {
            var _props2 = this.props,
                translations = _props2.translations,
                nextYearBtn = _props2.style.nextYearBtn,
                onShadowValueChange = _props2.onShadowValueChange,
                shadowValue = _props2.shadowValue;


            return _react2.default.createElement(
                _Button2.default,
                {
                    style: (0, _utils.extendStyle)(_extends({}, layoutStyle.headerBtn, { right: 0 }), nextYearBtn),
                    className: 'next-year-btn',
                    title: translations.nextYear,
                    onClick: function onClick() {
                        var nextValue = shadowValue.clone().add(1, 'years');
                        onShadowValueChange(nextValue);
                    }
                },
                '\xBB'
            );
        }
    }, {
        key: 'renderPrevMonthBtn',
        value: function renderPrevMonthBtn() {
            var _props3 = this.props,
                translations = _props3.translations,
                prevMonthBtn = _props3.style.prevMonthBtn,
                onShadowValueChange = _props3.onShadowValueChange,
                shadowValue = _props3.shadowValue;


            return _react2.default.createElement(
                _Button2.default,
                {
                    style: (0, _utils.extendStyle)(_extends({}, layoutStyle.headerBtn, { position: 'absolute', left: 25 }), prevMonthBtn),
                    className: 'prev-month-btn',
                    title: translations.previousMonth,
                    onClick: function onClick() {
                        var nextValue = shadowValue.clone().add(-1, 'months');
                        onShadowValueChange(nextValue);
                    }
                },
                '\u2039'
            );
        }
    }, {
        key: 'renderNextMonthBtn',
        value: function renderNextMonthBtn() {
            var _props4 = this.props,
                translations = _props4.translations,
                nextMonthBtn = _props4.style.nextMonthBtn,
                onShadowValueChange = _props4.onShadowValueChange,
                shadowValue = _props4.shadowValue;


            return _react2.default.createElement(
                _Button2.default,
                {
                    style: (0, _utils.extendStyle)(_extends({}, layoutStyle.headerBtn, { position: 'absolute', right: 25 }), nextMonthBtn),
                    className: 'next-month-btn',
                    title: translations.nextMonth,
                    onClick: function onClick() {
                        var nextValue = shadowValue.clone().add(1, 'months');
                        onShadowValueChange(nextValue);
                    }
                },
                '\u203A'
            );
        }
    }, {
        key: 'renderMonthYearElement',
        value: function renderMonthYearElement() {
            var _props5 = this.props,
                translations = _props5.translations,
                shadowValue = _props5.shadowValue,
                selectBtn = _props5.style.selectBtn;


            var monthBeforeYear = translations.monthBeforeYear;
            var style = (0, _utils.extendStyle)(layoutStyle.selectBtn, selectBtn);
            var year = _react2.default.createElement(
                _Button2.default,
                {
                    className: 'year-select',
                    style: style,
                    title: translations.yearSelect
                },
                shadowValue.format(translations.yearFormat)
            );

            var month = _react2.default.createElement(
                _Button2.default,
                {
                    className: 'month-select',
                    style: style,
                    title: translations.monthSelect
                },
                shadowValue.format(translations.monthFormat)
            );

            return monthBeforeYear ? _react2.default.createElement(
                'span',
                null,
                month,
                year
            ) : _react2.default.createElement(
                'span',
                null,
                year,
                month
            );
        }
    }]);

    return Header;
}(_react.Component);

Header.propTypes = {
    translations: _react.PropTypes.object.isRequired,
    value: _react.PropTypes.object,
    onShadowValueChange: _react.PropTypes.func.isRequired
};

exports.default = Header;
//# sourceMappingURL=Header.js.map