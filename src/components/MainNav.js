import { NavLink,NavNavLink } from 'react-router-dom';
import React, { Component } from 'react';



class MainNav extends Component {



    render() {

        return (


            <nav className="main-nav">
                <ul>
                    <li><NavLink to='/cats' onClick={() => this.props.navLinkSearch('cats')}>Cats</NavLink></li>
                    <li><NavLink to='/dogs' onClick={() => this.props.navLinkSearch('dogs')}>Dogs</NavLink></li>
                    <li><NavLink to='/birds' onClick={() => this.props.navLinkSearch('birds')}>Birds</NavLink></li>
                </ul>
            </nav>
        );
    }
}


export default MainNav