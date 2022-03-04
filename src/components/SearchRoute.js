import React, { Component } from 'react';
import Gallery from './Gallery'



// const apiKey = "9e97324046fb93267d31f75c590973bf"




class SearchRoute extends Component  {

     render() {
         console.log('yes')
    return (
        //return photo data
        <Gallery data={this.props.data.pictures} text={this.props.data.newName} error={this.props.error} />

    )
 }
}

export default SearchRoute
