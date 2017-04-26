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
            <div className={'day-picker-header'}
                style={deepAssign(layoutStyle.header, restStyle)}>
                <div style={{ position: 'relative' }}>
                    {this.renderPrevYearBtn()}
                    {this.renderPrevMonthBtn()}
                    {this.renderMonthYearElement()}
                    {this.renderNextMonthBtn()}
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

    renderPrevMonthBtn() {
        const {
            translations,
            style : { prevMonthBtn },
            onShadowChange,
            shadowValue
        } = this.props

        return <Button {...{
            style: deepAssign(
                {...layoutStyle.headerBtn, position: 'absolute', left: 25},
                prevMonthBtn
            ),
            className: 'prev-month-btn',
            title: translations.previousMonth,
            onClick: () => {
                const nextValue = shadowValue.clone().add(-1, 'months')
                onShadowChange(nextValue)
            }
        }}>‹</Button>
    }

    renderNextMonthBtn() {
        const {
            translations,
            style : { nextMonthBtn },
            onShadowChange,
            shadowValue
        } = this.props

        return <Button {...{
            style: deepAssign(
                {...layoutStyle.headerBtn, position: 'absolute', right: 25},
                nextMonthBtn
            ),
            className: 'next-month-btn',
            title: translations.nextMonth,
            onClick: () => {
                const nextValue = shadowValue.clone().add(1, 'months')
                onShadowChange(nextValue)
            }
        }}>›</Button>
    }

    renderMonthYearElement() {
        const { translations, shadowValue, style : {selectBtn}, onChangeMode } = this.props

        const monthBeforeYear = translations.monthBeforeYear
        const style = deepAssign(layoutStyle.selectBtn, selectBtn)
        const year = (
            <Button {...{
                className: 'year-select',
                style,
                title: translations.yearSelect,
                onClick: () => {onChangeMode('year')}
            }}>{shadowValue.format(translations.yearFormat)}</Button>
        )

        const month = (
            <Button {...{
                className: 'month-select',
                style,
                title: translations.monthSelect,
                onClick: () => {onChangeMode('month')}
            }}>{shadowValue.format(translations.monthFormat)}</Button>
        )

        return monthBeforeYear
            ? (
                <span>
                    {month}
                    {year}
                </span>
            )
            : (
                <span>
                    {year}
                    {month}
                </span>
            )
    }
}

Header.propTypes = {
    translations: PropTypes.object.isRequired,
    value: PropTypes.object,
    onShadowChange: PropTypes.func.isRequired,
}

export default Header
