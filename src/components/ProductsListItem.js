import React from 'react';

function ProductListItem(props) {
    // The information about the product is handed down from the parent component.
    const product = props.product;
    const productAmount = props.productAmount;

    return (
        <tr>
            <td>
                {product.name.charAt(0).toUpperCase() + product.name.slice(1)}
            </td>
            <td>
                {productAmount}
            </td>
            <td>
                {(Math.round((product.price * productAmount) * 100) / 100).toFixed(2)} kr
            </td>
        </tr>
    );
}

export default ProductListItem;
