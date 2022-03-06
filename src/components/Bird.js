import React, { Component } from 'react';
import Gallery from './Gallery'









class Bird extends Component {
    render() {
            return (
                //return photo data
                <Gallery data={this.props.data.bird} error={false} text='birds' />

            )
    }
}

export default Bird