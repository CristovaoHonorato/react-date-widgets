'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _utils = require('../../../common/utils');

var _Cell = require('./Cell');

var _Cell2 = _interopRequireDefault(_Cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DATE_ROW_COUNT = 6;
var DATE_COL_COUNT = 7;

var Body = function Body(props) {
    var shadowValue = props.shadowValue,
        style = props.style,
        pickerHeight = props.pickerHeight;


    var dateTable = dayValues(shadowValue);

    return _react2.default.createElement(
        'div',
        { className: 'picker-body', style: { height: pickerHeight } },
        _react2.default.createElement(
            'div',
            { className: 'picker-header', style: { fontSize: 0, position: 'relative' } },
            dayNames(shadowValue).map(function (_ref, index) {
                var name = _ref.name,
                    title = _ref.title;
                return _react2.default.createElement(_Cell.HeaderCell, {
                    key: index,
                    name: name,
                    title: title,
                    style: style.bodyHeader
                });
            })
        ),
        (0, _utils.range)(DATE_ROW_COUNT).map(function (indexWeek) {
            return _react2.default.createElement(
                'div',
                { key: indexWeek, className: 'picker-row', style: { fontSize: 0 } },
                renderValues(dateTable, indexWeek, _extends({}, props, { style: (0, _utils.omit)(style, 'bodyHeader') }))
            );
        })
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

function renderValues(dateTable, rowNumber, props) {
    var shadowValue = props.shadowValue,
        minDate = props.minDate,
        maxDate = props.maxDate,
        style = props.style,
        value = props.value,
        rest = _objectWithoutProperties(props, ['shadowValue', 'minDate', 'maxDate', 'style', 'value']);

    var cellStyle = style.cell;


    return (0, _utils.range)(DATE_COL_COUNT).map(function (colNumber) {
        var currentCellNumber = rowNumber * DATE_COL_COUNT + colNumber;

        var cellValue = dateTable[currentCellNumber];
        var isFirstDisableDate = minDate && cellValue.isSame(minDate);
        var isLastDisableDate = maxDate && cellValue.isSame(maxDate);
        var isDisabled = !isAllowedDate(cellValue, minDate, maxDate);
        return _react2.default.createElement(_Cell2.default, _extends({}, rest, {
            widgetValue: value,
            isFirstDisableDate: isFirstDisableDate,
            isLastDisableDate: isLastDisableDate,
            cellValue: cellValue,
            shadowValue: shadowValue,
            isDisabled: isDisabled,
            style: (0, _utils.extendStyle)(cellLayoutStyle, cellStyle),
            key: currentCellNumber
        }));
    });
}

function dayNames(shadowValue) {
    var locale = shadowValue.localeData();

    return (0, _utils.range)(DATE_COL_COUNT).reduce(function (result, nextDay) {
        var now = (0, _moment2.default)().day((locale.firstDayOfWeek() + nextDay) % DATE_COL_COUNT);

        return [].concat(_toConsumableArray(result), [{
            name: locale.weekdaysMin(now),
            title: locale.weekdays(now)
        }]);
    }, []);
}

function dayValues(shadowValue) {

    var firstDay = shadowValue.clone().date(1);
    var firstWeekday = firstDay.day();
    var carryoverDay = (firstWeekday + 7 - shadowValue.localeData().firstDayOfWeek()) % 7;
    // calculate last month
    var startDate = firstDay.clone().add(0 - carryoverDay, 'days');

    var howMuch = DATE_ROW_COUNT * DATE_COL_COUNT;
    return (0, _utils.range)(howMuch).map(function (delta) {
        return startDate.clone().add(delta, 'days');
    });
}

function isAllowedDate(cellValue, minDate, maxDate) {
    var isAfter = !minDate ? true : cellValue.isAfter(minDate);
    var isBefore = !maxDate ? true : cellValue.isBefore(maxDate);
    return isBefore && isAfter;
}

Body.propTypes = {
    shadowValue: _react.PropTypes.instanceOf(_moment2.default).isRequired
};

exports.default = Body;
//# sourceMappingURL=Body.js.map