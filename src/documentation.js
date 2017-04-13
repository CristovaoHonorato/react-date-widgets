import React, { Component } from 'react'
import Timepicker from './core/time'
import DatePicker from './core/date'
import DateTimePicker from './core/date-time'

export class DatepickerStateful extends Component {
    constructor(...args) {
        super(...args)
        this.state = {
            valueDate: '',
        }
        this.handleChangeDate = this.handleChangeDate.bind(this)
    }
    render() {
        const { valueDate } = this.state
        const props = {
            withClear: true,
            onChange: this.handleChangeDate,
            value: valueDate,
            placeholder: 'please choose date',
            valueFormat: 'TYYYY:MM:DDZ',
            textFormat: 'YYYY/MM/DD',
        }
        return block(<DatePicker {...props} />, "DatePicker")
    }

    handleChangeDate(val) {
        this.setState({valueDate:val})
        console.log(`VALUE Date: ${val}`)
    }
}

export class DateTimepickerStateful extends Component {
    constructor(...args) {
        super(...args)
        this.state = { valueDateTime: '' }
        this.handleChangeDateTime = this.handleChangeDateTime.bind(this)
    }

    render() {
        const { valueDateTime } = this.state
        const props = {
            onChange: this.handleChangeDateTime,
            placeholder: 'please choose date and time',
            withClear: true,
            value: valueDateTime,
            valueFormat: 'TYYYY-MM-DD HH:mm:ssZ',
            textFormat: 'YYYY-MM-DD HH:mm:ss',
        }
        return block(<DateTimePicker {...props} />, "DateTimePicker")
    }

    handleChangeDateTime(val) {
        this.setState({valueDateTime:val})
        console.log(`VALUE DateTime: ${val}`)
    }
}

export class TimepickerStateful extends Component {
    constructor(...args) {
        super(...args)
        this.state = {
            valueTime: '',
        }
        this.handleChangeTime = this.handleChangeTime.bind(this)
    }

    render() {
        const props = {
            withClear: true,
            onChange: this.handleChangeTime,
            value: this.state.valueTime,
            placeholder: 'please choose time',
            valueFormat,
            textFormat,
        }

        return block(<Timepicker {...props} />, 'TimePicker')
    }


    handleChangeTime(val) {
        this.setState({valueTime:val})
        console.log(`VALUE Time: ${val}`)
    }
}

function block(inner, text){
    const style = {
        border: '1px solid #e9e9e9',
        borderRadius: '4px',
        position: 'relative',
        margin: '20px',
    }

    const styleHeader = {
        borderBottom: "1px solid #e9e9e9",
        padding: "42px 20px 50px"
    }

    const styleBody = {
        borderBottom: "1px solid #e9e9e9",
        padding: "17px 16px 15px 20px"
    }


    return (
        <div className='code-block' style={style}>
            <div style={styleHeader}>
                <div style={{width: 230}}>
                    {inner}
                </div>
            </div>
            <div style={styleBody}>
                {text}
            </div>
        </div>
    )
}
