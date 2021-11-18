import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Product from "../pages/Product";
import User from "../pages/User";
import Service from "../pages/Service";
import Cart from "../pages/Cart";
import Homepage from "../pages/Homepage";
import RegisterPage from "../pages/Register";
import AboutUs from "../pages/AbousUs";
import Admin from "../pages/admin";
import { useStore } from "../store";

export default function Section(props) {
    const {listShoes} = props

    const [state, dispatch] = useStore()
    return (
        <>
            <Route path="/home" exact>
                <Homepage listShoes={listShoes} />
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

            <Route path="/admin" >
                <Admin />
            </Route>

            <Route path="/register" exact >
                {state.login._id && <Redirect to="/home"></Redirect>}
                <RegisterPage />
            </Route>
            <Route path="/" exact >
                <Homepage />
            </Route>
        </>
    )
}