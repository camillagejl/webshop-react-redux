import React from 'react';
import ProductsListItem from "../components/ProductsListItem";
import './CheckoutView.css';
import {useSelector} from "react-redux";
import {selectCart, selectProducts} from "../features/products/productsSlice";
import Product from "../components/Product";

function CheckoutView() {
    const allProducts = useSelector(selectProducts);
    const productsInCart = useSelector(selectCart);

    const products = [];

    let productsAmount = 0;
    let totalPrice = 0;

    for (const [cartProduct, amount] of Object.entries(productsInCart)) {

        // Loops over all products to find the the product information.
        allProducts.forEach(product => {
            if (product.name === cartProduct) {

                // Adds to products array with the information for each product in the cart.
                products.push(product);

                // Calculates the accumulated price for this product, and adds this to the total price.
                totalPrice += product.price * amount;

                // Adds the amount of this product to the total productsAmount.
                productsAmount += amount;
            }
        })
    }

    return (
        <div>

            <h1>
                Checkout
            </h1>

            <table>
                <tr>
                    <th>
                        Product
                    </th>
                    <th>
                        Amount
                    </th>
                    <th>
                        Price
                    </th>
                </tr>

                {products.map((product) => (
                    <ProductsListItem product={product}/>
                ))}

            </table>

            <div className="totalPrice">
                Total price: {(Math.round((totalPrice) * 100) / 100).toFixed(2)} kr
            </div>

        </div>
    );
}

export default CheckoutView;
