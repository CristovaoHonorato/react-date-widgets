import React, { PropTypes } from 'react'
import moment from 'moment'
import Button from '../common/Button'

const Footer = ({
    mode,
    value,
    defaultValue,
    locale,
    style,
    onChange,
    onChangeMode,
    onCollapsePanel
}) => {

    const {
        nowBtn,
        selectTimeBtn,
        okButton,
        ...restStyle
    } = style

    const e1 = <Button {...{
        style: nowBtn,
        onClick: () => {
            onChange(now(value||defaultValue))
        },
    }}>{locale.now}</Button>

    const e2 = <Button {...{
        style: selectTimeBtn,
        onClick: onChangeMode,
    }}>{mode === 'time' ? locale.dateSelect : locale.timeSelect}</Button>

    const e3 = <Button key="ok" {...{
        style: okButton,
        onClick: onCollapsePanel,
    }}>{locale.ok}</Button>

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
    locale: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onChangeMode: PropTypes.func.isRequired,
    onCollapsePanel: PropTypes.func.isRequired
}


export default Footer
