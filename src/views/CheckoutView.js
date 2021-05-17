import React from 'react';
import ProductsListItem from "../components/ProductsListItem";
import './CheckoutView.css';

function CheckoutView() {
    return (
        <div>

            <h1>
                Checkout
            </h1>

            <table>
                <tr>
                    <th>
                        Product
                    </th>
                    <th>
                        Amount
                    </th>
                    <th>
                        Price
                    </th>
                </tr>
            <ProductsListItem />
            <ProductsListItem />
            <ProductsListItem />
            </table>

        </div>
    );
}

export default CheckoutView;
