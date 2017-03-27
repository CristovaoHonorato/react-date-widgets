import React, {PropTypes} from 'react'
import Button from '../common/Button'
import { omit } from '../common/utils'

const Footer = ({ value, defaultValue, style, onCollapsePanel }) => {

    const {
        okBtn,
        ...restStyle
    } = omit(style, 'nowBtn')

    return (
        <div className={'time-widget-footer'} style={restStyle}>
            <Button {...{
                isDisabled: false,
                style: okBtn,
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
