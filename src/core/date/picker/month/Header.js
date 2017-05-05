import React, { PropTypes, Component } from 'react'
import Button from '../../../common/Button'
import { omit, deepAssign } from '../../../common/utils'


const layoutStyle = {
    header: {
        padding: '0 10px',
        height: '34px',
        lineHeight: '30px',
        textAlign: 'center',
        userSelect: 'none',
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
    },
    selectBtn: {
        display: 'inline-block',
        padding: '0 8px',
        lineHeight: '34px',
    },
    headerBtn: {
        position: 'absolute',
        top: '0',
        cursor: 'pointer',
        padding: '0 5px',
        display: 'inline-block',
        fontSize: '16px',
        lineHeight: '34px',
    }
}

class Header extends Component {

    render() {
        const { style } = this.props
        const restStyle = omit(
            style,
            'links',
            'commonBtn',
            'prevMonthBtn',
            'nextMonthBtn',
            'nextYearBtn',
            'prevYearBtn',
        )
        return (
            <div className={'date-picker-header'}
                style={deepAssign(layoutStyle.header, restStyle)}>
                <div style={{ position: 'relative' }}>
                    {this.renderPrevYearBtn()}
                    {this.renderYearElement()}
                    {this.renderNextYearBtn()}
                </div>
            </div>
        )
    }

    renderPrevYearBtn() {

        const {
            translations,
            style : {prevYearBtn},
            onShadowChange,
            shadowValue
        } = this.props

        return <Button {...{
            style: deepAssign(
                {...layoutStyle.headerBtn, left: 0}, prevYearBtn
            ),
            className: 'prev-year-btn',
            title: translations.previousYear,
            onClick: () => {
                const nextValue = shadowValue.clone().add(-1, 'years')
                onShadowChange(nextValue)
            }
        }}>«</Button>
    }

    renderNextYearBtn() {
        const {
            translations,
            style : {nextYearBtn},
            onShadowChange,
            shadowValue
        } = this.props

        return <Button {...{
            style: deepAssign(
                {...layoutStyle.headerBtn, right: 0}, nextYearBtn
            ),
            className: 'next-year-btn',
            title: translations.nextYear,
            onClick: () => {
                const nextValue = shadowValue.clone().add(1, 'years')
                onShadowChange(nextValue)
            }
        }}>»</Button>
    }

    renderYearElement() {
        const {
            translations,
            shadowValue,
            style : {selectBtn},
            onChangeMode
        } = this.props

        const style = deepAssign(layoutStyle.selectBtn, selectBtn)
        const year = (
            <Button {...{
                className: 'year-select',
                style,
                title: translations.yearSelect,
                onClick: () => {onChangeMode('year')}
            }}>{shadowValue.format(translations.yearFormat)}</Button>
        )
        return (<span> {year} </span>)
    }
}

Header.propTypes = {
    translations: PropTypes.object.isRequired,
    value: PropTypes.object,
    onShadowChange: PropTypes.func.isRequired,
}

export default Header
