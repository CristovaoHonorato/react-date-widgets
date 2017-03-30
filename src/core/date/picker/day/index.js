import React, { PropTypes, PureComponent } from 'react'
import ReactDOM from 'react-dom'

import { omit, extendStyle } from '../../../common/utils'
import BodyHeader from './BodyHeader'
import Header from './Header'
import Body from './Body'

const KeyCode = {
    DOWN: 40,
    END: 35,
    ENTER: 13,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 33,
    PAGE_UP: 34,
    RIGHT: 39,
    UP: 38,
    ESC: 27,
}

const layoutStyle = {
    position: 'relative',
    outline: 'none',
    width: '100%',
    minWidth: 200,
    listStyle: 'none',
    textAlign: 'left',
    lineHeight: '1.5',
}

class Panel extends PureComponent {
    constructor(props) {
        super(props)
        this.setShadowValue = this.setShadowValue.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.handleChange = this.handleChange.bind(this)

        this.state = {
            shadowValue: props.value || props.defaultValue,
            value: props.value,
        }
    }

    render() {

        const { style, pickerHeight } = this.props
        const { shadowValue, value } = this.state

        const props = {
            autoFocus: true,
            tabIndex: "0",
            className: 'panel-day',
            style: extendStyle(layoutStyle, omit(style, 'day', 'month', 'year')),
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
            <div className='panel-day' {...props}>
                <Header {...{
                    ...childProps,
                    style: style.day.header
                }}/>
                <div className='picker' style={{height: pickerHeight}}>
                    <BodyHeader {...{
                        ...childProps,
                        style: style.day.bodyHeader
                    }}/>
                    <Body {...{
                        ...childProps,
                        style: style.day.body
                    }}/>
                </div>
            </div>
        )
    }

    handleChange(value) {
        value ? this.updateStateWithNotNullValue(value) : this.setValue(value)
    }

    updateStateWithNotNullValue(value) {
        if(!this.isAllowedDate(value)) return
        const { onChange } = this.props
        this.setState({
            value,
            shadowValue: value,
        }, () => { onChange(value) })
    }

    setValue(value) {
        const { onChange } = this.props
        if (this.isAllowedDate(value)) {
            this.setState({ value })
            onChange(value)
        }
    }

    setShadowValue(newValue) {
        this.setState({ shadowValue: newValue })
    }

    isAllowedDate(value) {
        const { minDate, maxDate } = this.props
        const isAfter = !value || !minDate ? true : value.isAfter(minDate)
        const isBefore = !value || !maxDate ? true : value.isBefore(maxDate)
        return isBefore && isAfter
    }

    handleKeyDown(event) {

        // mac
        const ctrlKey = event.ctrlKey || event.metaKey
        const { keyCode } = event
        const { onCollapsePanel } = this.props

        switch (keyCode) {

            case KeyCode.DOWN:
                event.preventDefault()
                goWeek.call(this, 1)
                return 1

            case KeyCode.UP:
                event.preventDefault()
                goWeek.call(this, -1)
                return 1

            case KeyCode.LEFT:
                event.preventDefault()
                if (ctrlKey) {
                    goYear.call(this, -1)
                } else {
                    goDay.call(this, -1)
                }
                return 1

            case KeyCode.RIGHT:
                event.preventDefault()
                if (ctrlKey) {
                    goYear.call(this, 1)
                } else {
                    goDay.call(this, 1)
                }
                return 1

            case KeyCode.HOME:
                event.preventDefault()
                goStartMonth.call(this)
                return 1

            case KeyCode.END:
                event.preventDefault()
                goEndMonth.call(this)
                return 1

            case KeyCode.PAGE_DOWN:
                event.preventDefault()
                goMonth.call(this, 1)
                return 1

            case KeyCode.PAGE_UP:
                event.preventDefault()
                goMonth.call(this, -1)
                return 1

            case KeyCode.ENTER:
                event.preventDefault()
                this.handleChange(this.state.shadowValue)
                return 1
            case KeyCode.ESC:
                event.preventDefault()
                onCollapsePanel()
                return 1
            default:
                //onKeyDown(event)
                return 1
        }
    }

    componentDidMount(){
        ReactDOM.findDOMNode(this).focus()
    }

    componentWillReceiveProps(nextProps) {
        const { value } = nextProps

        if (value && !value.isSame(this.state.value)) {
            this.setState({ value, shadowValue: value })
        }
    }
}

Panel.propTypes = {
    onCollapsePanel: PropTypes.func.isRequired,
    maxDate: PropTypes.object,
    minDate: PropTypes.object,
    value: PropTypes.object,
    defaultValue: PropTypes.object,
    style: PropTypes.object,
    onChange: PropTypes.func.isRequired,
}

function goStartMonth() {
    const next = this.state.shadowValue.clone()
    next.startOf('month')
    this.setShadowValue(next)
}

function goEndMonth() {
    const next = this.state.shadowValue.clone()
    next.endOf('month')
    this.setShadowValue(next)
}

function goTime(direction, unit) {
    const next = this.state.shadowValue.clone()
    next.add(direction, unit)
    this.setShadowValue(next)
}

function goMonth(direction) {
    return goTime.call(this, direction, 'months')
}

function goYear(direction) {
    return goTime.call(this, direction, 'years')
}

function goWeek(direction) {
    return goTime.call(this, direction, 'weeks')
}

function goDay(direction) {
    return goTime.call(this, direction, 'days')
}

export default Panel
