import PropTypes from 'prop-types';
import React from 'react';
import Button from '../common/Button'
import { omit } from '../common/utils'

const Footer = ({ value, defaultValue, style, onCollapsePanel }) => {

    const restStyle = omit(style, 'now', 'mode', 'ok' )

    return (
        <div className={'time-widget-footer'} style={restStyle}>
            <Button {...{
                isDisabled: false,
                style: style.ok,
                onClick: onCollapsePanel,
            }}>Ok</Button>
        </div>
    )
}

Footer.propTypes = {
    value: PropTypes.object,
    defaultValue: PropTypes.object.isRequired,
    onCollapsePanel: PropTypes.func.isRequired
}


export default Footer
