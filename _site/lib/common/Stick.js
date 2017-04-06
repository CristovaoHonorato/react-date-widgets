'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Stick = function (_PureComponent) {
    _inherits(Stick, _PureComponent);

    function Stick(props) {
        _classCallCheck(this, Stick);

        var _this = _possibleConstructorReturn(this, (Stick.__proto__ || Object.getPrototypeOf(Stick)).call(this, props));

        _this.state = {
            top: 0,
            left: 0,
            width: 0
        };
        return _this;
    }

    _createClass(Stick, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.measure();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.measure();
            if (this.props.node) {
                this.renderNode();
            }

            if (!this.props.node && this.container) {
                this.unmountNode();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            if (this.container) {
                this.unmountNode();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                className = _props.className,
                children = _props.children,
                style = _props.style;

            return _react2.default.createElement(
                'div',
                { className: className, style: style, ref: function ref(_ref) {
                        return _this2.element = _ref;
                    } },
                children
            );
        }
    }, {
        key: 'renderNode',
        value: function renderNode() {
            if (!this.container) {
                this.container = createContainer();
                this.track();
            }

            var _props2 = this.props,
                styleNode = _props2.styleNode,
                node = _props2.node;


            var className = 'stick-pointer';
            var style = _extends({}, styleNode || {}, this.state);

            _reactDom2.default.unstable_renderSubtreeIntoContainer(this, _react2.default.createElement('div', { className: className, style: style }, node), this.container);
        }
    }, {
        key: 'unmountNode',
        value: function unmountNode() {
            cancelAnimationFrame(this.animationId);
            _reactDom2.default.unmountComponentAtNode(this.container);
            document.body.removeChild(this.container);
            delete this.container;
        }
    }, {
        key: 'track',
        value: function track() {
            var _this3 = this;

            this.animationId = requestAnimationFrame(function () {
                return _this3.track();
            });
            this.measure();
        }
    }, {
        key: 'measure',
        value: function measure() {
            var newStyle = calculateStyle(this.props.position, this.element);
            this.setState(newStyle);
        }
    }]);

    return Stick;
}(_react.PureComponent);

Stick.defaultProps = {
    position: 'bottom left',
    styleNode: {
        position: 'absolute',
        zIndex: 10000
    }
};
exports.default = Stick;


function createContainer() {
    var container = document.createElement('div');
    document.body.appendChild(container);
    return container;
}

function calculateStyle(position, element) {
    switch (position) {
        case 'top left':
            return topLeft(element);
        case 'top right':
            return topRight(element);
        case 'top center':
            return topCenter(element);
        case 'bottom center':
            return bottomCenter(element);
        case 'bottom right':
            return bottomRight(element);
        case 'middle right':
            return middleRight(element);
        case 'middle center':
            return middleCenter(element);
        case 'middle left':
            return middleLeft(element);
        case 'bottom left':
        default:
            return bottomLeft(element);
    }
}

function topLeft(element) {
    var _element$getBoundingC = element.getBoundingClientRect(),
        width = _element$getBoundingC.width,
        left = _element$getBoundingC.left,
        top = _element$getBoundingC.top;

    return {
        width: width,
        left: left + scrollX(),
        top: top + scrollY()
    };
}

function topRight(element) {
    var _element$getBoundingC2 = element.getBoundingClientRect(),
        width = _element$getBoundingC2.width,
        right = _element$getBoundingC2.right,
        top = _element$getBoundingC2.top;

    return {
        width: width,
        left: right + scrollX(),
        top: top + scrollY()
    };
}

function topCenter(element) {
    var _element$getBoundingC3 = element.getBoundingClientRect(),
        width = _element$getBoundingC3.width,
        left = _element$getBoundingC3.left,
        top = _element$getBoundingC3.top;

    return {
        width: width,
        left: left + scrollX() + width / 2,
        top: top + scrollY()
    };
}

function bottomLeft(element) {
    var _element$getBoundingC4 = element.getBoundingClientRect(),
        width = _element$getBoundingC4.width,
        left = _element$getBoundingC4.left,
        bottom = _element$getBoundingC4.bottom;

    return {
        width: width,
        left: left + scrollX(),
        top: bottom + scrollY()
    };
}

function bottomRight(element) {
    var _element$getBoundingC5 = element.getBoundingClientRect(),
        width = _element$getBoundingC5.width,
        right = _element$getBoundingC5.right,
        bottom = _element$getBoundingC5.bottom;

    return {
        width: width,
        left: right + scrollX(),
        top: bottom + scrollY()
    };
}

function bottomCenter(element) {
    var _element$getBoundingC6 = element.getBoundingClientRect(),
        width = _element$getBoundingC6.width,
        left = _element$getBoundingC6.left,
        bottom = _element$getBoundingC6.bottom;

    return {
        width: width,
        left: left + scrollX() + width / 2,
        top: bottom + scrollY()
    };
}

function middleRight(element) {
    var _element$getBoundingC7 = element.getBoundingClientRect(),
        width = _element$getBoundingC7.width,
        height = _element$getBoundingC7.height,
        right = _element$getBoundingC7.right,
        top = _element$getBoundingC7.top;

    return {
        width: width,
        left: right + scrollX(),
        top: top + scrollY() + height / 2
    };
}

function middleCenter(element) {
    var _element$getBoundingC8 = element.getBoundingClientRect(),
        width = _element$getBoundingC8.width,
        height = _element$getBoundingC8.height,
        left = _element$getBoundingC8.left,
        top = _element$getBoundingC8.top;

    return {
        width: width,
        left: left + scrollX() + width / 2,
        top: top + scrollY() + height / 2
    };
}

function middleLeft(element) {
    var _element$getBoundingC9 = element.getBoundingClientRect(),
        width = _element$getBoundingC9.width,
        height = _element$getBoundingC9.height,
        left = _element$getBoundingC9.left,
        top = _element$getBoundingC9.top;

    return {
        width: width,
        left: left + scrollX(),
        top: top + scrollY() + height / 2
    };
}

//https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
function hasPageOffset() {
    return typeof window !== 'undefined' && _typeof(window.pageXOffset) !== undefined;
}

function isCSS1Compat() {
    var hasCompatMode = typeof document !== 'undefined' && typeof document.compatMode === 'string';
    var compatMode = hasCompatMode ? document.compatMode : '';
    return compatMode === 'CSS1Compat';
}

function scrollY() {
    if (typeof window !== 'undefined' && typeof window.scrollY === 'number') {
        return window.scrollY;
    }

    if (hasPageOffset() === true) {
        return window.pageYOffset;
    }

    if (isCSS1Compat() === true) {
        return document.documentElement.scrollTop;
    }

    var hasScrollTop = typeof document !== 'undefined' && typeof document.body !== 'undefined' && typeof document.body.scrollTop === 'number';

    return hasScrollTop ? document.body.scrollTop : 0;
}

function scrollX() {
    if (typeof window !== 'undefined' && typeof window.scrollX === 'number') {
        return window.scrollX;
    }

    if (hasPageOffset === true) {
        return window.pageXOffset;
    }

    if (isCSS1Compat === true) {
        return document.documentElement.scrollLeft;
    }

    var hasScrollLeft = typeof document !== 'undefined' && typeof document.body !== 'undefined' && typeof document.body.scrollLeft === 'number';

    return hasScrollLeft ? document.body.scrollLeft : 0;
}
//# sourceMappingURL=Stick.js.map