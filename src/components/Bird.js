import React, { Component } from 'react';
import Gallery from './Gallery'



// const apiKey = "9e97324046fb93267d31f75c590973bf"




class Bird extends Component {
    render() {
        //test if text is === to run function searchpage
        if (this.props.text === 'birds') {
            this.props.onSearchPage(this.props.text)
        }
        return (
            //return photo data
            <Gallery handle={this.props.onSearchPage} data={this.props.data} text={this.props.text} />

        )
    }
}

export default Bird