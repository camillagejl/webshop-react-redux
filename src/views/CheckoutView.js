import React from 'react';
import ProductsListItem from "../components/ProductsListItem";
import {useSelector} from "react-redux";
import {selectCart, selectProducts} from "../features/products/productsSlice";
import './CheckoutView.css';
import Product from "../components/Product";

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

    // The total price is "beautified" here to have two decimals.
    let totalPriceFixed = (Math.round((totalPrice) * 100) / 100).toFixed(2);

    // We use the products in the cart to find the amount of the specified product in the cart.
    // We give this as a prop to the product here, so we only have to load the cart once instead of
    // in every product to find each product's amount.
    const cartProducts = useSelector(selectCart);

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
                    <ProductsListItem
                        key={product.name}
                        product={product}
                        productAmount={cartProducts[product.name] || 0}
                    />
                ))}

            </table>

                }


            {products.length === 0 &&
            <div className="errorMessage">
                Your cart is empty.
            </div>
            }

            {products.length !== 0 &&
            <div>
                <div className="totalAmount">
                    Total amount of products: {productsAmount}
                </div>
                <div className="totalPrice">
                    Total price: {totalPriceFixed} kr
                </div>
            </div>
            }

        </div>
    );
}

export default CheckoutView;
