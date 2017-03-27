'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _hover = require('../_hoc/hover');

var _hover2 = _interopRequireDefault(_hover);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_PureComponent) {
    _inherits(Input, _PureComponent);

    function Input(props) {
        _classCallCheck(this, Input);

        var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

        var value = props.value,
            format = props.format;

        _this.state = {
            stringValue: value && value.format(format) || '',
            invalid: false
        };
        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(Input, [{
        key: 'render',
        value: function render() {
            var withClear = this.props.withClear;

            var withClearButton = withClear && Boolean(this.props.value);
            return _react2.default.createElement(
                'div',
                { className: 'date-picker-input-wrap', style: { position: 'relative' } },
                this.renderInput(),
                withClearButton ? this.renderClearButton() : null
            );
        }
    }, {
        key: 'renderInput',
        value: function renderInput() {
            var _this2 = this;

            var _props = this.props,
                placeholder = _props.placeholder,
                style = _props.style,
                onBlur = _props.onBlur;
            var _state = this.state,
                invalid = _state.invalid,
                stringValue = _state.stringValue;

            var _omit = (0, _utils.omit)(style, 'clearBtn'),
                invalidStyle = _omit.invalid,
                rest = _objectWithoutProperties(_omit, ['invalid']);

            return _react2.default.createElement('input', {
                className: 'date-picker-input',
                style: _extends({}, rest, invalid ? invalidStyle : {}),
                ref: function ref(_ref) {
                    return _this2.input = _ref;
                },
                value: stringValue,
                placeholder: placeholder,
                onKeyDown: this.handleKeyDown,
                onChange: this.handleChange,
                onBlur: onBlur,
                onFocus: this.handleFocus.bind(this)
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(_ref2) {
            var target = _ref2.target;
            var stringValue = target.value;

            this.setState({ stringValue: stringValue });

            var _props2 = this.props,
                format = _props2.format,
                onChange = _props2.onChange,
                value = _props2.value;


            if (value && !stringValue) {
                onChange(null);
                return;
            }

            var parsed = (0, _moment2.default)(stringValue, format, true);
            if (!parsed.isValid()) {
                this.setState({ invalid: true });
                return;
            }

            if (value && !value.isSame(parsed) || !value) {
                onChange(parsed);
            }
            this.setState({ invalid: false });
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus(e) {
            var onFocus = this.props.onFocus;

            onFocus(e);
        }
    }, {
        key: 'renderClearButton',
        value: function renderClearButton() {
            var _props3 = this.props,
                style = _props3.style,
                isHovered = _props3.isHovered,
                clearText = _props3.clearText,
                onChange = _props3.onChange;
            var _style$clearBtn = style.clearBtn,
                clearBtnStyle = _style$clearBtn === undefined ? {} : _style$clearBtn;
            var hoveredStyle = clearBtnStyle[':hover'];


            var styleIcon = {
                fontFamily: 'SignavioFont',
                fontStyle: 'normal',
                verticalAlign: 'top',
                WebkitFontSmoothing: 'antialiased',
                MozFontSmoothing: 'antialiased',
                MsFontSmoothing: 'antialiased',
                OFontSmoothing: 'antialiased',
                fontSmoothing: 'antialiased'
            };

            var props = {
                className: 'date-picker-input-clear-btn',
                style: _extends({}, clearBtnStyle, isHovered ? hoveredStyle : {}),
                title: clearText,
                onClick: function onClick() {
                    return onChange(null);
                }
            };
            return _react2.default.createElement(
                'div',
                props,
                _react2.default.createElement(
                    'i',
                    { style: styleIcon },
                    '\u2715'
                )
            );
        }
    }, {
        key: 'handleClear',
        value: function handleClear(evt) {
            evt.preventDefault();
            this.setState({ stringValue: '' });
            this.props.onClear(evt);
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(evt) {
            if (evt.keyCode !== 13 && evt.keyCode !== 27) {
                return;
            }
            var _props4 = this.props,
                onCollapsePanel = _props4.onCollapsePanel,
                onKeyDown = _props4.onKeyDown;

            this.input.blur();
            onCollapsePanel();
            onKeyDown && onKeyDown(evt);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var value = nextProps.value,
                format = nextProps.format;


            this.setState({
                stringValue: value && value.format(format) || '',
                invalid: false
            });
        }
    }]);

    return Input;
}(_react.PureComponent);

Input.propTypes = {
    format: _react.PropTypes.string,
    placeholder: _react.PropTypes.string,
    clearText: _react.PropTypes.string,
    value: _react.PropTypes.object,
    onChange: _react.PropTypes.func,
    onClear: _react.PropTypes.func,
    withClear: _react.PropTypes.bool,
    onCollapsePanel: _react.PropTypes.func
};

Input.defaultProps = {
    style: {
        invalid: {
            color: 'tomato'
        }
    },
    withClear: false,
    format: 'YYYY/MM/DD'
};

exports.default = (0, _hover2.default)(Input);
//# sourceMappingURL=Input.js.map