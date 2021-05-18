import React from 'react';
import Products from "../components/Products";
import {useSelector} from "react-redux";
import {selectProducts} from "../features/products/productsSlice";

function ProductsView() {
    const displayProducts = useSelector(selectProducts);

    return (
        <div>

            <h1>
                Products
            </h1>

            <Products
                products={displayProducts}
                error={'No products to display.'}
            />
        </div>
    );
}

export default ProductsView;
