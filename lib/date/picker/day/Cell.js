'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _hover = require('../../../_hoc/hover');

var _hover2 = _interopRequireDefault(_hover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Cell = function Cell(props) {
    var contentRender = props.contentRender,
        value = props.value,
        shadowValue = props.shadowValue,
        hoverValue = props.hoverValue,
        onDayHover = props.onDayHover,
        onChange = props.onChange,
        isDisabled = props.isDisabled,
        format = props.format,
        current = props.current,
        style = props.style;

    var isBeforeCurrentMonthYear = beforeCurrentMonthYear(current, shadowValue);
    var isAfterCurrentMonthYear = afterCurrentMonthYear(current, shadowValue);
    // TODO: refactoring through props, inRangeClass
    // isRange ?
    var rangeValue = hoverValue.length ? hoverValue : value;

    var _ref = Array.isArray(rangeValue) ? rangeValue : [],
        _ref2 = _slicedToArray(_ref, 2),
        startValue = _ref2[0],
        endValue = _ref2[1];
    // isInRange
    // isStart or isEnd, TODO: refactor it!


    var isSelected =
    // (Array.isArray(value) &&
    !isBeforeCurrentMonthYear && !isAfterCurrentMonthYear && (isSameDay(current, startValue) || isSameDay(current, endValue)) || isSameDay(current, shadowValue);

    var onMouseEnter = isDisabled ? null : function () {
        onDayHover(current);
    };
    // TODO: pass format from props

    var inner = style.inner,
        styleOutter = _objectWithoutProperties(style, ['inner']);

    return _react2.default.createElement(
        'span',
        {
            style: styleOutter,
            onClick: isDisabled ? null : function () {
                onChange(current);
            },
            onMouseEnter: onMouseEnter,
            title: shadowValue.format(format), className: 'date-cell'
        },
        _react2.default.createElement(
            'div',
            {
                style: getCellStyle(_extends({}, props, { style: inner }), isSelected),
                className: 'date-cell-outer',
                'aria-selected': isSelected,
                'aria-disabled': isDisabled },
            contentRender ? contentRender(current, shadowValue) : current.date()
        )
    );
};

Cell.propTypes = {
    contentRender: _react.PropTypes.func,
    value: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.arrayOf(_react.PropTypes.object)]),
    hoverValue: _react.PropTypes.any,
    shadowValue: _react.PropTypes.object
};

Cell.defaultProps = {
    hoverValue: [],
    onDayHover: function onDayHover() {},
    onChange: function onChange() {}
};

exports.default = (0, _hover2.default)(Cell);


function getCellStyle(_ref3, isSelected) {
    var style = _ref3.style,
        current = _ref3.current,
        shadowValue = _ref3.shadowValue,
        isHovered = _ref3.isHovered,
        isDisabled = _ref3.isDisabled,
        isFirstDisableDate = _ref3.isFirstDisableDate,
        isLastDisableDate = _ref3.isLastDisableDate,
        value = _ref3.value;

    var shadowSelectedDay = style.shadowSelectedDay,
        selectedDay = style.selectedDay,
        todayStyle = style.today,
        disabledCellFirstOfRow = style.disabledCellFirstOfRow,
        disabledCellLastOfRow = style.disabledCellLastOfRow,
        lastMonthCell = style.lastMonthCell,
        nextMonthBtnDay = style.nextMonthBtnDay,
        disabledStyle = style.disabled,
        _style$Hover = style[':hover'],
        selectedDayHover = _style$Hover.selectedDay,
        disabledHover = _style$Hover.disabled,
        restHoverStyle = _objectWithoutProperties(_style$Hover, ['selectedDay', 'disabled']),
        restStyle = _objectWithoutProperties(style, ['shadowSelectedDay', 'selectedDay', 'today', 'disabledCellFirstOfRow', 'disabledCellLastOfRow', 'lastMonthCell', 'nextMonthBtnDay', 'disabled', ':hover']);

    var layoutStyle = {
        textAlign: 'center',
        boxSizing: 'border-box',
        display: 'block',
        padding: 0
    };
    var hoverStyle = _extends({}, restHoverStyle, isSelected ? selectedDayHover : {}, isDisabled ? disabledHover : {});
    var isBeforeCurrentMonthYear = beforeCurrentMonthYear(current, shadowValue);
    var isAfterCurrentMonthYear = afterCurrentMonthYear(current, shadowValue);
    var today = getTodayTime(shadowValue);

    return _extends({}, layoutStyle, restStyle, isSameDay(current, today) ? todayStyle : {}, isFirstDisableDate ? disabledCellFirstOfRow : {}, isLastDisableDate ? disabledCellLastOfRow : {}, isBeforeCurrentMonthYear ? lastMonthCell : {}, isAfterCurrentMonthYear ? nextMonthBtnDay : {}, isHovered ? hoverStyle : {}, isDisabled ? disabledStyle : {}, isSelected ? shadowSelectedDay : {}, isSameDay(current, value) ? selectedDay : {});
}

function isSameDay(one, two) {
    return one && two && one.isSame(two, 'day');
}

function beforeCurrentMonthYear(current, today) {
    return current.year() < today.year() ? true : current.year() === today.year() && current.month() < today.month();
}

function afterCurrentMonthYear(current, today) {
    return current.year() > today.year() ? true : current.year() === today.year() && current.month() > today.month();
}

function getTodayTime(value) {
    return (0, _moment2.default)().locale(value.locale()).utcOffset(value.utcOffset());
}
//# sourceMappingURL=Cell.js.map