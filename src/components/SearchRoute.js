import React, { Component } from 'react';
import Gallery from './Gallery'








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
