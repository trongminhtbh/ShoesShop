import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "../pages/Product";
import User from "../pages/user";
import Service from "../pages/service";
import Cart from "../pages/Cart";
import Homepage from "../pages/Homepage";
import RegisterPage from "../pages/Register";
import AboutUs from "../pages/AbousUs"
export default function Section() {
    return (
    <>
        <Route path="/home" exact>
            <Homepage />
        </Route>

        <Route path="/product" exact>
            <Product />
        </Route>

        <Route path="/service" exact>
            <Service />
        </Route>
        <Route path="/about" exact>
            <AboutUs />
        </Route>
        <Route path="/user" exact>
            <User />
        </Route>

        <Route path="/cart" exact >
            <Cart />
        </Route>

        <Route path="/register" exact >
            <RegisterPage  />
        </Route>
        <Route path="/" exact >
            <Homepage  />
        </Route>
    </>
    )
}