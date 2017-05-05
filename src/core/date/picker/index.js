import React, { Component } from 'react'
import DayPicker from './day'
import MonthPicker from './month'
import YearPicker from './year'

export default class DatePicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: 'day',
            shadowValue: props.value || props.defaultValue,
        }
        this.handleChangeMode = this.handleChangeMode.bind(this)
        this.handleShadowChange = this.handleShadowChange.bind(this)
    }

    render() {
        const {
            value,
            defaultValue,
            style: { day },
            ...rest
        } = this.props

        const props = {
            ...rest,
            value: value || defaultValue,
            shadowValue: this.state.shadowValue,
            onChangeMode: this.handleChangeMode,
            onShadowChange: this.handleShadowChange,
        }

        switch(this.state.mode) {

            case 'day':
                return <DayPicker {...{...props, style: day}} />

            case 'month':
               return <MonthPicker {...{...props, style: day}} />

            case 'year':
               return <YearPicker {...{...props, style: day}} />

            default:
                return <DayPicker {...{...props, style: day}} />
        }
    }

    handleChange(value) {
        if(this.isAllowedDate(value)){
            this.props.onChange(value)
        }
    }

    handleChangeMode(mode) {
        this.setState({mode})
    }

    handleShadowChange(nextValue, mode) {
        const newState = mode
            ? {shadowValue: nextValue, mode}
            : {shadowValue: nextValue}
        this.setState(newState)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.value && !nextProps.value.isSame(this.props.value)){
            this.setState({
                shadowValue: nextProps.value
            })
        }
    }

    isAllowedDate(value) {
        const { minDate, maxDate } = this.props
        const isAfter = !value || !minDate ? true : value.isAfter(minDate)
        const isBefore = !value || !maxDate ? true : value.isBefore(maxDate)
        return isBefore && isAfter
    }
}
