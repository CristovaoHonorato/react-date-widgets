'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../common/utils');

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _picker = require('../date/picker');

var _picker2 = _interopRequireDefault(_picker);

var _picker3 = require('../time/picker');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateTimePicker = function (_Component) {
    _inherits(DateTimePicker, _Component);

    function DateTimePicker(props) {
        _classCallCheck(this, DateTimePicker);

        var _this = _possibleConstructorReturn(this, (DateTimePicker.__proto__ || Object.getPrototypeOf(DateTimePicker)).call(this, props));

        _this.state = {
            mode: 'date'
        };
        return _this;
    }

    _createClass(DateTimePicker, [{
        key: 'render',
        value: function render() {
            var style = (0, _utils.omit)(this.props.style, 'picker', 'footer');
            return _react2.default.createElement(
                'div',
                { className: 'widget-panel', style: style },
                this.renderPicker(),
                this.renderFooter()
            );
        }
    }, {
        key: 'renderPicker',
        value: function renderPicker() {
            var _props = this.props,
                style = _props.style,
                rest = _objectWithoutProperties(_props, ['style']);

            switch (this.state.mode) {
                case 'date':
                    return _react2.default.createElement(_picker2.default, _extends({}, rest, { style: style.picker.date }));
                case 'time':
                    return _react2.default.createElement(_picker3.WithHeader, _extends({}, rest, { style: style.picker.time }));
                default:
                    return _react2.default.createElement(_picker2.default, _extends({}, rest, { style: style.picker.date }));
            }
        }
    }, {
        key: 'renderFooter',
        value: function renderFooter() {
            var _this2 = this;

            return _react2.default.createElement(_Footer2.default, _extends({}, this.props, {
                style: this.props.style.footer,
                mode: this.state.mode,
                onChangeMode: function onChangeMode() {
                    return _this2.handleChangeMode();
                }
            }));
        }
    }, {
        key: 'handleChangeMode',
        value: function handleChangeMode() {
            var mode = this.state.mode;

            this.setState({
                mode: mode === 'time' ? 'date' : 'time'
            });
        }
    }]);

    return DateTimePicker;
}(_react.Component);

exports.default = DateTimePicker;
//# sourceMappingURL=Panel.js.map