import React from 'react'
import hover from '../_hoc/hover'


const Button = ({
    className,
    children,
    isDisabled,
    isHovered,
    onClick,
    style : {':hover' : hover = {}, disabled = {}, ...rest} = {},
    title,
}) => (
    <a {...{
        className,
        title,
        style: {
            ...rest,
            ...(isDisabled ? disabled : {}),
            ...((isHovered && !isDisabled) ? hover : {})
        },
        onClick
    }}>
        {children}
    </a>
)

export default hover(Button)
