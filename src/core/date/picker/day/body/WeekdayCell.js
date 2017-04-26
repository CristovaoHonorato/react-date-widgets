import React from 'react'

export default ({name, title, style = {}}) => {
    const styleLayout = {
        boxSizing: 'boder-box',
        display: 'inline-block',
        textAlign: 'center',
        verticalAlign: 'top',
        width: `${100/7}%`,
        fontSize: 12,
        lineHeight: '18px',
        padding: '6px 0',
    }

    return <span {...{
        className: 'weekday-cell',
        title,
        style: {
            ...styleLayout,
            ...style
        }
    }}>
        <span {...{
            className: 'weekday-cell-inner',
            style: { display: 'block' }
        }}>{name}</span>
    </span>
}
