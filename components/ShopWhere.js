import React from 'react';

function ShopWhere({ store }) {
    return (
        <tr>
            <td>{store.city}</td>
            <td>{store.state}</td>
            <td>{store.zipCode}</td>
        </tr>
    );
}
export default ShopWhere;