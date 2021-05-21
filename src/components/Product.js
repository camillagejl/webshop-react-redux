import React from 'react';
import {useDispatch} from 'react-redux';
import './Product.css';
import {
    productAmountByValue,
    productDecrement,
    productIncrement
} from "../features/products/productsSlice";

function Product(props) {
    const dispatch = useDispatch();

    // The information about the product is handed down from the parent component.
    const product = props.product;
    const productAmount = props.productAmount;

    // The price is taken from the product, but "beautified" here to have two decimals.
    const price = (Math.round((product.price) * 100) / 100).toFixed(2);

    // To update the amount in cart with an input, this function uses the value from the input.
    const updateAmount = (e) => {
        // We use parseInt to be sure that the value is an integer.
        let newAmount = parseInt(e.target.value);

        // This makes sure that the amount will never be NaN (meaning the field can't be empty).
        // If the user deletes the number, it will become 0, so our reducer can handle the number properly.
        if (isNaN(newAmount)) newAmount = 0;

        // Dispatches the reducer with the product and the new amount.
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
                                name="productAmount"
                                value={productAmount}
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
