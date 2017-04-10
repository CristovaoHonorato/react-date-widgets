import React, { PropTypes, Component } from 'react'
import ReactDom from 'react-dom'
import { extendStyle } from '../../common/utils'
import Entry from './Entry'

const containerLayoutStyle = {
    display: 'inline-block',
    verticalAlign:'top',
    borderWidth: '0 1px',
    borderStyle: 'solid',
    marginLeft: 0,
    boxSizing: 'border-box',
    borderRight: 'none',
    overflowX: 'hidden',
    overflowY: 'scroll',
    position: 'relative',
}

const ulLayoutStyle = {
    listStyle: 'none',
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    width: '100%',
    maxHeight: '144px',
}

export default class Column extends Component {

    render() {

        const { options, style, selectedIndex, onChange } = this.props
        const { ul: ulStyle, entry: entryStyle, ...restStyle } = style

        return (
            <div {...{
                className: 'panel-column',
                style: extendStyle(containerLayoutStyle, restStyle)
            }}>
                <ul {...{
                    ref: (ref) => {this.list = ref},
                    style: extendStyle(ulLayoutStyle, ulStyle),
                }}>
                    {options.map(({disabled, value}, index) => (
                        <Entry {...{
                            key: index,
                            disabled,
                            selected: selectedIndex === index,
                            style: entryStyle,
                            value,
                            onChange
                        }}/>
                    ))}
                </ul>
            </div>
        )
    }

    scrollToSelected(duration) {
        // move to selected item
        const select = ReactDom.findDOMNode(this)
        const list = ReactDom.findDOMNode(this.list)
        if (!list) {
            return
        }
        let index = this.props.selectedIndex
        if (index < 0) {
            index = 0
        }
        const topOption = list.children[index]
        const to = topOption.offsetTop
        scrollTo(select, to, duration)
    }


    componentDidMount() {
        // jump to selected option
        this.scrollToSelected(0)
    }

    componentDidUpdate(prevProps) {
        // smooth scroll to selected option
        if (prevProps.selectedIndex !== this.props.selectedIndex) {
            this.scrollToSelected(120)
        }
    }
}

Column.propTypes = {
    options: PropTypes.array,
    selectedIndex: PropTypes.number,
    onChange: PropTypes.func,
    onMouseEnter: PropTypes.func
}

Column.defaultProps = {
    style: {
        li: {
            selected: {},
            disabled: {},
        }
    }
}

function scrollTo(element, to, duration) {
    const requestAnimationFrame = window.requestAnimationFrame ||
        function requestAnimationFrameTimeout() {
            return setTimeout(arguments[0], 10)
        }
    // jump to target if duration zero
    if (duration <= 0) {
        element.scrollTop = to
        return
    }
    const difference = to - element.scrollTop
    const perTick = difference / duration * 10

    requestAnimationFrame(() => {
        element.scrollTop += perTick
        if (element.scrollTop === to)
            return
        scrollTo(element, to, duration - 10)
    })
}
