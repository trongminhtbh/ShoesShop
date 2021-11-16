import React from "react";
import { useState, useEffect } from "react";
import Card from "../components/Card"
import SideBar from "./Sidebar";
import Branch from "../components/ShoesBranch";
import { useContext } from "react";
import { StoreContext } from "../store";


function Product(props) {
    const [state, dispath] = useContext(StoreContext)
    const [title, setTitle] = useState("All");
    const [listShoes, setListShoes] = useState(state.listShoes)
    const shoesList = state.listShoes
    const listBrands = shoesList.reduce((brands, shoes) => {
        if( brands.indexOf(shoes.brand) === -1 ) {
            brands.push(shoes.brand)
        }
        return brands
    },[])
    console.log(state.login)
    const showPanel = (title) => {
        if(listBrands.indexOf(title) !== -1){
            setTitle(title)
            let list = shoesList.filter((shoes) => shoes.brand === title)
            setListShoes(list)
        }
        if(title === "nam" || title === "nu") {
            let list = shoesList.filter((shoes) => shoes.gender === title)
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
                    <Branch   listShoes = {listShoes} id="NikeSection" name = {title}/>   
                </div>           
            </div>
        </div>
    )
}

export default Product;
