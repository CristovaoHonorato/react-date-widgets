import React, {  PropTypes } from 'react'
import moment from 'moment'
import hover from '../../../_hoc/hover'


const Cell = (props) => {
    const {
        contentRender,
        value, shadowValue,
        hoverValue,
        onDayHover,
        onChange,
        isDisabled,
        format,
        current,
        style,
    } = props
    const isBeforeCurrentMonthYear = beforeCurrentMonthYear(current, shadowValue)
    const isAfterCurrentMonthYear = afterCurrentMonthYear(current, shadowValue)
    // TODO: refactoring through props, inRangeClass
    // isRange ?
    const rangeValue = hoverValue.length ? hoverValue : value
    const [ startValue, endValue ] = Array.isArray(rangeValue) ? rangeValue  : []
    // isInRange
    // isStart or isEnd, TODO: refactor it!
    const isSelected = (
        // (Array.isArray(value) &&
        (!isBeforeCurrentMonthYear &&
        !isAfterCurrentMonthYear &&
        (isSameDay(current, startValue) || isSameDay(current, endValue))) ||
        isSameDay(current, shadowValue)
    )

    const onMouseEnter = isDisabled
        ? null
        : () => { onDayHover(current) }
    // TODO: pass format from props

    const {inner, ...styleOutter} = style
    return (
        <span
            style={styleOutter}
            onClick={isDisabled ? null : () => { onChange(current) }}
            onMouseEnter={onMouseEnter}
            title={shadowValue.format(format)} className={'date-cell'}
        >
            <div
                style={getCellStyle({...props, style: inner}, isSelected)}
                className={'date-cell-outer'}
                aria-selected={isSelected}
                aria-disabled={isDisabled}>
                    {contentRender
                        ? contentRender(current, shadowValue)
                        : current.date()
                    }
            </div>
        </span>
    )
}

Cell.propTypes = {
    contentRender: PropTypes.func,
    value: PropTypes.oneOfType(
        [PropTypes.object, PropTypes.arrayOf(PropTypes.object)]
    ),
    hoverValue: PropTypes.any,
    shadowValue: PropTypes.object,
}

Cell.defaultProps = {
    hoverValue: [],
    onDayHover: () => {},
    onChange: () => {},
}

export default hover(Cell)

function getCellStyle(
    {style, current, shadowValue, isHovered, isDisabled,
    isFirstDisableDate, isLastDisableDate, value},
    isSelected
) {
    const {
        shadowSelectedDay,
        selectedDay,
        today: todayStyle,
        disabledCellFirstOfRow,
        disabledCellLastOfRow,
        lastMonthCell,
        nextMonthBtnDay,
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
    const hoverStyle = {
        ...restHoverStyle,
        ...(isSelected ? selectedDayHover : {}),
        ...(isDisabled ? disabledHover : {}),
    }
    const isBeforeCurrentMonthYear = beforeCurrentMonthYear(current, shadowValue)
    const isAfterCurrentMonthYear = afterCurrentMonthYear(current, shadowValue)
    const today = getTodayTime(shadowValue)

    return {
        ...layoutStyle,
        ...restStyle,
        ...(isSameDay(current, today) ? todayStyle : {}),
        ...(isFirstDisableDate ? disabledCellFirstOfRow : {}),
        ...(isLastDisableDate ? disabledCellLastOfRow : {}),
        ...(isBeforeCurrentMonthYear ? lastMonthCell : {}),
        ...(isAfterCurrentMonthYear ? nextMonthBtnDay : {}),
        ...(isHovered ? hoverStyle : {}),
        ...(isDisabled ? disabledStyle : {}),
        ...(isSelected ? shadowSelectedDay : {}),
        ...(isSameDay(current, value) ? selectedDay : {}),
    }
}

function isSameDay(one, two) {
    return one && two && one.isSame(two, 'day')
}

function beforeCurrentMonthYear(current, today) {
    return current.year() < today.year()
        ? true
        : current.year() === today.year() && current.month() < today.month()
}

function afterCurrentMonthYear(current, today) {
    return current.year() > today.year()
        ? true
        : current.year() === today.year() && current.month() > today.month()
}

function getTodayTime(value) {
    return moment().locale(value.locale()).utcOffset(value.utcOffset())
}
