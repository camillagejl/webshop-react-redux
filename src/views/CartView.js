import React from 'react';
import Products from "../components/Products";
import {useSelector} from "react-redux";
import {selectCart, selectProducts} from "../features/products/productsSlice";

function CartView() {
    const products = useSelector(selectProducts);
    const productsInCart = useSelector(selectCart);


    // let productsAmount = 0;
    // let totalPrice = 0;
    //
    // for (const [product, amount] of Object.entries(productsInCart)) {
    //     productsAmount += amount;
    //
    //     const price = products[product].price;
    //     totalPrice += price * amount;

    // }


    // console.log ('products', products);
    // console.log ('productsInCart', productsInCart);
    // console.log ('productsAmount', productsAmount);

    return (
        <div>

            <h1>
                Cart
            </h1>

            <Products />

            {/*<div className="totalAmount">*/}
            {/*Total amount of products: {productsAmount}*/}
            {/*</div>*/}
            {/*<div className="totalPrice">*/}
            {/*    Total price: {totalPrice}*/}
            {/*</div>*/}

        </div>
    );
}

export default CartView;
