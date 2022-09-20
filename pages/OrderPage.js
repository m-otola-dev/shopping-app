import React from 'react';
import ShoppingCart from '../components/ShoppingCart.js';

function OrderPage({ items }) {
    return (
        <article>
            <h2>Order what you need &hearts;</h2>
            <p>Choose your groceries (limit 10 per item)&hearts;</p>
            <ShoppingCart items={items}/>
        </article>
    );
}

export default OrderPage;