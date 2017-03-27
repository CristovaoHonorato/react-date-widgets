'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../common/Button');

var _Button2 = _interopRequireDefault(_Button);

var _utils = require('../common/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Footer = function Footer(_ref) {
    var value = _ref.value,
        defaultValue = _ref.defaultValue,
        style = _ref.style,
        onCollapsePanel = _ref.onCollapsePanel;

    var _omit = (0, _utils.omit)(style, 'nowBtn'),
        okBtn = _omit.okBtn,
        restStyle = _objectWithoutProperties(_omit, ['okBtn']);

    return _react2.default.createElement(
        'div',
        { className: 'time-widget-footer', style: restStyle },
        _react2.default.createElement(
            _Button2.default,
            {
                isDisabled: false,
                style: okBtn,
                onClick: onCollapsePanel
            },
            'Ok'
        )
    );
};

Footer.propTypes = {
    value: _react.PropTypes.object,
    defaultValue: _react.PropTypes.object.isRequired,
    onCollapsePanel: _react.PropTypes.func.isRequired
};

exports.default = Footer;
//# sourceMappingURL=Footer.js.map