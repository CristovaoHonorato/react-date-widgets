import React, {  PropTypes } from 'react'
import moment from 'moment'
import hover from '../../../_hoc/hover'
import { extendObject } from '../../../common/utils'

const Cell = props => {
    const {
        onDayHover,
        onChange,
        isDisabled,
        format,
        cellValue,
        style,
    } = props

    const {inner, ...styleOutter} = style
    return (
        <span {...{
            style: styleOutter,
            onClick: isDisabled ? null : () => { onChange(cellValue) },
            onMouseEnter: isDisabled ? null : () => { onDayHover(cellValue) },
            title: cellValue.format(format),
            className: 'date-cell',
        }}>
            <div {...{
                style: getCellStyle({...props, style: inner}),
                className: 'date-cell-inner',
            }}>{ cellValue.date() } </div>
        </span>
    )
}

Cell.propTypes = {
    widgetValue: PropTypes.instanceOf(moment),
    shadowValue: PropTypes.instanceOf(moment),
    cellValue: PropTypes.instanceOf(moment).isRequired,
    onDayHover: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    format: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default hover(Cell)

function getCellStyle({
    style, cellValue, shadowValue, isHovered, isDisabled,
    isFirstDisableDate, isLastDisableDate, widgetValue
}) {
    const {
        shadowSelectedDay,
        selectedDay,
        today: todayStyle,
        disabledCellFirstOfRow,
        disabledCellLastOfRow,
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

    const layoutStyle = {
        textAlign: 'center',
        boxSizing: 'border-box',
        display: 'block',
        padding: 0,
    }

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
        ...layoutStyle,
        ...restStyle,
        ...(isToday ? todayStyle : {}),
        ...(isFirstDisableDate ? disabledCellFirstOfRow : {}),
        ...(isLastDisableDate ? disabledCellLastOfRow : {}),
        ...(isCellFromPrevMonth ? prevMonthCell : {}),
        ...(isCellFromNextMonth ? nextMonthCell : {}),
        ...(isHovered ? hoverStyle : {}),
        ...(isDisabled ? disabledStyle : {}),
        ...(isShadowValue ? shadowSelectedDay : {}),
        ...(isWidgetValue ? selectedDay : {}),
    }
}

export const HeaderCell = ({name, title, style}) => {
    const styleLayout = {
        boxSizing: 'boder-box',
        display: 'inline-block',
        textAlign: 'center',
        verticalAlign: 'top',
        width: `${100/7}%`,
        fontSize: 12,
        lineHeight: '18px',
        padding: '6px 0',
    }

    return <span {...{
        className: 'weekday',
        style: extendObject(styleLayout, style),
        title
    }}>
        <span {...{
            className: 'weekday-inner',
            style: { display: 'block' }
        }}>{name}</span>
    </span>
}
