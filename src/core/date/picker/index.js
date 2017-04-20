import React, { Component } from 'react'
import DayPicker from './day'
import MonthPicker from './month'
export default class DatePicker extends Component {
    constructor(props) {
        super(props)
        this.handleChangeMode = this.handleChangeMode.bind(this)
        this.handleShadowValueChange = this.handleShadowValueChange.bind(this)
        this.state = {
            mode: 'day',
            shadowValue: props.value || props.defaultValue,
        }
    }

    render() {
        const { style: { day }, ...rest } = this.props
        const { shadowValue } = this.state
        const commonProps = {
            ...rest,
            onChangeMode: this.handleChangeMode,
            onShadowValueChange: this.handleShadowValueChange,
            shadowValue,
        }
        switch(this.state.mode) {
            case 'day':
                return <DayPicker {...{...commonProps, style: day}} />
            case 'month':
                return <MonthPicker {...{...commonProps, style: day}} />
            default:
                return <DayPicker {...{onChangeMode: this.handleChangeMode, ...rest, style: day}} />
        }
    }

    handleChangeMode(mode) {
        this.setState({mode})
    }
    handleShadowValueChange(newValue) {
        this.setState({shadowValue: newValue})
    }

    /*
    componentWillReceiveProps(nextProps) {
        const { mode } = nextProps
        if(mode && mode !== this.state.mode)
            this.setState({mode})
    }
    */
}
