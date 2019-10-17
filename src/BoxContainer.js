import React, { Component } from 'react'
import Box from './Box'

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 18,
        allColors: ['purple', 'magenta', 'violet', 'blue','yellow','red','green', 'lightblue']
    };
    render() {
        const boxes  = Array.from({length: this.props.numBoxes}).map(() => {
           return <Box colors={ this.props.allColors }/>
         });
        return (
            <div className='BoxContainer'>
                {boxes}
            </div>
        )
    }
}

export default BoxContainer;