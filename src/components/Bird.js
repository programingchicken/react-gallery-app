import React, { Component } from 'react';
import Gallery from './Gallery'




// const apiKey = "9e97324046fb93267d31f75c590973bf"




class Bird extends Component {
    render() {
            return (
                //return photo data
                <Gallery data={this.props.data.bird} error={false} text='birds' />

            )
    }
}

export default Bird