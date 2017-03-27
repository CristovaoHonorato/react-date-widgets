'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WithHeader = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../../common/utils');

var _Column = require('./Column');

var _Column2 = _interopRequireDefault(_Column);

var _Header2 = require('./Header');

var _Header3 = _interopRequireDefault(_Header2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var showHour = function showHour(format) {
    return format.toLowerCase().indexOf('h') >= 0;
};

var showMinute = function showMinute(format) {
    return format.indexOf('m') >= 0;
};

var showSecond = function showSecond(format) {
    return format.toLowerCase().indexOf('s') >= 0;
};

var columnNumber = function columnNumber(format) {
    return Number(showHour(format)) + Number(showMinute(format)) + Number(showSecond(format));
};

var formatOption = function formatOption(option) {
    return {
        value: option < 10 ? '0' + option : '' + option,
        disabled: false
    };
};

var layoutStyle = {
    fontSize: 0,
    listStyle: 'none',
    outline: 'none',
    overflowX: 'hidden',
    position: 'relative',
    textAlign: 'left'
};

function createPicker(Header) {
    var Picker = function (_Component) {
        _inherits(Picker, _Component);

        function Picker() {
            _classCallCheck(this, Picker);

            return _possibleConstructorReturn(this, (Picker.__proto__ || Object.getPrototypeOf(Picker)).apply(this, arguments));
        }

        _createClass(Picker, [{
            key: 'render',
            value: function render() {
                var _this2 = this;

                var _props = this.props,
                    style = _props.style,
                    format = _props.format,
                    pickerHeight = _props.pickerHeight;

                var _omit = (0, _utils.omit)(style, 'header', 'column'),
                    restStyle = _objectWithoutProperties(_omit, []);

                return _react2.default.createElement(
                    'div',
                    {
                        className: 'panel',
                        style: (0, _utils.extendStyle)(layoutStyle, restStyle),
                        tabIndex: '1',
                        onKeyDown: function onKeyDown(evt) {
                            var _props2 = _this2.props,
                                onKeyDown = _props2.onKeyDown,
                                onCollapsePanel = _props2.onCollapsePanel;

                            if (onKeyDown) {
                                onKeyDown(evt);
                            }
                            if (evt.keyCode === 13 || evt.keyCode === 27) {
                                onCollapsePanel();
                            }
                        }
                    },
                    this.renderHeader(),
                    _react2.default.createElement(
                        'div',
                        { className: 'column-container', style: { height: pickerHeight } },
                        showHour(format) ? this.renderHour() : null,
                        showMinute(format) ? this.renderMinute() : null,
                        showSecond(format) ? this.renderSecond() : null
                    )
                );
            }
        }, {
            key: 'renderHeader',
            value: function renderHeader() {
                var _props3 = this.props,
                    value = _props3.value,
                    style = _props3.style,
                    locale = _props3.locale,
                    defaultValue = _props3.defaultValue;
                var header = style.header;

                return _react2.default.createElement(Header, {
                    locale: locale,
                    value: value,
                    defaultValue: defaultValue,
                    style: header
                });
            }
        }, {
            key: 'renderHour',
            value: function renderHour() {
                var _this3 = this;

                var format = this.props.format;

                var hourOptions = (0, _utils.range)(24);
                return _react2.default.createElement(_Column2.default, {
                    style: hourStyle(this.props, columnNumber(format)),
                    options: hourOptions.map(formatOption),
                    selectedIndex: hourOptions.indexOf(hourValue(this.props)),
                    onChange: function onChange(itemValue) {
                        var _props4 = _this3.props,
                            value = _props4.value,
                            defaultValue = _props4.defaultValue,
                            onChange = _props4.onChange;

                        onChange((value || defaultValue).clone().hour(itemValue));
                    }
                });
            }
        }, {
            key: 'renderMinute',
            value: function renderMinute() {
                var _this4 = this;

                var format = this.props.format;

                var minuteOptions = (0, _utils.range)(60);
                return _react2.default.createElement(_Column2.default, {
                    style: minuteStyle(this.props, columnNumber(format)),
                    options: minuteOptions.map(formatOption),
                    selectedIndex: minuteOptions.indexOf(minuteValue(this.props)),
                    onChange: function onChange(itemValue) {
                        var _props5 = _this4.props,
                            value = _props5.value,
                            defaultValue = _props5.defaultValue,
                            onChange = _props5.onChange;

                        onChange((value || defaultValue).clone().minute(itemValue));
                    }
                });
            }
        }, {
            key: 'renderSecond',
            value: function renderSecond() {
                var _this5 = this;

                var format = this.props.format;

                var secondOptions = (0, _utils.range)(60);
                return _react2.default.createElement(_Column2.default, {
                    style: secondStyle(this.props, columnNumber(format)),
                    options: secondOptions.map(formatOption),
                    selectedIndex: secondOptions.indexOf(secondValue(this.props)),
                    onChange: function onChange(itemValue) {
                        var _props6 = _this5.props,
                            value = _props6.value,
                            defaultValue = _props6.defaultValue,
                            onChange = _props6.onChange;

                        onChange((value || defaultValue).clone().second(itemValue));
                    }
                });
            }
        }]);

        return Picker;
    }(_react.Component);

    Picker.propTypes = {
        defaultValue: _react.PropTypes.object,
        value: _react.PropTypes.object,
        onChange: _react.PropTypes.func,
        onCollapsePanel: _react.PropTypes.func.isRequired
    };

    return Picker;
}

exports.default = createPicker(function () {
    return null;
});
var WithHeader = exports.WithHeader = createPicker(_Header3.default);

function hourStyle(_ref, columnNumber) {
    var _ref$style = _ref.style,
        style = _ref$style === undefined ? {} : _ref$style;
    var _style$column = style.column,
        column = _style$column === undefined ? {} : _style$column;

    return _extends({}, column, {
        width: columnNumber === 3 ? '33%' : 100 / columnNumber + '%'
    });
}

function hourValue(_ref2) {
    var value = _ref2.value,
        defaultValue = _ref2.defaultValue;

    return (value || defaultValue).hour();
}

function minuteStyle(_ref3, columnNumber) {
    var _ref3$style = _ref3.style,
        style = _ref3$style === undefined ? {} : _ref3$style;
    var _style$column2 = style.column,
        column = _style$column2 === undefined ? {} : _style$column2;

    return _extends({}, column, {
        width: columnNumber === 3 ? '34%' : 100 / columnNumber + '%'
    });
}

function minuteValue(_ref4) {
    var value = _ref4.value,
        defaultValue = _ref4.defaultValue;

    return (value || defaultValue).minute();
}

function secondStyle(_ref5, columnNumber) {
    var _ref5$style = _ref5.style,
        style = _ref5$style === undefined ? {} : _ref5$style;
    var _style$column3 = style.column,
        column = _style$column3 === undefined ? {} : _style$column3;

    return _extends({}, column, {
        width: columnNumber === 3 ? '33%' : 100 / columnNumber + '%'
    });
}

function secondValue(_ref6) {
    var value = _ref6.value,
        defaultValue = _ref6.defaultValue;

    return (value || defaultValue).second();
}
//# sourceMappingURL=index.js.map