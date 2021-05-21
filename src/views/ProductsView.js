import React from 'react';
import Products from "../components/Products";
import {useDispatch, useSelector} from "react-redux";
import {fetchProductsAsync, selectProducts, selectProductsStatus} from "../features/products/productsSlice";
import "../App.css";

function ProductsView() {
    const dispatch = useDispatch();
    const displayProducts = useSelector(selectProducts);
    const productsStatus = useSelector(selectProductsStatus);

    console.log(productsStatus);

    if (displayProducts.length === 0) {
        dispatch(fetchProductsAsync());
    }

    return (
        <div>

            <h1>
                Products
            </h1>

            <Products
                products={displayProducts}
                noProductsFound={'No products to display.'}
            />

        </div>
    );
}

export default ProductsView;
