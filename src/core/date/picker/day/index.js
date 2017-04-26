import React, { PropTypes, PureComponent } from 'react'
import ReactDOM from 'react-dom'

import { omit, deepAssign } from '../../../common/utils'
import Header from './Header'
import Body from './body'

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
        this.handleKeyDown = this.handleKeyDown.bind(this)
    }

    render() {

        const { style } = this.props

        const props = {
            autoFocus: true,
            tabIndex: "0",
            className: 'picker-day',
            style: deepAssign(layoutStyle, omit(style, 'body', 'header')),
            onKeyDown: this.handleKeyDown
        }

        return (
            <div {...props}>
                <Header {...{
                    ...this.props,
                    style: style.header
                }}/>
                <Body {...{
                    ...this.props,
                    style: style.body
                }}/>
            </div>
        )
    }

    handleKeyDown(event) {

        // mac
        const ctrlKey = event.ctrlKey || event.metaKey
        const { keyCode } = event
        const { shadowValue, onCollapsePanel } = this.props

        const SC = v => this.props.onShadowChange(v)

        switch (keyCode) {

            case KeyCode.DOWN:
                event.preventDefault()
                SC(shadowValue
                    .clone()
                    .add(1, 'weeks')
                )
                return 1

            case KeyCode.UP:
                event.preventDefault()
                SC(shadowValue
                    .clone()
                    .add(-1, 'weeks')
                )
                return 1

            case KeyCode.LEFT:
                event.preventDefault()
                SC(shadowValue
                    .clone()
                    .add(-1, ctrlKey ? 'years' : 'days')
                )
                return 1

            case KeyCode.RIGHT:
                event.preventDefault()
                SC(shadowValue
                    .clone()
                    .add(1, ctrlKey ? 'years' : 'days')
                )
                return 1

            case KeyCode.HOME:
                event.preventDefault()
                SC(shadowValue
                    .clone()
                    .startOf('month')
                )
                return 1

            case KeyCode.END:
                event.preventDefault()
                SC(shadowValue
                    .clone()
                    .endOf('month')
                )
                return 1

            case KeyCode.PAGE_DOWN:
                event.preventDefault()
                SC(shadowValue
                    .clone()
                    .add(1, 'months')
                )
                return 1

            case KeyCode.PAGE_UP:
                event.preventDefault()
                SC(shadowValue
                    .clone()
                    .add(-1, 'months')
                )
                return 1

            case KeyCode.ENTER:
                event.preventDefault()
                this.props.onChange(this.props.shadowValue)
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
}

Panel.propTypes = {
    onCollapsePanel: PropTypes.func.isRequired,
    maxDate: PropTypes.object,
    minDate: PropTypes.object,
    value: PropTypes.object,
    style: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    onShadowChange: PropTypes.func.isRequired
}


export default Panel
