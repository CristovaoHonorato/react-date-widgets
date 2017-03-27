import React from 'react'
import moment from 'moment'

import { range, extendStyle } from '../../../common/utils'

const DATE_COL_COUNT = 7

const BodyHeader = ({shadowValue, style}) => {

    const { veryShortWeekdays, weekdays } = genereateHeaderNames(shadowValue)

    return (
        <div className='picker-header' style={{fontSize:0, position: 'relative'}}>
          {weekdays.map( createWeekDaysRenderer(veryShortWeekdays, style) )}
        </div>
    )
}

const columnHeaderLayoutStyle = {
    boxSizing: 'boder-box',
    display: 'inline-block',
    textAlign: 'center',
    verticalAlign: 'top',
    width: `${100/7}%`,
    fontSize: 12,
    lineHeight: '18px',
    padding: '6px 0',
}

function createWeekDaysRenderer(veryShortWeekdays, style) {
    const { columnHeader } = style
    return (day, xindex) => (
        <span {...{
            key: xindex,
            className: 'column-header',
            style: extendStyle(columnHeaderLayoutStyle, columnHeader),
            title: day
        }}>
            <span {...{
                className: 'column-header-inner',
                style: { display: 'block' }
            }}>{veryShortWeekdays[xindex]}</span>
        </span>
    )
}


function genereateHeaderNames(shadowValue) {
    //TODO move this to reduce functions
    const veryShortWeekdays =[]
    const weekdays =[]
    const localeData = shadowValue.localeData()
    const firstDayOfWeek = localeData.firstDayOfWeek()
    const now = moment()
    range(DATE_COL_COUNT).forEach((dateColIndex) => {
        const index = (firstDayOfWeek + dateColIndex) % DATE_COL_COUNT
        now.day(index)
        veryShortWeekdays[dateColIndex] = localeData.weekdaysMin(now)
        weekdays[dateColIndex] = localeData.weekdaysShort(now)
    })
    return {
        veryShortWeekdays,
        weekdays
    }
}

export default BodyHeader
