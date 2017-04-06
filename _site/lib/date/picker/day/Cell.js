'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HeaderCell = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _hover = require('../../../_hoc/hover');

var _hover2 = _interopRequireDefault(_hover);

var _utils = require('../../../common/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Cell = function Cell(props) {
    var onDayHover = props.onDayHover,
        onChange = props.onChange,
        isDisabled = props.isDisabled,
        format = props.format,
        cellValue = props.cellValue,
        style = props.style;

    var inner = style.inner,
        styleOutter = _objectWithoutProperties(style, ['inner']);

    return _react2.default.createElement(
        'span',
        {
            style: styleOutter,
            onClick: isDisabled ? null : function () {
                onChange(cellValue);
            },
            onMouseEnter: isDisabled ? null : function () {
                onDayHover(cellValue);
            },
            title: cellValue.format(format),
            className: 'date-cell'
        },
        _react2.default.createElement(
            'div',
            {
                style: getCellStyle(_extends({}, props, { style: inner })),
                className: 'date-cell-outer'
            },
            cellValue.date(),
            ' '
        )
    );
};

Cell.propTypes = {
    widgetValue: _react.PropTypes.instanceOf(_moment2.default),
    shadowValue: _react.PropTypes.instanceOf(_moment2.default),
    cellValue: _react.PropTypes.instanceOf(_moment2.default).isRequired,
    onDayHover: _react.PropTypes.func,
    onChange: _react.PropTypes.func,
    format: _react.PropTypes.string,
    isDisabled: _react.PropTypes.bool
};

Cell.defaultProps = {
    onDayHover: function onDayHover() {},
    onChange: function onChange() {}
};

exports.default = (0, _hover2.default)(Cell);


function getCellStyle(_ref) {
    var style = _ref.style,
        cellValue = _ref.cellValue,
        shadowValue = _ref.shadowValue,
        isHovered = _ref.isHovered,
        isDisabled = _ref.isDisabled,
        isFirstDisableDate = _ref.isFirstDisableDate,
        isLastDisableDate = _ref.isLastDisableDate,
        widgetValue = _ref.widgetValue;

    var shadowSelectedDay = style.shadowSelectedDay,
        selectedDay = style.selectedDay,
        todayStyle = style.today,
        disabledCellFirstOfRow = style.disabledCellFirstOfRow,
        disabledCellLastOfRow = style.disabledCellLastOfRow,
        prevMonthCell = style.prevMonthCell,
        nextMonthCell = style.nextMonthCell,
        disabledStyle = style.disabled,
        _style$Hover = style[':hover'],
        selectedDayHover = _style$Hover.selectedDay,
        disabledHover = _style$Hover.disabled,
        restHoverStyle = _objectWithoutProperties(_style$Hover, ['selectedDay', 'disabled']),
        restStyle = _objectWithoutProperties(style, ['shadowSelectedDay', 'selectedDay', 'today', 'disabledCellFirstOfRow', 'disabledCellLastOfRow', 'prevMonthCell', 'nextMonthCell', 'disabled', ':hover']);

    var layoutStyle = {
        textAlign: 'center',
        boxSizing: 'border-box',
        display: 'block',
        padding: 0
    };

    var today = (0, _moment2.default)().locale(shadowValue.locale()).utcOffset(shadowValue.utcOffset());

    var isShadowValue = cellValue.isSame(shadowValue, 'day');
    var isCellFromPrevMonth = cellValue.isBefore(shadowValue, 'month');
    var isCellFromNextMonth = cellValue.isAfter(shadowValue, 'month');
    var isToday = cellValue.isSame(today, 'day');
    var isWidgetValue = cellValue.isSame(widgetValue, 'day');

    var hoverStyle = _extends({}, restHoverStyle, isWidgetValue ? selectedDayHover : {}, isDisabled ? disabledHover : {});

    return _extends({}, layoutStyle, restStyle, isToday ? todayStyle : {}, isFirstDisableDate ? disabledCellFirstOfRow : {}, isLastDisableDate ? disabledCellLastOfRow : {}, isCellFromPrevMonth ? prevMonthCell : {}, isCellFromNextMonth ? nextMonthCell : {}, isHovered ? hoverStyle : {}, isDisabled ? disabledStyle : {}, isShadowValue ? shadowSelectedDay : {}, isWidgetValue ? selectedDay : {});
}

var HeaderCell = exports.HeaderCell = function HeaderCell(_ref2) {
    var name = _ref2.name,
        title = _ref2.title,
        style = _ref2.style;

    var styleLayout = {
        boxSizing: 'boder-box',
        display: 'inline-block',
        textAlign: 'center',
        verticalAlign: 'top',
        width: 100 / 7 + '%',
        fontSize: 12,
        lineHeight: '18px',
        padding: '6px 0'
    };

    return _react2.default.createElement(
        'span',
        {
            className: 'weekday',
            style: (0, _utils.extendStyle)(styleLayout, style),
            title: title
        },
        _react2.default.createElement(
            'span',
            {
                className: 'weekday-inner',
                style: { display: 'block' }
            },
            name
        )
    );
};
//# sourceMappingURL=Cell.js.map