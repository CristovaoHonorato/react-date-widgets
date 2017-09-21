import PropTypes from 'prop-types';
import React, { Component } from 'react';
import moment from 'moment'

import { deepAssign } from '../common/utils'

export default function(
    Picker, {
        style: defaultStyle, translations: defaultTranslations, ...defaultProps
    } = {}
){

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
            translations: PropTypes.object,
            maxDate: PropTypes.string,
            minDate: PropTypes.string,
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

            const {
                value,
                valueFormat,
                textFormat,
                translations,
                minDate,
                maxDate,
                style,
                ...rest
            } = this.props            

            return (
                <Picker {...{
                    ...rest,
                    value: value ? moment(value, valueFormat) :  null,
                    minDate: minDate ? moment(minDate, valueFormat) : null,
                    maxDate: maxDate ? moment(maxDate, valueFormat) : null,
                    format: textFormat,
                    onChange: this.handleChange,
                    style: deepAssign(defaultStyle, style),
                    translations: deepAssign(defaultTranslations, translations)
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
