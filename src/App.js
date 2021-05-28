import React from 'react';
import './App.css';
import ProductsView from "./views/ProductsView";


import {
    BrowserRouter as Router,
    Switch,
    Route, Link
} from "react-router-dom";
import CheckoutView from "./views/CheckoutView";
import CartView from "./views/CartView";
import {useDispatch, useSelector} from "react-redux";
import {fetchProductsAsync, selectProductsStatus} from "./features/products/productsSlice";

function App() {
    const dispatch = useDispatch();

    const productsStatus = useSelector(selectProductsStatus);
    // If fetchProductsAsync hasn't run yet, run it to load products.
    if (productsStatus === 'idle') {
        dispatch(fetchProductsAsync());
    }

    return (
        <Router>
            <div className="App">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/" className="pageTitle">React Redux Grocery Shop</Link>
                            </li>
                            |
                            <li>
                                <Link to="/">Products</Link>
                            </li>
                            |
                            <li>
                                <Link to="/cartView">Cart</Link>
                            </li>
                            |
                            <li>
                                <Link to="/CheckoutView">Checkout</Link>
                            </li>
                        </ul>
                    </nav>
            </header>
            <Switch>
                <Route exact path="/">
                    <ProductsView/>
                </Route>
                <Route path="/cartView">
                    <CartView/>
                </Route>
                <Route path="/CheckoutView">
                    <CheckoutView/>
                </Route>
            </Switch>
        </div>
</Router>

)
    ;
}

export default App;
