
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

const Header = ({ nav, data, performSearch }) => {
    console.log(data.query)
    return (
        <div className="container">

            {/* navigation */}
            <MainNav />

            {/* only runs if sumit is returned  */}
            <SearchForm onSearchPage={performSearch} data={data.pictures} text={data.query} />

            <Switch>
                {/* check path */}
                <Route exact path="/cats" render={() => <Cat onSearchPage={nav} data={data.pictures} text="cats" />} />
                <Route exact path="/dogs" render={() => <Dog onSearchPage={performSearch} data={data.pictures} text="dogs" />} />
                <Route exact path="/birds" render={() => <Bird onSearchPage={performSearch} data={data.pictures} text="birds" />} />
            </Switch>
        </div>
    );
}


export default Header