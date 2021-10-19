import React, { Component } from 'react';
import {
  HashRouter,

} from 'react-router-dom';
import Header from './Header'
import axios from 'axios';
import Gallery from './Gallery'


// const apiKey = "9e97324046fb93267d31f75c590973bf"




class App extends Component {

  constructor() {
    super();
    this.state = {
      pictures: [],
      loading: true
    };
  }


  //perform search
  componentDidMount() {
    this.performSearch();
    this.navLinkSearch();
  };
  //search function
  performSearch = (query) => {
    //api key   
     window.history.replaceState(null, "New Page Title", `/not-link/${query}`)
      const url = axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9e97324046fb93267d31f75c590973bf&text=${query}&per_page=16&sort=relevance&content_type=1&format=json&nojsoncallback=1`)
        .then(response => {
          this.setState({
            pictures: response.data.photos.photo,
            loading: false
  
          });
         console.log(query) 
          const qs = `text=${query}`;
          const querys = query
          return (qs, url, querys);
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);
        });
  }

  navLinkSearch = (query) => {
    window.history.replaceState(null, "New Page Title", `/not-link/${query}`)
    const url = axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9e97324046fb93267d31f75c590973bf&text=${query}&per_page=16&sort=relevance&content_type=1&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          pictures: response.data.photos.photo,
          loading: false

        });
       console.log(query) 
        const qs = `text=${query}`;
        const querys = query
        return (qs, url, querys);

      })

      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }



  //app
  render() {
    // const querystring = require('querystring');
    
    // console.log(this.qs);
    // console.log(this.query);
    // > { code: 'string', key: '12', id: 'false' }
    // console.log(querystring.parse(this.url));

    // > { 'http://example.com/index.html?code': 'string', key: '12', id: 'false' }
    return (
    <HashRouter>
      <Header className="App-header" performSearch={this.performSearch} data={this.state} nav={this.navLinkSearch}/>
    </HashRouter>

    );
  }
}

export default App