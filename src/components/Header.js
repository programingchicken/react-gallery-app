
import React from 'react';
import {
    Switch,
    Route
  } from 'react-router-dom';
  import SearchForm from './SearchForm';

  import Cat from './Cat';
  import Dog from './Dog';
  import Bird from './Bird';
  import MainNav from './MainNav';

const Header = ({nav, match , data, performSearch}) => {
    // const query = new URLSearchParams(this.props.location.search);

    
    //  let searcherText = history.location.pathname
    //  .pathname.replace(/[^\w\s]/gi, '').replace("search", '');

    // const searchRoute = text => {
    //     match.push(`/search/${text}`);
    // }
console.log(data.query)
    return (
        <div className="container">
            {/* <MainNav onSearchPage={performSearch} data={data.pictures} text={searcherText} /> */}
            <MainNav />
            <SearchForm onSearchPage={performSearch} data={data.pictures} text={data.query}/>

            <Switch>
                {/* <Route exact path="/" render={() => <Gallery onSearch={performSearch} data={data.pictures} text="cats" /> } />
                <Route path="/cats" render={() => <Gallery onSearch={performSearch} data={data.pictures} text="cats" /> } />
                <Route path="/dogs" render={() => <Gallery onSearch={performSearch} data={data.pictures} text="dogs" /> } />
                <Route path="/birds" render={() => <Gallery onSearch={performSearch} data={data.pictures} text="birds" /> } /> */}
                <Route exact path="/cats" render={() => <Cat onSearchPage={nav} data={data.pictures} text="cats" /> } />
                <Route exact path="/dogs" render={() => <Dog onSearchPage={performSearch} data={data.pictures} text="dogs" /> } />
                <Route exact path="/birds" render={() => <Bird onSearchPage={performSearch} data={data.pictures} text="birds" /> } />
                {/* <Route exact path="/:search" render={() => <SearchForm onSearchPage={performSearch} data={data.pictures} text={data.query}/> } /> */}
                {/* <Route exact path="/search/:text" render={() => <Gallery onSearch={performSearch} data={data} text={match} /> } /> */}
           </Switch>
        </div>
    );
}


export default Header