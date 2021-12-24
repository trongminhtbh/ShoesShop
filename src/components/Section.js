import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Product from "../pages/Product";
import User from "../pages/User";
import Service from "../pages/Service";
import Cart from "../pages/Cart";
import Homepage from "../pages/Homepage";
import RegisterPage from "../pages/Register";
import PaymentSuccess from "../pages/PaymentSucess";
import PaymentFail from "../pages/PaymentFail";
import LoginPage from "../pages/Login";
import OrderSuccess from "../pages/OrderSuccess";
import Introduction from "../pages/Introduction";
import SignUpPage from "../pages/Signup";
import ResetPasswordPage from "../pages/Resetpassword";
import AboutUs from "../pages/AbousUs";
import Admin from "../pages/admin";
import { useStore } from "../store";
import InfoSecurity from "../pages/InfoSecurity";
import Policy from "../pages/Policy";
import FAQ from "../pages/FAQ";

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

            <Route path="/login" exact >
                {state.login._id && <Redirect to="/home"></Redirect>}
                <LoginPage />
            </Route>

            <Route path="/signup" exact >
                {state.login._id && <Redirect to="/home"></Redirect>}
                <SignUpPage />
            </Route>

            <Route path="/forgot" exact >
                {state.login._id && <Redirect to="/home"></Redirect>}
                <ResetPasswordPage />
            </Route>

            <Route path="/" exact >
                <Homepage />
            </Route>

            <Route path="/payment-success/:orderId" exact >
                <PaymentSuccess />
            </Route>

            <Route path="/payment-fail" exact >
                <PaymentFail />
            </Route>

            <Route path="/order-success/:orderId" exact >
                <OrderSuccess />
            </Route>

            <Route path="/introduction" exact >
                <Introduction />
            </Route>

            <Route path="/info-security" exact >
                <InfoSecurity />
            </Route>

            <Route path="/policy" exact >
                <Policy />
            </Route>

            <Route path="/faq" exact >
                <FAQ />
            </Route>
        </>
    )
}