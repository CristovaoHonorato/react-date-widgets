import React, { PropTypes, PureComponent } from 'react'
import moment from 'moment'
import hover from '../_hoc/hover'
import { omit } from './utils'

class Input extends PureComponent {

    constructor(props) {
        super(props)
        const { value, format } = props
        this.state =  {
            stringValue: (value && value.format(format)) || '',
            invalid: false,
        }
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    render() {
        const { withClear } = this.props
        const withClearButton = withClear && Boolean(this.props.value)
        return (
            <div className='field' style={{position:'relative'}}>
                {this.renderInput()}
                {withClearButton ? this.renderClearButton() : null}
            </div>
        )
    }

    renderInput() {
        const {
            placeholder,
            style,
            onBlur,
        } = this.props
        const { invalid, stringValue } = this.state

        const { invalid: invalidStyle, ...rest } = omit(style, 'clearBtn')

        return (
            <input {...{
                className: 'date-picker-input',
                style: {
                    ...rest,
                    ...(invalid ? invalidStyle : {})
                },
                ref: (ref) => this.input = ref,
                value: stringValue,
                placeholder,
                onKeyDown: this.handleKeyDown,
                onChange: this.handleChange,
                onBlur,
                onFocus: this.handleFocus,
            }}/>
        )
    }

    handleChange({target}) {

        const { format, value, onChange } = this.props

        const parsed = (
            target.value &&
            moment(target.value, format, true)
        )

        this.setState({
            stringValue: target.value,
            invalid: Boolean(parsed && !parsed.isValid())
        }, () => {
            if(!parsed && value){
                onChange(null)
            }
            if(parsed && parsed.isValid() && (!value || !parsed.isSame(value))){
                onChange(parsed)
            }
        })
        /*
        const {value: stringValue} = target
        this.setState({stringValue})

        const { format, onChange, value} = this.props

        if(value && !stringValue) {
            onChange(null)
            return
        }

        const parsed = moment(stringValue, format, true)
        if (!parsed.isValid()) {
            this.setState({invalid: true})
            return
        }

        if ((value && !value.isSame(parsed)) || !value) {
            onChange(parsed)
        }
        this.setState({invalid: false})
        */
    }

    handleFocus(e) {
        const { onFocus } = this.props
        onFocus(e)
    }

    renderClearButton() {
        const { style, isHovered, clearText, onChange } = this.props
        const { clearBtn: clearBtnStyle={} } = style
        const { ':hover': hoveredStyle } = clearBtnStyle

        const styleIcon = {
            fontFamily: 'SignavioFont',
            fontStyle: 'normal',
            verticalAlign: 'top',
            WebkitFontSmoothing: 'antialiased',
            MozFontSmoothing: 'antialiased',
            MsFontSmoothing: 'antialiased',
            OFontSmoothing: 'antialiased',
            fontSmoothing: 'antialiased',
        }

        const props = {
            className: 'date-picker-input-clear-btn',
            style: {
                ...clearBtnStyle,
                ...(isHovered ? hoveredStyle : {})
            },
            title: clearText,
            onClick: () => onChange(null)
        }
        return (
            <div {...props}>
                <i style={styleIcon}>&#10005;</i>
            </div>
        )
    }

    handleClear(evt) {
        evt.preventDefault()
        this.setState({ stringValue: '' })
        this.props.onClear(evt)
    }

    handleKeyDown(evt) {
        if(evt.keyCode !== 13 && evt.keyCode !== 27) {
            return
        }
        const { onCollapsePanel, onKeyDown } = this.props
        this.input.blur()
        onCollapsePanel()
        onKeyDown && onKeyDown(evt)
    }

    componentWillReceiveProps(nextProps) {
        const { value, format } = nextProps

        this.setState({
            stringValue: (value && value.format(format)) || '',
            invalid: false,
        })
    }
}

Input.propTypes = {
    format: PropTypes.string,
    placeholder: PropTypes.string,
    clearText: PropTypes.string,
    value: PropTypes.object,
    withClear: PropTypes.bool,
    isExpanded: PropTypes.bool.isRequired,
    isHovered: PropTypes.bool.isRequired,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
    onCollapsePanel: PropTypes.func,
}

Input.defaultProps = {
    style: {
        invalid: {
            color: 'tomato'
        }
    },
    withClear: false,
    format: 'YYYY/MM/DD'
}

export default hover(Input)
