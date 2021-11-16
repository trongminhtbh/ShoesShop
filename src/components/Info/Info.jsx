import React from "react";
import { useStore, addItemToCart } from "../../store";
import { NavLink } from "react-router-dom";
const Info = ({shoesItem}) => {
  const [state, dispatch] = useStore()
  const handleAdd = () => {
    dispatch(addItemToCart(shoesItem))
  }
  console.log(state.orders)
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
        {shoesItem.desc}
      </p>
    </div>
  );

  const ColorContainer = (
    <div className="color-container">
      <h3 className="title">Color</h3>
      <div className="colors">
        <span className="color active" primary="#2175f5" color="blue"></span>
        <span className="color" primary="#f84848" color="red"></span>
        <span className="color" primary="#29b864" color="green"></span>
        <span className="color" primary="#ff5521" color="orange"></span>
        <span className="color" primary="#444" color="black"></span>
      </div>
    </div>
  );

  const SizeContainer = (
    <div className="size-container">
      <h3 className="title">size</h3>
      <div className="sizes">
        <span className="size">7</span>
        <span className="size">8</span>
        <span className="size active">9</span>
        <span className="size">10</span>
        <span className="size">11</span>
      </div>
    </div>
  );

  const BuySection = (
    <div className="buy-price">
      <NavLink to="/cart" onClick={handleAdd} className="buy">
        <i className="fas fa-shopping-cart"></i>Add to card
      </NavLink>
      <div className="price">
        <i className="fas fa-dollar-sign"></i>
        <h1>{shoesItem.price}</h1>
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
