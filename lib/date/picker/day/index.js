'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utils = require('../../../common/utils');

var _BodyHeader = require('./BodyHeader');

var _BodyHeader2 = _interopRequireDefault(_BodyHeader);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Body = require('./Body');

var _Body2 = _interopRequireDefault(_Body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KeyCode = {
    DOWN: 40,
    END: 35,
    ENTER: 13,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 33,
    PAGE_UP: 34,
    RIGHT: 39,
    UP: 38
};

var layoutStyle = {
    position: 'relative',
    outline: 'none',
    width: '100%',
    minWidth: 200,
    listStyle: 'none',
    textAlign: 'left',
    lineHeight: '1.5'
};

var Panel = function (_Component) {
    _inherits(Panel, _Component);

    function Panel(props) {
        _classCallCheck(this, Panel);

        var _this = _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).call(this, props));

        _this.setShadowValue = _this.setShadowValue.bind(_this);
        _this.handleKeyDown = _this.handleKeyDown.bind(_this);
        _this.handleChange = _this.handleChange.bind(_this);

        _this.state = {
            shadowValue: props.value || props.defaultValue,
            value: props.value
        };
        return _this;
    }

    _createClass(Panel, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                style = _props.style,
                pickerHeight = _props.pickerHeight;
            var _state = this.state,
                shadowValue = _state.shadowValue,
                value = _state.value;


            var props = {
                autoFocus: true,
                tabIndex: "0",
                className: 'panel-day',
                style: (0, _utils.extendStyle)(layoutStyle, (0, _utils.omit)(style, 'day', 'month', 'year')),
                onKeyDown: this.handleKeyDown
            };

            var childProps = _extends({}, this.props, {
                shadowValue: shadowValue,
                value: value,
                onShadowValueChange: this.setShadowValue,
                onChange: this.handleChange
            });
            return _react2.default.createElement(
                'div',
                _extends({ className: 'panel-day' }, props),
                _react2.default.createElement(_Header2.default, _extends({}, childProps, {
                    style: style.day.header
                })),
                _react2.default.createElement(
                    'div',
                    { className: 'picker', style: { height: pickerHeight } },
                    _react2.default.createElement(_BodyHeader2.default, _extends({}, childProps, {
                        style: style.day.bodyHeader
                    })),
                    _react2.default.createElement(_Body2.default, _extends({}, childProps, {
                        style: style.day.body
                    }))
                )
            );
        }
    }, {
        key: 'handleChange',
        value: function handleChange(value) {
            if (value) {
                this.setShadowValue(value);
            }
            this.setValue(value);
        }
    }, {
        key: 'setValue',
        value: function setValue(value) {
            var onChange = this.props.onChange;

            if (this.isAllowedDate(value)) {
                this.setState({ value: value });
                onChange(value);
            }
        }
    }, {
        key: 'setShadowValue',
        value: function setShadowValue(newValue) {
            this.setState({ shadowValue: newValue });
        }
    }, {
        key: 'isAllowedDate',
        value: function isAllowedDate(value) {
            var _props2 = this.props,
                minDate = _props2.minDate,
                maxDate = _props2.maxDate;

            var isAfter = !value || !minDate ? true : value.isAfter(minDate);
            var isBefore = !value || !maxDate ? true : value.isBefore(maxDate);
            return isBefore && isAfter;
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(event) {
            /*
            @Oleg do we need this bullshit? The input is outside, should never bubble here
            if (event.target.nodeName.toLowerCase() === 'input') {
                return undefined
            }
            */

            // mac
            var ctrlKey = event.ctrlKey || event.metaKey;
            var keyCode = event.keyCode;


            switch (keyCode) {

                case KeyCode.DOWN:
                    event.preventDefault();
                    goWeek.call(this, 1);
                    return 1;

                case KeyCode.UP:
                    event.preventDefault();
                    goWeek.call(this, -1);
                    return 1;

                case KeyCode.LEFT:
                    event.preventDefault();
                    if (ctrlKey) {
                        goYear.call(this, -1);
                    } else {
                        goDay.call(this, -1);
                    }
                    return 1;

                case KeyCode.RIGHT:
                    event.preventDefault();
                    if (ctrlKey) {
                        goYear.call(this, 1);
                    } else {
                        goDay.call(this, 1);
                    }
                    return 1;

                case KeyCode.HOME:
                    event.preventDefault();
                    goStartMonth.call(this);
                    return 1;

                case KeyCode.END:
                    event.preventDefault();
                    goEndMonth.call(this);
                    return 1;

                case KeyCode.PAGE_DOWN:
                    event.preventDefault();
                    goMonth.call(this, 1);
                    return 1;

                case KeyCode.PAGE_UP:
                    event.preventDefault();
                    goMonth.call(this, -1);
                    return 1;

                case KeyCode.ENTER:
                    event.preventDefault();
                    this.handleChange(this.state.shadowValue);
                    return 1;

                //@OLEG missing the escape key here. onCollapsePanel
                default:
                    //onKeyDown(event)
                    return 1;
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            _reactDom2.default.findDOMNode(this).focus();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var value = nextProps.value;


            if (value && !value.isSame(this.state.value)) {
                this.setState({ value: value, shadowValue: value });
            }
        }
    }]);

    return Panel;
}(_react.Component);

Panel.propTypes = {
    onCollapsePanel: _react.PropTypes.func.isRequired,
    maxDate: _react.PropTypes.object,
    minDate: _react.PropTypes.object,
    value: _react.PropTypes.object,
    defaultValue: _react.PropTypes.object,
    style: _react.PropTypes.object,
    onChange: _react.PropTypes.func.isRequired
};

function goStartMonth() {
    var next = this.state.shadowValue.clone();
    next.startOf('month');
    this.setShadowValue(next);
}

function goEndMonth() {
    var next = this.state.shadowValue.clone();
    next.endOf('month');
    this.setShadowValue(next);
}

function goTime(direction, unit) {
    var next = this.state.shadowValue.clone();
    next.add(direction, unit);
    this.setShadowValue(next);
}

function goMonth(direction) {
    return goTime.call(this, direction, 'months');
}

function goYear(direction) {
    return goTime.call(this, direction, 'years');
}

function goWeek(direction) {
    return goTime.call(this, direction, 'weeks');
}

function goDay(direction) {
    return goTime.call(this, direction, 'days');
}

exports.default = Panel;
//# sourceMappingURL=index.js.map