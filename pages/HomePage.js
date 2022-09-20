import React from 'react';
import { GiFruitBowl, GiPear, GiPeach, GiPineapple, GiCurledLeaf } from 'react-icons/gi';

function HomePage(){
    return (
        <>
            
            <h2>Where to go? &hearts;</h2>
            <p>&hearts; Click the 'Stores' tab above to find a location near you.
            </p>
            <p>&hearts; Click the 'Order' tab above to select your groceries.
            </p>
            <br></br>
            
            <br></br>
            <GiFruitBowl className="products" />
            <GiPear className="products" />
            <GiPeach className="products" />
            <GiPineapple className="products" />
            <GiCurledLeaf className="products" />

        </>
    );
}

export default HomePage;