import React from "react";
import { useState, useEffect } from "react";
import Product from "./Product";
import Cart from "./Cart";
import Homepage from "./Homepage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutUs from "./AbousUs";
import Service from "./service";
import RegisterPage from "./Register";
import User from "./user";


function ProductAndCart() {
    const [listShoes, setListShoes] = useState([])

    useEffect(() => {
        fetch('https://pacific-ridge-30189.herokuapp.com/shoes')
            .then(res => res.json())
            .then(listShoes => setListShoes(listShoes))
    }, [])
    const [showCart, setShowCart] = useState(false);
    const [showAboutUs, setShowAboutUs] = useState(false);
    const [showProduct, setShowProduct] = useState(false);
    const [showHome, setShowHome] = useState(true)
    const [showService, setShowService] = useState(false)
    const [showUser, setShowUser] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const [orders, setOrder] = useState([]);

    const addItemToCart = (item) => {
        setOrder(prev => [...prev, item]);
        showPage({cart:true});
    }
    console.log("re-render")

    const showPage = ( {product= false, cart = false, home = false, about = false, service = false, user = false, register = false}) => {
        setShowAboutUs(about)
        setShowCart(cart)
        setShowHome(home)
        setShowProduct(product)
        setShowService(service)
        setShowUser(user)
        setShowRegister(register)
    }
    return (
        <div className="Page">
            <Header showPage = {showPage}/>
            {showHome && <Homepage addItemToCart = {addItemToCart}/>}
            { showProduct && <Product shoesList = {listShoes} addItemToCart = {addItemToCart}  /> }
            {showCart && <Cart listOrder = {orders} />}
            {showAboutUs && <AboutUs/>}
            {showService && <Service />}
            {showUser && <User />}
            {showRegister && <RegisterPage/>}
            <Footer />
        </div>
    )
    
}

export default ProductAndCart