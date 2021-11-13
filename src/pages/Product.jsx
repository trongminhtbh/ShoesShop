import React from "react";
import { useState, useEffect } from "react";
import Card from "../components/Card"
import SideBar from "./Sidebar";
import Branch from "../components/ShoesBranch";



function Product(props) {
    const {shoesList, addItemToCart} = props

    const [title, setTitle] = useState("All");
    const [listShoes, setListShoes] = useState(shoesList)

    const listBrands = shoesList.reduce((brands, shoes) => {
        if( brands.indexOf(shoes.brand) === -1 ) {
            brands.push(shoes.brand)
        }
        return brands
    },[])
    const showPanel = (title) => {
        if(listBrands.indexOf(title) !== -1){
            setTitle(title)
            let list = shoesList.filter((shoes) => shoes.brand === title)
            setListShoes(list)
        }

        if(title === "All") {
            setTitle("All")
            setListShoes(shoesList)
        }

    }
    return (
        <div className="product-page-container">
            <div className="product-container">
                <SideBar listBrands = {listBrands} showPanel = {showPanel}  />
                <div className="product-display">
                    <Branch addItemToCart={addItemToCart}  listShoes = {listShoes} id="NikeSection" name = {title}/>   
                </div>           
            </div>
        </div>
    )
}

export default Product;
