import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { range, omit, deepAssign } from '../../common/utils'

const showHour = format => (
    format.toLowerCase().indexOf('h') >= 0
)

const showMinute = format => (
    format.indexOf('m') >= 0
)

const showSecond = format => (
    format.toLowerCase().indexOf('s') >= 0
)


const formatOption = option => ({
    value: option < 10 ?  `0${option}` : `${option}`,
    disabled: false
})

const layoutStyle = {
    fontSize: 0,
    listStyle: 'none',
    outline: 'none',
    position: 'relative',
    textAlign: 'left',
}

export default function createPicker(Header, Column){

    class Picker extends Component {

        render() {
            const { style, format } = this.props
            const styleBody = {
                position: 'relative',
                ...omit(
                    style,
                    'header',
                    'hours',
                    'minutes',
                    'seconds',
                    'entry'
                )
            }

            return (
                <div {...{
                    className: 'time-picker',
                    style: layoutStyle,
                    tabIndex: '1',
                    onKeyDown: evt => {
                        const { onKeyDown, onCollapsePanel } = this.props
                        if(onKeyDown){
                            onKeyDown(evt)
                        }
                        if(evt.keyCode === 13 || evt.keyCode === 27){
                            onCollapsePanel()
                        }
                    }
                }}>
                    {this.renderHeader()}
                    <div className='body' style={styleBody}>
                        {showHour(format) ? this.renderHour() : null}
                        {showMinute(format) ? this.renderMinute() : null}
                        {showSecond(format) ? this.renderSecond() : null}
                    </div>
                </div>
            )
        }

        renderHeader() {
            const {
                value,
                style,
                translations,
                defaultValue,
            } = this.props

            const { header } = style
            return <Header {...{
                translations,
                value,
                defaultValue,
                style: header
            }}/>
        }

        renderHour() {
            const { style } = this.props
            const hourOptions = range(24)
            return (
                <Column {...{
                    style: hoursStyle(style),
                    options: hourOptions.map(formatOption),
                    selectedIndex: hourOptions.indexOf(hourValue(this.props)),
                    onChange: itemValue => {
                        const { value, defaultValue, onChange } = this.props
                        onChange(
                            (value || defaultValue).clone().hour(itemValue)
                        )
                    }
                }}/>
            )
        }

        renderMinute() {
            const { style } = this.props
            const minuteOptions = range(60)
            return (
                <Column {...{
                    style: minutesStyle(style),
                    options: minuteOptions.map(formatOption),
                    selectedIndex: minuteOptions.indexOf(minuteValue(this.props)),
                    onChange: itemValue => {
                        const { value, defaultValue, onChange } = this.props
                        onChange(
                            (value || defaultValue).clone().minute(itemValue)
                        )
                    },
                }}/>
            )
        }

        renderSecond() {
            const { style } = this.props
            const secondOptions = range(60)

            return (
                <Column {...{
                    style: secondsStyle(style),
                    options: secondOptions.map(formatOption),
                    selectedIndex: secondOptions.indexOf(secondValue(this.props)),
                    onChange: itemValue => {
                        const { value, defaultValue, onChange } = this.props
                        onChange(
                            (value || defaultValue).clone().second(itemValue)
                        )
                    },
                }}/>
            )
        }
    }

    Picker.propTypes = {
        defaultValue: PropTypes.object,
        value: PropTypes.object,
        onChange: PropTypes.func,
        onCollapsePanel: PropTypes.func.isRequired,
    }

    return Picker
}

function hourValue({value, defaultValue}) {
    return (value || defaultValue).hour()
}

function hoursStyle(style){
    return columnStyle(style, ':hours')
}

function minuteValue({value, defaultValue}) {
    return (value || defaultValue).minute()
}

function minutesStyle(style){
    return columnStyle(style, ':minutes')
}

function secondValue({value, defaultValue}) {
    return (value || defaultValue).second()
}

function secondsStyle(style){
    return columnStyle(style, ':seconds')
}


function columnStyle(style, columnName){
    return deepAssign(
        omit(style.column, ':hours', ':minutes', ':seconds'),
        style.column[columnName]
    )
}
