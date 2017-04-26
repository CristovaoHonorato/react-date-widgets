import React from 'react'
import Button from '../../common/Button'
import { deepAssign } from '../../common/utils'

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
    translations,
    defaultValue,
    value = defaultValue,
    style : { headerBtn, ...styleRest }
}) => (
    <div style={deepAssign(headerLayoutStyle, styleRest)}>
        <Button {...{
            className: 'day-select',
            style: deepAssign(headerBtnLayoutStyle, headerBtn),
            title: translations.daySelect
        }}>{(value || defaultValue).format(translations.dayFormat)}</Button>
        <Button {...{
            className: 'month-select',
            style: deepAssign(headerBtnLayoutStyle, headerBtn),
            title: translations.monthSelect
        }}>{(value || defaultValue).format(translations.monthFormat)}</Button>
        <Button {...{
            className: 'year-select',
            style: deepAssign(headerBtnLayoutStyle, headerBtn),
            title: translations.yearSelect,
        }}>{(value || defaultValue).format(translations.yearFormat)}</Button>
    </div>
)

export default Header
//export default () => null
