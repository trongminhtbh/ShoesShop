import React, { Fragment } from "react";
import Card from "../components/Card"

function Branch(props) {
    const {listShoes, name, addItemToCart} = props
    return (
        <div className="product-display-branch">
            <div className="title-branch d-flex row">
                <div className="title-branch-header col-1">
                    <h3>{name}</h3> 
                </div>
                <div className="line"></div>
            </div>
            <div className="shoes-list">
                {
                listShoes.map( shoes =>  {
                    return <Card key={shoes._id} shoesItem = {shoes} />
                })
                }
            </div>
        </div>
    )
}

export default Branch