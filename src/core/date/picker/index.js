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
        switch(this.state.mode) {
            case 'day':
                return <DayPicker {...this.props}/>
            default:
                return <DayPicker {...this.props} />
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
