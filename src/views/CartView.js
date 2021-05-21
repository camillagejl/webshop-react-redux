import React from 'react';
import Products from "../components/Products";
import {useSelector} from "react-redux";
import {selectCart, selectProducts} from "../features/products/productsSlice";

function CartView() {
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

    return (
        <div>

            <h1>
                Cart
            </h1>

            <Products
                products={products}
                noProductsFound={'Your cart is empty.'}
            />

            <div className="totalAmount">
                Total amount of products: {productsAmount}
            </div>
            <div className="totalPrice">
                Total price: {totalPriceFixed} kr
            </div>

        </div>
    );
}

export default CartView;
