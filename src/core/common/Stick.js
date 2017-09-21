import React, {PureComponent} from 'react'
import ReactDOM from 'react-dom'

export default class Stick extends PureComponent {

    static defaultProps = {
        position: 'bottom left',
        styleNode: {
            position: 'absolute',
            zIndex: 10000
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            top: 0,
            left: 0,
            width: 0
        }
    }

    componentDidMount() {
        this.measure()
    }

    componentDidUpdate() {
        this.measure()
        if (this.props.node) {
            this.renderNode()
        }

        if (!this.props.node && this.container) {
            this.unmountNode()
        }
    }

    componentWillUnmount() {
        if (this.container) {
            this.unmountNode()
        }
    }

    render() {
        const { className, children, style } = this.props
        return (
            <div className={className} style={style} ref={ref => this.element = ref}>
                {children}
            </div>
        )
    }

    renderNode() {
        if (!this.container) {
            this.container = createContainer()
            this.track()
        }

        const { styleNode, node } = this.props

        const className = 'stick-pointer'
        const style = {
            ...(styleNode || {}),
            ...this.state
        }

        ReactDOM.unstable_renderSubtreeIntoContainer(
            this,
            <div className={className} style={style}>
                {node}
            </div>,
            this.container
        )
    }

    unmountNode() {
        cancelAnimationFrame(this.animationId)
        ReactDOM.unmountComponentAtNode(this.container)
        document.body.removeChild(this.container)
        delete this.container
    }

    track() {
        this.animationId = requestAnimationFrame(() => this.track())
        this.measure()
    }

    measure() {
        const newStyle = calculateStyle(this.props.position, this.element)
        this.setState(newStyle)
    }

}

function createContainer() {
    const container = document.createElement('div')
    document.body.appendChild(container)
    return container
}

function calculateStyle(position, element) {
    switch (position) {
        case 'top left':
            return topLeft(element)
        case 'top right':
            return topRight(element)
        case 'top center':
            return topCenter(element)
        case 'bottom center':
            return bottomCenter(element)
        case 'bottom right':
            return bottomRight(element)
        case 'middle right':
            return middleRight(element)
        case 'middle center':
            return middleCenter(element)
        case 'middle left':
            return middleLeft(element)
        case 'bottom left':
        default:
            return bottomLeft(element)
    }
}

function topLeft(element) {
    const { width, left, top } = element.getBoundingClientRect()
    return {
        width,
        left: left + scrollX(),
        top: top + scrollY()
    }
}

function topRight(element) {
    const { width, right, top } = element.getBoundingClientRect()
    return {
        width,
        left: right + scrollX(),
        top: top + scrollY()
    }
}

function topCenter(element) {
    const { width, left, top } = element.getBoundingClientRect()
    return {
        width,
        left: left + scrollX() + (width /2),
        top : top + scrollY()
    }
}

function bottomLeft(element) {
    const {width, left, bottom} = element.getBoundingClientRect()
    return {
        width,
        left: left + scrollX(),
        top: bottom + scrollY()
    }
}

function bottomRight(element) {
    const {width, right, bottom} = element.getBoundingClientRect()
    return {
        width,
        left: right + scrollX(),
        top: bottom + scrollY()
    }
}

function bottomCenter(element) {
    const {width, left, bottom} = element.getBoundingClientRect()
    return {
        width,
        left: left + scrollX() + (width / 2),
        top: bottom + scrollY()
    }
}

function middleRight(element) {
    const {width, height, right, top} = element.getBoundingClientRect()
    return {
        width,
        left: right + scrollX(),
        top: top + scrollY() + (height / 2)
    }
}

function middleCenter(element) {
    const {width, height, left, top} = element.getBoundingClientRect()
    return {
        width,
        left: left + scrollX() + (width / 2),
        top: top + scrollY() + (height / 2)
    }
}

function middleLeft(element) {
    const {width, height, left, top} = element.getBoundingClientRect()
    return {
        width,
        left: left + scrollX(),
        top: top + scrollY() + (height / 2)
    }
}



//https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
function hasPageOffset() {
    return (
        typeof window !== 'undefined' &&
        typeof window.pageXOffset !== undefined
    )
}

function isCSS1Compat() {
    const hasCompatMode = (
        typeof document !== 'undefined' &&
        typeof document.compatMode === 'string'
    )
    const compatMode = hasCompatMode ? document.compatMode : ''
    return compatMode === 'CSS1Compat'
}

function scrollY() {
    if (typeof window !== 'undefined' && typeof window.scrollY === 'number') {
        return window.scrollY
    }

    if (hasPageOffset() === true) {
        return window.pageYOffset
    }

    if (isCSS1Compat() === true) {
        return document.documentElement.scrollTop
    }

    const hasScrollTop = (
        typeof document !== 'undefined' &&
        typeof document.body !== 'undefined' &&
        typeof document.body.scrollTop === 'number'
    )

    return hasScrollTop ? document.body.scrollTop : 0
}

function scrollX() {
    if (typeof window !== 'undefined' && typeof window.scrollX === 'number') {
        return window.scrollX
    }

    if (hasPageOffset === true) {
        return window.pageXOffset
    }

    if (isCSS1Compat === true) {
        return document.documentElement.scrollLeft
    }

    const hasScrollLeft = (
        typeof document !== 'undefined' &&
        typeof document.body !== 'undefined' &&
        typeof document.body.scrollLeft === 'number'
    )

    return hasScrollLeft ? document.body.scrollLeft : 0
}
