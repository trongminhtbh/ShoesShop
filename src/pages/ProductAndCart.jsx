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
const shoesList1 = [
    {
       name: "AIR MAX PEGASUS",
       brand: "Nike",
       id: 1,
       price: 500000,
       desc: "chay nhanh "
   },
   {
       name: "AIR MAX PEGASUS 2",
       brand: "Nike",
       id: 2,
       price: 600000,
       desc: "chay em"
   }, 
   {
       name: "AIR MAX PEGASUS 3",
       brand: "Nike",
       id: 3,
       price: 400000,
       desc: "chay tot"
   }
]

const shoesList2 = [
   {
       name: "AIR MAX PEGASUS 4",
       brand: "Adidas",
       id: 4,
       price: 500000,
       desc: "chay nhanh"
   },
   {
       name: "AIR MAX PEGASUS 5",
       brand: "Adidas",
       id: 5,
       price: 600000,
       desc: "chay em"
   }, 
   {
       name: "AIR MAX PEGASUS 6",
       brand: "Adidas",
       id: 6,
       price: 400000,
       desc: "chay tot"
   }
]

const shoesList3 = [
   {
       name: "AIR MAX PEGASUS 7",
       brand: "Adidas",
       id: 7,
       price: 500000,
       desc: "chay nhanh"
   },
   {
       name: "AIR MAX PEGASUS 8",
       brand: "Adidas",
       id: 8,
       price: 600000,
       desc: "chay em"
   }, 
   {
       name: "AIR MAX PEGASUS 9",
       brand: "Adidas",
       id: 9,
       price: 400000,
       desc: "chay tot"
   }
]

function ProductAndCart() {
    // const [listShoes, setListShoes] = useState([])

    // useEffect(() => {
    //     fetch('https://pacific-ridge-30189.herokuapp.com/brand/Adidas')
    //         .then(res => res.json())
    //         .then(listShoes => setListShoes(listShoes))
    // })
    const shoesList = {
        shoesList1: [...shoesList1],
        shoesList2: [...shoesList2],
        shoesList3: [...shoesList3]
    }
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
            { showProduct && <Product shoesList = {shoesList} addItemToCart = {addItemToCart}  /> }
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