
import React from 'react';

import SearchForm from './SearchForm';









import MainNav from './MainNav';


const Header = ({ navLinkSearch, data }) => {

 
    return (
        <div className="container">
                {/* navigation */}
                    <MainNav navLinkSearch={navLinkSearch} data={data}/>
                       {/* only runs if sumit is returned */}
                       <SearchForm navLinkSearch={navLinkSearch} data={data} text={data.query} />

        </div>
    );
}


export default Header