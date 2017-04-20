import React, { PropTypes, Component } from 'react'
import Button from '../../../common/Button'
import { omit, extendObject } from '../../../common/utils'


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
                style={extendObject(layoutStyle.header, restStyle)}>
                <div style={{ position: 'relative' }}>
                    {this.renderPrevDecadeBtn()}
                    {this.renderYearElement()}
                    {this.renderNextDecadeBtn()}
                </div>
            </div>
        )
    }

    renderPrevDecadeBtn() {

        const {
            translations,
            style : {prevYearBtn},
            onShadowValueChange,
            shadowValue,
            onChangeToPreviousDecade,
        } = this.props

        return <Button {...{
            style: extendObject(
                {...layoutStyle.headerBtn, left: 0}, prevYearBtn
            ),
            className: 'prev-decade-btn',
            title: translations.previousDecade,
            onClick: onChangeToPreviousDecade,
            // onClick: () => {
            //     const nextValue = shadowValue.clone().add(-1, 'years')
            //     onShadowValueChange(nextValue)
            // }
        }}>«</Button>
    }

    renderNextDecadeBtn() {
        const {
            translations,
            style : {nextYearBtn},
            onShadowValueChange,
            shadowValue,
            onChangeToNextDecade
        } = this.props

        return <Button {...{
            style: extendObject(
                {...layoutStyle.headerBtn, right: 0}, nextYearBtn
            ),
            className: 'next-decade-btn',
            title: translations.nextDecade,
            onClick: onChangeToNextDecade,
            // onClick: () => {
            //     const nextValue = shadowValue.clone().add(1, 'years')
            //     onShadowValueChange(nextValue)
            // }
        }}>»</Button>
    }

    renderYearElement() {
        const {
            translations,
            shadowValue,
            style : {selectBtn},
            startYear,
            endYear
        } = this.props

        const style = extendObject(layoutStyle.selectBtn, selectBtn)
        const decade = (
            <Button {...{
                className: 'decade-select',
                style,
                title: translations.decadeSelect,
            }}>{startYear}-{endYear}</Button>
        )
        return (<span> {decade} </span>)
    }
}

Header.propTypes = {
    translations: PropTypes.object.isRequired,
    value: PropTypes.object,
    onShadowValueChange: PropTypes.func.isRequired,
}

export default Header

//
// <div className={`${prefixCls}-header`}>
//   <a
//     className={`${prefixCls}-prev-decade-btn`}
//     role="button"
//     onClick={this.previousDecade}
//     title={translations.previousDecade}
//   />
//   <a
//     className={`${prefixCls}-decade-select`}
//     role="button"
//     onClick={this.showDecadePanel}
//     title={translations.decadeSelect}
//   >
//     <span className={`${prefixCls}-decade-select-content`}>
//       {startYear}-{endYear}
//     </span>
//     <span className={`${prefixCls}-decade-select-arrow`}>x</span>
//   </a>
//
//   <a
//     className={`${prefixCls}-next-decade-btn`}
//     role="button"
//     onClick={this.nextDecade}
//     title={translations.nextDecade}
//   />
// </div>
