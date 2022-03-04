import React, { Component } from 'react';
import Gallery from './Gallery'
import Cat from './Cat';



// const apiKey = "9e97324046fb93267d31f75c590973bf"




class Dog extends Component {

    render() {
            return (
                //return photo data
                <Gallery data={this.props.data.dog} error={false} text='dogs' />
    
            )
    }
}

export default Dog