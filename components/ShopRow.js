import React from 'react';
import HowMany from './HowMany';

function ShopRow({ item }){
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td><HowMany /></td>
            <td>{item.price}</td>
            
            
        </tr>
    );
}

export default ShopRow;