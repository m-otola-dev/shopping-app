import React from 'react';
import ShopTable from '../components/ShopTable.js';
import ZipSearch from '../components/ZipSearch.js';

function StoresPage({ stores }){
    return (
        <article>
            <h2>Locate a store near you &hearts;</h2>
            <p>Search stores by zip code &hearts;</p>
            <ShopTable stores={stores} />
            <ZipSearch />
        </article>
    );
}

export default StoresPage;