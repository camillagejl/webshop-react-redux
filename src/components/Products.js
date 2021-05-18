import React from 'react';
import Product from "./Product";
import './Products.css';
import { useSelector, useDispatch } from 'react-redux';
import {selectProducts} from "../features/products/productsSlice";

function Products(props) {
    const products = props.products;

        return (
        <div className="products">

            {products.map((product) => (
                <Product product={product} />
            ))}
        </div>
    );
}

export default Products;