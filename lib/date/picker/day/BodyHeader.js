'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _utils = require('../../../common/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DATE_COL_COUNT = 7;

var BodyHeader = function BodyHeader(_ref) {
    var shadowValue = _ref.shadowValue,
        style = _ref.style;

    var _genereateHeaderNames = genereateHeaderNames(shadowValue),
        veryShortWeekdays = _genereateHeaderNames.veryShortWeekdays,
        weekdays = _genereateHeaderNames.weekdays;

    return _react2.default.createElement(
        'div',
        { className: 'picker-header', style: { fontSize: 0, position: 'relative' } },
        weekdays.map(createWeekDaysRenderer(veryShortWeekdays, style))
    );
};

var columnHeaderLayoutStyle = {
    boxSizing: 'boder-box',
    display: 'inline-block',
    textAlign: 'center',
    verticalAlign: 'top',
    width: 100 / 7 + '%',
    fontSize: 12,
    lineHeight: '18px',
    padding: '6px 0'
};

function createWeekDaysRenderer(veryShortWeekdays, style) {
    var columnHeader = style.columnHeader;

    return function (day, xindex) {
        return _react2.default.createElement(
            'span',
            {
                key: xindex,
                className: 'column-header',
                style: (0, _utils.extendStyle)(columnHeaderLayoutStyle, columnHeader),
                title: day
            },
            _react2.default.createElement(
                'span',
                {
                    className: 'column-header-inner',
                    style: { display: 'block' }
                },
                veryShortWeekdays[xindex]
            )
        );
    };
}

function genereateHeaderNames(shadowValue) {
    //TODO move this to reduce functions
    var veryShortWeekdays = [];
    var weekdays = [];
    var localeData = shadowValue.localeData();
    var firstDayOfWeek = localeData.firstDayOfWeek();
    var now = (0, _moment2.default)();
    (0, _utils.range)(DATE_COL_COUNT).forEach(function (dateColIndex) {
        var index = (firstDayOfWeek + dateColIndex) % DATE_COL_COUNT;
        now.day(index);
        veryShortWeekdays[dateColIndex] = localeData.weekdaysMin(now);
        weekdays[dateColIndex] = localeData.weekdaysShort(now);
    });
    return {
        veryShortWeekdays: veryShortWeekdays,
        weekdays: weekdays
    };
}

exports.default = BodyHeader;
//# sourceMappingURL=BodyHeader.js.map