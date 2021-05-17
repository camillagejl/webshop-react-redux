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


function App() {
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
