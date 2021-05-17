import React, {useState} from 'react';
import appleImg from '../assets/apple.jpg';
import { useSelector, useDispatch } from 'react-redux';
import './Product.css';
import {selectProduct} from "../features/products/productsSlice";
import {newProductInCart} from "../features/products/productsSlice";

function Product() {

    const dispatch = useDispatch();

    return (
        <div className="product">

            <h2 className="productTitle">
                Apple
            </h2>
            <div className="productImage">
                <img src={appleImg} />
            </div>
            <div className="productPrice">
                2,95kr
            </div>
            <div className="productAmount">
                <label>
                    Product amount
                    <div className="productAmountInput">
                <button id="decrement">-</button>
                <input type="number" id="productAmount" name="productAmount" value="0" />
                <button id="increment">+</button>
                    </div>
                </label>
            </div>

            <button
                onClick={() => dispatch(newProductInCart({product: 'apple', amount: '7'}))}
            >
                Add 7
            </button>

            <button
                onClick={() => dispatch(newProductInCart({product: 'apple', amount: '3'}))}
            >
                Add 3
            </button>

        </div>
    );
}

export default Product;
