import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './Product.css';
import {
    productAmountByValue,
    productDecrement,
    productIncrement,
    selectCart
} from "../features/products/productsSlice";

function Product(props) {
    const dispatch = useDispatch();

    const cartProducts = useSelector(selectCart);
    let cartAmount = 0;

    const product = props.product;

    for (const [cartProduct, amount] of Object.entries(cartProducts)) {
        if (cartProduct === product.name) {
            cartAmount = amount;
        }
    }

    const price = (Math.round((product.price) * 100) / 100).toFixed(2);

    const updateAmount = (e) => {
        let newAmount = parseInt(e.target.value);
        if (isNaN(newAmount)) newAmount = 0;
        console.log(newAmount);
        dispatch(productAmountByValue({product: product.name, amount: newAmount}))
    }

    return (
        <div className="product">

            <h2 className="productTitle">
                {product.name.charAt(0).toUpperCase() + product.name.slice(1)}
            </h2>
            <div className="productImage">
                <img src={product.img} alt={"Image of product: " + product.name}/>
            </div>
            <div className="productBottom">
                <div className="productPrice">
                    {price} kr
                </div>
                <div className="productAmount">
                    <label>
                        Product amount
                        <div className="productAmountInput">

                            <button
                                id="decrement"
                                onClick={() => dispatch(productDecrement({product: product.name}))}
                            >
                                -
                            </button>
                            <input
                                type="text"
                                id="productAmount"
                                name="productAmount"
                                value={cartProducts[product.name] || 0}
                                onChange={updateAmount}
                            />
                            <button
                                id="increment"
                                onClick={() => dispatch(productIncrement({product: product.name}))}
                            >
                                +
                            </button>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Product;
