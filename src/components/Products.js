import React from 'react';
import Product from "./Product";
import './Products.css';
import { useSelector, useDispatch } from 'react-redux';
import {selectProducts} from "../features/products/productsSlice";

function Products() {
    const allProducts = useSelector(selectProducts);

    console.log("Products,", allProducts);

    return (
        <div className="products">

            {allProducts.map((product, index) => (
                <Product product={product} index={index} />
            ))}
        </div>
    );
}

export default Products;