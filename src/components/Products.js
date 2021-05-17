import React from 'react';
import Product from "./Product";
import './Products.css';
import { useSelector, useDispatch } from 'react-redux';
import {selectProduct} from "../features/products/productsSlice";

function Products() {
    const allProducts = useSelector(selectProduct);

    console.log(allProducts);

    return (
        <div className="products">
            <Product />
        </div>
    );
}

export default Products;