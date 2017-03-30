import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import enhanceWithClickOutside from 'react-click-outside'

import Stick from '../common/Stick'
import { extendStyle } from '../common/utils'

const combine = (...handlers) => (...args) => {
    handlers.forEach(
        handler => handler && handler(...args)
    )
}

const layoutStyle = {
    stickNodeStyle: {
        zIndex: 10000,
        boxSizing: 'border-box',
        position: 'absolute'
    }
}

export default function createExpandCollapse(
    Input,
    Panel,
    collapseOnChange = false
) {

    class ExpandCollapse extends Component {

        constructor() {
            super(...arguments)
            this.state = {
                isExpanded: false
            }
            this.collapse = this.collapse.bind(this)
            this.expand = this.expand.bind(this)
            this.handleFocusIn = this.handleFocusIn.bind(this)
        }

        render() {
            const {className, style, onFocus, ...rest} = this.props

            const stickProps = {
                className,
                styleNode: extendStyle(style.stickNodeStyle, layoutStyle.stickNodeStyle),
                node : this.state.isExpanded ? this.renderPanel() : null,
            }

            return (
                <Stick {...stickProps}>
                    <Input {...{
                        ref: ref => {
                            const element = findDOMNode(ref)
                            if(element === null) return
                            this.input = element.tagName === 'INPUT'
                                ? element
                                : element.getElementsByTagName('input')[0]

                        },
                        ...rest,
                        style: style.input,
                        onFocus: combine(
                            this.expand,
                            onFocus
                        ),
                        onCollapsePanel: this.collapse
                    }}/>
                </Stick>
            )
        }

        renderPanel() {
            const { onChange, style, ...rest } = this.props

            return (
                <Panel {...{
                    ref: ref => this.panel = findDOMNode(ref),
                    ...rest,
                    style: style.panel,
                    onChange: combine(
                        onChange,
                        collapseOnChange ? this.collapse : () => {},
                    ),
                    onCollapsePanel: this.collapse
                }}/>
            )
        }


        handleClickOutside({ target }) {
            if(this.panel && !this.panel.contains(target)) {
                this.collapse()
            }
        }

        expand() {
            if(!this.state.isExpanded) {
                this.setState({ isExpanded: true })
                document.body.addEventListener('focusin', this.handleFocusIn)
            }
        }

        collapse() {
            if(this.state.isExpanded) {
                document.body.removeEventListener('focusin', this.handleFocusIn)
                this.setState({ isExpanded: false })

            }
        }

        handleFocusIn(e) {
            const { activeElement } = document
            const noFocus = (
                activeElement.tagName === 'INPUT' &&
                activeElement !== this.input
            )

            if(noFocus) {
                this.collapse()
            }
        }

        componentWillUnmount() {
            document.body.removeEventListener('focusin', this.handleFocusIn)
        }
    }
    return enhanceWithClickOutside(ExpandCollapse)
}
