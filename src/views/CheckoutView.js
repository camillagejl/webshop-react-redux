import React from 'react';
import ProductsListItem from "../components/ProductsListItem";
import './CheckoutView.css';
import {useSelector} from "react-redux";
import {selectCart} from "../features/products/productsSlice";

function CheckoutView() {
    const productsInCart = useSelector(selectCart);

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
