import React, { Component } from 'react';
import Gallery from './Gallery'



// const apiKey = "9e97324046fb93267d31f75c590973bf"




class Bird extends Component {
    render() {
        if (this.props.text === 'birds') {
            this.props.onSearchPage(this.props.text)
          }
          return (

            <Gallery handle={this.props.onSearchPage} data={this.props.data} text={this.props.text}/>

        )
    }
}

export default Bird