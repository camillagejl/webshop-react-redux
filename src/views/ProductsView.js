import React from 'react';
import Products from "../components/Products";
import {useDispatch, useSelector} from "react-redux";
import {fetchProductsAsync, selectProducts, selectProductsStatus} from "../features/products/productsSlice";
import "../App.css";

function ProductsView() {
    const products = useSelector(selectProducts);
    const productsStatus = useSelector(selectProductsStatus);

    let noProductsMessage = 'No products to display.';

    // When the productsStatus changes, the message on the page changes with it.
    if (productsStatus === 'loading') {
        noProductsMessage = 'Loading products...';
    }
    else if (productsStatus === 'failed') {
        noProductsMessage = 'Sorry, there was a problem loading the products.';
    }
    else {
        noProductsMessage = 'No products to display.';
    }

    return (
        <div>
            <h1>
                Products
            </h1>

            <Products
                products={products}
                noProductsFound={noProductsMessage}
            />
        </div>
    );
}

export default ProductsView;
