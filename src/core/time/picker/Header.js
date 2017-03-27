import React from 'react'
import Button from '../../common/Button'
import { extendStyle } from '../../common/utils'

const headerBtnLayoutStyle = {
    display: 'inline-block',
    lineHeight: '34px',
    padding: '0 8px',
}

const headerLayoutStyle = {
    padding: '0 10px',
    height: '34px',
    lineHeight: '30px',
    textAlign: 'center',
    userSelect: 'none',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
}

const Header = ({
    locale,
    defaultValue,
    value = defaultValue,
    style : { headerBtn, ...styleRest }
}) => (
    <div style={extendStyle(headerLayoutStyle, styleRest)}>
        <Button {...{
            className: 'day-select',
            style: extendStyle(headerBtnLayoutStyle, headerBtn),
            title: locale.daySelect
        }}>{(value || defaultValue).format(locale.dayFormat)}</Button>
        <Button {...{
            className: 'month-select',
            style: extendStyle(headerBtnLayoutStyle, headerBtn),
            title: locale.monthSelect
        }}>{(value || defaultValue).format(locale.monthFormat)}</Button>
        <Button {...{
            className: 'year-select',
            style: extendStyle(headerBtnLayoutStyle, headerBtn),
            title: locale.yearSelect,
        }}>{(value || defaultValue).format(locale.yearFormat)}</Button>
    </div>
)

export default Header
