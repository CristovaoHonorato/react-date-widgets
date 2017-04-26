import React, { Component } from 'react'
import Timepicker from './core/time'
import DatePicker from './core/date'
import DateTimePicker from './core/date-time'

const valueFormat = 'THH:mm:ssZ'
const textFormat = 'HH:mm:ss'

// const dateFormat = 'YYYY-MM-DD HH:mm:ss'

class App extends Component {
    constructor(...args) {
        super(...args)
        this.state = {
            valueTime: '',
            valueDate: '',
            valueDateTime: '',
        }
        this.handleChangeTime = this.handleChangeTime.bind(this)
        this.handleChangeDate = this.handleChangeDate.bind(this)
        this.handleChangeDateTime = this.handleChangeDateTime.bind(this)
    }

    render() {
        return (
            <div>
                {this.renderDate()}
                {this.renderDateTime()}
                {this.renderTime()}
            </div>
        )
    }

    renderDate() {
        const { valueDate } = this.state
        const props = {
            withClear: true,
            onChange: this.handleChangeDate,
            value: valueDate,
            placeholder: 'please choose date',
            valueFormat: 'TYYYY:MM:DDZ',
            textFormat: 'YYYY/MM/DD'
        }
        return block(<DatePicker {...props} />, this.props.datepickerText)
    }

    renderDateTime() {
        const { valueDateTime } = this.state
        const props = {
            onChange: this.handleChangeDateTime,
            placeholder: 'please choose date and time',
            withClear: true,
            value: valueDateTime,
            valueFormat: 'TYYYY-MM-DD HH:mm:ssZ',
            textFormat: 'YYYY-MM-DD HH:mm:ss',
        }
        return block(<DateTimePicker {...props} />, this.props.dateTimePickerText)
    }

    renderTime(){
        const { valueTime } = this.state
        const props = {
            withClear: true,
            onChange: this.handleChangeTime,
            value: valueTime,
            placeholder: 'please choose time',
            valueFormat,
            textFormat,
        }
        return block(<Timepicker {...props} />, this.props.timepickerText)
    }

    handleChangeTime(val) {
        this.setState({valueTime:val})
        console.log(`Time: ${val}`)
    }

    handleChangeDate(val) {
        this.setState({valueDate:val})
        console.log(`Date: ${val}`)
    }

    handleChangeDateTime(val) {
        this.setState({valueDateTime:val})
        console.log(`DateTime: ${val}`)
    }
}

App.defaultProps = {
    datepickerText: 'DatePicker',
    timepickerText: 'TimePicker',
    dateTimePickerText: 'DateTimePicker',
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
        // borderBottom: "1px solid #e9e9e9",
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
                <a dangerouslySetInnerHTML={{__html: text}} />
            </div>
        </div>
    )
}

export default App
