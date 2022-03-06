import React, { Component } from 'react';
import Gallery from './Gallery'








class Cat extends Component {

    render() {
            return (
                //return photo data
                <Gallery data={this.props.data.cat} error={false} text='cats' />
    
            )
    }
}

export default Cat