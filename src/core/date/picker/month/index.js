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
        this.handleChange = this.handleChange.bind(this)

        this.state = {
            // shadowValue: props.value || props.defaultValue,
            value: props.value,
        }
    }

    render() {

        const { style, shadowValue } = this.props
        const { value } = this.state
        console.log(shadowValue);

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
            value,
            onShadowValueChange: this.setShadowValue,
            onChange: this.handleChange,
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
    //
    // handleChange(value) {
    //     if(!this.isAllowedDate(value))return
    //
    //     const {onChange} = this.props
    //
    //     const nextState = value !== null
    //         ? { value, shadowValue: value }
    //         : { value }
    //
    //     this.setState(
    //         nextState,
    //         () => onChange(value)
    //     )
    // }
    handleChange(value) {
        if(!this.isAllowedDate(value)) return

        const {onChange, onShadowValueChange} = this.props

        this.setState(
            {value},
            () => {
                onChange(value)
                value && onShadowValueChange(value)
            }
        )
    }

    setShadowValue(newValue) {
        this.props.onShadowValueChange(newValue)
        // this.setState({ shadowValue: newValue })
    }

    isAllowedDate(value) {
        const { minDate, maxDate } = this.props
        const isAfter = !value || !minDate ? true : value.isAfter(minDate)
        const isBefore = !value || !maxDate ? true : value.isBefore(maxDate)
        return isBefore && isAfter
    }
}

export default Panel
