import React from 'react';
import ShopRow from './ShopRow';


function ShoppingCart({ items, quantity }) {
    return (
        <table id="grocerylist">
            <caption>Be at peace as you choose your groceries &hearts;</caption>
            <thead>
                <tr>
                    <th>Item &hearts;</th>
                    <th> Quantity &hearts; </th>
                    <th> Price &hearts; </th>
                </tr>

            </thead>

            <tbody>
                {items.map((item, i) => <ShopRow item={item} key={i} />)};
            </tbody>

           {/*<tfoot>
                <TableTotal items={items} />
            </tfoot>*/}

        </table>
    );
}

export default ShoppingCart;