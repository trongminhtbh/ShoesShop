import React, { Fragment } from "react";

import blue from "../assets/img/blue.png";
import black from "../assets/img/black.png";
import green from "../assets/img/green.png";
import red from "../assets/img/red.png";
import orange from "../assets/img/orange.png";

const ProductImages = ({shoesItem}) => {
  return (
    <Fragment>
      <img src={"http://localhost:3000/product-img/" +shoesItem.link} alt="blue shoe" className="shoe show" color="blue" />
      <img src={"http://localhost:3000/product-img/" +shoesItem.link} alt="red shoe" className="shoe" color="red" />
      <img src={"http://localhost:3000/product-img/" +shoesItem.link} alt="green shoe" className="shoe" color="green" />
      <img src={"http://localhost:3000/product-img/" +shoesItem.link} alt="orange shoe" className="shoe" color="orange" />
      <img src={"http://localhost:3000/product-img/" +shoesItem.link} alt="black shoe" className="shoe " color="black" />
    </Fragment>
  );
};

export default ProductImages;
