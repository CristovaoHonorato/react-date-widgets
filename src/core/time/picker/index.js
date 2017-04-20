import React, { PropTypes, Component } from 'react'
import { range, omit, extendObject } from '../../common/utils'
import Column from './Column'
import _Header from './Header'

const showHour = format => (
    format.toLowerCase().indexOf('h') >= 0
)

const showMinute = format => (
    format.indexOf('m') >= 0
)

const showSecond = format => (
    format.toLowerCase().indexOf('s') >= 0
)

const columnNumber = format => (
    Number(showHour(format)) +
    Number(showMinute(format)) +
    Number(showSecond(format))
)

const formatOption = option => ({
    value: option < 10 ?  `0${option}` : `${option}`,
    disabled: false
})

const layoutStyle = {
    fontSize: 0,
    listStyle: 'none',
    outline: 'none',
    overflowX: 'hidden',
    position: 'relative',
    textAlign: 'left',
}

function createPicker(Header){

    class Picker extends Component {

        render() {
            const { style, format, pickerHeight } = this.props
            const { ...restStyle } = omit(style, 'header', 'column')

            return (
                <div {...{
                    className: 'panel',
                    style: extendObject(layoutStyle, restStyle),
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
                    <div className='column-container' style={{height: pickerHeight}}>
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
            const { format } = this.props
            const hourOptions = range(24)
            return (
                <Column {...{
                    style: hourStyle(this.props, columnNumber(format)),
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
            const { format } = this.props
            const minuteOptions = range(60)
            return (
                <Column {...{
                    style: minuteStyle(this.props, columnNumber(format)),
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
            const { format } = this.props
            const secondOptions = range(60)
            return (
                <Column {...{
                    style: secondStyle(this.props, columnNumber(format)),
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

export default createPicker(() => null)
export const WithHeader = createPicker(_Header)

function hourStyle({style = {}}, columnNumber) {

    const {column = {}} = style
    return {
        ...column,
        width: columnNumber === 3 ? '33%' : `${100/columnNumber}%`,
    }
}

function hourValue({value, defaultValue}) {
    return (value || defaultValue).hour()
}

function minuteStyle({style = {}}, columnNumber) {

    const {column = {}} = style
    return {
        ...column,
        width: columnNumber === 3 ? '34%' : `${100/columnNumber}%`
    }
}

function minuteValue({value, defaultValue}) {
    return (value || defaultValue).minute()
}

function secondStyle({style = {}}, columnNumber) {

    const {column = {}} = style
    return {
        ...column,
        width: columnNumber === 3 ? '33%' : `${100/columnNumber}%`,
    }
}

function secondValue({value, defaultValue}) {
    return (value || defaultValue).second()
}
