'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createExpandCollapse;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactClickOutside = require('react-click-outside');

var _reactClickOutside2 = _interopRequireDefault(_reactClickOutside);

var _Stick = require('../common/Stick');

var _Stick2 = _interopRequireDefault(_Stick);

var _utils = require('../common/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var combine = function combine() {
    for (var _len = arguments.length, handlers = Array(_len), _key = 0; _key < _len; _key++) {
        handlers[_key] = arguments[_key];
    }

    return function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        handlers.forEach(function (handler) {
            return handler && handler.apply(undefined, args);
        });
    };
};

var layoutStyle = {
    stickNodeStyle: {
        zIndex: 10000,
        boxSizing: 'border-box',
        position: 'absolute'
    }
};

function createExpandCollapse(Input, Panel) {
    var collapseOnChange = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var ExpandCollapse = function (_Component) {
        _inherits(ExpandCollapse, _Component);

        function ExpandCollapse() {
            _classCallCheck(this, ExpandCollapse);

            var _this = _possibleConstructorReturn(this, (ExpandCollapse.__proto__ || Object.getPrototypeOf(ExpandCollapse)).apply(this, arguments));

            _this.state = {
                isExpanded: false
            };
            _this.collapse = _this.collapse.bind(_this);
            _this.expand = _this.expand.bind(_this);
            _this.handleFocusIn = _this.handleFocusIn.bind(_this);
            return _this;
        }

        _createClass(ExpandCollapse, [{
            key: 'render',
            value: function render() {
                var _this2 = this;

                var _props = this.props,
                    className = _props.className,
                    style = _props.style,
                    onFocus = _props.onFocus,
                    rest = _objectWithoutProperties(_props, ['className', 'style', 'onFocus']);

                var stickProps = {
                    className: className,
                    styleNode: (0, _utils.extendStyle)(style.stickNodeStyle, layoutStyle.stickNodeStyle),
                    node: this.state.isExpanded ? this.renderPanel() : null
                };

                return _react2.default.createElement(
                    _Stick2.default,
                    stickProps,
                    _react2.default.createElement(Input, _extends({
                        ref: function ref(_ref) {
                            var element = (0, _reactDom.findDOMNode)(_ref);
                            if (element === null) return;
                            _this2.input = element.tagName === 'INPUT' ? element : element.getElementsByTagName('input')[0];
                        }
                    }, rest, {
                        style: style.input,
                        onFocus: combine(this.expand, onFocus),
                        onCollapsePanel: this.collapse
                    }))
                );
            }
        }, {
            key: 'renderPanel',
            value: function renderPanel() {
                var _this3 = this;

                var _props2 = this.props,
                    onChange = _props2.onChange,
                    style = _props2.style,
                    rest = _objectWithoutProperties(_props2, ['onChange', 'style']);

                return _react2.default.createElement(Panel, _extends({
                    ref: function ref(_ref2) {
                        return _this3.panel = (0, _reactDom.findDOMNode)(_ref2);
                    }
                }, rest, {
                    style: style.panel,
                    onChange: combine(onChange, collapseOnChange ? function () {
                        return setTimeout(function () {
                            return _this3.collapse();
                        }, 0);
                    } : function () {}),
                    onCollapsePanel: this.collapse
                }));
            }
        }, {
            key: 'handleClickOutside',
            value: function handleClickOutside(_ref3) {
                var target = _ref3.target;

                if (this.panel && !this.panel.contains(target)) {
                    this.collapse();
                }
            }
        }, {
            key: 'expand',
            value: function expand() {
                if (!this.state.isExpanded) {
                    this.setState({ isExpanded: true });
                    document.body.addEventListener('focusin', this.handleFocusIn);
                }
            }
        }, {
            key: 'collapse',
            value: function collapse() {
                if (this.state.isExpanded) {
                    document.body.removeEventListener('focusin', this.handleFocusIn);
                    this.setState({ isExpanded: false });
                }
            }
        }, {
            key: 'handleFocusIn',
            value: function handleFocusIn(e) {
                var _document = document,
                    activeElement = _document.activeElement;

                var noFocus = activeElement.tagName === 'INPUT' && activeElement !== this.input;

                if (noFocus) {
                    this.collapse();
                }
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                document.body.removeEventListener('focusin', this.handleFocusIn);
            }
        }]);

        return ExpandCollapse;
    }(_react.Component);

    return (0, _reactClickOutside2.default)(ExpandCollapse);
}
//# sourceMappingURL=expandCollapse.js.map