import React from 'react';
import ShopWhere from './ShopWhere';

function StoreTable({ stores }) {
    return (
        <table id="stores">
            <caption>&hearts; Shop by Zip Code &hearts;</caption>
            <thead>
                <tr>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Code</th>
                </tr>
            </thead>
            <tbody>
                {stores.map((store, i) => <ShopWhere store={store} key={i} />)}
            </tbody>
        </table>
    );
}

export default StoreTable;