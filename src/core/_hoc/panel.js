import React, {Component} from 'react'

export default function(Picker, Footer) {
    return class Panel extends Component {
        render() {
            const {picker, footer, ...rest} = this.props.style
            return (
                <div className='panel' style={rest}>
                    <Picker {...this.props} style={picker} />
                    <Footer {...this.props} style={footer} />
                </div>
            )
        }
    }
}
