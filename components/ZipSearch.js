import React, { useState } from 'react';

function ZipSearch(){
    const [location, findLocation] = useState('');
    
    return (
        <form action="" method="" >
            <fieldset>
                <legend>Enter your 5-digit zip code</legend>
                <label for="zip">Zip code: </label>
                    <input type="text"
                    value={location}
                    id="zip"
                    name="location"
                    placeholder="00000"
                    size="5"
                    maxLength="5"
                    onChange={e => findLocation(e.target.value)}
                    />
                <label for="alert">
                    <button name="alert" onClick={e => {
                        alert(`You entered ${location}`);
                        e.preventDefault();
                    }}>Submit</button>
                </label>
            </fieldset>
        </form>
    );
}

export default ZipSearch;