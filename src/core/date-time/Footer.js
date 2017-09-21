import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment'
import Button from '../common/Button'
import { omit } from '../common/utils'

const Footer = ({
    mode,
    value,
    defaultValue,
    translations,
    style,
    onChange,
    onChangeMode,
    onCollapsePanel
}) => {

    const restStyle = omit(style, 'now', 'mode', 'ok' )

    const e1 = <Button {...{
        style: style.now,
        onClick: () => {
            onChange(now(value||defaultValue))
        },
    }}>{translations.now}</Button>

    const e2 = (<Button {...{
        style: style.mode,
        onClick: onChangeMode,
    }}>
        {mode === 'time' ? translations.dateSelect : translations.timeSelect}
    </Button>)

    const e3 = <Button key="ok" {...{
        style: style.ok,
        onClick: onCollapsePanel,
    }}>{translations.ok}</Button>

    return (
        <div className={'date-picker-footer'} style={restStyle}>
            {e1}
            {e2}
            {e3}
        </div>
    )
}

function now(value){
    return moment()
        .locale(value.locale())
        .utcOffset(value.utcOffset())
}


Footer.propTypes = {
    mode: PropTypes.oneOf(['time', 'date']).isRequired,
    value: PropTypes.object,
    defaultValue: PropTypes.object.isRequired,
    translations: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onChangeMode: PropTypes.func.isRequired,
    onCollapsePanel: PropTypes.func.isRequired
}


export default Footer
