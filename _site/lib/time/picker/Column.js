'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utils = require('../../common/utils');

var _Entry = require('./Entry');

var _Entry2 = _interopRequireDefault(_Entry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var containerLayoutStyle = {
    display: 'inline-block',
    verticalAlign: 'top',
    borderWidth: '0 1px',
    borderStyle: 'solid',
    marginLeft: 0,
    boxSizing: 'border-box',
    borderRight: 'none',
    overflowX: 'hidden',
    overflowY: 'scroll',
    position: 'relative'
};

var ulLayoutStyle = {
    listStyle: 'none',
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    width: '100%',
    maxHeight: '144px'
};

var Column = function (_Component) {
    _inherits(Column, _Component);

    function Column() {
        _classCallCheck(this, Column);

        return _possibleConstructorReturn(this, (Column.__proto__ || Object.getPrototypeOf(Column)).apply(this, arguments));
    }

    _createClass(Column, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                options = _props.options,
                style = _props.style,
                selectedIndex = _props.selectedIndex,
                onChange = _props.onChange;

            var ulStyle = style.ul,
                entryStyle = style.entry,
                restStyle = _objectWithoutProperties(style, ['ul', 'entry']);

            return _react2.default.createElement(
                'div',
                {
                    className: 'panel-column',
                    style: (0, _utils.extendStyle)(containerLayoutStyle, restStyle)
                },
                _react2.default.createElement(
                    'ul',
                    {
                        ref: function ref(_ref) {
                            _this2.list = _ref;
                        },
                        style: (0, _utils.extendStyle)(ulLayoutStyle, ulStyle)
                    },
                    options.map(function (_ref2, index) {
                        var disabled = _ref2.disabled,
                            value = _ref2.value;
                        return _react2.default.createElement(_Entry2.default, {
                            key: index,
                            disabled: disabled,
                            selected: selectedIndex === index,
                            style: entryStyle,
                            value: value,
                            onChange: onChange
                        });
                    })
                )
            );
        }
    }, {
        key: 'scrollToSelected',
        value: function scrollToSelected(duration) {
            // move to selected item
            var select = _reactDom2.default.findDOMNode(this);
            var list = _reactDom2.default.findDOMNode(this.list);
            if (!list) {
                return;
            }
            var index = this.props.selectedIndex;
            if (index < 0) {
                index = 0;
            }
            var topOption = list.children[index];
            var to = topOption.offsetTop;
            scrollTo(select, to, duration);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            // jump to selected option
            this.scrollToSelected(0);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            // smooth scroll to selected option
            if (prevProps.selectedIndex !== this.props.selectedIndex) {
                this.scrollToSelected(120);
            }
        }
    }]);

    return Column;
}(_react.Component);

exports.default = Column;


Column.propTypes = {
    options: _react.PropTypes.array,
    selectedIndex: _react.PropTypes.number,
    type: _react.PropTypes.string,
    onChange: _react.PropTypes.func,
    onMouseEnter: _react.PropTypes.func
};

Column.defaultProps = {
    style: {
        li: {
            selected: {},
            disabled: {}
        }
    }
};

function scrollTo(element, to, duration) {
    var requestAnimationFrame = window.requestAnimationFrame || function requestAnimationFrameTimeout() {
        return setTimeout(arguments[0], 10);
    };
    // jump to target if duration zero
    if (duration <= 0) {
        element.scrollTop = to;
        return;
    }
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    requestAnimationFrame(function () {
        element.scrollTop += perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    });
}
//# sourceMappingURL=Column.js.map