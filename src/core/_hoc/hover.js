import React, {Component } from 'react';
import ReactDOM from 'react-dom';

export default function createHover(WrappedComponent){

    class Hover extends Component {

        constructor() {
            super(...arguments);
            this.state = { isHovered: false };
            this.boundEnter = this.handleMouseEnter.bind(this);
            this.boundLeave = this.handleMouseLeave.bind(this);
        }

        render(){
            var {isHovered} = this.state;
            return <WrappedComponent {...this.props} isHovered={isHovered}/>;
        }

        handleMouseEnter(){
            this.setState({isHovered:true});
        }

        handleMouseLeave(){
            this.setState({isHovered:false});
        }

        componentDidMount(){
            var component = ReactDOM.findDOMNode(this);
            if(!component)return;

            component.addEventListener('mouseenter', this.boundEnter);
            component.addEventListener('mouseleave', this.boundLeave);
        }

        componentWillUnmount(){
            var component = ReactDOM.findDOMNode(this);
            if(!component)return;

            component.removeEventListener('mouseenter', this.boundEnter);
            component.removeEventListener('mouseleave', this.boundLeave);
        }
    }

    return Hover;
}
