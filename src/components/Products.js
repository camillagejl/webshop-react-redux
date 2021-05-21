import React from 'react';
import Product from "./Product";
import './Products.css';
import {useSelector} from "react-redux";
import {selectCart} from "../features/products/productsSlice";

function Products(props) {
    const products = props.products;
    const noProductsFound = props.noProductsFound;
    const cartProducts = useSelector(selectCart);

        return (
        <div className="products">

            {products.map((product) => (
                <Product
                    key={product.name}
                    product={product}
                    productAmount={cartProducts[product.name] || 0}
                />
            ))}

            {/* An "error" message is */}
            {products.length === 0 &&
            <div className="noProductsFound">
                {noProductsFound}
            </div>
            }
        </div>
    );
}

export default Products;