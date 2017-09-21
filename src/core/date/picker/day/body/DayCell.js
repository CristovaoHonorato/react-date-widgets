import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment'
import hover from '../../../../_hoc/hover'

const Cell = props => {
    const {
        isDisabled,
        format,
        cellValue,
        onChange
    } = props

    const layoutStyle = {
        display: 'inline-block',
        boxSizing: 'border-box',
        verticalAlign: 'top',
        width: `${100/7}%`,
        padding: '4px 0',
        background: 'transparent',
        textAlign: 'center',
    }

    return (
        <span {...{
            className: 'day-cell-outter',
            title: cellValue.format(format),
            style: layoutStyle,
            onClick: isDisabled ? null : () => { onChange(cellValue) },
        }}>
            <div {...{
                style: applyStyle(props),
                className: 'day-cell',
            }}>{ cellValue.date() } </div>
        </span>
    )
}

Cell.propTypes = {
    widgetValue: PropTypes.instanceOf(moment),
    shadowValue: PropTypes.instanceOf(moment),
    cellValue: PropTypes.instanceOf(moment).isRequired,
    onChange: PropTypes.func.isRequired,
    format: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default hover(Cell)

function applyStyle({
    style, cellValue, shadowValue, isHovered, isDisabled, widgetValue
}) {
    const {
        shadowSelectedDay,
        selectedDay,
        today: todayStyle,
        prevMonthCell,
        nextMonthCell,
        disabled: disabledStyle,
        ':hover': {
            selectedDay: selectedDayHover,
            disabled: disabledHover,
            ...restHoverStyle
        },
        ...restStyle
    } = style

    const today = moment()
        .locale(shadowValue.locale())
        .utcOffset(shadowValue.utcOffset())

    const isShadowValue = cellValue.isSame(shadowValue, 'day')
    const isCellFromPrevMonth = cellValue.isBefore(shadowValue, 'month')
    const isCellFromNextMonth = cellValue.isAfter(shadowValue, 'month')
    const isToday = cellValue.isSame(today, 'day')
    const isWidgetValue = cellValue.isSame(widgetValue, 'day')

    const hoverStyle = {
        ...restHoverStyle,
        ...(isWidgetValue ? selectedDayHover : {}),
        ...(isDisabled ? disabledHover : {}),
    }

    return {
        textAlign: 'center',
        boxSizing: 'border-box',
        display: 'block',
        padding: 0,
        ...restStyle,
        ...(isToday ? todayStyle : {}),
        ...(isCellFromPrevMonth ? prevMonthCell : {}),
        ...(isCellFromNextMonth ? nextMonthCell : {}),
        ...(isHovered ? hoverStyle : {}),
        ...(isDisabled ? disabledStyle : {}),
        ...(isShadowValue ? shadowSelectedDay : {}),
        ...(isWidgetValue ? selectedDay : {}),
    }
}
