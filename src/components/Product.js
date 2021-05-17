import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './Product.css';
import {newProductInCart, selectCart, selectProducts} from "../features/products/productsSlice";

function Product(props) {
    const cartProducts = useSelector(selectCart);
    let cartAmountFromState = 0;

    const product = props.product;

    for (const [cartProduct, amount] of Object.entries(cartProducts)) {
        if (cartProduct === product.name) {
            cartAmountFromState = amount;
        }
    }

    const price = (Math.round((product.price) * 100) / 100).toFixed(2);

    // Local state for amount of this product in cart
    const [cartAmount, setCartAmount] = useState(cartAmountFromState);

    function changeAmountFromAction(action) {

        if (action === 'increment') {
            setCartAmount(parseInt(cartAmount) + 1);
        }
        if (action === 'decrement') {
            setCartAmount(parseInt(cartAmount) - 1);
        }

        dispatch(newProductInCart({product: product.name, amount: {cartAmount}}))

    }

    const changeAmountFromInput = (e) => {
        setCartAmount(e.target.value);
        dispatch(newProductInCart({product: product.name, amount: {cartAmount}}))
    }

    const dispatch = useDispatch();

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
                            <button id="decrement">-</button>
                            <input
                                type="number"
                                id="productAmount"
                                name="productAmount"
                                value={cartAmount}
                                onChange={changeAmountFromInput}
                            />
                            <button
                                id="increment"
                                onClick={() => changeAmountFromAction('increment')}>+
                            </button>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Product;
