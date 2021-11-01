import React from "react";
import { useState } from "react";
import Product from "./Product";
import Cart from "./Cart";
import Homepage from "./Homepage";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
    const [showCart, setShowCart] = useState(false);
    const [showProduct, setShowProduct] = useState(false);
    const [showHome, setShowHome] = useState(true)
    const [orders, setOrder] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState({});

    const addItemToCart = (item) => {
        setOrder(prev => [...prev, item]);
        console.log("add item")
    }
    console.log("re-render")
    const showCartPage = () => {
        setShowHome(false)
        setShowProduct(false)
        setShowCart(true)
    }
    const showHomePage = () => {
        setShowHome(true)
        setShowProduct(false)
        setShowCart(false)
    }
    const showProductPage = () => {
        setShowCart(false)
        setShowHome(false)
        setShowProduct(true)
    }
    return (
        <div className="Page">
            <Header productPage = {showProductPage} shopingCart = {showCartPage} homePage = {showHomePage}/>
            {showHome && <Homepage/>}
            { showProduct && <Product shoesList1 = {shoesList1} shoesList2 = {shoesList2} shoesList3 = {shoesList3} addItemToCart = {addItemToCart}  /> }
            {showCart && <Cart listOrder = {orders} />}
            <Footer />
        </div>
    )
    
}

export default ProductAndCart