import React, { Component } from 'react';
import Gallery from './Gallery'



// const apiKey = "9e97324046fb93267d31f75c590973bf"




class Cat extends Component {
    render() {
        //test if text is === to run function searchpage

            return (
                //return photo data
                <Gallery data={this.props.data.pictures} text='cats' />
    
            )
    }
}

export default Cat