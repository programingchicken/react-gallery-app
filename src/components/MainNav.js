import { NavLink} from 'react-router-dom';
import React, { Component } from 'react';
import SearchForm from './SearchForm';


class MainNav extends Component {



    render() {

        return (


            <nav className="main-nav">
                <ul>
                    <li><NavLink to='/cats'>Cats</NavLink></li>
                    <li><NavLink to='/dogs'>Dogs</NavLink></li>
                    <li><NavLink to='/birds'>Birds</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default MainNav