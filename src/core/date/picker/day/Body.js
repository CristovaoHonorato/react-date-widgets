import React, { PropTypes } from 'react'
import { range, extendStyle } from '../../../common/utils'
import Cell from './Cell'

const DATE_ROW_COUNT = 6
const DATE_COL_COUNT = 7

const Body = (props) => {
    const { shadowValue } = props
    const firstDayOfMonth = shadowValue.clone().date(1)
    const firstDayOfMonthWeekday = firstDayOfMonth.day()
    const lastMonthDiffDay = (
        (firstDayOfMonthWeekday + 7 - shadowValue.localeData().firstDayOfWeek()) % 7)
    // calculate last month
    const restDaysOfLastMonth = firstDayOfMonth
        .clone().add(0 - lastMonthDiffDay, 'days')

    const dateTable = genereateDateTable(restDaysOfLastMonth)

    const tableHtml = range(DATE_ROW_COUNT).map((rowNumber) => {
        return (
            <div key={rowNumber} className='picker-row' style={{fontSize: 0}}>
                {renderCells(dateTable, rowNumber, props)}
            </div>
        )
    })

    return (
        <div className='picker-body'>
            {tableHtml}
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

function renderCells(dateTable, rowNumber, props) {
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

function isAllowedDate(cellValue, minDate, maxDate) {
    const isAfter = !minDate ? true : cellValue.isAfter(minDate)
    const isBefore = !maxDate ? true : cellValue.isBefore(maxDate)
    return isBefore && isAfter
}

function genereateDateTable(startDate) {
    const howMuch = DATE_ROW_COUNT * DATE_COL_COUNT
    return range(howMuch).map(
        (dayCounter) => startDate.clone().add(dayCounter, 'days')
    )
}

Body.propTypes = {
    shadowValue: PropTypes.object,
}

export default Body
