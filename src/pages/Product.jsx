import React from "react";
import { useState, useEffect } from "react";
import Card from "../components/Card"
import SideBar from "./Sidebar";
import BranchTitle from "../components/ShoesBranch";



function Product(props) {
    const {shoesList, addItemToCart} = props
    console.log(props);
    const {shoesList1, shoesList2, shoesList3} = shoesList
    return (
        <div className="product-page-container">
            <div className="product-container">
                <SideBar />
                <div className="product-display">
                    <BranchTitle name = "Nike"/>
                    <div className="shoes-list">
                        {
                        shoesList1.map( shoes =>  {
                            return <Card addItemToCart={addItemToCart} key={shoes.id} shoesItem = {shoes} />
                        })
                        }
                    </div>

                    <BranchTitle name = "Adidas"/>
                    <div className="shoes-list">
                        {
                        shoesList2.map( shoes =>  {
                            return <Card addItemToCart={addItemToCart} key={shoes.id} shoesItem = {shoes} />
                        })
                        }
                    </div>


                    <BranchTitle name = "Others"/>
                    <div className="shoes-list">
                        {
                        shoesList3.map( shoes =>  {
                            return <Card addItemToCart={addItemToCart} key={shoes.id} shoesItem = {shoes} />
                        })
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Product;
