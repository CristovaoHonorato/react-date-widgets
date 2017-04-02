import React, { PropTypes } from 'react'
import moment from 'moment'
import { range, extendStyle } from '../../../common/utils'
import Cell, {HeaderCell} from './Cell'

const DATE_ROW_COUNT = 6
const DATE_COL_COUNT = 7

const Body = props => {
    const { shadowValue, style, pickerHeight } = props

    const dateTable = dayValues(shadowValue)

    return (
        <div className='picker-body' style={{height: pickerHeight}}>
            <div className='picker-header' style={{fontSize:0, position: 'relative'}}>
                {dayNames(shadowValue).map(({name, title}, index) =>
                    <HeaderCell {...{
                        key: index,
                        name,
                        title,
                        style: style.bodyHeader.columnHeader
                    }}/>
                )}
            </div>
            {range(DATE_ROW_COUNT).map(indexWeek => (
                <div key={indexWeek} className='picker-row' style={{fontSize: 0}}>
                    {renderValues(dateTable, indexWeek, {...props, style: style.body})}
                </div>
            ))}
        </div>
    )
}

const cellLayoutStyle = {
    display: 'inline-block',
    boxSizing: 'border-box',
    verticalAlign: 'top',
    width: `${100/7}%`,
    padding: '4px 0',
    background: 'transparent',
    textAlign: 'center',
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
    const { cell: cellStyle } = style

    return range(DATE_COL_COUNT).map((colNumber) => {
        const currentCellNumber = rowNumber * DATE_COL_COUNT + colNumber

        const cellValue = dateTable[currentCellNumber]
        const isFirstDisableDate = minDate && cellValue.isSame(minDate)
        const isLastDisableDate = maxDate && cellValue.isSame(maxDate)
        const isDisabled = !isAllowedDate(cellValue, minDate, maxDate)
        return (
            <Cell {...{
                ...rest,
                widgetValue: value,
                isFirstDisableDate,
                isLastDisableDate,
                cellValue,
                shadowValue,
                isDisabled,
                style: extendStyle(cellLayoutStyle, cellStyle),
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
