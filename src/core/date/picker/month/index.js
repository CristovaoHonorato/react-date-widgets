import React, { PropTypes, Component } from 'react'
// import moment from 'moment'

import Header from './Header'
import Body from './Body'

import { omit, extendObject } from '../../../common/utils'

const layoutStyle = {
    position: 'relative',
    outline: 'none',
    width: '100%',
    minWidth: 200,
    listStyle: 'none',
    textAlign: 'left',
    lineHeight: '1.5',
}

class Panel extends Component {
    constructor(props) {
        super(props)
        this.setShadowValue = this.setShadowValue.bind(this)
        // this.handleKeyDown = this.handleKeyDown.bind(this)
    }

    render() {
        const { style, shadowValue } = this.props

        const props = {
            autoFocus: true,
            tabIndex: "0",
            className: 'picker-day',
            style: extendObject(layoutStyle, omit(style, 'body', 'header')),
            onKeyDown: this.handleKeyDown
        }

        const childProps = {
            ...this.props,
            shadowValue,
            onShadowValueChange: this.setShadowValue,
        }
        return (
            <div {...props}>
                <Header {...{
                    ...childProps,
                    style: style.header
                }}/>
                <Body {...{
                    ...childProps,
                    style: style.body
                }}/>
            </div>
        )
    }

    setShadowValue(newValue) {
        this.props.onShadowValueChange(newValue)
    }

    isAllowedDate(value) {
        const { minDate, maxDate } = this.props
        const isAfter = !value || !minDate ? true : value.isAfter(minDate)
        const isBefore = !value || !maxDate ? true : value.isBefore(maxDate)
        return isBefore && isAfter
    }
}

export default Panel
