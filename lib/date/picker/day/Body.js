'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../../../common/utils');

var _Cell = require('./Cell');

var _Cell2 = _interopRequireDefault(_Cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DATE_ROW_COUNT = 6;
var DATE_COL_COUNT = 7;

var Body = function Body(props) {
    var shadowValue = props.shadowValue;

    var firstDayOfMonth = shadowValue.clone().date(1);
    var firstDayOfMonthWeekday = firstDayOfMonth.day();
    var lastMonthDiffDay = (firstDayOfMonthWeekday + 7 - shadowValue.localeData().firstDayOfWeek()) % 7;
    // calculate last month
    var restDaysOfLastMonth = firstDayOfMonth.clone().add(0 - lastMonthDiffDay, 'days');

    var dateTable = genereateDateTable(restDaysOfLastMonth);

    var tableHtml = (0, _utils.range)(DATE_ROW_COUNT).map(function (rowNumber) {
        return _react2.default.createElement(
            'div',
            { key: rowNumber, className: 'picker-row', style: { fontSize: 0 } },
            renderCells(dateTable, rowNumber, props)
        );
    });

    return _react2.default.createElement(
        'div',
        { className: 'picker-body' },
        tableHtml
    );
};

var cellLayoutStyle = {
    display: 'inline-block',
    boxSizing: 'border-box',
    verticalAlign: 'top',
    width: 100 / 7 + '%',
    padding: '4px 0',
    background: 'transparent',
    textAlign: 'center'
};

function renderCells(dateTable, rowNumber, props) {
    var shadowValue = props.shadowValue,
        minDate = props.minDate,
        maxDate = props.maxDate,
        style = props.style,
        rest = _objectWithoutProperties(props, ['shadowValue', 'minDate', 'maxDate', 'style']);

    var cellStyle = style.cell;


    return (0, _utils.range)(DATE_COL_COUNT).map(function (colNumber) {
        var currentCellNumber = rowNumber * DATE_COL_COUNT + colNumber;

        var current = dateTable[currentCellNumber];
        var isFirstDisableDate = minDate && current.isSame(minDate);
        var isLastDisableDate = maxDate && current.isSame(maxDate);
        var isDisabled = !isAllowedDate(current, minDate, maxDate);
        return _react2.default.createElement(_Cell2.default, _extends({}, rest, {
            isFirstDisableDate: isFirstDisableDate,
            isLastDisableDate: isLastDisableDate,
            current: current,
            isDisabled: isDisabled,
            shadowValue: shadowValue,
            style: (0, _utils.extendStyle)(cellLayoutStyle, cellStyle),
            key: currentCellNumber
        }));
    });
}

function isAllowedDate(current, minDate, maxDate) {
    var isAfter = !minDate ? true : current.isAfter(minDate);
    var isBefore = !maxDate ? true : current.isBefore(maxDate);
    return isBefore && isAfter;
}

function genereateDateTable(startDate) {
    var howMuch = DATE_ROW_COUNT * DATE_COL_COUNT;
    return (0, _utils.range)(howMuch).map(function (dayCounter) {
        return startDate.clone().add(dayCounter, 'days');
    });
}

Body.propTypes = {
    shadowValue: _react.PropTypes.object
};

exports.default = Body;
//# sourceMappingURL=Body.js.map