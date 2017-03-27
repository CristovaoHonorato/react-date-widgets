import React, { PropTypes, Component } from 'react'
import moment from 'moment'

export default function(Picker, defaultProps = {}){

    return class Widget extends Component {

        static propTypes = {
            clearText: PropTypes.string,
            value: PropTypes.string,
            withClear: PropTypes.bool,
            placeholder: PropTypes.string,
            textFormat: PropTypes.string.isRequired,
            valueFormat: PropTypes.string.isRequired,
            style: PropTypes.object,
            className: PropTypes.string,
            onChange: PropTypes.func,
        }

        static defaultProps = {
            clearText: 'clear',
            defaultValue: moment(),
            onChange: () => {},
            ...defaultProps
        }

        constructor(props){
            super(props)
            this.handleChange = this.handleChange.bind(this)
        }

        render(){

            const { value, valueFormat, textFormat, ...rest } = this.props

            return (
                <Picker {...{
                    ...rest,
                    value: value ? moment(value, valueFormat) :  null,
                    format: textFormat,
                    onChange: this.handleChange
                }}/>
            )

        }

        handleChange = value => {
            const { valueFormat } = this.props
            const text = value === null || !value.isValid()
                ? null
                : value.format(valueFormat)
            this.props.onChange(text)
        }

    }
}
