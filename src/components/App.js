//imports
import React, { Component } from 'react';
import Header from './Header'
import axios from 'axios';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Cat from './Cat';
import Dog from './Dog';
import Bird from './Bird';
import SearchRoute from './SearchRoute';
const Config  = require('./Config.json')

const {api} = Config







//App class 
class App extends Component {

  //constructor for pictures array and test if the page is loading
  constructor() {

    super();
    this.state = {
      bird: [],
      dog: [],
      cat: [],
      pictures: [],
      loading: false,
      newName: '',
      error: null
    };

    axios.get(api + `&text=dogs&per_page=16&sort=relevance&content_type=1&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          dog: response.data.photos.photo,
        })
  })

  axios.get(api +`&text=cats&per_page=16&sort=relevance&content_type=1&format=json&nojsoncallback=1`)
  .then(response => {
    this.setState({
      cat: response.data.photos.photo,
    })
})
axios.get(api + `&text=birds&per_page=16&sort=relevance&content_type=1&format=json&nojsoncallback=1`)
.then(response => {
  this.setState({
    bird: response.data.photos.photo,
  })
})



}

  // useEffect() {
  //   this.navLinkSearch(this.data.newtext);
  // }


  //  // perform search
  componentWillMount() {
    window.history.pushState({}, "", `/cats`)
    if (document.querySelector('.active') !== null) {
      const activeLink = document.querySelector('.active')
      activeLink.className = 'notActive';
    }

  };





  //search function for search bar
  performSearch = (query) => {

    //to stop from page from loading over and over
    window.history.replaceState(null, "New Page Title", `/search/${query}`)

    if (query !== undefined) {


    }
  }

  //search function for links
  navLinkSearch = async (query) => {

    // to stop from page from loading over and over
    // window.history.replaceState(null, "New Page Title", `/${query}`)
        //api key
        
         const url = await axios.get(api + `&text=${query}&per_page=16&sort=relevance&content_type=1&format=json&nojsoncallback=1`)
          //sets the state to data
          .then(response => {
              this.setState({
                pictures: response.data.photos.photo,
                newName: query,
                error: false
              })

            //not sure if these help or not but you know what they say if it's not broke don't fix it. 
            const querys = query
            return (url, querys);
          })
          .catch(error => {
            console.log('Error fetching and parsing data', error);
            this.setState({
                error: true
          })
        });
  }



  //app
  render() {
    return (
      <BrowserRouter>

        <Header className="App-header" data={this.state} navLinkSearch={this.navLinkSearch} />
        <Switch>
          <Route path="/search/" render={() => <SearchRoute data={this.state} navLinkSearch={this.navLinkSearch} error={this.state.error}/>} />
          <Route exact path="/cats" render={() => <Cat data={this.state} navLinkSearch={this.navLinkSearch}  text='cats' />} />
          <Route exact path="/dogs" render={() => <Dog data={this.state} navLinkSearch={this.navLinkSearch}  text='dogs' />} />
          <Route exact path="/birds" render={() => <Bird data={this.state} navLinkSearch={this.navLinkSearch}  text='birds' />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App