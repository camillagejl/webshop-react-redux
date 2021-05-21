import React from 'react';
import ProductsListItem from "../components/ProductsListItem";
import {useSelector} from "react-redux";
import {selectCart, selectProducts} from "../features/products/productsSlice";
import './CheckoutView.css';

function CheckoutView() {
    const allProducts = useSelector(selectProducts);
    const productsInCart = useSelector(selectCart);

    // This array will contain the product information from products in Store, but only for the products that are also
    // in the cart.
    const products = [];

    // The total amount of products and the total, accumulated price.
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

            {!products || products.length > 0 &&
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

                }


            {products.length === 0 &&
            <div className="errorMessage">
                Your cart is empty.
            </div>
            }


            <div className="totalAmount">
                Total amount of products: {productsAmount}
            </div>
            <div className="totalPrice">
                Total price: {(Math.round((totalPrice) * 100) / 100).toFixed(2)} kr
            </div>

        </div>
    );
}

export default CheckoutView;
