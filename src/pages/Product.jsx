import React, { useEffect } from "react";
import Card from "../components/Card"
import SideBar from "./Sidebar";
import BranchTitle from "../components/ShoesBranch";
function Product() {
    return (
        <div className="product-container">
            <SideBar />
            <div className="product-display">
                <BranchTitle name = "Nike"/>
                <div className="shoes-list">
                    <Card />
                    <Card />
                    <Card />
                </div>

                <BranchTitle name = "Adidas"/>
                <div className="shoes-list">
                    <Card />
                    <Card />
                    <Card />
                </div>


                <BranchTitle name = "Others"/>
                <div className="shoes-list">
                    <Card />
                    <Card />
                    <Card />
                </div>
                
            </div>
        </div>
    )
}

export default Product;
