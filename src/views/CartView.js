import React from 'react';
import Products from "../components/Products";
import {useSelector} from "react-redux";
import {selectCart, selectCartProducts, selectProducts, selectTotalsInCart} from "../features/products/productsSlice";

function CartView() {
    const products = useSelector(selectCartProducts)
    const totalsInCart = useSelector(selectTotalsInCart)

    return (
        <div>

            <h1>
                Cart
            </h1>

            <Products
                products={products}
                noProductsFound={'Your cart is empty.'}
            />

            {products.length !== 0 &&
            <div>
                <div className="totalAmount">
                    Total amount of products: {totalsInCart.amount}
                </div>
                <div className="totalPrice">
                    Total price: {totalsInCart.price} kr
                </div>
            </div>
            }

        </div>
    );
}

export default CartView;
