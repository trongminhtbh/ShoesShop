import React from "react";
import Card from "../components/Card"
import SideBar from "./Sidebar";
import BranchTitle from "../components/ShoesBranch";
import Header from "../components/Header";
import Footer from "../components/Footer";
const shoesList1 = [
     {
        name: "AIR MAX PEGASUS",
        id: 1,
        price: 500000,
        desc: "chay nhanh nhanh nhanh nhanh nhanh nhanh nhanh nhanh nhanh nhanh nhanh nhanh nhanh nhanh"
    },
    {
        name: "AIR MAX PEGASUS 2",
        id: 2,
        price: 600000,
        desc: "chay em"
    }, 
    {
        name: "AIR MAX PEGASUS 3",
        id: 3,
        price: 400000,
        desc: "chay tot"
    }
]

const shoesList2 = [
    {
        name: "AIR MAX PEGASUS 4",
        id: 4,
        price: 500000,
        desc: "chay nhanh"
    },
    {
        name: "AIR MAX PEGASUS 5",
        id: 5,
        price: 600000,
        desc: "chay em"
    }, 
    {
        name: "AIR MAX PEGASUS 6",
        id: 6,
        price: 400000,
        desc: "chay tot"
    }
]

const shoesList3 = [
    {
        name: "AIR MAX PEGASUS 7",
        id: 7,
        price: 500000,
        desc: "chay nhanh"
    },
    {
        name: "AIR MAX PEGASUS 8",
        id: 8,
        price: 600000,
        desc: "chay em"
    }, 
    {
        name: "AIR MAX PEGASUS 9",
        id: 9,
        price: 400000,
        desc: "chay tot"
    }
]

function Product() {
    return (
        <div className="product-page-container">
            <Header/>
            <div className="product-container">
                <SideBar />
                <div className="product-display">
                    <BranchTitle name = "Nike"/>
                    <div className="shoes-list">
                        {
                        shoesList1.map( shoes =>  {
                            return <Card shoesItem = {shoes} />
                        })
                        }
                    </div>

                    <BranchTitle name = "Adidas"/>
                    <div className="shoes-list">
                        {
                        shoesList2.map( shoes =>  {
                            return <Card shoesItem = {shoes} />
                        })
                        }
                    </div>


                    <BranchTitle name = "Others"/>
                    <div className="shoes-list">
                        {
                        shoesList3.map( shoes =>  {
                            return <Card shoesItem = {shoes} />
                        })
                        }
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Product;
