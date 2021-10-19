import React, { Component } from 'react';
import {
  HashRouter,

} from 'react-router-dom';
import Gallery from './Gallery'
import SearchForm from './SearchForm'



// const apiKey = "9e97324046fb93267d31f75c590973bf"




class Cat extends Component {
    render() {
        if (this.props.text === 'cats') {
            this.props.onSearchPage(this.props.text)
          }
          return (

            <Gallery handle={this.props.onSearchPage} data={this.props.data} text={this.props.text}/>

        )
    }
}

export default Cat