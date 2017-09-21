import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment'
import { range, omit } from '../../../../common/utils'
import DayCell from './DayCell'
import WeekdayCell from './WeekdayCell'

const DATE_ROW_COUNT = 6
const DATE_COL_COUNT = 7

const Body = props => {
    const { shadowValue, style } = props

    const dateTable = dayValues(shadowValue)

    const bodyStyle = omit(style, 'weekdayCell', 'dayCell')
    const layoutStyle = {
        fontSize: 0,
        position: 'relative'
    }

    return (
        <div className='day-picker-body' style={bodyStyle}>
            <div className='header' style={layoutStyle}>
                {dayNames(shadowValue).map(({name, title}, index) =>
                    <WeekdayCell {...{
                        key: index,
                        name,
                        title,
                        style: style.weekdayCell
                    }}/>
                )}
            </div>
            {range(DATE_ROW_COUNT).map(indexWeek => (
                <div key={indexWeek} className='row' style={layoutStyle}>
                    {renderValues(dateTable, indexWeek, props)}
                </div>
            ))}
        </div>
    )
}



function renderValues(dateTable, rowNumber, props) {
    const {
        shadowValue,
        minDate,
        maxDate,
        style,
        value,
        ...rest
    } = props

    return range(DATE_COL_COUNT).map((colNumber) => {
        const currentCellNumber = rowNumber * DATE_COL_COUNT + colNumber

        const cellValue = dateTable[currentCellNumber]
        const isDisabled = !isAllowedDate(cellValue, minDate, maxDate)
        return (
            <DayCell {...{
                ...rest,
                widgetValue: value,
                cellValue,
                shadowValue,
                isDisabled,
                style: style.dayCell,
                key: currentCellNumber
            }}/>
        )
    })
}

function dayNames(shadowValue){
    const locale = shadowValue.localeData()

    return range(DATE_COL_COUNT).reduce((result, nextDay) => {
        const now = moment().day(
            (locale.firstDayOfWeek() + nextDay) % DATE_COL_COUNT
        )

        return [
            ...result,
            {
                name: locale.weekdaysMin(now),
                title: locale.weekdays(now)
            }
        ]
    }, [])
}

function dayValues(shadowValue) {

    const firstDay = shadowValue.clone().date(1)
    const firstWeekday = firstDay.day()
    const carryoverDay = (
        (firstWeekday + 7 - shadowValue.localeData().firstDayOfWeek()) %
        7
    )
    // calculate last month
    const startDate = firstDay
        .clone()
        .add(0 - carryoverDay, 'days')

    const howMuch = DATE_ROW_COUNT * DATE_COL_COUNT
    return range(howMuch).map(delta =>
        startDate.clone().add(delta, 'days')
    )
}

function isAllowedDate(cellValue, minDate, maxDate) {
    const isAfter = !minDate ? true : cellValue.isAfter(minDate)
    const isBefore = !maxDate ? true : cellValue.isBefore(maxDate)
    return isBefore && isAfter
}


Body.propTypes = {
    shadowValue: PropTypes.instanceOf(moment).isRequired
}

export default Body
