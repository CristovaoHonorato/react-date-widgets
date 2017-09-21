import React, { Component } from 'react'

import Header from './Header'
import Body from './Body'

import { omit, deepAssign } from '../../../common/utils'

const layoutStyle = {
    position: 'relative',
    outline: 'none',
    width: '100%',
    minWidth: 200,
    listStyle: 'none',
    textAlign: 'left',
    lineHeight: '1.5',
}

class Panel extends Component {
    render() {
        const { style, ...rest } = this.props
        const props = {
            ...rest,
            autoFocus: true,
            tabIndex: '0',
            className: 'picker-month',
            style: deepAssign(layoutStyle, omit(style, 'body', 'header')),
        }

        return (
            <div {...props}>
                <Header
                    {...{
                        ...this.props,
                        style: style.header,
                    }}
                />
                <Body
                    {...{
                        ...this.props,
                        style: style.body,
                    }}
                />
            </div>
        )
    }
}

export default Panel
