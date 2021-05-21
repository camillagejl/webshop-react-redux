import React from 'react';
import {useSelector} from "react-redux";
import {selectCart} from "../features/products/productsSlice";

function ProductListItem(props) {
    // The information about the product is handed down from the parent component.
    const product = props.product;


    const productAmount = props.productAmount;

    // The price is taken from the product, but "beautified" here to have two decimals.
    const price = (Math.round((product.price * productAmount) * 100) / 100).toFixed(2);

    return (
        <tr>
            <td>
                {product.name.charAt(0).toUpperCase() + product.name.slice(1)}
            </td>
            <td>
                {productAmount}
            </td>
            <td>
                {price} kr
            </td>
        </tr>
    );
}

export default ProductListItem;
