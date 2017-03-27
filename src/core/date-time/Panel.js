import React, { Component } from 'react'

import {omit} from '../common/utils'

import Footer from './Footer'
import DatePicker from '../date/picker'
import {WithHeader as TimePicker} from '../time/picker'

export default class DateTimePicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mode: 'date'
        }
    }

    render(){
        const style = omit(this.props.style, 'picker', 'footer')
        return (
            <div className="widget-panel" style={style}>
                {this.renderPicker()}
                {this.renderFooter()}
            </div>
        )
    }

    renderPicker(){
        const { style, ...rest } = this.props
        switch(this.state.mode) {
            case 'date':
                return <DatePicker {...rest} style={style.picker.date}/>
            case 'time':
                return <TimePicker {...rest} style={style.picker.time} />
            default:
                return <DatePicker {...rest} style={style.picker.date} />
        }
    }

    renderFooter(){
        return <Footer {...{
            ...this.props,
            style: this.props.style.footer,
            mode: this.state.mode,
            onChangeMode: () => this.handleChangeMode()
        }}/>
    }

    handleChangeMode() {
        const { mode } = this.state
        this.setState({
            mode: mode === 'time' ? 'date' : 'time'
        })
    }
}
