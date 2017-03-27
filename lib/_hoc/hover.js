'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = createHover;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function createHover(WrappedComponent) {
    var Hover = function (_Component) {
        _inherits(Hover, _Component);

        function Hover() {
            _classCallCheck(this, Hover);

            var _this = _possibleConstructorReturn(this, (Hover.__proto__ || Object.getPrototypeOf(Hover)).apply(this, arguments));

            _this.state = { isHovered: false };
            _this.boundEnter = _this.handleMouseEnter.bind(_this);
            _this.boundLeave = _this.handleMouseLeave.bind(_this);
            return _this;
        }

        _createClass(Hover, [{
            key: 'render',
            value: function render() {
                var isHovered = this.state.isHovered;

                return _react2.default.createElement(WrappedComponent, _extends({}, this.props, { isHovered: isHovered }));
            }
        }, {
            key: 'handleMouseEnter',
            value: function handleMouseEnter() {
                this.setState({ isHovered: true });
            }
        }, {
            key: 'handleMouseLeave',
            value: function handleMouseLeave() {
                this.setState({ isHovered: false });
            }
        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {
                var component = _reactDom2.default.findDOMNode(this);
                if (!component) return;

                component.addEventListener('mouseenter', this.boundEnter);
                component.addEventListener('mouseleave', this.boundLeave);
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                var component = _reactDom2.default.findDOMNode(this);
                if (!component) return;

                component.removeEventListener('mouseenter', this.boundEnter);
                component.removeEventListener('mouseleave', this.boundLeave);
            }
        }]);

        return Hover;
    }(_react.Component);

    return Hover;
}
//# sourceMappingURL=hover.js.map