import React from 'react';
import Product from "./Product";
import './Products.css';
import {useSelector} from "react-redux";
import {selectCart} from "../features/products/productsSlice";

function Products(props) {
    const products = props.products;
    const noProductsFound = props.noProductsFound;

    // We use the products in the cart to find the amount of the specified product in the cart.
    // We give this as a prop to the product here, so we only have to load the cart once instead of
    // in every product to find each product's amount.
    const cartProducts = useSelector(selectCart);

    return (
        <div>
            {products.length !== 0 &&
            <div className="products">

                {products.map((product) => (
                    <Product
                        key={product.name}
                        product={product}
                        productAmount={cartProducts[product.name] || 0}
                    />
                ))}

            </div>

            }

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