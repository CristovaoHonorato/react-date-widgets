import React, { PropTypes } from 'react'
import moment from 'moment'
import Button from '../common/Button'
import { omit } from '../common/utils'


const Footer = ({
    defaultValue, value = defaultValue, translations, style, onChange
}) => {
    const restStyle = omit(style, 'now', 'mode', 'ok' )

    return (
        <div className={'date-footer'} style={restStyle}>
            <Button {...{
                isDisabled: isToday(value),
                style: style.now,
                onClick: isToday(value)
                    ? () => {}
                    : () => { onChange(today(value || defaultValue)) },
            }}>{translations.today}</Button>
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
    translations: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Footer
