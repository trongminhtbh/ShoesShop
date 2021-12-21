import React, { useState } from "react";
import { useStore, addItemToCart } from "../../store";
import { NavLink } from "react-router-dom";
const Info = ({shoesItem}) => {
  const [state, dispatch] = useStore()
  const [cartItem, setCartItem] = useState({...shoesItem, color: "blue", size: 40})
  const selectColor = (color) => {
    setCartItem({...cartItem, color: color })
  }
  const selectSize = (size) => {
    setCartItem({...cartItem, size: size})
  }
  const handleAdd = () => {

    dispatch(addItemToCart(cartItem))
  }
  
  const shoeName = (
    <div className="shoeName">
      <div>
        <h1 className="big">{shoesItem.name}</h1>
        <span className="new">new</span>
      </div>
      <h3 className="small">Men's running shoes</h3>
    </div>
  );

  const description = (
    <div className="description">
      <h3 className="title">Product Info</h3>
      <p className="text">
        {shoesItem.description}
      </p>
    </div>
  );

  const ColorContainer = (
    <div className="color-container">
      <h3 className="title">Color</h3>
      <div className="colors">
        <span onClick = {() => {selectColor("blue")}} className="color active" primary="#2175f5" color="blue"></span>
        <span onClick = {() => {selectColor("red")}} className="color" primary="#f84848" color="red"></span>
        <span onClick = {() => {selectColor("green")}} className="color" primary="#29b864" color="green"></span>
        <span onClick = {() => {selectColor("orange")}} className="color" primary="#ff5521" color="orange"></span>
        <span onClick = {() => {selectColor("black")}} className="color" primary="#444" color="black"></span>
      </div>
    </div>
  );

  const SizeContainer = (
    <div className="size-container">
      <h3 className="title">size</h3>
      <div className="sizes">
        <span onClick = {() => {selectSize(38)}} className="size">38</span>
        <span onClick = {() => {selectSize(39)}} className="size">39</span>
        <span onClick = {() => {selectSize(40)}} className="size active">40</span>
        <span onClick = {() => {selectSize(41)}} className="size">41</span>
        <span onClick = {() => {selectSize(42)}} className="size">42</span>
      </div>
    </div>
  );

  const BuySection = (
    <div className="buy-price">
      <NavLink to="/cart" onClick={handleAdd} className="buy">
        <i className="fas fa-shopping-cart"></i>Add to card
      </NavLink>
      <div className="price">
        <h1>{shoesItem.origin_price}</h1>
      </div>
    </div>
  );


  return (
    <div className="info">
      {shoeName}
      {description}
      {ColorContainer}
      {SizeContainer}
      {BuySection}
    </div>
  );
};

export default Info;
