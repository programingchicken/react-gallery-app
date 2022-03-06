import React, { Component } from 'react';
import Gallery from './Gallery'








class Dog extends Component {

    render() {
            return (
                //return photo data
                <Gallery data={this.props.data.dog} error={false} text='dogs' />
    
            )
    }
}

export default Dog