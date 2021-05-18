import React from 'react';
import Product from "./Product";
import './Products.css';
import { useSelector, useDispatch } from 'react-redux';
import {selectProducts} from "../features/products/productsSlice";

function Products(props) {
    const products = props.products;
    const errorMessage = props.error;

        return (
        <div className="products">

            {products.map((product) => (
                <Product product={product} />
            ))}

            {products.length === 0 &&
            <div className="errorMessage">
                {errorMessage}
            </div>
            }
        </div>
    );
}

export default Products;