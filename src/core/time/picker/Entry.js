import React from 'react'
import hover from '../../_hoc/hover'
import { extendObject } from '../../common/utils'

const layoutStyle = {
    listStyle: 'none',
    boxSizing: 'content-box',
    textAlign: 'center',
    cursor: 'pointer',
    width: '100%',
    userSelect: 'none',
}

const style = ({
    disabled,
    isHovered,
    selected,
    style,
}) => {
    const {
        ':selected' : selectedStyle,
        ':disabled' : disabledStyle,
        ...restStyle
    } = extendObject(layoutStyle, style)

    const { ':hover': hoveredStyle } = (disabled ? disabledStyle : style)

    return {
        ...restStyle,
        ...(selected ? selectedStyle : {}),
        ...(disabled ? disabledStyle : {}),
        ...(isHovered ? hoveredStyle : {})
    }
}

const Entry = ({disabled, value, onChange, ...rest}) => (
     <li {...{
         className: 'panel-entry',
         disabled,
         style: style({disabled, ...rest}),
         onClick: disabled ? null : () => onChange( value )
     }}>
         {value}
     </li>
)

export default hover(Entry)
