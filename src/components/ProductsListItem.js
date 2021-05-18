import React from 'react';
import {useSelector} from "react-redux";
import {selectCart} from "../features/products/productsSlice";

function ProductListItem(props) {
    const product = props.product;

    const cartProducts = useSelector(selectCart);

    let cartAmount = 0;

    for (const [cartProduct, amount] of Object.entries(cartProducts)) {
        if (cartProduct === product.name) {
            cartAmount = amount;
        }
    }

    const price = (Math.round((product.price * cartAmount) * 100) / 100).toFixed(2);

    return (
        <tr>
            <td>
                {product.name.charAt(0).toUpperCase() + product.name.slice(1)}
            </td>
            <td>
                {cartAmount}
            </td>
            <td>
                {price} kr
            </td>
        </tr>
    );
}

export default ProductListItem;
