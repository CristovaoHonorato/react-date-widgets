import React, { PropTypes } from 'react'
import moment from 'moment'
import Button from '../common/Button'
import { omit } from '../common/utils'


const Footer = ({
    defaultValue, value = defaultValue, locale, style, onChange
}) => {

    const {
        nowBtn,
        ...restStyle
    } = omit(style, 'okBtn')

    return (
        <div className={'date-widget-footer'} style={restStyle}>
            <Button {...{
                isDisabled: isToday(value),
                style: nowBtn,
                onClick: isToday(value) ? () => {} : () => { onChange(today(value)) },
            }}>{locale.today}</Button>
        </div>
    )
}

function today(value){
    return moment()
        .locale(value.locale())
        .utcOffset(value.utcOffset())
}

function isToday(value){
    return moment().isSame(value, 'd')
}

Footer.propTypes = {
    value: PropTypes.object,
    defaultValue: PropTypes.object.isRequired,
    locale: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Footer
