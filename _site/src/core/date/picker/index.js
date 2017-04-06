import React, { Component } from 'react'
import DayPicker from './day'

export default class DatePicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: 'day'
        }
    }

    render() {
        const { style: { day }, ...rest } = this.props
        switch(this.state.mode) {
            case 'day':
                return <DayPicker {...{...rest, style: day}} />
            default:
                return <DayPicker {...{...rest, style: day}} />
        }
    }

    /*
    componentWillReceiveProps(nextProps) {
        const { mode } = nextProps
        if(mode && mode !== this.state.mode)
            this.setState({mode})
    }
    */
}
