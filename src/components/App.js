//imports
import React, { Component } from 'react';
import RunPage from './RunPage'
import Header from './Header'
import axios from 'axios';
import { HashRouter,Switch,Route } from 'react-router-dom';

import Cat from './Cat';
import Dog from './Dog';
import Bird from './Bird';




// const apiKey = "9e97324046fb93267d31f75c590973bf"



//App class 
class App extends Component {

  //constructor for pictures array and test if the page is loading
  constructor() {

    super();
    this.state = {
      pictures: [],
      loading: true
    };
  }

  // useEffect() {
  //   this.navLinkSearch(this.data.newtext);
  // }


//  // perform search
  componentDidMount() {

    // //linkSearch 
    this.navLinkSearch();
    window.history.replaceState(null, "New Page Title", `/#/cats`)
    console.log(window.location.pathname)
    const toString = `${window.location.href}`


   };

  //search function for search bar
  performSearch = (query) => {

    //to stop from page from loading over and over
    window.history.replaceState(null, "New Page Title", `/search/${query}`)

    if (query !== undefined) {
      //api key   
      const url = axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9e97324046fb93267d31f75c590973bf&text=${query}&per_page=16&sort=relevance&content_type=1&format=json&nojsoncallback=1`)

        //sets the state to data
        .then(response => {
          this.setState({
            pictures: response.data.photos.photo,
            loading: false
          })

          //not sure if these help or not but you know what they say if it's not broke don't fix it. 
          const querys = query
          return (url, querys);
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error);

        });
    }
  }

  //search function for links
  navLinkSearch = (query = 'cats') => {

    // to stop from page from loading over and over
    // window.history.replaceState(null, "New Page Title", `/${query}`)

    if (query !== undefined) {
      //api key   
      const url = axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9e97324046fb93267d31f75c590973bf&text=${query}&per_page=16&sort=relevance&content_type=1&format=json&nojsoncallback=1`)

        //sets the state to data
        .then(response => {
          this.setState({
            pictures: response.data.photos.photo,
            loading: false
          })

          const querys = query
          return (url, querys);

        })

        .catch(error => {
          console.log('Error fetching and parsing data', error);

        });
    }
  }



  //app
  render() {
    return (  
      <HashRouter>

          <Header className="App-header" performSearch={this.performSearch} data={this.state} navLinkSearch={this.navLinkSearch} />


            {/* <Route exact path="/#" render={() =><Cat  loading={this.state.loading} data={this.state}  navLinkSearch={this.navLinkSearch}  text='cats'/>}  /> */}
            <Route exact path="/cats"render={() =><Cat  loading={this.state.loading}  data={this.state} navLinkSearch={this.navLinkSearch}  text='cats'/>} />
            <Route exact path="/dogs" render={() =><Dog  loading={this.state.loading}  data={this.state} navLinkSearch={this.navLinkSearch}  text='dogs'/>}/>
            <Route exact path="/birds" render={() =><Bird  loading={this.state.loading}  data={this.state} navLinkSearch={this.navLinkSearch}  text='birds'/>} />
      </HashRouter>
    );
  }
}

export default App